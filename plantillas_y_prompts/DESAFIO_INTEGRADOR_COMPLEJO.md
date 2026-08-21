# 🏆 Desafío Integrador en Equipos (Proyecto en Equipo)

## 📌 Contexto y Modalidad
- **Modalidad**: Asincrónico / Trabajo en el Hogar (Sin límite de tiempo presencial).
- **Formato**: En equipos.
- **Objetivo Central**: Diseñar, maquetar e implementar un **Sitio Web Interactivo / SPA (Single Page Application)** de calidad utilizando el ecosistema completo de **Google Antigravity 2.0**, **Gentle-AI (SDD)**, **Memoria Engram**, **Skills Agenticas** y los **6 Documentos de Contexto**.

---

## 🎯 Consigna del Proyecto
El equipo deberá seleccionar una temática de su interés (ej: *Sitio Web del Festival Cultural Río Cuarto 2026*, *Plataforma de Eventos Tech*, *Tienda o Marketplace de Productos*) y desarrollar un sitio web completo que cumpla con los siguientes **5 Ejes de Trabajo Agentico**:

---

## 🚀 Ejes de Complejidad y Trabajo Agentico

### 1. 🏗️ Estructura Multi-sección y Maquetado Visual
- **Navegación Dinámica entre Vistas**: Mínimo 3 secciones accesibles en la misma página (Vista Principal/Landing, Catálogo o Cuadrícula de Tarjetas, y Formulario de Contacto/Inscripción).
- **Componentes de Maquetado HTML/CSS**: Barra de navegación responsive con menú hamburguesa para celulares, Portada/Hero con llamados a la acción, Tarjetas de información interactivas con imágenes, ventana flotante emergente (modal) de detalle y Pie de página (Footer).
- **Estilo y Paleta de Colores**: Maquetado en **TailwindCSS** o **CSS Tradicional** con selector de tema (**Modo Claro / Modo Oscuro**), animaciones suaves al pasar el mouse (hover) y contraste visual verificado.

### 2. ⚡ Interactividad Visual y Dinámica de Interfaz (Simple y Directa)
- **Contenido Maquetado en HTML**: Las tarjetas del catálogo se maquetan directamente en el HTML con contenido visual rico (fotos, títulos, insignias y descripciones de muestra), sin necesidad de crear estructuras de datos en JavaScript.
- **Navegación e Interacción de Pantalla**: Botones o enlaces para alternar de forma fluida entre las 3 secciones principales.
- **Ventana Emergente (Modal de Detalles)**: Al hacer clic en el botón de una tarjeta ("Ver más" o "Detalles"), se abre una ventana modal con la información ampliada y un botón para cerrarla.
- **Formulario con Confirmación Visual**: Al presionar "Enviar" o "Reservar", se muestra en pantalla un mensaje o aviso visual de confirmación de éxito.
- **Menú Responsive Móvil**: Botón de menú hamburguesa que se despliega y oculta al hacer clic en pantallas de celular.

### 3. 🧠 Memoria Persistente Engram & Registro de Trabajo
- Inyectar el **Protocolo Mandatorio Engram & Gentle-AI** desde el primer prompt.
- Registrar en memoria (`mem_save`) al menos:
  - 3 decisiones de diseño tomadas por el equipo (ej: paleta de colores, estructura de tarjetas).
  - 2 soluciones de errores de diseño o responsive explicados de forma clara.
- Generar el resumen de cierre de trabajo con `mem_session_summary`.

### 4. 📚 Master Context Vivo (La Entrevista Web de 14 Preguntas & 6 Documentos)
- Responder la **Entrevista Web de 14 Preguntas para Principiantes** con Antigravity (cubriendo Identidad, Estructura, Estilo Visual, Decisiones Técnicas/Límites y Flujo de Trabajo con Gotchas).
- Generar y mantener los 6 archivos en `docs/contexto/`:
  - `arquitectura.md` (herramientas CSS y estructura de archivos).
  - `convenciones.md` (reglas de etiquetas HTML y paleta de colores).
  - `decisiones.md` (elecciones de diseño del equipo).
  - `glosario.md` (términos de la página).
  - `flujo-de-trabajo.md` (pasos de maquetado del equipo).
  - `errores-conocidos.md` (solución de problemas de diseño o responsive).

### 5. 🔍 Ciclo SDD Completo & Reporte de Verificación (`sdd-verify`)
- Ejecutar el flujo de Spec-Driven Development:
  - `sdd-explore`: Explorar los archivos antes de modificar.
  - `sdd-propose` / `sdd-tasks`: Checklist de tareas a realizar.
  - `sdd-apply`: Escribir el código HTML/CSS/JS.
  - `sdd-verify`: Comprobar que la página se vea bien en celular y computadora.
- Entregar en la raíz del proyecto el archivo `REPORTE_VERIFICACION_SDD.md`.

---

## 📊 Rúbrica de Evaluación (100 Puntos)

| Criterio | Descripción | Puntos |
| :--- | :--- | :---: |
| **Diseño Visual & Maquetado HTML/CSS** | Calidad estética, adaptabilidad responsive en celulares, Modo Claro/Oscuro y contraste. | 25 pts |
| **Interactividad Visual & UI Feedback** | Navegación entre vistas, modales funcionales, menú móvil y confirmación visual en formularios. | 25 pts |
| **Uso de Antigravity & SDD** | Ejecución transparente de Gentle-AI, checklist de tareas y reporte `sdd-verify`. | 20 pts |
| **Memoria Engram & Bitácora** | Uso correcto de `mem_save`, registro de decisiones y `mem_session_summary`. | 15 pts |
| **Master Context (6 Docs)** | Completitud de los 6 documentos de `docs/contexto/` basados en la Entrevista Web de 14 preguntas. | 15 pts |

---

## 📦 Entregables del Equipo
1. Repositorio de Código en GitHub o carpeta ZIP del proyecto.
2. Archivos de contexto en `docs/contexto/` vinculados en `GEMINI.md`.
3. Historial de memoria Engram y reporte `REPORTE_VERIFICACION_SDD.md`.
4. Video demo corto (2 a 3 min) mostrando la página web funcionando en Modo Claro y Oscuro.
