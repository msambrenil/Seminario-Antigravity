# 💬 Prompt Entrevistador: Levantamiento de Contexto Web (14 Preguntas Pedagógicas)

Este prompt transforma a **Google Antigravity 2.0** en un tutor y entrevistador de arquitectura web. Formula al estudiante **14 preguntas pedagógicas y sencillas**, organizadas en 5 bloques temáticos. 

> 💡 **Para cada pregunta**, el agente le brinda al alumno una **explicación simple de por qué es importante** y **múltiples ejemplos de respuestas posibles** (eventos culturales, tiendas/cafeterías, adopción de mascotas, portfolios, etc.) para que cualquier principiante pueda responder sin dudar.

---

## 🤖 Prompt para Copiar y Pegar en Google Antigravity 2.0

```text
Antigravity, quiero definir la idea y el contexto inicial de mi sitio web para este proyecto.

Por favor actúa como un Arquitecto Web y tutor técnico paciente. Inicia una entrevista guiada haciéndome las siguientes 14 PREGUNTAS PEDAGÓGICAS Y CLARAS sobre mi proyecto (pensadas para estudiantes principiantes en desarrollo web).

En cada pregunta, incluye su breve explicación (¿Para qué sirve?) y los ejemplos de respuesta para que sepa exactamente qué responder:

--- 🎯 BLOQUE 1: IDENTIDAD, TEMÁTICA Y GLOSARIO (Alimenta arquitectura.md y glosario.md) ---

1. 🎯 NOMBRE Y PROPÓSITO DEL SITIO WEB:
   - 💡 ¿Para qué sirve?: Define la identidad de tu página para que el agente sepa de qué trata y cree títulos, textos y elementos coherentes con tu temática.
   - 📌 Ejemplos de lo que puedes responder:
     * Opción A (Eventos): "Se llamará 'Festival Cultural Río Cuarto 2026' y servirá para mostrar recitales, talleres de arte y reservar entradas."
     * Opción B (Comercio/Gastronomía): "Se llamará 'Café & Libros Vintage' y servirá para mostrar el menú, novedades literarias y reservar mesas."
     * Opción C (Servicios/Mascotas): "Se llamará 'Huellitas Felices' y su meta es publicar perros y gatos en adopción y recibir donaciones."

2. 📖 PALABRAS CLAVE DEL PROYECTO (GLOSARIO):
   - 💡 ¿Para qué sirve?: Cada temática tiene palabras especiales. Si se las enseñamos a la IA, las usará correctamente en los botones, títulos y tarjetas sin inventar términos raros.
   - 📌 Ejemplos de lo que puedes responder:
     * Si es un festival: "Lineup (grilla de artistas), Pase General (entrada básica), Escenario Principal, Feria Gastronómica."
     * Si es un café/tienda: "Especialidad del día, Combo Desayuno, Carrito, Pedido para llevar."
     * Si es de mascotas: "Mascota rescatada, Ficha de adopción, Vacunación al día, Hogar de tránsito."

--- 🧩 BLOQUE 2: ESTRUCTURA, SECCIONES Y CONTENIDO (Alimenta arquitectura.md, convenciones.md y glosario.md) ---

3. 🧱 SECCIONES PRINCIPALES DE LA PÁGINA (DE ARRIBA HACIA ABAJO):
   - 💡 ¿Para qué sirve?: Es el esqueleto de tu página (Wireframe). Le dice a la IA en qué orden colocar los bloques para que la navegación sea lógica y cómoda.
   - 📌 Ejemplos de lo que puedes responder:
     * Opción A: "1. Barra de navegación arriba con logo y enlaces, 2. Portada (Hero) con título llamativo y botón principal, 3. Grilla de tarjetas con eventos/productos, 4. Formulario de inscripción/contacto, 5. Pie de página (Footer) con redes sociales."
     * Opción B: "1. Menú superior, 2. Banner de bienvenida con foto, 3. Sección de '¿Quiénes somos?', 4. Catálogo con buscador, 5. Testimonios, 6. Formulario, 7. Pie de página."

4. 🖼️ CONTENIDO DE LAS TARJETAS Y DATOS DE MUESTRA:
   - 💡 ¿Para qué sirve?: Las tarjetas (cards) muestran información repetitiva pero con datos diferentes. Debemos definir qué datos llevará cada tarjeta y darle ejemplos para que no queden vacías.
   - 📌 Ejemplos de lo que puedes responder:
     * Estructura de cada tarjeta: "Cada tarjeta debe tener: Foto ilustrativa, Título del evento/producto, Fecha o Precio, Ubicación o Categoría, una breve descripción de 2 líneas y un botón de acción ('Ver más' o 'Reservar')."
     * Datos de muestra (4 a 6 ejemplos): "Quiero 6 tarjetas con recitales locales (ej: 'Noche de Rock', 'Tributo Jazz', 'Taller de Cerámica', 'Show de Títeres', 'Feria de Diseño', 'Folclore en Vivo')."

5. 📝 FORMULARIO INTERACTIVO Y BOTONES DE ACCIÓN:
   - 💡 ¿Para qué sirve?: Permite que los visitantes interactúen contigo (reserven, pregunten o se anoten). Le indicamos a la IA qué campos pedir y qué mensaje mostrar.
   - 📌 Ejemplos de lo que puedes responder:
     * Opción A (Inscripción/Reserva): "El formulario debe pedir: Nombre completo, Correo electrónico, Teléfono, Selección de entrada o taller en un menú desplegable, y un botón 'Confirmar Reserva' que muestre un aviso verde de éxito."
     * Opción B (Contacto simple): "Debe pedir: Nombre, Email, Asunto, Mensaje y botón 'Enviar Consulta'."

--- 🎨 BLOQUE 3: ESTILO VISUAL, COLORES Y DISEÑO RESPONSIVE (Alimenta convenciones.md y decisiones.md) ---

6. 🌈 PALETA DE COLORES Y MODO (CLARO U OSCURO):
   - 💡 ¿Para qué sirve?: Los colores transmiten la personalidad de tu sitio. Además, definir si será claro u oscuro (Dark mode) ayuda a elegir fondos y contrastes para que todo el texto sea legible.
   - 📌 Ejemplos de lo que puedes responder:
     * Opción A (Dark Mode / Nocturno): "Prefiero Modo Oscuro: Fondo azul noche pizarra (`#0f172a`), color primario violeta neón (`#8b5cf6`), acentos en rosa/fucsia (`#ec4899`) y textos en blanco."
     * Opción B (Light Mode / Limpio y Claro): "Prefiero Modo Claro: Fondo blanco/gris muy suave (`#f8fafc`), color principal verde esmeralda (`#10b981`), detalles en azul marino (`#1e3a8a`) y texto gris oscuro."
     * Opción C (Con botón para alternar): "Quiero que inicie en Modo Oscuro, pero que tenga un botón arriba para cambiar a Modo Claro."

