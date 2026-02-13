# titan-foundations

Titan design system tokens and tooling. This repository contains:

- **Titan tokens** — Base CSS variables (`tokens/css/titan.css`) and theme files (e.g. `_neutral.css`, `_demand.css`, `_insights.css`) under `tokens/themes/`. Apps load `titan.css` plus one theme and set `data-theme="…"` on `<html>`.
- **titan-aria** — A React component library in `packages/titan-aria` that integrates [React Aria Components](https://react-spectrum.adobe.com/react-aria/components.html) with Titan. Components (Button, Card, inputs, Dialog, etc.) use Titan CSS variables for appearance. Load Titan (base + theme) first, then `titan-aria` styles.

**When using titan-aria:** always install `lucide-react` in your app (peer dependency; required for the Icon component and icon buttons).

See:

- [Titan themes](tokens/themes/README.md) for load order and available themes (neutral, audiense, demand, insights, linkedin, tweetbinder).
- [titan-aria](packages/titan-aria/README.md) for installation and usage.
- [Tabla borderless](docs/table-borderless.md) — tokens y convenciones para tablas sin bordes (solo separadores, hover, sort, menú acciones). Spec JSON: [foundations/table-borderless.json](foundations/table-borderless.json).
- [Logos y navbar](docs/logos-and-navbar.md) — logo por tema en `assets/logos/` (p. ej. `logo-demand.svg`); navbar con logo a la izquierda. Spec: [foundations/navbar.json](foundations/navbar.json).
- [Copy y enlaces](docs/copy-and-links.md) — títulos, cabeceros y cuerpo siempre steel; color de tema solo para enlaces (evitar confundir cabeceros con links).
- [Drawer](docs/drawer.md) — panel deslizante con overlay; header (título + X ghost) y body. Spec: [foundations/drawer.json](foundations/drawer.json).
- [Menu y Select](docs/menu-and-select.md) — menús desplegables (y submenus) y Select; tokens completos; estructura React Aria. Specs: [foundations/menu.json](foundations/menu.json), [foundations/select.json](foundations/select.json).
