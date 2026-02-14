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

## Responsive

- Viewport hasta 1440px: `max-width: var(--layout-content-max-width-md)` (1440px).
- Viewport hasta 1280px: `max-width: var(--layout-content-max-width-sm)` (1280px).

Spec: **foundations/grid.json**.
