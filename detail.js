const decants = [
  {
    id: 1,
    name: "Sauvage",
    brand: "Dior",
    category: "hombre",
    volume: "5ml",
    price: 12.0,
    rating: 4.8,
    notes: {
      top: "Bergamota de Calabria, Pimienta rosa",
      heart: "Geranio, Lavanda, Pachulí",
      base: "Ambroxan, Cedro, Labdano",
    },
    description:
      "Una composición radicalmente fresca, cruda y noble. Sauvage es el perfume de los espacios abiertos, del cielo azul que cubre paisajes rocosos, blancos y abrasados por el sol.",
    perfumer: "François Demachy",
    year: 2015,
    icon: "🌊",
    concentration: "Eau de Toilette",
  },
  {
    id: 2,
    name: "Bleu de Chanel",
    brand: "Chanel",
    category: "hombre",
    volume: "5ml",
    price: 15.0,
    rating: 4.7,
    notes: {
      top: "Limón, Menta, Pimienta rosa, Toronja",
      heart: "Jengibre, Nuez moscada, Jazmín, Iso E Super",
      base: "Incienso, Vetiver, Cedro, Sándalo, Pachulí, Almizcle blanco",
    },
    description:
      "Una fragancia amaderada aromática que evoca la libertad con su estela elegante y atemporal. Un clásico moderno para el hombre que elige su propio destino.",
    perfumer: "Jacques Polge",
    year: 2010,
    icon: "💎",
    concentration: "Eau de Parfum",
  },
  {
    id: 3,
    name: "Aventus",
    brand: "Creed",
    category: "hombre",
    volume: "5ml",
    price: 28.0,
    rating: 4.9,
    notes: {
      top: "Piña, Bergamota, Grosella negra, Manzana",
      heart: "Abedul, Pachulí, Jazmín marroquí, Rosa",
      base: "Almizcle, Musgo de roble, Ámbar gris, Vainilla",
    },
    description:
      "Inspirado en la vida dramática de un emperador histórico, Aventus celebra la fuerza, el poder y el éxito. La fragancia más icónica de la casa Creed.",
    perfumer: "Olivier Creed, Erwin Creed",
    year: 2010,
    icon: "👑",
    concentration: "Eau de Parfum",
  },
  {
    id: 4,
    name: "La Vie Est Belle",
    brand: "Lancôme",
    category: "mujer",
    volume: "5ml",
    price: 14.0,
    rating: 4.6,
    notes: {
      top: "Grosella negra, Pera",
      heart: "Iris, Jazmín, Flor de azahar",
      base: "Vainilla, Pachulí, Praliné, Haba tonka",
    },
    description:
      "La vida es bella, una declaración de felicidad. Una fragancia floral gourmand que captura la libertad de elegir tu propio camino hacia la felicidad.",
    perfumer: "Olivier Polge, Dominique Ropion, Anne Flipo",
    year: 2012,
    icon: "🌸",
    concentration: "Eau de Parfum",
  },
  {
    id: 5,
    name: "Black Opium",
    brand: "YSL",
    category: "mujer",
    volume: "5ml",
    price: 13.0,
    rating: 4.7,
    notes: {
      top: "Pimienta rosa, Flor de azahar, Pera",
      heart: "Café, Jazmín, Almendra amarga, Regaliz",
      base: "Vainilla, Pachulí, Cedro, Madera de cachemira",
    },
    description:
      "Adictiva, vibrante y electrizante. Black Opium es la fragancia de la mujer rock-chic que vive la noche con intensidad y glamour.",
    perfumer: "Nathalie Lorson, Marie Salamagne, Olivier Cresp, Honorine Blanc",
    year: 2014,
    icon: "☕",
    concentration: "Eau de Parfum",
  },
  {
    id: 6,
    name: "Flowerbomb",
    brand: "Viktor&Rolf",
    category: "mujer",
    volume: "5ml",
    price: 16.0,
    rating: 4.7,
    notes: {
      top: "Té, Bergamota, Osmanto",
      heart: "Jazmín, Rosa, Fresia, Orquídea",
      base: "Pachulí, Vainilla, Almizcle",
    },
    description:
      "Una explosión floral que transforma lo negativo en positivo. Un ramo de flores exuberante en un frasco de diamante tallado.",
    perfumer:
      "Olivier Polge, Carlos Benaim, Domitille Berthier, Dominique Ropion",
    year: 2005,
    icon: "💣",
    concentration: "Eau de Parfum",
  },
  {
    id: 7,
    name: "Santal 33",
    brand: "Le Labo",
    category: "unisex",
    volume: "5ml",
    price: 22.0,
    rating: 4.6,
    notes: {
      top: "Cardamomo, Iris, Violeta",
      heart: "Sándalo australiano, Papiro, Ámbar",
      base: "Cuero, Cedro, Almizcle",
    },
    description:
      "Un perfume de culto que evoca el espíritu del Oeste americano. Ahumado, amaderado y adictivo, huele diferente en cada piel.",
    perfumer: "Frank Voelkl",
    year: 2011,
    icon: "🌲",
    concentration: "Eau de Parfum",
  },
  {
    id: 8,
    name: "Baccarat Rouge 540",
    brand: "MFK",
    category: "unisex",
    volume: "5ml",
    price: 35.0,
    rating: 4.9,
    notes: {
      top: "Azafrán, Jazmín",
      heart: "Ámbar gris, Madera de ámbar",
      base: "Resina de abeto, Cedro",
    },
    description:
      "Una alquimia luminosa y sofisticada. Inspirada en el cristal de Baccarat, esta fragancia brilla con una estela única e inolvidable.",
    perfumer: "Francis Kurkdjian",
    year: 2015,
    icon: "🔴",
    concentration: "Eau de Parfum",
  },
  {
    id: 9,
    name: "Terre d'Hermès",
    brand: "Hermès",
    category: "hombre",
    volume: "5ml",
    price: 14.0,
    rating: 4.7,
    notes: {
      top: "Naranja, Toronja",
      heart: "Pimienta, Sílex, Geranio",
      base: "Vetiver, Cedro, Pachulí, Benjuí",
    },
    description:
      "Una narrativa simbólica que explora la materia y sus transformaciones. Un agua entre tierra y cielo, mineral y amaderada.",
    perfumer: "Jean-Claude Ellena",
    year: 2006,
    icon: "🌍",
    concentration: "Eau de Toilette",
  },
  {
    id: 10,
    name: "J'adore",
    brand: "Dior",
    category: "mujer",
    volume: "5ml",
    price: 15.0,
    rating: 4.7,
    notes: {
      top: "Ylang-Ylang, Bergamota, Pera, Melón",
      heart: "Jazmín, Rosa, Tuberosa, Orquídea, Ciruela",
      base: "Vainilla, Almizcle, Cedro, Frambuesa",
    },
    description:
      "El perfume de la feminidad absoluta. Un bouquet floral exquisito en el frasco icónico de ánfora, símbolo de la mujer Dior.",
    perfumer: "François Demachy",
    year: 1999,
    icon: "💖",
    concentration: "Eau de Parfum",
  },
  {
    id: 11,
    name: "Acqua di Giò",
    brand: "Armani",
    category: "hombre",
    volume: "5ml",
    price: 11.0,
    rating: 4.5,
    notes: {
      top: "Limón, Lima, Bergamota, Jazmín, Naranja, Mandarina, Neroli",
      heart: "Ciclón, Calona, Jazmín de agua, Romero, Frutos del mar, Hiedra",
      base: "Cedro, Pachulí, Almizcle blanco, Ámbar, Musgo de roble",
    },
    description:
      "La esencia del Mediterráneo. Frescura marina, sol y libertad en una fragancia acuática aromática que definió una generación.",
    perfumer: "Alberto Morillas",
    year: 1996,
    icon: "💧",
    concentration: "Eau de Toilette",
  },
  {
    id: 12,
    name: "Libre",
    brand: "YSL",
    category: "mujer",
    volume: "5ml",
    price: 14.0,
    rating: 4.6,
    notes: {
      top: "Lavanda, Mandarina, Grosella negra, Petitgrain",
      heart: "Lavanda, Flor de azahar, Jazmín",
      base: "Vainilla, Almizcle, Ámbar gris, Cedro",
    },
    description:
      "La libertad se viste de alta costura. Una lavanda floral atrevida que rompe los códigos, para la mujer que vive con intensidad.",
    perfumer: "Anne Flipo, Carlos Benaim",
    year: 2019,
    icon: "🕊️",
    concentration: "Eau de Parfum",
  },
  {
    id: 13,
    name: "Ombre Nomade",
    brand: "Louis Vuitton",
    category: "unisex",
    volume: "5ml",
    price: 30.0,
    rating: 4.8,
    notes: {
      top: "Incienso, Frambuesa, Azafrán",
      heart: "Rosa, Benjuí, Madera de agar (Oud)",
      base: "Ámbar, Almizcle, Pachulí, Cuero",
    },
    description:
      "Un viaje olfativo por el desierto infinito. El oud más precioso se encuentra con la rosa y el incienso en una estela mística y poderosa.",
    perfumer: "Jacques Cavallier Belletrud",
    year: 2018,
    icon: "🏜️",
    concentration: "Eau de Parfum",
  },
  {
    id: 14,
    name: "Eros",
    brand: "Versace",
    category: "hombre",
    volume: "5ml",
    price: 10.0,
    rating: 4.5,
    notes: {
      top: "Menta, Manzana verde, Limón",
      heart: "Frijol tonka, Ambroxan, Geranio",
      base: "Vainilla, Vetiver, Cedro, Musgo de roble",
    },
    description:
      "El dios del amor en un frasco. Una fragancia masculina, apasionada y seductora que celebra el cuerpo y el deseo.",
    perfumer: "Aurelien Guichard",
    year: 2012,
    icon: "🏹",
    concentration: "Eau de Toilette",
  },
  {
    id: 15,
    name: "Good Girl",
    brand: "Carolina Herrera",
    category: "mujer",
    volume: "5ml",
    price: 13.0,
    rating: 4.6,
    notes: {
      top: "Almendra, Café, Bergamota, Limón",
      heart: "Tuberosa, Jazmín sambac, Nardo, Raíz de lirio",
      base: "Cacao, Haba tonka, Vainilla, Pachulí, Sándalo, Almizcle, Café",
    },
    description:
      "Lo bueno y lo malo en una sola mujer. Una fragancia floral gourmand audaz en el icónico frasco de stiletto.",
    perfumer: "Louise Turner",
    year: 2016,
    icon: "👠",
    concentration: "Eau de Parfum",
  },
  {
    id: 16,
    name: "Mojave Ghost",
    brand: "Byredo",
    category: "unisex",
    volume: "5ml",
    price: 24.0,
    rating: 4.6,
    notes: {
      top: "Ambrette, Nectarina",
      heart: "Violeta, Sándalo, Magnolia",
      base: "Almizcle, Cedro, Ámbar gris",
    },
    description:
      "Inspirado en la flor fantasma del desierto de Mojave. Etérea, amaderada y misteriosamente floral. Minimalismo de lujo.",
    perfumer: "Jérôme Epinette",
    year: 2014,
    icon: "🌵",
    concentration: "Eau de Parfum",
  },
];

function getUrlParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

let toastTimer;

function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.className = "toast show " + type;
  toastTimer = setTimeout(() => {
    toast.className = "toast hidden";
  }, 3000);
}

function renderDetail() {
  const id = parseInt(getUrlParam("id"));
  const perfume = decants.find((d) => d.id === id);

  if (!perfume) {
    window.location.href = "index.html";
    return;
  }

  document.title = `${perfume.name} - ${perfume.brand} | Decants Perfumes`;

  const categoryLabels = {
    hombre: "Hombre",
    mujer: "Mujer",
    unisex: "Unisex",
  };

  // Imagen del frasco (la genera ui.js; si no cargó, se deja vacío en vez de mostrar el emoji)
  const imageBox = document.getElementById("detailImage");
  if (window.DecantUI) {
    window.DecantUI.renderImage(imageBox, perfume.category, perfume.name);
  }
  document.getElementById("detailCategory").textContent =
    categoryLabels[perfume.category];
  document.getElementById("detailCategory").className =
    "detail-badge category-" + perfume.category;
  document.getElementById("detailBrand").textContent = perfume.brand;
  document.getElementById("detailName").textContent = perfume.name;
  document.getElementById("detailConcentration").textContent =
    perfume.concentration;
  document.getElementById("detailVolume").textContent = perfume.volume;
  document.getElementById("detailYear").textContent = perfume.year;
  document.getElementById("detailPrice").textContent =
    `$${perfume.price.toFixed(2)}`;
  document.getElementById("detailRating").innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        ${perfume.rating}
    `;
  document.getElementById("detailDescription").textContent =
    perfume.description;
  document.getElementById("detailTopNotes").textContent = perfume.notes.top;
  document.getElementById("detailHeartNotes").textContent = perfume.notes.heart;
  document.getElementById("detailBaseNotes").textContent = perfume.notes.base;
  document.getElementById("detailPerfumer").textContent = perfume.perfumer;
  document.getElementById("detailYearInfo").textContent = perfume.year;
  document.getElementById("detailConcentrationInfo").textContent =
    perfume.concentration;
  document.getElementById("detailCategoryInfo").textContent =
    categoryLabels[perfume.category];
  document.getElementById("detailVolumeInfo").textContent = perfume.volume;

  const buyBtn = document.getElementById("detailBuyBtn");
  buyBtn.onclick = () => {
    showToast(
      `${perfume.name} (${perfume.volume}) agregado — $${perfume.price.toFixed(2)}`,
    );
  };
}

document.addEventListener("DOMContentLoaded", renderDetail);
