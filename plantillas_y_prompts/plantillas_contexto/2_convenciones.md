# Convenciones de Código, HTML y Estilos CSS

## Estilo y Estructura HTML
- **HTML Semántico**: Obligatorio usar etiquetas semánticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) en lugar de `<div>` anidados sin sentido.
- **Atributos de Accesibilidad**: Incluir `alt` descriptivo en imágenes y `aria-label` en botones interactivos sin texto.

## Convenciones de CSS & Frameworks
- **Framework de Estilos**: [Especificar si se usa TailwindCSS, Bootstrap o Vanilla CSS]
- **Naming de Clases (en Vanilla CSS)**: Metodología BEM (`bloque__elemento--modificador`) o clases semánticas descriptivas.
- **Variables CSS**: Definir paleta de colores, tipografías y espaciados en `:root` (`--color-primary`, `--font-main`).

## Patrones que SÍ usamos
- [Ej: Mobile-First con Media Queries o utilidades responsive del Framework CSS]
- [Ej: Flexbox y CSS Grid para layouts principales]
- [Ej: Clases de utilidad reutilizables]

## Patrones PROHIBIDOS
- [Ej: NUNCA usar `style="..."` inline en las etiquetas HTML]
- [Ej: NUNCA usar `!important` en reglas CSS salvo casos extremos documentados]
- [Ej: NUNCA usar etiquetas div o span para elementos que requieran accesibilidad de botón (`<button>`)]
