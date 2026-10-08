/* ==========================================================
   ui.js — capa visual (no toca la lógica de app.js)
   - Reemplaza los emojis de las tarjetas por imágenes de frascos
   - Animación de entrada al hacer scroll
   - Efecto de luz + inclinación 3D al pasar el cursor
   - Oculta el skeleton de carga
   ========================================================== */
(() => {
  "use strict";

  const grid = document.getElementById("decantsGrid");
  const skeleton = document.getElementById("skeletonGrid");
  const noResults = document.getElementById("noResults");

  /* ------------------------------------------------------
       FOTOS REALES (opcional)
       Pon aquí el nombre del perfume en minúsculas (tal como
       aparece en la tarjeta) y la ruta de su foto. Si no hay
       foto, se usa un frasco ilustrado con color propio.

       Ejemplo:
         'sauvage': 'img/sauvage.webp',
         'bleu de chanel': 'img/bleu-de-chanel.jpg',
    ------------------------------------------------------ */
  const REAL_IMAGES = {
    // 'nombre del perfume': 'img/archivo.webp',
  };

  /* [color líquido arriba, color líquido abajo, brillo de fondo] */
  const PALETTES = {
    hombre: [
      ["#5fa8ff", "#1b4a9c", "#4d8fe8"],
      ["#4fd1c5", "#0f5f63", "#35b8ad"],
      ["#e8a24a", "#7a3d0c", "#d98a2b"],
      ["#7bc67e", "#1e5a32", "#5eb066"],
    ],
    mujer: [
      ["#ff9ec4", "#a3265f", "#f27aa8"],
      ["#ffc3a0", "#b4532a", "#f6a57b"],
      ["#c9a4ff", "#5b2aa8", "#ab82f2"],
      ["#f6dfa6", "#a87a22", "#e8c46c"],
    ],
    unisex: [
      ["#f2cf7d", "#8f5f12", "#e2b44f"],
      ["#6ee7b7", "#0c6b4e", "#41d19c"],
      ["#e6a15c", "#6b3411", "#d4843a"],
      ["#b8c0cc", "#3b4452", "#98a2b3"],
    ],
  };

  const hash = (str) => {
    let h = 5381;
    for (let i = 0; i < str.length; i++)
      h = ((h << 5) + h + str.charCodeAt(i)) | 0;
    return Math.abs(h);
  };

  let uid = 0;

  /* Frasco de decant (atomizador) dibujado en SVG */
  function bottleSVG(p) {
    const id = "bt" + ++uid;
    return (
      '<svg class="bottle" viewBox="-20 0 160 160" aria-hidden="true" focusable="false">' +
      "<defs>" +
      '<linearGradient id="' +
      id +
      'l" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0" stop-color="' +
      p[0] +
      '"/><stop offset="1" stop-color="' +
      p[1] +
      '"/></linearGradient>' +
      '<linearGradient id="' +
      id +
      'g" x1="0" y1="0" x2="1" y2="0">' +
      '<stop offset="0" stop-color="#fff" stop-opacity=".16"/><stop offset=".5" stop-color="#fff" stop-opacity=".04"/><stop offset="1" stop-color="#fff" stop-opacity=".14"/></linearGradient>' +
      '<linearGradient id="' +
      id +
      'm" x1="0" y1="0" x2="1" y2="0">' +
      '<stop offset="0" stop-color="#8a6a2c"/><stop offset=".3" stop-color="#f7e6bd"/><stop offset=".6" stop-color="#d9b46c"/><stop offset="1" stop-color="#7d5c22"/></linearGradient>' +
      '<linearGradient id="' +
      id +
      'n" x1="0" y1="0" x2="1" y2="0">' +
      '<stop offset="0" stop-color="#1c1c22"/><stop offset=".35" stop-color="#52525e"/><stop offset="1" stop-color="#15151a"/></linearGradient>' +
      '<radialGradient id="' +
      id +
      's" cx=".5" cy=".5" r=".5">' +
      '<stop offset="0" stop-color="#000" stop-opacity=".55"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>' +
      '<clipPath id="' +
      id +
      'c"><rect x="34" y="58" width="52" height="88" rx="13"/></clipPath>' +
      "</defs>" +
      /* sombra */
      '<ellipse cx="60" cy="150" rx="34" ry="6" fill="url(#' +
      id +
      's)"/>' +
      /* cuerpo de vidrio */
      '<rect x="34" y="58" width="52" height="88" rx="13" fill="url(#' +
      id +
      'g)" stroke="#fff" stroke-opacity=".28"/>' +
      '<g clip-path="url(#' +
      id +
      'c)">' +
      '<rect x="34" y="78" width="52" height="68" fill="url(#' +
      id +
      'l)"/>' +
      '<ellipse cx="60" cy="78" rx="26" ry="3.2" fill="#fff" fill-opacity=".35"/>' +
      '<line x1="60" y1="60" x2="60" y2="140" stroke="#fff" stroke-opacity=".5" stroke-width="1.4"/>' +
      "</g>" +
      /* etiqueta */
      '<rect x="43" y="100" width="34" height="26" rx="4" fill="#0b0b0e" fill-opacity=".4" stroke="#f7e6bd" stroke-opacity=".55" stroke-width=".7"/>' +
      '<rect x="49" y="108" width="22" height="1.6" rx=".8" fill="#f7e6bd" fill-opacity=".85"/>' +
      '<rect x="52" y="114" width="16" height="1.2" rx=".6" fill="#f7e6bd" fill-opacity=".5"/>' +
      '<rect x="55" y="119" width="10" height="1.2" rx=".6" fill="#f7e6bd" fill-opacity=".35"/>' +
      /* reflejos */
      '<rect x="39" y="64" width="5" height="76" rx="2.5" fill="#fff" fill-opacity=".24"/>' +
      '<rect x="77" y="70" width="2" height="60" rx="1" fill="#fff" fill-opacity=".14"/>' +
      /* cuello, collar y atomizador */
      '<rect x="50" y="50" width="20" height="11" fill="url(#' +
      id +
      'g)" stroke="#fff" stroke-opacity=".25"/>' +
      '<rect x="45" y="40" width="30" height="12" rx="3" fill="url(#' +
      id +
      'm)"/>' +
      '<rect x="45" y="45.5" width="30" height="1" fill="#000" fill-opacity=".22"/>' +
      '<rect x="48" y="41.5" width="4" height="9" rx="2" fill="#fff" fill-opacity=".38"/>' +
      '<rect x="52" y="28" width="16" height="13" rx="3" fill="url(#' +
      id +
      'n)"/>' +
      '<rect x="55" y="19" width="10" height="11" rx="2.5" fill="url(#' +
      id +
      'n)"/>' +
      '<rect x="64" y="21.5" width="6" height="3" rx="1.2" fill="#2a2a31"/>' +
      "</svg>"
    );
  }

  function getCategory(card) {
    const el = card.querySelector(".decant-category");
    if (!el) return "unisex";
    return (
      ["hombre", "mujer", "unisex"].find((c) =>
        el.classList.contains("category-" + c),
      ) || "unisex"
    );
  }

  /* Pinta la imagen del perfume dentro de un contenedor.
       La usan las tarjetas del catálogo y la página de detalle. */
  function renderImage(box, category, name) {
    const palettes = PALETTES[category] || PALETTES.unisex;
    const palette =
      palettes[hash((name || "").toLowerCase()) % palettes.length];

    box.style.setProperty("--glow", palette[2]);
    box.setAttribute("role", "img");
    box.setAttribute("aria-label", name || "Decant");

    const src = REAL_IMAGES[(name || "").toLowerCase()];
    if (src) {
      const img = new Image();
      img.alt = "";
      img.decoding = "async";
      img.loading = "lazy";
      img.src = src;
      img.addEventListener("error", () => {
        box.innerHTML = bottleSVG(palette);
      });
      box.replaceChildren(img);
    } else {
      box.innerHTML = bottleSVG(palette);
    }
  }

  window.DecantUI = { renderImage };

  /* ---------- Botón "Instalar app" (PC y móvil) ----------
       - Chrome / Edge / Android: usa el aviso nativo de instalación.
       - iPhone / iPad: no existe instalación automática, así que
         abre una pequeña guía (Compartir > Agregar a pantalla de inicio).
       - Si la app ya está instalada o el navegador no puede instalar,
         el botón no aparece. */
  function setupInstall() {
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true;
    if (isStandalone) return;

    const ua = navigator.userAgent || "";
    const isIOS =
      /iphone|ipad|ipod/i.test(ua) ||
      (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);

    const ICON =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M12 3v12"/><path d="m7 11 5 5 5-5"/><path d="M5 21h14"/></svg>';
    const SHARE =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M12 15V3"/><path d="m8 7 4-4 4 4"/><path d="M6 11H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-1"/></svg>';
    const PLUS =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M12 8v8M8 12h8"/></svg>';

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "install-btn hidden";
    btn.setAttribute("aria-label", "Instalar app");
    btn.innerHTML = ICON + "<span>Instalar app</span>";

    /* Dónde se coloca el botón */
    const detailBar = document.querySelector(".header-detail");
    if (detailBar) {
      btn.classList.add("install-btn--compact");
      const spacer = detailBar.lastElementChild;
      if (spacer && spacer.tagName === "DIV" && !spacer.className) {
        spacer.style.display = "flex";
        spacer.style.justifyContent = "flex-end";
        spacer.appendChild(btn); // el contenedor conserva su ancho: el logo no se mueve
      } else {
        detailBar.appendChild(btn);
      }
    } else {
      const hero = document.querySelector(".header");
      if (!hero) return;
      btn.classList.add("install-btn--hero");
      const cue = hero.querySelector(".scroll-cue");
      hero.insertBefore(btn, cue || null);
    }

    const show = () => btn.classList.remove("hidden");
    const hide = () => btn.classList.add("hidden");

    /* Guía para iPhone / iPad */
    let sheet = null;
    let lastFocus = null;
    const closeSheet = () => {
      if (!sheet) return;
      sheet.remove();
      sheet = null;
      document.removeEventListener("keydown", onKey);
      if (lastFocus) lastFocus.focus();
    };
    const onKey = (e) => {
      if (e.key === "Escape") closeSheet();
    };
    const openSheet = () => {
      if (sheet) return;
      lastFocus = document.activeElement;
      sheet = document.createElement("div");
      sheet.className = "install-sheet";
      sheet.innerHTML =
        '<div class="install-sheet__card" role="dialog" aria-modal="true" aria-labelledby="installTitle">' +
        '<h2 id="installTitle">Instala Decants en tu iPhone</h2>' +
        '<p class="install-sheet__lead">Así la abres como una app, a pantalla completa.</p>' +
        '<ol class="install-sheet__steps">' +
        '<li><span class="install-sheet__ico">' +
        SHARE +
        "</span><span>Toca el botón <strong>Compartir</strong> en la barra de Safari.</span></li>" +
        '<li><span class="install-sheet__ico">' +
        PLUS +
        "</span><span>Elige <strong>Agregar a pantalla de inicio</strong> y confirma.</span></li>" +
        "</ol>" +
        '<p class="install-sheet__note">Si no ves la opción, abre esta página en Safari.</p>' +
        '<button type="button" class="install-sheet__close">Entendido</button>' +
        "</div>";
      document.body.appendChild(sheet);
      sheet.addEventListener("click", (e) => {
        if (e.target === sheet) closeSheet();
      });
      sheet
        .querySelector(".install-sheet__close")
        .addEventListener("click", closeSheet);
      sheet.querySelector(".install-sheet__close").focus();
      document.addEventListener("keydown", onKey);
    };

    /* Instalación nativa (Chrome, Edge, Android) */
    let deferred = null;
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      deferred = e;
      show();
    });
    window.addEventListener("appinstalled", () => {
      deferred = null;
      hide();
      closeSheet();
    });

    btn.addEventListener("click", async () => {
      if (deferred) {
        const promptEvent = deferred;
        deferred = null; // el aviso solo se puede usar una vez
        hide();
        try {
          promptEvent.prompt();
          await promptEvent.userChoice;
        } catch (err) {
          /* el usuario cerró el aviso */
        }
        return;
      }
      if (isIOS) openSheet();
    });

    if (isIOS) show();
  }

  try {
    setupInstall();
  } catch (err) {
    console.warn("Botón de instalar no disponible:", err);
  }

  /* En páginas sin catálogo (ej. detail.html) solo se expone renderImage */
  if (!grid) return;

  /* ---------- Entrada con scroll ---------- */

  const io =
    "IntersectionObserver" in window
      ? new IntersectionObserver(
          (entries) => {
            let n = 0;
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              entry.target.style.setProperty("--i", Math.min(n++, 10));
              entry.target.classList.add("in");
              io.unobserve(entry.target);
            });
          },
          { rootMargin: "0px 0px -6% 0px", threshold: 0.06 },
        )
      : null;

  /* ---------- Mejora de cada tarjeta ---------- */

  function enhance(card) {
    if (card.dataset.enhanced) return;
    card.dataset.enhanced = "1";

    const box = card.querySelector(".decant-image");
    const name = (card.querySelector(".decant-name")?.textContent || "").trim();

    if (box) renderImage(box, getCategory(card), name);

    card.classList.add("reveal");
    if (io) io.observe(card);
    else card.classList.add("in");
  }

  function syncSkeleton() {
    if (!skeleton || skeleton.classList.contains("hidden")) return;
    const empty = noResults && !noResults.classList.contains("hidden");
    if (grid.children.length > 0 || empty) skeleton.classList.add("hidden");
  }

  let scheduled = false;
  function scan() {
    scheduled = false;
    grid
      .querySelectorAll(".decant-card:not([data-enhanced])")
      .forEach((card) => enhance(card));
    syncSkeleton();
  }
  function schedule() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(scan);
  }

  new MutationObserver(schedule).observe(grid, {
    childList: true,
    subtree: true,
  });
  if (noResults)
    new MutationObserver(schedule).observe(noResults, {
      attributes: true,
      attributeFilter: ["class"],
    });
  scan();

  /* Si por algo no llegan datos, no dejes el skeleton para siempre */
  setTimeout(() => {
    if (skeleton) skeleton.classList.add("hidden");
  }, 8000);

  /* ---------- Luz + inclinación 3D con el cursor ---------- */

  const canTilt =
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  grid.addEventListener("pointermove", (e) => {
    const card = e.target.closest(".decant-card");
    if (!card) return;
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    card.style.setProperty("--mx", x + "px");
    card.style.setProperty("--my", y + "px");
    if (canTilt) {
      card.style.setProperty(
        "--ry",
        ((x / r.width - 0.5) * 8).toFixed(2) + "deg",
      );
      card.style.setProperty(
        "--rx",
        ((0.5 - y / r.height) * 8).toFixed(2) + "deg",
      );
    }
  });

  grid.addEventListener(
    "pointerleave",
    (e) => {
      const card = e.target;
      if (!(card instanceof Element) || !card.classList.contains("decant-card"))
        return;
      card.style.removeProperty("--rx");
      card.style.removeProperty("--ry");
    },
    true,
  );
})();
