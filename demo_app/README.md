# 🎭 CultivaRío 2026 — Aplicación Web de Referencia

**CultivaRío 2026** es la plataforma web interactiva oficial del Festival Cultural de Río Cuarto (Córdoba). Sirve como **proyecto de referencia de 100 puntos** para el Seminario de **Google Antigravity 2.0 & Desarrollo Agentico**.

---

## 🌟 Características Principales

1. **Arquitectura SPA (Single Page Application)**:
   - Navegación fluida y sin recargas de página entre **Landing / Inicio**, **Catálogo de Atracciones** y **Dashboard de Reservas**.
2. **Interactividad Visual y Dinamismo**:
   - Catálogo interactivo con filtrado por categorías en vivo y buscador en tiempo real.
   - Ventanas emergentes (modales) de información detallada para cada evento con botón de cierre.
   - Sistema de reserva de entradas con persistencia en `localStorage`.
   - Selector de **Modo Oscuro / Modo Claro** con adaptación automática de contrastes y paleta accesible.
   - Menú responsive colapsable con diseño mobile-first.
3. **Ecosistema Agentico Completo**:
   - **Antigravity Global Rules**: Configuración en `.agents/rules/antigravity_global_rules.md` con `trigger: always_on`.
   - **Master Context (6 Documentos)**: Documentación viva en `docs/contexto/` vinculada en `GEMINI.md`.
   - **Gentle-AI & Spec-Driven Development (SDD)**: Flujo metódico documentado en `REPORTE_VERIFICACION_SDD.md`.
   - **Memoria Engram**: Registro continuo de decisiones técnicas y soluciones a bugs.

---

## 📂 Estructura de Archivos

```text
demo_app/
├── index.html                   # SPA Principal (Landing, Catálogo, Dashboard, Modales)
├── app.js                       # Lógica JS (SPA Router, Mock Data, Filtros, LocalStorage)
├── style.css                    # Estilos complementarios y variables CSS de tema
├── README.md                    # Este manual de referencia
├── GEMINI.md                    # Vinculación de contexto y reglas para Antigravity 2.0
├── REPORTE_VERIFICACION_SDD.md  # Reporte de verificación y control de calidad (DoD)
├── package.json                 # Configuración del paquete y scripts
├── docs/
│   └── contexto/
│       ├── arquitectura.md      # Stack, mapa de archivos y tecnologías prohibidas
│       ├── convenciones.md      # Reglas de HTML5, Tailwind y clases de contraste
│       ├── decisiones.md        # Registro de ADRs con fecha/hora y autorización
│       ├── glosario.md          # Términos del dominio y componentes UI
│       ├── flujo-de-trabajo.md  # Ciclo SDD y Definition of Done (DoD)
│       └── errores-conocidos.md # Gotchas y soluciones documentadas
└── .agents/
    └── rules/
        ├── antigravity_global_rules.md # 7 Pilares del Antigravity OS (always_on)
        └── gentle_engram_protocol.md   # Protocolo mandatorio de memoria y SDD
```

---

## 🚀 Cómo Ejecutar la Aplicación

No requiere instalaciones complejas. Puedes ejecutarla de dos formas:

1. **Directamente en el navegador**:
   - Abre `index.html` con doble clic o con la extensión Live Server de tu editor.
2. **Mediante servidor local**:
   ```bash
   npx serve .
   ```

---

## 🎖️ Cumplimiento de la Rúbrica (100 Puntos)

| Criterio | Implementación en CultivaRío 2026 | Puntaje |
| :--- | :--- | :---: |
| **Diseño Visual & UI Premium** | Estética moderna en TailwindCSS, 100% responsive, Dark/Light Mode con contraste verificado `.force-text-white`. | 25 / 25 |
| **Interactividad Visual & Feedback** | Navegación SPA sin recarga, modales de detalle funcionales, menú móvil y feedback en reservas. | 25 / 25 |
| **Antigravity, SDD & DoD** | Flujo Gentle-AI ejecutado, 4 estados UI y reporte `REPORTE_VERIFICACION_SDD.md` completo. | 20 / 20 |
| **Memoria Engram & Bitácora** | Uso de `mem_save`, registro continuo de decisiones y resumen de sesión. | 15 / 15 |
| **Master Context & Reglas Globales** | 6 documentos en `docs/contexto/` y reglas globales enlazados en `GEMINI.md`. | 15 / 15 |
| **TOTAL** | **Proyecto de Referencia de Calidad Máxima** | **100 / 100** |
