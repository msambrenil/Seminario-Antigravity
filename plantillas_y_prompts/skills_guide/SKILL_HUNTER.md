# 🎯 Skill Hunter & Pruner: Importación y Poda Transparente de Skills con Antigravity

Con Google Antigravity no necesitas abrir Git ni la consola de Windows para descargar las skills de [`agentic-awesome-skills`](https://github.com/sickn33/agentic-awesome-skills). Le pides a Antigravity que las descargue e importe **directamente en el chat**.

---

## 📥 1. El Prompt de Importación Transparente de Skills

Simplemente pega este prompt en Antigravity:

```text
Antigravity, por favor importa la biblioteca de skills para nuestro proyecto:
1. Crea el directorio .agents/skills/ en la raíz del proyecto.
2. Ejecuta un git clone o descarga del repositorio https://github.com/sickn33/agentic-awesome-skills dentro de .agents/skills/.
3. Muéstrame la lista de skills descargadas al finalizar.
```

---

## ✂️ 2. El Prompt Maestro de Poda Inteligente (Basada en Todo el Contexto)

Una vez descargadas las skills, pídele a Antigravity que realice la poda inteligente evaluando **todo el contexto del proyecto** (las 14 respuestas de la entrevista y los documentos en `docs/contexto/`):

```text
Antigravity, por favor realiza una auditoría y PODA INTELIGENTE de las skills en .agents/skills/ teniendo en cuenta TODO EL CONTEXTO de nuestro proyecto (nuestras 14 respuestas de la entrevista y los archivos en docs/contexto/):

1. EVALUACIÓN INTEGRAL DEL CONTEXTO:
   - Stack y Arquitectura (docs/contexto/arquitectura.md): Framework CSS elegido (ej. TailwindCSS), HTML5 semántico, JavaScript Vanilla en cliente.
   - Interactividad y Lógica (docs/contexto/arquitectura.md y decisiones.md): Navegación entre vistas, modales flotantes, menú móvil y feedback visual.
   - Accesibilidad y Calidad (docs/contexto/convenciones.md y errores-conocidos.md): Contraste de colores, diseño responsive mobile-first, accesibilidad web (a11y).
   - Flujo de Trabajo y Verificación (docs/contexto/flujo-de-trabajo.md): Ciclo SDD (explore, apply, verify), checklist de entrega.
   - Tecnologías Prohibidas (docs/contexto/decisiones.md y arquitectura.md): Lo que NO debe existir en el proyecto.

2. CLASIFICACIÓN DE SKILLS:
   - 🟢 CONSERVAR (Skills útiles para todo el ciclo del proyecto):
     * Maquetado y estilos del framework activo (ej: TailwindCSS).
     * Buenas prácticas de HTML5 semántico y CSS responsive.
     * Patrones de maquetado interactivo y dinámica de interfaz (DOM, eventos, modales).
     * Accesibilidad web (a11y) y optimización de rendimiento frontend.
     * Metodología Spec-Driven Development (SDD) y verificación.
   - 🔴 ELIMINAR / PODAR (Skills incompatibles o superfluas):
     * Frameworks CSS no utilizados (ej: Bootstrap, Bulma, Sass si usamos Tailwind).
     * Frameworks JS pesados prohibidos (ej: React, Vue, Angular, Svelte, Next.js).
     * Tecnologías de Backend / Base de Datos no utilizadas (ej: Node.js/Express, Python, Docker, SQL, MongoDB, Go, Rust, Java).
     * Desarrollo móvil nativo o desktop no aplicable (ej: Flutter, React Native, Swift, Kotlin, Electron).

3. ACCIÓN AUTOMÁTICA:
   - Elimina automáticamente de .agents/skills/ todas las carpetas clasificadas como superfluas o incompatibles.
   - Muéstrame el reporte final: lista de skills conservadas con su justificación según nuestro contexto, y lista de skills podadas.
```