7. 🔤 TIPOGRAFÍA Y FUENTES:
   - 💡 ¿Para qué sirve?: Una tipografía adecuada de Google Fonts hace que tu página se vea moderna y profesional sin ralentizar la carga.
   - 📌 Ejemplos de lo que puedes responder:
     * Opción A (Moderna y Geométrica): "Usar la fuente 'Poppins' o 'Inter' de Google Fonts: títulos en negrita (bold) y párrafos limpios con buen espacio entre líneas."
     * Opción B (Clásica y Elegante): "Usar 'Playfair Display' para los títulos grandes y 'Roboto' para los textos explicativos."
     * Opción C (Estándar del sistema): "Usar fuente sans-serif del sistema (Segoe UI / Arial / system-ui)."

8. 📱 ADAPTABILIDAD A CELULARES (DISEÑO RESPONSIVE):
   - 💡 ¿Para qué sirve?: Más del 70% de las personas navega desde el teléfono. Debemos indicarle cómo reorganizar los elementos para que no se corten en pantallas pequeñas.
   - 📌 Ejemplos de lo que puedes responder:
     * "En computadoras las tarjetas van en 3 columnas, pero en celulares deben verse en 1 sola columna vertical. El menú superior de enlaces debe convertirse en un botón de menú hamburguesa desplegable, y los botones deben ser anchos para tocarlos fácil con el dedo."

