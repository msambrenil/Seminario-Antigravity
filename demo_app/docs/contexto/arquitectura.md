# 🏗️ Arquitectura de la Aplicación (CultivaRío 2026)

## 📌 Resumen del Stack Tecnológico
- **UI Framework**: HTML5 Semántico + TailwindCSS (v3 via CDN con custom config).
- **Lógica de Cliente**: JavaScript Vanilla ES6+ (SPA sin recarga, `localStorage`, `MOCK_DATA` dinámico).
- **Tipografías**: Google Fonts (*Outfit* para encabezados, *Plus Jakarta Sans* para cuerpo).
- **Persistencia**: LocalStorage para reservas de tickets y preferencia de Tema (Dark/Light Mode).
- **Entorno Agentico**: Google Antigravity 2.0 + Gentle-AI (SDD) + Memoria Persistente Engram.

---

## 📂 Estructura de Carpetas del Proyecto

```text
demo_app/
├── index.html                   # SPA Principal (Landing, Catálogo, Dashboard, Modales)
├── app.js                       # Lógica JS (SPA Router, Mock Data, Filtros, LocalStorage)
├── style.css                    # Estilos complementarios y variables CSS de tema
├── README.md                    # Manual del Proyecto Demo
├── GEMINI.md                    # Configuración de contexto para Antigravity 2.0
├── REPORTE_VERIFICACION_SDD.md  # Reporte oficial de verificación sdd-verify
├── docs/
│   └── contexto/
│       ├── arquitectura.md      # Este documento
│       ├── convenciones.md      # Reglas de HTML, Tailwind y JS
│       ├── decisiones.md        # ADRs del proyecto
│       ├── glosario.md          # Términos del dominio
│       ├── flujo-de-trabajo.md  # Workflow SDD y DoD
│       └── errores-conocidos.md # Gotchas y soluciones
└── .agents/
    └── rules/
        ├── antigravity_global_rules.md # 7 Pilares del Antigravity OS (always_on)
        └── gentle_engram_protocol.md   # Protocolo mandatorio de memoria y SDD
```

---

## 🚫 Lo que NO Existe en el Proyecto
- NO hay frameworks de JavaScript pesados (React, Angular, Vue).
- NO hay bibliotecas de CSS adicionales (Bootstrap, Bulma).
- NO hay backend con Node.js/Express (toda la interacción corre en client-side con `localStorage`).
