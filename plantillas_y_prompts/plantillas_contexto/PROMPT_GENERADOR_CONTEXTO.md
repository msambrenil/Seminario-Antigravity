# 🤖 Prompt Maestro: Autogenerador de las 6 Plantillas de Contexto (Soporte HTML/CSS & Frameworks)

Copia y pega este prompt dentro de **Google Antigravity** cuando inicies un proyecto nuevo o quieras documentar un repositorio existente.

---

```text
Lee mi proyecto entero (estructura de HTML, hojas de estilo CSS, uso de Frameworks CSS como Tailwind o Bootstrap, dependencias, código JavaScript, README) 
y genera 6 documentos de contexto en docs/contexto/, uno por archivo:

1. arquitectura.md — stack de HTML5 y CSS/Frameworks, mapa de carpetas, flujo de datos, qué NO existe.
2. convenciones.md — estilo de HTML semántico, naming de clases CSS/BEM o utilidades de Framework, patrones permitidos y prohibidos.
3. decisiones.md — registro ordenado y cronológico de TODAS las decisiones tomadas con Fecha y Hora ([YYYY-MM-DD HH:mm]). Cada cosa que pida el usuario debe registrarse aquí. Si se requiere un cambio importante o estructural, DEBES pedir autorización explícita antes de ejecutarlo.
4. glosario.md — términos del dominio, entidades de UI y siglas internas.
5. flujo-de-trabajo.md — pasos para hacer un cambio de maquetado, checklist de "terminado" y validación responsive.
6. errores-conocidos.md — gotchas de CSS/HTML que se intuyan del código, compatibilidad de navegadores y ajustes de Windows.

7. Vinculación Automática: Crea o actualiza automáticamente el archivo `GEMINI.md` en la raíz del proyecto vinculando los 6 documentos creados con la sintaxis de referencia `@docs/contexto/...`.

Reglas:
- Básate SOLO en lo que veas en el repo. No inventes nada.
- En decisiones.md, mantén un orden numérico y cronológico estricto con fecha y hora ([ADR-XXX] · [YYYY-MM-DD HH:mm]).
- Si una instrucción del usuario implica un cambio importante (arquitectura, cambio de framework, borrado de archivos o librerías), solicita confirmación antes de aplicarlo y luego regístralo.
- Si detectas TailwindCSS, Bootstrap o Vanilla CSS, especifícalo claramente en arquitectura.md y convenciones.md.
- Genera el archivo GEMINI.md vinculando los 6 documentos sin requerir que el usuario lo escriba a mano.
- Donde no haya información suficiente, deja un hueco marcado [PENDIENTE: ...] en vez de rellenar a ciegas.
- Sé concreto y breve: cada doc se debe leer en menos de 2 minutos.
```

---

## 🔗 Vinculación en `GEMINI.md`

```markdown
## Contexto del Proyecto
- Arquitectura (HTML5 & CSS Stack) → @docs/contexto/arquitectura.md
- Convenciones (HTML & CSS Style) → @docs/contexto/convenciones.md
- Decisiones (UI & Frameworks) → @docs/contexto/decisiones.md
- Glosario → @docs/contexto/glosario.md
- Flujo de Trabajo → @docs/contexto/flujo-de-trabajo.md
- Errores Conocidos → @docs/contexto/errores-conocidos.md
```
