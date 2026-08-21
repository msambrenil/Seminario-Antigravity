# Flujo de Trabajo y Definición de Terminado (DoD)

## Antes de Comenzar un Cambio
1. Leer los documentos de `docs/contexto/` (`arquitectura.md` y `decisiones.md`).
2. Verificar el estado del repositorio (`git status`).
3. Crear una rama descriptiva (`git checkout -b feature/nombre-cambio`).

## Pasos para Implementar un Cambio (Ciclo SDD)
1. Usar `/sdd-explore` para investigar el área afectada sin escribir código.
2. Definir o revisar las especificaciones de la tarea.
3. Usar `/sdd-apply` para realizar los cambios en lotes pequeños de código.
4. Ejecutar validaciones y formateo de código.

## Checklist de "Definición de Terminado" (Definition of Done)
- [ ] El código compila / ejecuta sin errores sintácticos ni advertencias de consola.
- [ ] Las pruebas unitarias o de integración pasan satisfactoriamente.
- [ ] No existen variables no utilizadas ni librerías sobrantes.
- [ ] Se ejecutó `/sdd-verify` comprobando la correspondencia con las specs.
- [ ] Se guardó un resumen del aprendizaje o decisión relevante con `mem_save`.

## Despliegue (Deploy)
[Describir en 2 o 3 líneas cómo se publica el proyecto: comando, servidor o plataforma.]
