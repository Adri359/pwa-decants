const CACHE_NAME = "decants-v3";
const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/detail.html",
  "/styles.css",
  "/app.js",
  "/detail.js",
  "/ui.js",
  "/manifest.json",
  "/icon.svg",
  "/icon-180.png",
  "/icon-192.png",
  "/icon-512.png",
  "/icon-maskable-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("[SW] Caché abierto");
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => name !== CACHE_NAME)
            .map((name) => caches.delete(name)),
        );
      })
      .then(() => self.clients.claim()),
  );
});

// Estrategia: muestra lo guardado al instante y lo actualiza en segundo plano
// (los cambios que subas se ven en la siguiente visita, sin tocar la versión).
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== "GET") return;
  if (url.origin !== self.location.origin) return; // fuentes, etc.: las maneja el navegador

  event.respondWith(
    // ignoreSearch: detail.html?id=3 usa el detail.html guardado
    caches.match(request, { ignoreSearch: true }).then((cached) => {
      const network = fetch(request)
        .then((response) => {
          if (
            response &&
            response.status === 200 &&
            response.type === "basic"
          ) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => null);

      event.waitUntil(network);

      if (cached) return cached;

      return network.then((response) => {
        if (response) return response;
        if (request.mode === "navigate") return caches.match("/index.html");
        return Response.error();
      });
    }),
  );
});

self.addEventListener("message", (event) => {
  if (event.data === "skipWaiting") {
    self.skipWaiting();
  }
});
