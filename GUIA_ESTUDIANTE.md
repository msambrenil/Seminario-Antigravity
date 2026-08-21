# 🎓 Guía del Estudiante: Manual de Google Antigravity 2.0 & Desarrollo Agentico

¡Bienvenido al Seminario! En este curso aprenderás a utilizar **Google Antigravity 2.0**: la plataforma independiente enfocada en **agentes de Inteligencia Artificial**, subagentes en paralelo, tareas programadas, gestión de memoria persistente con **Engram**, desarrollo guiado por especificaciones con **Gentle-AI (SDD)** y el **Sistema Operativo de Reglas Globales (Antigravity Global Rules)**.

---

## 🪐 Configuración de Contexto de Antigravity & Mapa Maestro del Seminario

En el ecosistema de **Google Antigravity**, el contexto del proyecto y las reglas se unifican de forma directa y estructurada. A continuación dispones del **Índice Maestro de Recursos** y la configuración de contexto de este seminario:

### 📌 1. Reglas Globales & Protocolos de Operación
- **[Reglas Globales de Antigravity (always_on)](file:///Users/ojitos/Documents/seminario_antigravity/.agents/rules/antigravity_global_rules.md)** (`@.agents/rules/antigravity_global_rules.md`): Los 7 pilares del sistema operativo del agente (Persona, Defaults, DoD, Guards, Contexto Vivo, SDD Adaptativo e Integraciones).
- **[Protocolo de Memoria Engram & SDD](file:///Users/ojitos/Documents/seminario_antigravity/.agents/rules/gentle_engram_protocol.md)** (`@.agents/rules/gentle_engram_protocol.md`): Ciclo de persistencia continua (`mem_context`, `mem_save`, `mem_session_summary`) y desarrollo guiado por especificaciones.

### 📚 2. Documentos, Guías y Ecosistema del Seminario
- **[Guía del Estudiante](file:///Users/ojitos/Documents/seminario_antigravity/GUIA_ESTUDIANTE.md)** (`@GUIA_ESTUDIANTE.md`): Manual paso a paso con los 5 prompts maestros, 7 pilares y la guía de logros.
- **[Guía Maestra del Profesor](file:///Users/ojitos/Documents/seminario_antigravity/GUIA_PROFESOR.md)** (`@GUIA_PROFESOR.md`): Guiones de grabación minuto a minuto, pedagogía y rúbricas docentes.
- **[Plantillas y Banco de Prompts](file:///Users/ojitos/Documents/seminario_antigravity/plantillas_y_prompts/ANTIGRAVITY_GLOBAL_RULES.md)** (`@plantillas_y_prompts/...`): Todos los prompts y directivas listas para copiar y pegar.
- **[Entrevista de Contexto (14 Preguntas Pedagógicas)](file:///Users/ojitos/Documents/seminario_antigravity/plantillas_y_prompts/PROMPT_ENTREVISTA_CONTEXTO.md)** (`@plantillas_y_prompts/PROMPT_ENTREVISTA_CONTEXTO.md`): Entrevista interactiva para definir cualquier proyecto web desde cero.
- **[Desafío Integrador Final](file:///Users/ojitos/Documents/seminario_antigravity/plantillas_y_prompts/DESAFIO_INTEGRADOR_COMPLEJO.md)** (`@plantillas_y_prompts/DESAFIO_INTEGRADOR_COMPLEJO.md`): Consignas del proyecto en equipo, 5 requisitos y rúbrica de 100 puntos.
- **[Proyecto Demo de Referencia: CultivaRío 2026](file:///Users/ojitos/Documents/seminario_antigravity/demo_app/)** (`@demo_app/`): Código fuente real terminado en HTML5, TailwindCSS y JavaScript con sus 6 documentos de contexto en `demo_app/docs/contexto/`.
- **[Visor Web Interactivo de la Guía del Estudiante](file:///Users/ojitos/Documents/seminario_antigravity/guia_estudiante_web/index.html)**: Interfaz web interactiva con buscador, temas y lectura visual.
- **[Presentación Interactiva de Diapositivas](file:///Users/ojitos/Documents/seminario_antigravity/presentation/index.html)**: 48 diapositivas animadas para el dictado y estudio de las 7 clases.

### 🧩 3. ¿Cómo funciona GEMINI.md en tus propios proyectos?
En cualquier proyecto que construyas con Google Antigravity, el archivo **`GEMINI.md`** en la raíz actúa como el **conector maestro de contexto**. Utiliza la sintaxis de directiva `@` para vincular automáticamente todos los documentos de contexto vivo (`docs/contexto/`) y reglas globales:
- **Plantilla Oficial**: [`plantillas_y_prompts/plantillas_contexto/GEMINI.md`](file:///Users/ojitos/Documents/seminario_antigravity/plantillas_y_prompts/plantillas_contexto/GEMINI.md)
- **Estructura Estándar de Enlace**:
  ```markdown
  # 🪐 Configuración de Contexto de Antigravity (GEMINI.md)
  
  ## 📌 Reglas Globales & Operación
  - **Reglas Globales de Antigravity** → @.agents/rules/antigravity_global_rules.md
  
  ## 📚 Documentos de Master Context del Proyecto
  - **Arquitectura** → @docs/contexto/arquitectura.md
  - **Convenciones de Código** → @docs/contexto/convenciones.md
  - **Registro de Decisiones (ADR)** → @docs/contexto/decisiones.md
  - **Glosario y Entidades** → @docs/contexto/glosario.md
  - **Flujo de Trabajo (DoD)** → @docs/contexto/flujo-de-trabajo.md
  - **Errores Conocidos & Gotchas** → @docs/contexto/errores-conocidos.md
  ```

---

## 📺 Estructura de Clases en Video (Máximo 15 Minutos por Clase)

El curso está estructurado en **7 clases en video de corta duración (máx. 15 min cada una)** para que puedas aprender a tu propio ritmo y aplicar los conocimientos paso a paso:

- 🎬 **Clase 1 (12 min)**: Introducción a Google Antigravity 2.0 y la Era Agentica
- 🎬 **Clase 2 (10 min)**: Auto-Setup Transparente del Entorno en Windows
- 🎬 **Clase 3 (14 min)**: El Cerebro del Agente: Antigravity Global Rules, Gentle-AI & Memoria Engram
- 🎬 **Clase 4 (15 min)**: Levantamiento de Contexto: La Entrevista Web (14 Preguntas para Principiantes)
- 🎬 **Clase 5 (14 min)**: Master Context: Autogeneración de los 6 Documentos de Contexto y Vinculación en GEMINI.md
- 🎬 **Clase 6 (12 min)**: Gestión de Skills Agenticas: Importación, Selección y Poda Inteligente
- 🎬 **Clase 7 (15 min)**: Desafío Integrador en Equipos (Proyecto en Equipo) & Workflow Agentico Avanzado

---

## 🪐 Conociendo la Interfaz de Google Antigravity 2.0

1. **Barra Lateral Izquierda**:
   - `Projects`: Selecciona tu proyecto actual (ej: `seminario_antigravity`).
   - `Conversation History`: Histórico de conversaciones anteriores.
   - `Scheduled Tasks`: Tareas programadas en segundo plano.
2. **Chat Principal de Agentes**: La ventana central donde le pides tareas a Antigravity.
3. **Selector Multimodelo (Panel Inferior)**: Permite elegir el modelo (ej: *Gemini 3.6 Flash High*, *Gemini Pro*, *Claude*, *GPT*).
4. **Explorador de Archivos y Artefactos**: Permite inspeccionar en tiempo real todos los archivos creados y modificados por los agentes.

---

## 🪄 1. Prompt Mágico de Auto-Setup Transparente (Clase 2)

Abre **Google Antigravity 2.0**, selecciona tu proyecto en `Projects` y pega este prompt en el chat:

```text
Antigravity, por favor configura mi ambiente de desarrollo en Windows de forma transparente:

1. Revisa si Node.js y Git están instalados. Si no lo están, usa winget para instalarlos en mi sistema.
2. Verifica que npm y git funcionen correctamente.
3. Habilita la ejecución de scripts en PowerShell si está bloqueada.
4. Muestra un resumen transparente de todo lo que verificaste e instalaste.
```

---

## 🚨 2. Prompt Maestro: Integración Global y Permanente de Reglas (Clase 3)

¡No necesitas crear carpetas ni escribir archivos a mano! Con este **único prompt**, Antigravity se encarga de todo: crea la carpeta `.agents/rules/`, genera el archivo de reglas con `trigger: always_on` (lo que garantiza que se cargue **siempre y de forma global** en cada turno), lo guarda en su memoria activa persistente (`mem_save`) y lo vincula en `GEMINI.md`:

```text
[REGLA GLOBAL PERMANENTE - ANTIGRAVITY OPERATING SYSTEM]

Antigravity, por favor configura e instala de forma permanente y global el Sistema Operativo de Reglas en este proyecto:

1. CREACIÓN AUTOMÁTICA DEL ARCHIVO DE REGLAS:
   - Crea la carpeta .agents/rules/ si no existe.
   - Crea el archivo .agents/rules/antigravity_global_rules.md con encabezado 'trigger: always_on' y los 7 pilares maestros:
     * 1. Persona: Senior Product Engineer (velocidad, código limpio, UX top, explicar el POR QUÉ antes del CÓMO).
     * 2. Tech Stack Defaults: React 18+ / TS / Vite / TailwindCSS / Zustand / Query / Patrón Repository.
     * 3. Definition of Done (DoD): Justificación técnica, validación de tipos/tests, verificación visual de 4 estados (Loading, Empty, Error, Success) y código limpio.
     * 4. Control de Guardas: Explicar impacto y pedir confirmación antes de alterar reglas de negocio o eventos.
     * 5. Contexto Vivo: Gestión proactiva de docs/contexto/ (arquitectura, convenciones, decisiones, glosario, flujo, errores).
     * 6. SDD Adaptativo & Engram: Vía rápida (Fast-Path) para 1 archivo, ciclo SDD para >2 archivos, y memoria continua (mem_context, mem_save, mem_session_summary).
     * 7. Integraciones: Soporte para Graphify e Impeccable UI.

2. ACTIVACIÓN Y PERSISTENCIA GLOBAL:
   - Guarda esta directiva en tu memoria activa (mem_save) para que nunca se olvide.
   - Vincula la regla en GEMINI.md (@.agents/rules/antigravity_global_rules.md).

3. CONFIRMACIÓN:
   - Muéstrame un resumen confirmando que las reglas quedaron activadas de forma global y permanente (always_on).
```

### ⚡ ¿Qué hace Antigravity automáticamente tras este prompt?
1. **Crea [`.agents/rules/antigravity_global_rules.md`](file:///Users/ojitos/Documents/seminario_antigravity/.agents/rules/antigravity_global_rules.md)**: Con el encabezado nativo `trigger: always_on`. Esto le dice al motor de Antigravity que lea y aplique estas reglas en **absolutamente todos los mensajes futuros**.
2. **Guarda en memoria activa (`mem_save`)**: Persiste los 7 pilares en Engram para sobrevivir a reinicios o compactaciones de sesión.
3. **Vincula en `GEMINI.md`**: Asegura trazabilidad y referencia cruzada inmediata en el proyecto.
4. **Cero trabajo manual**: El estudiante solo pega el prompt y el entorno queda blindado y profesional para todo el seminario.

---

## 🏛️ Los 7 Pilares del Antigravity Operating System (Explicación Detallada)

El archivo `.agents/rules/antigravity_global_rules.md` rige todo el comportamiento del agente mediante 7 pilares estructurados:

1. **Persona & Mentalidad de Producto**:
   - **Rol**: *Senior Product Engineer*.
   - **Criterio**: Priorizar velocidad de entrega (speed-to-market), código limpio y experiencia de usuario (UX) sobresaliente.
   - **Comunicación**: Explicar el **POR QUÉ (Why)** antes del **CÓMO (How)**. No dar respuestas mecánicas.
2. **Tech Stack & Defaults**:
   - **Frontend**: React 18+ / TypeScript / Vite (o HTML5 semántico + TailwindCSS en proyectos introductorios).
   - **Estado**: Zustand (estado local/UI) + TanStack Query (estado remoto/servidor).
   - **Arquitectura de Datos**: Patrón Repository (`src/repositories/` o `src/services/`).
   - **Estilos & UI**: Tailwind CSS + Material Design 3 Expressive (M3E) / Lucide Icons.
   - **Persistencia**: IndexedDB / LocalStorage según criticidad.
3. **Definition of Done (DoD) & Validación Visual de 4 Estados**:
   - **Explicación**: Justificar la solución técnica (Why) y el cambio (How).
   - **Integridad de Código**: Ejecutar pruebas (`vitest` / `npm test`) y validación de tipos (`tsc --noEmit`).
   - **Verificación Visual de UI (4 Estados)**:
     - ⏳ *Loading*: Spinners, skeletons o estados de carga suaves.
     - 📭 *Empty*: Mensaje y visual claros cuando una lista o filtro está vacío.
     - ⚠️ *Error*: Mensaje de error amigable con botón de reintento.
     - ✨ *Success*: Confirmación visual clara (toast verde o aviso).
   - **Higiene**: Cero archivos temporales, logs de consola residuales o código comentado.
4. **Control de Reglas de Negocio y Producto (Guards)**:
   - Cualquier modificación en reglas de negocio, flujos de reserva, precios o eventos analíticos requiere **explicación de impacto y confirmación explícita del usuario** antes de mutar código.
5. **Gestión del Contexto Vivo del Proyecto**:
   - Mantenimiento proactivo de los 6 documentos sagrados en `docs/contexto/` (`arquitectura.md`, `convenciones.md`, `decisiones.md`, `glosario.md`, `flujo-de-trabajo.md`, `errores-conocidos.md`).
6. **Flujo de Trabajo y SDD Adaptativo**:
   - **Tareas complejas / Features (>2 archivos)**: Ciclo SDD completo (Explore ➔ Propose ➔ Tasks ➔ Apply ➔ Verify).
   - **Fixes atómicos / Tareas de 1 archivo (Fast-Path)**: Edición directa y verificación rápida sin sobrecarga de artefactos.
   - **Persistencia en Engram**: Registro continuo con `mem_save`, rescate con `mem_context` y cierre con `mem_session_summary`.
7. **Integraciones Opcionales del Ecosistema**:
   - **Graphify**: Consultar topología del grafo de código (`graphify path`, `graphify query`) y actualizar tras refactors (`graphify extract . --code-only`).
   - **Impeccable UI**: Auditoría de modos de superficie (`Operate`, `Persuade`, `Read`, `Experience`) para garantizar interfaces profesionales.

---

## 💬 3. Prompt Entrevistador de Contexto (14 Preguntas Pedagógicas) (Clase 4)

Pega este prompt para que Antigravity actúe como un Arquitecto Web y tutor paciente, explicándote para qué sirve cada pregunta y dándote ejemplos de qué responder antes de autogenerar tus documentos de contexto o podar las skills:

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
      * "NO usar React, Angular ni Vue (si estamos en proyecto HTML Vanilla). NO crear backend con Node.js, Express ni Python. NO usar bases de datos SQL ni Firebase. NO usar estilos pegados dentro de las etiquetas con `style='...'`. Mantener todo en un solo archivo `index.html` con JavaScript limpio."

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
c) Crea o actualiza automáticamente el archivo GEMINI.md en la raíz del proyecto vinculando los 6 documentos (@docs/contexto/...) y las reglas globales (@.agents/rules/antigravity_global_rules.md).
d) Realiza la poda inteligente de skills en .agents/skills/ evaluando todo el contexto de nuestro proyecto.
```

---

## 📚 4. Prompt Maestro de Autogeneración de los 6 Documentos de Contexto (Clase 5)

Si deseas regenerar o actualizar tus documentos de Master Context en cualquier momento, pega este prompt:

```text
Antigravity, lee las 14 respuestas de nuestra entrevista y genera automáticamente:

1. Los 6 documentos de contexto en la carpeta docs/contexto/, uno por archivo:
   - arquitectura.md       (Stack y estructura de archivos)
   - convenciones.md       (Etiquetas HTML5 y paleta de colores CSS)
   - decisiones.md         (Registro ordenado de decisiones con fecha/hora [ADR-XXX] y autorización previa obligatoria)
   - glosario.md           (Términos del negocio y componentes de interfaz)
   - flujo-de-trabajo.md   (Pasos de maquetado SDD y Criterio de Listo)
   - errores-conocidos.md  (Gotchas y soluciones de diseño/responsive)

2. Vinculación Automática en GEMINI.md:
   - Crea o actualiza automáticamente el archivo GEMINI.md en la raíz del proyecto enlazando:
     * Reglas Globales → @.agents/rules/antigravity_global_rules.md
     * Los 6 documentos de contexto → @docs/contexto/...
```

---

## 📥 5. Prompt Maestro de Importación y Poda Inteligente de Skills (Clase 6)

```text
Antigravity, por favor importa el catálogo de skills y realiza la PODA INTELIGENTE evaluando TODO EL CONTEXTO de nuestro proyecto:
1. Crea la carpeta .agents/skills/ en la raíz del proyecto y clona https://github.com/sickn33/agentic-awesome-skills.
2. Revisa nuestras 14 respuestas de la entrevista, las reglas globales y los archivos en docs/contexto/.
3. Conserva únicamente las skills útiles para todo el ciclo de nuestra web (Framework CSS activo, HTML5 semántico, dinamismo de interfaz, a11y y verificación SDD).
4. Elimina automáticamente las skills superfluas (frameworks CSS no usados, React/Vue si es vanilla, backends Node/Python, bases de datos y tecnologías móviles).
5. Muestra el reporte con la lista de skills conservadas y eliminadas.
```

---

## 💻 6. Proyecto de Referencia: La Carpeta `demo_app/`

En la carpeta [`demo_app/`](file:///Users/ojitos/Documents/seminario_antigravity/demo_app/) encontrarás el código fuente completo de una aplicación real terminada: **CultivaRío 2026** (Plataforma del Festival Cultural de Río Cuarto).

- **¿Qué contiene?**:
  - `.agents/rules/antigravity_global_rules.md`: Reglas globales y sistema operativo del agente.
  - `index.html`: Maquetado completo en HTML5 y TailwindCSS con estructura SPA de 3 secciones (Inicio, Catálogo y Formulario).
  - `app.js` y `style.css`: Dinamismo visual en cliente (apertura de modales, menú móvil y selector de Modo Claro/Oscuro).
  - `GEMINI.md` y carpeta `docs/contexto/`: Los 6 documentos de Master Context autogenerados para este festival.
- **¿Cómo usarla?**: Puedes abrir `demo_app/index.html` en tu navegador web en cualquier momento para ver cómo debe verse y estructurarse un proyecto de 100 puntos.

---

## 🏆 7. Desafío Integrador Final en Equipos (Clase 7)

- **Modalidad**: Asincrónico / Trabajo en el Hogar (sin límite presencial).
- **Formato**: En equipos.
- **Consigna**: Desarrollar en equipo un sitio web interactivo (temática libre o Festival Cultural) cumpliendo los **5 Ejes de Trabajo**:
  1. 🌐 **Página Única con 3 Secciones (SPA)**: Navegación fluida entre Inicio, Catálogo y Formulario en un solo archivo.
  2. ⚡ **Contenido Maquetado & Interactividad Visual**: Tarjetas diseñadas en HTML con datos de muestra y ventanas modales de detalle con botón cerrar.
  3. 🎨 **Estilo Visual & Microinteracciones**: Menú hamburguesa responsive para celulares, botón Dark/Light mode y formulario con aviso de confirmación en pantalla.
  4. 📚 **Master Context Vivo**: Los 6 documentos en `docs/contexto/` y reglas vinculadas en `GEMINI.md`.
  5. 🛡️ **Desarrollo SDD & Reglas Globales**: Flujo ordenado, cumplimiento de Definition of Done (DoD) y entrega del reporte `REPORTE_VERIFICACION_SDD.md`.

### 📊 Rúbrica de Evaluación (100 Puntos):
- **Diseño Visual & UI Premium**: 25 pts
- **Interactividad Visual & UI Feedback**: 25 pts
- **Uso de Antigravity, SDD & DoD**: 20 pts
- **Memoria Engram & Bitácora**: 15 pts
- **Master Context (6 Documentos & Reglas Globales)**: 15 pts

---

## 🎖️ 8. Tu Hoja de Logros (Badges y Titulación Final)

- [ ] 🎖️ **Badge 1: Antigravity Pilot** (Auto-instalación en Antigravity 2.0 completada).
- [ ] 🎖️ **Badge 2: Gentle-AI Knight** (Antigravity Global Rules, SDD Adaptativo & Engram activos en memoria y vinculados).
- [ ] 🎖️ **Badge 3: Context Architect** (6 plantillas de contexto autogeneradas tras la entrevista y vinculadas en GEMINI.md).
- [ ] 🎖️ **Badge 4: Skill Hunter** (Importación y poda contextualizada de skills finalizada con soporte de ecosistema).
- [ ] 🏆 **Boss Defeated: Full-Stack Agentic UI Developer** (Desafío Integrador Asincrónico en Equipos completado).
