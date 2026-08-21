# 📝 Registro de Decisiones de Arquitectura (ADRs)

> 🛡️ **REGLA DE GESTIÓN DE DECISIONES**:
> - Cada decisión técnica o cambio solicitado por el usuario se registra ordenadamente con **Fecha y Hora** (`[YYYY-MM-DD HH:mm]`).
> - Los cambios importantes o estructurales requieren **autorización explícita del usuario** antes de aplicarse.

---

## 📌 [ADR-001] · [2026-08-18 10:15] · Selección de TailwindCSS v3 via CDN
- **Estado**: Aprobado por el usuario.
- **Contexto**: Los estudiantes aprenden HTML/CSS y requieren maquetar interfaces modernas sin lidiar con procesos de compilación o Node bundlers complejos.
- **Decisión**: Usar TailwindCSS v3 inyectado por CDN con `tailwind.config` inline para extender colores y tipografías.
- **Consecuencia**: Carga inmediata, desarrollo ágil y clases utility estandarizadas.

---

## 📌 [ADR-002] · [2026-08-18 10:30] · Arquitectura SPA Single-File con Client-Side Router en JS
- **Estado**: Aprobado por el usuario.
- **Contexto**: El Desafío Integrador requiere 3 vistas navegables sin recarga de página.
- **Decisión**: Implementar la navegación mediante ocultamiento/desocultamiento de secciones HTML (`.hidden`) gestionado desde `app.js` mediante la función `switchView()`.
- **Consecuencia**: Navegación instantánea de alta fluidez sin necesidad de librerías externas de ruteo.

---

## 📌 [ADR-003] · [2026-08-18 11:00] · Persistencia en LocalStorage para Reservas y Tema
- **Estado**: Aprobado por el usuario.
- **Contexto**: La aplicación debe simular persistencia de usuario y cambio de tema Dark/Light Mode sin backend.
- **Decisión**: Guardar la lista de IDs reservados en `localStorage.getItem('cultivario_reservas')` y el tema en `localStorage.getItem('cultivario_theme')`.
- **Consecuencia**: Los datos sobreviven al recargar la página y demuestran capacidades interactivas en cliente.
