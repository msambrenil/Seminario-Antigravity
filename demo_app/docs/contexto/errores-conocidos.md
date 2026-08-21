# 🐛 Errores Conocidos y Soluciones (Gotchas)

## 📌 Gotcha 01: El Menú Hamburguesa se queda abierto al cambiar de vista
- **Síntoma**: Al hacer clic en una opción del menú mobile, la vista cambia pero el menú sigue desplegado tapando la pantalla.
- **Causa Raíz**: Falta de un listener en los enlaces mobile para ocultar la clase `mobile-menu`.
- **Solución**: Se agregó `mobileMenu.classList.add('hidden')` en el evento `click` de cada enlace navegable en `app.js`.

---

## 📌 Gotcha 02: Desalineación de Tarjetas en CSS Grid con Descripciones Largas
- **Síntoma**: Las tarjetas del catálogo tenían alturas desiguales cuando una descripción ocupaba más líneas.
- **Causa Raíz**: Contenedores internos sin `flex flex-col justify-between`.
- **Solución**: Se aplicó la clase `h-full flex flex-col justify-between` en las tarjetas de eventos para forzar los botones al pie de la tarjeta.

---

## 📌 Gotcha 03: Foco visual en inputs en Light Mode
- **Síntoma**: Los inputs mantenían fondos oscuros en Light Mode dificultando la lectura.
- **Causa Raíz**: Clases estáticas `bg-slate-950` sin variante `light:bg-white`.
- **Solución**: Se configuraron clases adaptativas con transiciones de color.
