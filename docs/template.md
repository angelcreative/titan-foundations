# Template de página (navbar + contenido)

Al pedir un **template**, **layout** o similar, se monta: **navbar a ancho completo** y **área de contenido** debajo, centrada y con ancho máximo 1920px (responsive 1440, 1280), lista para el grid de 16 columnas.

## Estructura

1. **Navbar** — usar primero la versión oficial en `@audienseco/titan-react` si está disponible. Si no existe en la versión instalada, aplicar fallback local: 100% width (de lado a lado), tokens de navbar, LayoutGrid + logo según tema (`foundations/navbar.json`).

2. **Contenedor de contenido** — Debajo de la navbar: centrado (margin: 0 auto), max-width: var(--layout-content-max-width) (1920px), padding horizontal var(--layout-content-pad-x). Dentro: grid de 16 columnas (ver docs/grid.md) para colocar cards, bloques, etc.

3. **Sidebar** — Si se pide sidebar: **flotante** (overlay o columna que no hace que el contenido supere 1920px). El contenido principal sigue siendo el contenedor centrado.

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