9. ✨ EFECTOS AL PASAR EL MOUSE (HOVER):
   - 💡 ¿Para qué sirve?: Las micro-interacciones dan dinamismo a la web y le avisan al usuario que un elemento es interactivo y se puede cliquear.
   - 📌 Ejemplos de lo que puedes responder:
     * "Al pasar el cursor sobre un botón, que cambie suavemente de brillo o color. Al pasar el mouse sobre una tarjeta, que se eleve levemente hacia arriba con una sombra suave y que la imagen haga un pequeño zoom fluido."

--- 🛠️ BLOQUE 4: DECISIONES TÉCNICAS Y LÍMITES (Alimenta decisiones.md, arquitectura.md y convenciones.md) ---

10. 🛠️ FRAMEWORK CSS ELEGIDO Y MOTIVOS:
    - 💡 ¿Para qué sirve?: Le aclara a Antigravity con qué herramienta de diseño trabajaremos en clase para que aplique únicamente las clases de ese framework y no mezcle código.
    - 📌 Ejemplos de lo que puedes responder:
      * Opción A (Recomendado - TailwindCSS): "Usaremos TailwindCSS v3 (via CDN) porque nos permite maquetar rápido con clases de utilidad y lograr un diseño moderno sin escribir hojas de estilo gigantes."
      * Opción B (Bootstrap 5): "Usaremos Bootstrap 5 (via CDN) porque nos gustan sus componentes ya armados como modales y botones prehechos."
      * Opción C (CSS Vanilla Puro): "Usaremos CSS3 tradicional con archivo `styles.css` propio para practicar variables CSS (`:root`) y Flexbox/Grid a mano."

11. 💡 INTERACTIVIDAD VISUAL Y DINÁMICA DE PANTALLA:
    - 💡 ¿Para qué sirve?: Define qué comportamiento dinámico tendrá la página ante los clics del usuario (abrir ventanas de información, mostrar avisos o cambiar de sección) de forma directa y visual.
    - 📌 Ejemplos de lo que puedes responder:
      * Opción A: "Quiero que al hacer clic en 'Ver detalles' de una tarjeta se abra una ventana modal con más información y un botón de cerrar. Al enviar el formulario, que aparezca un aviso verde de confirmación en pantalla, y un botón para alternar entre Modo Claro y Modo Oscuro."
      * Opción B: "Quiero botones en el menú para cambiar de sección en la misma pantalla (Inicio, Catálogo y Contacto) y un menú hamburguesa que se despliegue en celulares."

12. ⛔ LÍMITES TÉCNICOS Y TECNOLOGÍAS PROHIBIDAS (LO QUE NO EXISTE):
    - 💡 ¿Para qué sirve?: Le pone un freno a la IA para que no agregue frameworks complejos ni librerías pesadas que no se hayan visto en el curso, manteniendo el código simple y fácil de entender.
    - 📌 Ejemplos de lo que puedes responder:
      * "NO usar React, Angular ni Vue. NO crear backend con Node.js, Express ni Python. NO usar bases de datos SQL ni Firebase. NO usar estilos pegados dentro de las etiquetas con `style='...'`. Mantener todo en un solo archivo `index.html` con JavaScript limpio."

--- 📋 BLOQUE 5: FLUJO DE TRABAJO Y CONTROL DE CALIDAD (Alimenta flujo-de-trabajo.md y errores-conocidos.md) ---

13. 📋 PASOS DE TRABAJO Y CHECKLIST DE VERIFICACIÓN:
    - 💡 ¿Para qué sirve?: Establece el orden de trabajo paso a paso y la lista de control (Definition of Done) para comprobar que la página funciona perfecto antes de darla por terminada.
    - 📌 Ejemplos de lo que puedes responder:
      * Orden de construcción: "Paso 1: Estructura HTML5 semántica ➔ Paso 2: Diseño y colores con el Framework CSS ➔ Paso 3: Interactividad y filtros en JS."
      * Checklist de prueba: "Antes de terminar, verificar: 1. Abrir en navegador, 2. Probar en tamaño móvil con F12 / Responsive Mode, 3. Comprobar que los botones y filtros respondan, 4. Verificar que no haya errores rojos en la consola de JavaScript."

