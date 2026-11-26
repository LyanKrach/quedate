// Quedate — Plataforma de Alquiler Vacacional en Venezuela
// JavaScript puro (sin dependencias ni frameworks)

const ACCOMMODATIONS = [
  {
    id: 1,
    title: "Posada Acuario Coral frente al mar",
    city: "Los Roques",
    state: "Dependencias Federales",
    type: "Posada boutique caribeña",
    price: 280,
    rating: 4.98,
    reviewsCount: 54,
    guests: 6,
    bedrooms: 3,
    beds: 4,
    baths: 3,
    featured: true,
    tag: "Favorito de huéspedes",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80"
    ],
    host: {
      name: "Valentina Salazar",
      role: "Superanfitriona · 5 años en Quedate",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    description: "Exclusiva posada boutique a pasos de la orilla en Gran Roque con terraza panorámica sobre el mar Caribe. Disfruta de la tranquilidad del archipiélago con chef privado, planta eléctrica continua, desalinización propia y excursiones privadas a los cayos más remotos.",
    amenities: [
      { name: "WiFi satelital Starlink", icon: "🌐" },
      { name: "Aire acondicionado en todas las áreas", icon: "❄️" },
      { name: "Planta eléctrica 24/7", icon: "⚡" },
      { name: "Tanque de agua propio / desalinización", icon: "💧" },
      { name: "Desayuno gourmet incluido", icon: "🍳" },
      { name: "Salida directa a la orilla del mar", icon: "🏖️" },
      { name: "Atención de chef privado", icon: "👨‍🍳" },
      { name: "Equipo de snorkel y paddleboard", icon: "🤿" }
    ],
    reviews: [
      {
        author: "Carlos Mendoza",
        date: "Noviembre 2026",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
        comment: "La mejor experiencia en Los Roques. La planta eléctrica no falló ni un segundo, la comida deliciosa y el personal súper atento a los traslados a Cayo de Agua."
      },
      {
        author: "Mariana Rivas",
        date: "Octubre 2026",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
        comment: "Vistas inolvidables desde la terraza al atardecer. Camas comodísimas y el café de la mañana frente al mar es mágico. 100% recomendada."
      }
    ]
  },
  {
    id: 2,
    title: "Penthouse Panorámico Ávila Suite",
    city: "Caracas",
    state: "Distrito Capital",
    type: "Penthouse moderno en Las Mercedes",
    price: 145,
    rating: 4.95,
    reviewsCount: 48,
    guests: 4,
    bedrooms: 2,
    beds: 2,
    baths: 2,
    featured: true,
    tag: "Superanfitrión",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    ],
    host: {
      name: "Alejandro De Sola",
      role: "Superanfitrión · 3 años en Quedate",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    description: "Espectacular penthouse contemporáneo con vista abierta al imponente Cerro El Ávila. Ubicado en Las Mercedes, epicentro gastronómico y de ocio en Caracas, con control de acceso inteligente y servicios garantizados sin interrupciones.",
    amenities: [
      { name: "Fibra óptica 400 Mbps", icon: "🌐" },
      { name: "Planta eléctrica 100% funcional", icon: "⚡" },
      { name: "Pozo de agua profunda del edificio", icon: "💧" },
      { name: "Estacionamiento techado con valet", icon: "🚗" },
      { name: "Terraza privada con asador y sala exterior", icon: "🥩" },
      { name: "Smart TV 70\" con streaming", icon: "📺" },
      { name: "Cocina de alta gama con isla", icon: "🍳" },
      { name: "Seguridad privada y vigilancia 24h", icon: "🛡️" }
    ],
    reviews: [
      {
        author: "Guillermo Pardo",
        date: "Noviembre 2026",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
        comment: "El Ávila parece un cuadro gigante en la sala. Conexión a internet impecable para trabajar remoto y servicios 100% garantizados."
      }
    ]
  },
  {
    id: 3,
    title: "Villa Sol Caribeña en Playa El Yaque",
    city: "Margarita",
    state: "Nueva Esparta",
    type: "Villa vacacional con piscina privada",
    price: 195,
    rating: 4.92,
    reviewsCount: 36,
    guests: 8,
    bedrooms: 4,
    beds: 5,
    baths: 4,
    featured: true,
    tag: "Favorito de huéspedes",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    ],
    host: {
      name: "Camila Navarro",
      role: "Superanfitriona · 4 años en Quedate",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
    },
    description: "Lujosa villa en Playa El Yaque diseñada para grupos y familias. Cuenta con piscina privada, hamacas caribeñas, acceso rápido a la playa de windsurf/kitesurf y amplias áreas sociales para descansar bajo el sol margariteño.",
    amenities: [
      { name: "Piscina privada con tumbonas", icon: "🏊" },
      { name: "Acceso caminando a la playa", icon: "🏖️" },
      { name: "WiFi de alta velocidad", icon: "🌐" },
      { name: "Planta eléctrica automática", icon: "⚡" },
      { name: "Tanque subterráneo de 40.000 L", icon: "💧" },
      { name: "Parrillera y comedor exterior", icon: "🍖" },
      { name: "Aire acondicionado en cada habitación", icon: "❄️" },
      { name: "Estacionamiento cerrado para 3 carros", icon: "🚗" }
    ],
    reviews: [
      {
        author: "Andrea Gómez",
        date: "Noviembre 2026",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
        comment: "Pasamos una semana increíble en familia. La piscina está impecable y la cercanía al mar es insuperable."
      }
    ]
  },
  {
    id: 4,
    title: "Chalet Nevado San Javier con chimenea",
    city: "Mérida",
    state: "Mérida",
    type: "Chalet de montaña en El Valle",
    price: 75,
    rating: 4.96,
    reviewsCount: 62,
    guests: 6,
    bedrooms: 3,
    beds: 4,
    baths: 2,
    featured: true,
    tag: "Superanfitrión",
    images: [
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
    ],
    host: {
      name: "Rodrigo Briceño",
      role: "Superanfitrión · 6 años en Quedate",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80"
    },
    description: "Cálido refugio de madera y piedra en las alturas de Mérida. Chimenea a leña en la sala principal, jardín con niebla matutina, vistas directas a los picos de la Sierra Nevada y delicioso café andino de cortesía.",
    amenities: [
      { name: "Chimenea de leña tradicional", icon: "🪵" },
      { name: "Agua caliente continua con calentador a gas", icon: "🚿" },
      { name: "WiFi satelital Starlink", icon: "🌐" },
      { name: "Cocina rústica equipada", icon: "🍳" },
      { name: "Jardines andinos con mirador", icon: "🌲" },
      { name: "Calefactor auxiliar en habitaciones", icon: "🔥" },
      { name: "Estacionamiento privado techado", icon: "🚗" },
      { name: "Juegos de mesa y biblioteca", icon: "♟️" }
    ],
    reviews: [
      {
        author: "Patricia Lugo",
        date: "Noviembre 2026",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
        comment: "El frío andino junto a la chimenea encendida fue una experiencia reparadora. Don Rodrigo es un anfitrión ejemplar."
      }
    ]
  },
  {
    id: 5,
    title: "Loft Urbano Minimalista en El Viñedo",
    city: "Valencia",
    state: "Carabobo",
    type: "Loft ejecutivo moderno",
    price: 65,
    rating: 4.89,
    reviewsCount: 31,
    guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1.5,
    featured: false,
    tag: "Ideal para trabajo",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80"
    ],
    host: {
      name: "Héctor Colmenares",
      role: "Anfitrión profesional · 2 años en Quedate",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80"
    },
    description: "Elegante espacio abierto de estilo industrial en El Viñedo. Diseñado especialmente para ejecutivos y viajeros que valoran la estética moderna, el confort y la cercanía a los mejores restaurantes y centros corporativos de Valencia.",
    amenities: [
      { name: "Internet simétrico 300 Mbps", icon: "🌐" },
      { name: "Planta eléctrica para el 100% del apartamento", icon: "⚡" },
      { name: "Escritorio ergonómico con silla Herman Miller", icon: "💻" },
      { name: "Cerradura digital sin llave (Keyless)", icon: "🔐" },
      { name: "Cafetera Nespresso con cápsulas", icon: "☕" },
      { name: "Aire acondicionado Inverter", icon: "❄️" }
    ],
    reviews: [
      {
        author: "Simón Albarrán",
        date: "Octubre 2026",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
        comment: "El loft es tal cual como en las fotos. El internet voló y nunca se fue la luz. Súper céntrico en El Viñedo."
      }
    ]
  },
  {
    id: 6,
    title: "Casona Colonial Las Delicias con patio central",
    city: "Maracay",
    state: "Aragua",
    type: "Casa campestre tradicional",
    price: 80,
    rating: 4.86,
    reviewsCount: 24,
    guests: 5,
    bedrooms: 2,
    beds: 3,
    baths: 2,
    featured: false,
    tag: "Familiar",
    images: [
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540518614846-7ede433c4ef7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80"
    ],
    host: {
      name: "Elena Morales",
      role: "Superanfitriona · 4 años en Quedate",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    },
    description: "Hermosa casona de corredores techados y patio interno con fuente andaluza y vegetación tropical. A pocos minutos de la subida a Choroní por el Parque Henri Pittier. Fresca, apacible y con gran tradición.",
    amenities: [
      { name: "Patio interno ajardinado", icon: "🌿" },
      { name: "Tanque subterráneo con hidroneumático", icon: "💧" },
      { name: "WiFi de fibra óptica", icon: "🌐" },
      { name: "Parrillera criolla y horno de barro", icon: "🍕" },
      { name: "Cocina totalmente equipada", icon: "🍳" },
      { name: "Estacionamiento cerrado para 3 autos", icon: "🚗" }
    ],
    reviews: [
      {
        author: "Daniela Castillo",
        date: "Octubre 2026",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
        comment: "El patio central es un oasis de paz en Maracay. Todo muy limpio y seguro para viajar con niños."
      }
    ]
  },
  {
    id: 7,
    title: "Apartamento Vista Mar Bahía Pampatar",
    city: "Margarita",
    state: "Nueva Esparta",
    type: "Condominio de playa frente a la bahía",
    price: 110,
    rating: 4.93,
    reviewsCount: 42,
    guests: 4,
    bedrooms: 2,
    beds: 3,
    baths: 2,
    featured: false,
    tag: "Frente al mar",
    images: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    ],
    host: {
      name: "Marcos Tellechea",
      role: "Superanfitrión · 3 años en Quedate",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    description: "Despierta escuchando las olas en Pampatar. Apartamento moderno con balcón con vista directa a los botes de pesca y al mar turquesa. Edificio residencial de alta categoría con piscina privada y seguridad continua.",
    amenities: [
      { name: "Piscina olímpica del conjunto", icon: "🏊" },
      { name: "Balcón con comedor frente a la bahía", icon: "🌅" },
      { name: "Planta eléctrica para todo el complejo", icon: "⚡" },
      { name: "Agua 24 horas garantizada", icon: "💧" },
      { name: "WiFi de alta velocidad", icon: "🌐" },
      { name: "Cerca de los mejores restaurantes de la isla", icon: "🍽️" }
    ],
    reviews: [
      {
        author: "Nelson Farías",
        date: "Noviembre 2026",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
        comment: "La vista desde el balcón es impresionante, tanto de día como de noche. Excelente ubicación en Pampatar."
      }
    ]
  },
  {
    id: 8,
    title: "Estudio Boutique Altamira con Terraza",
    city: "Caracas",
    state: "Distrito Capital",
    type: "Estudio moderno en Altamira Sur",
    price: 55,
    rating: 4.91,
    reviewsCount: 38,
    guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    featured: false,
    tag: "Económico y céntrico",
    images: [
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    ],
    host: {
      name: "Gabriela Urbina",
      role: "Anfitriona destacada · 1 año en Quedate",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    description: "Estudio acogedor, funcional y con excelente luz natural a pocas cuadras de la Plaza Altamira y estación de metro. Zona tranquila, con restaurantes, farmacias y bancos a distancia peatonal.",
    amenities: [
      { name: "WiFi fibra óptica 200 Mbps", icon: "🌐" },
      { name: "Tanque auxiliar de agua independiente", icon: "💧" },
      { name: "Cerradura inteligente con código", icon: "🔐" },
      { name: "Kichenette con microondas y cafetera", icon: "☕" },
      { name: "Aire acondicionado split", icon: "❄️" },
      { name: "Cerca de transporte público y comercios", icon: "🚶" }
    ],
    reviews: [
      {
        author: "José David R.",
        date: "Noviembre 2026",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
        comment: "Impecable y súper cómodo para una estadía corta en Caracas. Gabriela estuvo siempre disponible."
      }
    ]
  }
];

