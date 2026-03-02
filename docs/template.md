# Template de página (navbar + contenido)

Al pedir un **template**, **layout** o similar, se monta: **navbar a ancho completo** y **área de contenido** debajo, centrada y con ancho máximo 1920px (responsive 1440, 1280), lista para el grid de 16 columnas.

## Estructura

1. **Navbar** — implementar navbar según `foundations/navbar.json` (source of truth: `titan-comp-doc/navbar.pdf`): 100% width, izquierda Change Product + lockup Anillo+Product Name por tema, derecha icon buttons neutrales + avatar + chevron de menu.

2. **Contenedor de contenido** — Debajo de la navbar: centrado (margin: 0 auto), max-width: var(--layout-content-max-width) (1920px), padding horizontal var(--layout-content-pad-x). Dentro: grid de 16 columnas (ver docs/grid.md) para colocar cards, bloques, etc. **Espaciado vertical:** Los elementos apilados (breadcrumb, filas de cards, secciones) no deben quedar pegados. Usar un wrapper con `display: flex; flex-direction: column; gap: var(--layout-grid-gap)` o breadcrumb con `margin-bottom: var(--spacing-m)` y cada fila de cards con margen inferior; ver docs/grid.md (Vertical spacing).

3. **Sidebar** — Si se pide sidebar: **flotante** (overlay o columna que no hace que el contenido supere 1920px). El contenido principal sigue siendo el contenedor centrado. **Reglas de scroll (obligatorias):** La sidebar **no hace scroll** — queda fija a la izquierda; nunca debe hacer scroll metiéndose debajo de la navbar. El **breadcrumb no hace scroll** — va siempre visible encima del área que sí scrollea. **Solo el main content** (el área de contenido principal a la derecha) tiene `overflow: auto`; navbar, sidebar y breadcrumb son fijos. Ver `docs/integration/composition-patterns.json` (appLayoutWithSidebar).

4. **Drawer** — Es overlay; no afecta el ancho del contenido. La página tiene navbar + contenido max 1920px; el drawer se abre por encima.

## Tokens

| Token | Uso |
|-------|-----|
| `--layout-navbar-width` | 100% |
| `--layout-content-max-width` | 1920px |
| `--layout-content-max-width-md` | 1440px |
| `--layout-content-max-width-sm` | 1280px |
| `--layout-content-pad-x` | Padding horizontal del contenido |

## Responsive

- Viewport hasta 1440px: max-width var(--layout-content-max-width-md).
- Viewport hasta 1280px: max-width var(--layout-content-max-width-sm).

## Cuándo aplicar

Cuando el usuario pida **template**, **layout**, **hazme un layout**, **monta un template**: montar navbar (full width) y contenedor de contenido (centrado, max 1920px) con grid 16 cols preparado para el contenido.

Spec: **foundations/template.json**.
