# Grid de layout (16 columnas)

El contenido debajo de la navbar usa un **grid de 16 columnas**, centrado y con ancho máximo 1920px (responsive 1440px, 1280px).

## Tokens

| Token | Uso |
|-------|-----|
| `--layout-grid-cols` | 16 |
| `--layout-grid-gap` | Separación entre columnas/filas (ej. var(--spacing-m)) |
| `--layout-grid-max-width` | Ancho máximo del contenedor (1920px) |
| `--layout-grid-pad-x` | Padding horizontal del contenedor (evitar pegar al borde) |

## Contenedor del grid

- `display: grid`
- `grid-template-columns: repeat(16, 1fr)`
- `gap: var(--layout-grid-gap)`
- `max-width: var(--layout-grid-max-width)`
- `margin: 0 auto`
- `padding-left` / `padding-right`: `var(--layout-grid-pad-x)`

## Regla de columnas

- **"N columnas"** = el bloque ocupa N columnas, usar `grid-column: span N`.
- Ejemplo: "una card 4 columnas, dos cards 2 columnas" = un hijo span 4, dos hijos span 2 cada uno (en una o dos filas; por fila los spans no deben superar 16).

## Vertical spacing (cards and sections)

- **TitanCardGrid** uses `gap: var(--layout-grid-gap)` for both **row and column** gap; ensure the theme sets `--layout-grid-gap` (e.g. `var(--spacing-m)`).
- When the page stacks **multiple blocks** (e.g. breadcrumb + one or more TitanCardGrid rows), the main content wrapper must add **vertical gap** so rows are not stuck together:
  - Option A: wrap breadcrumb and all card grids in a container with `display: flex; flex-direction: column; gap: var(--layout-grid-gap)`.
  - Option B: breadcrumb with `margin-bottom: var(--spacing-m)` (or `var(--layout-grid-gap)`); each TitanCardGrid (or section) with `margin-bottom: var(--layout-grid-gap)` (last one can omit or use 0).
- Never leave breadcrumb or card grid rows with no vertical spacing between them.

## Responsive

- Viewport hasta 1440px: `max-width: var(--layout-content-max-width-md)` (1440px).
- Viewport hasta 1280px: `max-width: var(--layout-content-max-width-sm)` (1280px).

Spec: **foundations/grid.json**.
