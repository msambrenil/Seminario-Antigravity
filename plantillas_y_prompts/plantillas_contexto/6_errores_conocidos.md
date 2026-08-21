# Errores Conocidos y Gotchas (Trampas del Código)

> Documentación de errores raros, comportamientos inesperados o trampas que ya han sido descubiertas para evitar que el agente de IA tropiece dos veces con la misma piedra.

---

## ⚠️ Gotcha 1: Bloqueo de Ejecución de Scripts en Windows PowerShell
- **Pasa cuando**: Se intenta ejecutar `agy` o `gentle-ai` desde PowerShell recién instalado.
- **Causa real**: La política de seguridad `ExecutionPolicy` de PowerShell está en `Restricted` por defecto.
- **Solución**: Ejecutar `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`.

---

## ⚠️ Gotcha 2: Error de Codificación UTF-8 en la Consola de Windows (Caracteres Extraños)
- **Pasa cuando**: Antigravity muestra acentos o emojis corruptos en la salida de consola en Windows.
- **Causa real**: La terminal de Windows usa la codificación heredada `cp1252` o `cp850`.
- **Solución**: Ejecutar `chcp 65001` antes de correr el proceso o utilizar Git Bash / Windows Terminal.

---

## ⚠️ Gotcha 3: [Síntoma Raro / Error Frecuente 3]
- **Pasa cuando**: [Describir escenario o condición]
- **Causa real**: [Explicación técnica de la causa raíz]
- **Solución**: [Instrucción paso a paso para resolverlo]

---

## Cosas que Parecen Errores pero son a Propósito
- [Ejemplo: El log de advertencia `[WARN] Memory cache bypassed` es esperado cuando se trabaja sin servidor Redis local.]