14. ⚠️ ERRORES COMUNES A PREVENIR (GOTCHAS DEL MAQUETADO):
    - 💡 ¿Para qué sirve?: Son 'trampas típicas' del desarrollo web que frustran a los principiantes. Al documentarlas, la IA se asegura de blindar el código contra estos errores.
    - 📌 Ejemplos de lo que puedes responder:
      * "1. Evitar que la página tenga scroll horizontal roto en celulares agregando `overflow-x: hidden` en el contenedor, 2. Poner siempre atributo `alt` descriptivo en las fotos para accesibilidad, 3. Usar siempre etiquetas `<button>` para elementos cliqueables y no simples `<div>` o `<span>`, 4. Asegurar que los botones tengan texto blanco bien legible sobre fondos oscuros."

============================================================
Una vez que te responda a estas 14 preguntas:
a) Guarda todas las respuestas en tu memoria activa (mem_save).
b) Genera automáticamente los 6 documentos de contexto en docs/contexto/ (arquitectura.md, convenciones.md, decisiones.md, glosario.md, flujo-de-trabajo.md, errores-conocidos.md).
c) Crea o actualiza automáticamente el archivo GEMINI.md en la raíz del proyecto vinculando los 6 documentos con la sintaxis de referencia (@docs/contexto/...).
d) Realiza la poda inteligente de skills en .agents/skills/ evaluando todo el contexto de nuestro proyecto, conservando las herramientas útiles para frontend/JS/a11y/SDD y eliminando las superfluas.
```

---

## 🗺️ Mapeo de Preguntas a los 6 Documentos de Master Context

| Documento de Contexto | Preguntas que lo alimentan | ¿Qué información le aporta? |
| :--- | :--- | :--- |
| **`1. arquitectura.md`** | Preguntas 1, 3, 4, 10, 11, 12 | Stack técnico (HTML5, Framework CSS), mapa de archivos, estructura de interfaz y tecnologías prohibidas. |
| **`2. convenciones.md`** | Preguntas 3, 4, 5, 6, 7, 8, 9, 12, 14 | Paleta de colores, tipografías, clases, accesibilidad (`alt`, `<button>`), breakpoints mobile-first y reglas de estilo. |
| **`3. decisiones.md`** | Preguntas 6, 10, 11, 12 | ADRs formales con fecha/hora: elección de Framework CSS, descarte de backend, interactividad UI y bibliotecas descartadas. |
| **`4. glosario.md`** | Preguntas 1, 2, 3, 5 | Términos clave del negocio/temática de la web y componentes de interfaz (Hero, Navbar, Card, Modal, Footer). |
| **`5. flujo-de-trabajo.md`** | Preguntas 3, 11, 13 | Ciclo de desarrollo agentico, orden de maquetación y checklist de definición de terminado (DoD). |
| **`6. errores-conocidos.md`** | Preguntas 10, 12, 14 | Gotchas a prevenir: desbordes en móviles (`overflow-x`), estilos inline prohibidos, mezcla de frameworks y accesibilidad. |

---

## 💡 Ventajas Pedagógicas de esta Entrevista para Principiantes

1. **Terminología Clara y Accesible**: Utiliza palabras sencillas que cualquier estudiante que vio nociones de HTML5 y CSS3 comprende sin esfuerzo.
2. **Explicación '¿Para qué sirve?' en cada punto**: El alumno no responde a ciegas; entiende el impacto de su decisión técnica.
3. **Múltiples Ejemplos Reales**: Provee alternativas de respuesta para diversos rubros (eventos, comercios, ONGs, servicios).
4. **Cobertura 100% de los 6 Documentos**: Garantiza que `docs/contexto/` se complete con datos consistentes y estructurados.
5. **Poda Holística de Skills**: Determina con precisión qué herramientas conservar en todo el stack (CSS, JS, a11y, SDD) y cuáles eliminar de `.agents/skills/`.
