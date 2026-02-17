# Drawer

Panel que se desliza desde un lado (por defecto derecha), con **overlay** debajo que oscurece el contenido de fondo. Estructura fija: **título** a la izquierda y **botón de cerrar (X)** tipo ghost (icon only) a la derecha en el header; cuerpo debajo.

## Estructura obligatoria

1. **Overlay** — Capa entre el contenido de la página y el panel del drawer. Debe bloquear interacción y usar el token de backdrop.
2. **Panel** — Contenedor del drawer (ancho fijo, sombra, border-radius).
3. **Header** — Fila con:
   - **Título** (izquierda)
   - **Cerrar** (derecha): botón solo icono (X), ghost (fondo transparente, hover/active con token sutil). Siempre full rounded (9999px).

4. **Body** — Área de contenido con scroll si hace falta.

## Tokens (semantic layer)

| Uso | Token | Fallback / valor |
|-----|--------|-------------------|
| Overlay (backdrop) | `--drawer-overlay-backdrop` | `var(--overlay-backdrop)` |
| Panel fondo | `--drawer-background` | `var(--surface-1)` |
| Panel ancho | `--drawer-width` | `420px` |
| Panel radius | `--drawer-radius` | `var(--radius-drawer)` |
| Panel sombra | `--drawer-shadow` | `var(--elevation-3)` |
| Header padding | `--drawer-header-pad-y`, `--drawer-header-pad-x` | spacing s / m |
| Header gap (título ↔ close) | `--drawer-header-gap` | `var(--spacing-s)` |
| Header borde inferior | `--drawer-header-border-bottom` | `var(--border-default)` |
| Título color | `--drawer-title-color` | `var(--text-title)` |
| Body padding | `--drawer-body-pad` | `var(--spacing-m)` |
| Body color | `--drawer-body-color` | `var(--text-body)` |
| Close (ghost) fondo | `--drawer-close-bg` | `transparent` |
| Close hover | `--drawer-close-bg-hover` | `var(--surface-hover)` |
| Close active | `--drawer-close-bg-active` | `var(--surface-pressed)` |
| Close icono | `--drawer-close-icon` | `var(--icon-secondary)` |
| Close tamaño | `--drawer-close-size` | `var(--icon-box-m)` (20px) |

El botón cerrar es **ghost icon button**: sin borde, fondo transparente, border-radius 9999px.

## Uso con React Aria (titan-aria)

Se usa `ModalOverlay` + `Modal` + `Dialog` con `data-slot="drawer"` en el overlay. El header debe incluir un elemento con `data-slot="drawer-title"` y el botón de cerrar con `data-slot="drawer-close"`. El contenido va en un contenedor con `data-slot="drawer-body"`. Ver estilos en `titan-aria/styles` (bloque Drawer).

## State Matrix (visible)

- Overlay: `default`.
- Panel: `open`, `closing`.
- Close button: `default`, `hover`, `pressed`, `focus-visible`, `disabled` (si aplica al flujo).

## Review Harness Requirements

- Mostrar anatomia completa: overlay + panel + header + body.
- Demostrar cierre por:
  - click en overlay
  - boton cerrar
  - tecla `Escape`
- Demostrar focus-visible en boton close.
- Demostrar scroll de body sin romper header.
- Verificar foco atrapado y foco devuelto al trigger al cerrar.

## Common Implementation Traps

- Omitir overlay o no bloquear interaccion con fondo.
- Renderizar drawer sin header o sin boton close estructural.
- No manejar `Escape` para cierre.
- No implementar focus trap/focus return.
- Usar colores hardcode en close/overlay cuando existen tokens.

Spec JSON: **`foundations/drawer.json`**.
