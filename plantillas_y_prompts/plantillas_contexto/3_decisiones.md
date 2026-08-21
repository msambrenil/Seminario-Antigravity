# 📝 Registro de Decisiones de Arquitectura y Diseño (ADRs)

> 🛡️ **REGLA MANDATORIA DE GESTIÓN DE DECISIONES**:
> 1. **Registro Continuo**: Cada vez que el usuario pida una funcionalidad, cambio de diseño o ajuste técnico, Antigravity DEBE registrar una nueva entrada en este archivo de manera ordenada y cronológica con **Fecha y Hora exacta** (`[YYYY-MM-DD HH:mm]`).
> 2. **Autorización Obligatoria para Cambios Importantes**: Si una decisión implica un cambio estructural (cambio de framework CSS, eliminación/reemplazo de archivos clave, nueva librería, alteración de la arquitectura SPA o breaking changes), el agente **DEBE pausar y solicitar autorización explícita al usuario** antes de realizar la modificación.

---

## 📌 [ADR-001] · [2026-08-18 10:15] · Selección de Framework CSS (TailwindCSS vs Vanilla CSS)
- **Estado**: Aprobado por el usuario.
- **Contexto**: El proyecto requiere maquetar vistas modernas y responsive rápidamente para alumnos de nivel principiante.
- **Decisión**: Utilizar **TailwindCSS v3 (CDN)** como framework principal de utilidades.
- **Descartado**: Bootstrap 5 (descartado por componentes rígidos) y Vanilla CSS a mano (descartado para maquetados complejos por tiempo).
- **Consecuencia**: Maquetado ágil directo en HTML sin necesidad de compilar paquetes locales.

---

## 📌 [ADR-002] · [2026-08-18 10:30] · Arquitectura SPA Multi-Vista sin Recarga
- **Estado**: Aprobado por el usuario.
- **Contexto**: Se necesita conmutar entre Landing, Catálogo y Dashboard de manera instantánea en una sola página.
- **Decisión**: Implementar navegación client-side con JavaScript Vanilla alternando clases de visibilidad (`.hidden`) sobre secciones `<section id="view-...">`.
- **Descartado**: Frameworks pesados como React o Vue, o múltiples archivos HTML desconectados.
- **Consecuencia**: Navegación fluida y ligera en un único archivo `index.html`.

---

## 📌 [ADR-003] · [2026-08-18 11:00] · Interactividad Visual Directa y Modales de Información
- **Estado**: Aprobado por el usuario.
- **Contexto**: Se requiere brindar interactividad visual (modales de detalle, confirmación de reservas y conmutación de tema claro/oscuro) sin añadir complejidad técnica innecesaria.
- **Decisión**: Implementar interactividad directa en interfaz mediante alternancia de clases visuales, feedback en pantalla y modales flotantes simples.
- **Descartado**: Backend con Node/Express, bases de datos SQL o manipulaciones complejas de almacenamiento.
- **Consecuencia**: Experiencia de usuario dinámica, visual y fácil de comprender para estudiantes principiantes.
