# Logos y navbar por tema

Los logos de producto viven en **`assets/logos/`**. Cada archivo es un SVG con nombre `logo-{tema}.svg`. No se usa texto junto al logo; solo la imagen según el tema activo.

## Izquierda de la navbar: icono 9 puntos + logo

- **Orden fijo:** primero el **icono de 9 puntos** (app launcher / waffle), luego el **logo**.
- El icono de 9 puntos va **siempre a la izquierda del logo**. Lucide: **`LayoutGrid`** (rejilla 3×3).
- El logo se elige según el tema (`data-theme`); sin texto adicional.

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

## Avatar (derecha de la navbar)

Reutilizar los **tokens de avatar** de Titan (`--avatar-bg`, `--avatar-size`, `--avatar-radius`, `--avatar-color`, etc.) para el avatar de usuario en la navbar. No definir tokens específicos de navbar para el avatar.

## Convención navbar

- **Izquierda:** [Icono LayoutGrid (9 puntos)] [Logo según tema]. Logo suele ser enlace al inicio (home).
- **Derecha:** Ítems de utilidad (iconos) + avatar (tokens de avatar).
- El tema lo define la app (p. ej. `html[data-theme="demand"]`).

## Uso en la app

1. Leer el tema activo (`data-theme` o contexto de app).
2. Resolver el archivo de logo con la tabla anterior.
3. En la zona izquierda: renderizar primero el botón/icono **LayoutGrid** (9 puntos), luego el logo con **`src="/assets/logos/{archivo}"`** donde {archivo} es el de themeToLogo (p. ej. tema demand → `/assets/logos/logo-demand.svg`). La app debe tener los SVG en `public/assets/logos/` (o la ruta equivalente que sirva en `/assets/logos/`).

Spec en JSON: **`foundations/navbar.json`** (campo logoPublicPath y themeToLogo para resolver el src automáticamente).
