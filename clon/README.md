# Sprint 1 · Recreación de Pantallas (H1.2) — Quedate

Este directorio contiene la recreación de las 3 pantallas clave del producto **Quedate** (referencia: Airbnb), implementadas con **HTML5 semántico, CSS3 moderno y JavaScript puro** (Vanilla ES6+), sin frameworks, librerías externas ni código del sitio original.

---

## 1. Identidad de Marca: Quedate

- **Paleta de Colores:**
  - Fondo principal: Negro carbón (`#0B0D11`) y superficies elevadas (`#141822`, `#1D2331`).
  - Acentos de marca: Degradado Rojo (`#FF385C`) y Naranja vibrante (`#FF7A00`).
  - Textos: Blanco puro (`#FFFFFF`) y gris secundario (`#94A3B8`).
  - Acento de calificaciones: Dorado (`#FFB800`).
- **Datos de prueba:** Destinos y ciudades reales de Venezuela:
  - Caracas (Distrito Capital)
  - Valencia (Carabobo)
  - Maracay (Aragua)
  - Mérida (Los Andes)
  - Isla de Margarita (Nueva Esparta)
  - Los Roques (Archipiélago caribeño)
- **Precios:** Expresados de forma transparente en **USD ($)**.
- **Fotografías:** Imágenes de alta calidad de Unsplash con licencia libre y marcadores de posición de respaldo.

---

## 2. Pantallas Recreadas

### 1. `clon/index.html` — Inicio
- **Buscador Principal:** Recrea el buscador flotante de Airbnb con selección de Destino (ciudades de Venezuela), Fechas de Entrada y Salida (datepickers) y Huéspedes. Al enviar el formulario, redirige y filtra automáticamente en `listado.html`.
- **Píldoras de Categorías:** Accesos rápidos a Playas y Cayos, Montaña y Frío, Ciudad y Negocios, Villas con Piscina.
- **Alojamientos Destacados:** Fila/rejilla con las propiedades mejor valoradas, etiqueta de estatus ("Favorito de huéspedes", "Superanfitrión"), botón de favoritos con persistencia y enlace a detalles.
- **Explora por Destino:** Tarjetas visuales de las principales regiones turísticas del país.
- **Garantías Quedate:** Servicios esenciales verificados (planta eléctrica 24/7, tanque de agua, internet satelital Starlink).

### 2. `clon/listado.html` — Resultados de Búsqueda
- **Filtros Interactivos en JS Puro:**
  - Selector de ciudad o destino (Caracas, Los Roques, Margarita, Mérida, Valencia, Maracay).
  - Control deslizante (*slider*) de precio máximo por noche en USD con actualización en tiempo real ($50 a $300 USD).
  - Selector de capacidad mínima de huéspedes (1+, 2+, 4+, 6+, 8+ personas).
  - Botón para limpiar y restablecer filtros.
- **Sincronización con URL:** Lee los parámetros `destino`, `checkin`, `checkout`, `huespedes` y `favoritos` desde la barra de direcciones.
- **Estado Vacío:** Mensaje claro y botón para reiniciar la búsqueda cuando ningún alojamiento coincide con los filtros.
- **Favoritos con `localStorage`:** Guardado inmediato de alojamientos favoritos mediante la clave `quedate_favorites`.

### 3. `clon/detalle.html` — Detalle del Alojamiento
- **Carga Dinámica:** Renderiza la información correspondiente al parámetro `?id=X` (por defecto ID 1: *Posada Acuario Coral* en Los Roques).
- **Galería de 5 Fotos (Estilo Airbnb):** Rejilla asimétrica con 1 foto principal grande y 4 fotos complementarias en desktop; colapso elegante en pantalla móvil.
- **Información del Anfitrión:** Perfil del anfitrión, estatus de Superanfitrión, políticas de llegada autónoma y cancelación flexible.
- **Servicios Garantizados:** Rejilla de amenidades adaptadas al contexto venezolano (planta eléctrica 24/7, desalinización/tanque propio, Starlink, chef privado, aire acondicionado).
- **Calendario de Disponibilidad Interactivo:** Selección de rango de fechas de check-in y check-out que recalcula automáticamente el número de noches y el total en USD.
- **Reseñas y Desglose de Puntuaciones:** Calificación global (4.98 ★), desglose por categorías (limpieza, comunicación, ubicación) y testimonios reales de huéspedes.
- **Widget Sticky de Reserva:** Tarjeta flotante fija en escritorio y barra inferior fija en móvil con desglose de precios en USD y nota de demostración (sin pantallas de login ni pago).

---

## 3. Navegación Cruzada

Cada una de las 3 pantallas cuenta con navegación en el encabezado y en el pie de página que permite alternar fluidamente entre:
1. `index.html` (Inicio)
2. `listado.html` (Explorar alojamientos)
3. `detalle.html` (Alojamiento destacado / específico)

---

## 4. Verificación Responsive

Diseño optimizado y probado para:
- **Móvil (375 px):** Menú colapsable, buscador apilado en tarjeta, tarjetas en columna única, galería compacta y barra de reserva inferior fija.
- **Escritorio (1280 px):** Barra de búsqueda tipo píldora, rejilla de tarjetas en múltiples columnas, galería de 5 fotos y panel lateral flotante pegajoso (*sticky*).

Las capturas de verificación se encuentran en `clon/screenshots/`:
- `01-inicio-1280px.png` y `01-inicio-375px.png`
- `02-listado-1280px.png` y `02-listado-375px.png`
- `03-detalle-1280px.png` y `03-detalle-375px.png`
