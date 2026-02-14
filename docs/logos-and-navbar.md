# Logos y navbar por tema

> Ownership policy: si la versión instalada de `@audienseco/titan-react` ya incluye Navbar oficial, usar Titan React como fuente de verdad.  
> Este documento y `foundations/navbar.json` quedan como fallback/reference para exploración o escenarios donde no exista esa versión oficial.

Los logos de producto viven en **`assets/logos/`**. Cada archivo es un SVG con nombre `logo-{tema}.svg`. No se usa texto junto al logo; solo la imagen según el tema activo.

## Regla de oro: en la navbar NUNCA se pone otro elemento

La navbar tiene **ancho 100%** y **solo** los elementos especificados: izquierda (LayoutGrid + logo) y derecha (5 icon buttons + avatar con dropdown). No se añaden búsqueda, menús extra, texto "App", ni ningún otro elemento.

## Izquierda de la navbar: icono 9 puntos + logo

- **Orden fijo (obligatorio):** primero el **icono de 9 puntos** (app launcher / waffle), luego el **logo**. El icono va siempre a la izquierda del logo; nunca al revés ni sin el icono.
- Lucide: **`LayoutGrid`** (rejilla 3×3).
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

## Derecha de la navbar: exactamente estos elementos (orden fijo)

Siempre y nunca otra cosa, en este orden (Lucide para iconos):

1. **Bell** — Notificaciones  
2. **Handshake** — Soporte / comunidad  
3. **CircleHelp** — Ayuda  
4. **Settings** — Configuración  
5. **Sparkles** — Función destacada (puede llevar color)  
6. **Avatar** — Avatar circular con fondo + letra; a la derecha **ChevronDown** (dropdown).

Avatar: reutilizar tokens Titan (`--avatar-bg`, `--avatar-size`, `--avatar-radius`, `--avatar-color`). Siempre fondo con letra; incluir ChevronDown para dropdown.

## Convención navbar

- **Ancho:** 100%.
- **Izquierda:** [LayoutGrid] [Logo según tema]. Logo suele ser enlace al inicio (home). Sin texto junto al logo.
- **Derecha:** exactamente los 5 icon buttons anteriores + avatar con ChevronDown. No añadir ni quitar elementos.
- El tema lo define la app (p. ej. `html[data-theme="demand"]` → "navbar demand" → logo demand).

## Uso en la app

1. Leer el tema activo (`data-theme` o contexto de app).
2. Resolver el archivo de logo con la tabla anterior.
3. **Izquierda:** renderizar primero el botón/icono **LayoutGrid**, luego el logo con **`src="/assets/logos/{archivo}"`** donde {archivo} es el de themeToLogo (p. ej. tema demand → `/assets/logos/logo-demand.svg`). La app debe tener los SVG en `public/assets/logos/` (o la ruta equivalente que sirva en `/assets/logos/`).
4. **Derecha:** renderizar en orden los 5 icon buttons (Bell, Handshake, CircleHelp, Settings, Sparkles) y el avatar con ChevronDown.

Spec en JSON: **`foundations/navbar.json`** (`leftOrder`, `rightOrder`, `rightSlot`, `themeToLogo`, `forbidden`).
