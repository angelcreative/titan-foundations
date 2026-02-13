# Logos y navbar por tema

Los logos de producto viven en **`assets/logos/`**. Cada archivo es un SVG con nombre `logo-{tema}.svg`. En la **navbar**, el logo va **siempre a la izquierda** y se elige según el tema activo.

## Mapeo tema → logo

| Tema (`data-theme` en `<html>`) | Archivo en `assets/logos/` |
|---------------------------------|----------------------------|
| `demand` | `logo-demand.svg` |
| `audiense` | `logo-audiense.svg` |
| `neutral` | `logo-audiense.svg` (mismo que audiense) |
| `insights` | `logo-insights.svg` |
| `linkedin` | `logo-inkedin.svg` |
| `tweetbinder` | `logo-tweetbinder.svg` |
| `connect` | `logo-connect.svg` |

## Convención navbar

- **Posición del logo:** izquierda.
- El logo suele ser enlace al inicio (home).
- El tema lo define la app (p. ej. `html[data-theme="demand"]`); según ese valor se usa el archivo correspondiente.

## Uso en la app

Al implementar una navbar (p. ej. “navbar demand”):

1. Leer el tema activo (p. ej. `document.documentElement.getAttribute('data-theme')` o contexto de app).
2. Resolver el nombre del archivo con la tabla anterior (neutral y audiense → `logo-audiense.svg`).
3. Colocar el logo a la izquierda: `<img src="/assets/logos/logo-demand.svg" alt="Demand" />` o import/require según el bundler.

Spec en JSON para Cursor/MCP: **`foundations/navbar.json`**.
