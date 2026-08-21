# 🛡️ Guía Práctica: Gentle-AI & Spec-Driven Development (SDD) en Antigravity

[`gentle-ai`](https://github.com/Gentleman-Programming/gentle-ai) es una arquitectura de trabajo creada por Gentleman Programming para guiar el desarrollo de software mediante Inteligencia Artificial bajo el estándar **Spec-Driven Development (SDD)**.

---

## 🤔 ¿Por qué usar Gentle-AI y SDD?

Cuando le pides a una IA *"hazme un sistema de login"*, la IA suele saltar inmediatamente a escribir código. El resultado: falta de pruebas, decisiones impulsivas y código difícil de integrar.

**SDD invierte el proceso**:
1. **Primero se investiga** (`explore`).
2. **Luego se especifica y diseña** (`propose`, `spec`, `design`, `tasks`).
3. **Finalmente se implementa y verifica** (`apply`, `verify`).

Esto garantiza que la IA trabaje como un equipo de software profesional y metódico.

---

## 🚀 1. Configuración y Ejecución 100% Automática

En **Google Antigravity 2.0**, los alumnos **no necesitan abrir consolas ni ejecutar comandos de instalación a mano**. 

- **Configuración Transparente**: Al enviar el prompt de auto-setup o el prompt del protocolo Gentle-AI & Engram, Antigravity gestiona el entorno y las dependencias en segundo plano de forma automática.
- **Inicialización en el Proyecto**: Antigravity inicializa el contexto SDD ejecutando internamente el protocolo (o mediante el comando `/sdd-init` en el chat del agente), detectando el stack y preparando las reglas en `.agents/`.

---

## 🔄 2. El Ciclo de Vida de SDD en Antigravity

```
 [/sdd-init] ➔ [/sdd-explore] ➔ [/sdd-propose] ➔ [/sdd-spec & design] ➔ [/sdd-tasks] ➔ [/sdd-apply] ➔ [/sdd-verify] ➔ [/sdd-archive]
```

### Paso 1: Exploración (`/sdd-explore <idea>`)
Permite investigar la codebase o comparar enfoques sin modificar ningún archivo de código.
*Ejemplo*: `/sdd-explore "cómo maquetar una cuadrícula de tarjetas responsive con TailwindCSS"`

### Paso 2: Propuesta y Especificación (`/sdd-propose` & `/sdd-spec`)
Antigravity genera un documento con los requisitos funcionales y escenarios de prueba previstos antes de programar.

### Paso 3: Tareas (`/sdd-tasks`)
Desglosa el cambio en un checklist de tareas atómicas.

### Paso 4: Aplicación (`/sdd-apply`)
Antigravity ejecuta las tareas en lotes pequeños, marcando los elementos del checklist a medida que avanza.

### Paso 5: Verificación (`/sdd-verify`)
Valida la implementación contra las especificaciones y reporta inconsistencias o fallos.

### Paso 6: Archivo (`/sdd-archive`)
Cierra el cambio, consolida las especificaciones y deja el proyecto listo para la siguiente iteración.

---

## 🧠 3. Integración con Memoria Persistente Engram

Gentle-AI incluye el protocolo de memoria **Engram** que sobrevive a reinicios de sesión y compactaciones de contexto:

- `mem_save`: La IA guarda decisiones de diseño, convenciones o soluciones a errores.
- `mem_context`: La IA consulta qué se trabajó previamente para continuar sin perder el hilo.
- `mem_session_summary`: Al finalizar una clase o jornada, genera un resumen estructurado para el siguiente inicio de sesión.
