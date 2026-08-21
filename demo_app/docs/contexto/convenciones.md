# 🎨 Convenciones de Diseño y Código (CultivaRío 2026)

## 🎨 Paleta de Colores Oficial (Tailwind Extension)
- **Fondo Dark**: `bg-slate-950` (#020617)
- **Superficie Dark**: `bg-slate-900` (#0f172a)
- **Fondo Light**: `bg-slate-50` (#f8fafc)
- **Superficie Light**: `bg-white` (#ffffff)
- **Color Marca Primario**: `purple-600` (#9333ea) a `purple-400` (#c084fc)
- **Color Acento**: `cyan-500` (#06b6d4) & `amber-400` (#fbbf24)

---

## 🏷️ Reglas de HTML Semántico
1. **Un solo `<h1>` por SPA**: Reservado para el Hero Banner de la vista Landing.
2. **Navegación**: Utilizar elementos `<nav>` y `<header>` para la barra superior.
3. **Componentes**: Tarjetas de eventos envueltas en `<article>`, secciones demarcadas con `<section>`.
4. **Vistas SPA**: Cada vista vive en una sección contenedora con la clase `spa-view` (ej: `<section id="view-landing" class="spa-view">`).

---

## 💻 Convenciones de JavaScript
1. **Sintaxis ES6+**: `const`, `let`, Arrow functions, template literals.
2. **Manejo de Estado**: Estado de reservas sincronizado con `localStorage` usando la clave `cultivario_reservas`.
3. **Nombres de Funciones**:
   - `switchView(viewName)`: Cambia la vista SPA activa.
   - `renderEvents(filterCategory, searchQuery)`: Renderiza las tarjetas del catálogo.
   - `toggleTheme()`: Alterna entre Dark/Light mode y guarda la preferencia en `localStorage`.
   - `openModal(eventId)` / `closeModal()`: Controla el modal emergente.