// Gestión de Favoritos en LocalStorage
const FAVORITES_STORAGE_KEY = "quedate_favorites";

function getFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Error al leer favoritos de localStorage:", e);
    return [];
  }
}

function isFavorite(id) {
  const favs = getFavorites();
  return favs.includes(Number(id));
}

function toggleFavorite(id) {
  const numId = Number(id);
  let favs = getFavorites();
  if (favs.includes(numId)) {
    favs = favs.filter((item) => item !== numId);
  } else {
    favs.push(numId);
  }
  try {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favs));
  } catch (e) {
    console.error("Error al guardar favoritos en localStorage:", e);
  }
  updateFavoritesBadge();
  updateHeartButtonsState();
  return favs.includes(numId);
}

function updateFavoritesBadge() {
  const badges = document.querySelectorAll(".favorites-count-badge");
  const count = getFavorites().length;
  badges.forEach((badge) => {
    badge.textContent = count;
    badge.style.display = count > 0 ? "inline-flex" : "none";
  });
}

function updateHeartButtonsState() {
  const buttons = document.querySelectorAll(".btn-favorite");
  const favs = getFavorites();
  buttons.forEach((btn) => {
    const id = Number(btn.getAttribute("data-id"));
    const active = favs.includes(id);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
    btn.classList.toggle("is-active", active);
    const label = btn.querySelector(".favorite-label");
    if (label) {
      label.textContent = active ? "En favoritos" : "Guardar";
    }
  });
}

// Generador de Tarjetas de Alojamiento
function createListingCardHTML(item) {
  const favActive = isFavorite(item.id);
  return `
    <article class="listing-card" data-id="${item.id}" data-city="${item.city}" data-price="${item.price}" data-guests="${item.guests}">
      <div class="card-image-wrapper">
        <img 
          src="${item.images[0]}" 
          alt="${item.title}" 
          class="card-image" 
          loading="lazy" 
          onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80';"
        />
        <span class="card-tag">${item.tag || item.type}</span>
        <button 
          type="button" 
          class="btn-favorite ${favActive ? "is-active" : ""}" 
          data-id="${item.id}" 
          aria-label="Guardar ${item.title} en favoritos" 
          aria-pressed="${favActive ? "true" : "false"}"
        >
          <svg class="heart-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </button>
      </div>
      <div class="card-content">
        <div class="card-header-row">
          <span class="card-location">📍 ${item.city}, Venezuela</span>
          <span class="card-rating">★ ${item.rating.toFixed(2)} <span class="rating-count">(${item.reviewsCount})</span></span>
        </div>
        <h3 class="card-title">
          <a href="detalle.html?id=${item.id}" class="card-title-link">${item.title}</a>
        </h3>
        <p class="card-specs">Hasta ${item.guests} huéspedes · ${item.bedrooms} hab · ${item.baths} baños</p>
        <div class="card-price-row">
          <div class="card-price">
            <span class="price-value">$${item.price} USD</span>
            <span class="price-unit"> / noche</span>
          </div>
          <a href="detalle.html?id=${item.id}" class="btn-card-view">Ver detalles</a>
        </div>
      </div>
    </article>
  `;
}

// Delegación de eventos para botones de favoritos
document.addEventListener("click", (e) => {
  const favBtn = e.target.closest(".btn-favorite");
  if (favBtn) {
    e.preventDefault();
    e.stopPropagation();
    const id = favBtn.getAttribute("data-id");
    if (id) {
      toggleFavorite(id);
    }
  }
});

// Inicialización común al cargar cualquier pantalla
document.addEventListener("DOMContentLoaded", () => {
  updateFavoritesBadge();
  updateHeartButtonsState();

  // Menú hamburguesa móvil
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const navMenu = document.getElementById("primary-nav-menu");
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      const expanded = mobileToggle.getAttribute("aria-expanded") === "true";
      mobileToggle.setAttribute("aria-expanded", !expanded);
      navMenu.classList.toggle("is-open", !expanded);
    });
  }
});
