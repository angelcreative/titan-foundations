# titan-foundations

Titan design system tokens and tooling. This repository contains:

- **Titan tokens** — Base CSS variables (`tokens/css/titan.css`) and theme files (e.g. `_neutral.css`, `_demand.css`, `_insights.css`) under `tokens/themes/`. Apps load `titan.css` plus one theme and set `data-theme="…"` on `<html>`.
- **titan-aria** — A React component library in `packages/titan-aria` that integrates [React Aria Components](https://react-spectrum.adobe.com/react-aria/components.html) with Titan. Components (Button, Card, inputs, Dialog, etc.) use Titan CSS variables for appearance. Load Titan (base + theme) first, then `titan-aria` styles.

Folder split (important):
- `tokens/foundations/` contains primitive token sources.
- `foundations/` contains component/layout specs used by docs/rules (e.g. navbar/menu/select/template).

**When using titan-aria:** always install `lucide-react` in your app (peer dependency; required for the Icon component and icon buttons).

See:

- [Titan themes](tokens/themes/README.md) for load order and available themes (neutral, audiense, demand, insights, linkedin, tweetbinder).
- [titan-aria](packages/titan-aria/README.md) for installation and usage.
- [Integration docs](docs/integration/README.md) for ownership model and migration workflow.
- [MCP usage](docs/integration/mcp-usage.md) for ready-to-use Cursor prompts and generation rules.
- [Integration policy](docs/integration/decision-policy.md) for layer precedence (React Aria base, Titan tokens/foundations, optional `titan-aria` wrappers, Lucide icons).
- [Component inventory](docs/integration/component-inventory.md) for ownership and overlap status.
- [Post-update audit runbook](docs/integration/post-update-audit-runbook.md) to keep snowflakes and wrapper debt under control.
- [Tabla borderless](docs/table-borderless.md) — tokens y convenciones para tablas sin bordes (solo separadores, hover, sort, menú acciones). Spec JSON: [foundations/table-borderless.json](foundations/table-borderless.json).
- [Logos y navbar](docs/logos-and-navbar.md) — especificación operativa de navbar por tema. Spec: [foundations/navbar.json](foundations/navbar.json).
- [Copy y enlaces](docs/copy-and-links.md) — títulos, cabeceros y cuerpo siempre steel; color de tema solo para enlaces (evitar confundir cabeceros con links).
- [Drawer](docs/drawer.md) — panel deslizante con overlay; header (título + X ghost) y body. Spec: [foundations/drawer.json](foundations/drawer.json).
- [Button](docs/button.md) — contrato de Button/Icon Button (incluyendo destructivos y neutral base), anatomía y estados. Spec: [foundations/button.json](foundations/button.json).
- [Dialog](docs/dialog.md) — contrato de dialog modal (ilustración opcional), anatomía, interacciones y estados. Spec: [foundations/dialog.json](foundations/dialog.json).
- [Breadcrumb](docs/breadcrumb.md) — navegación jerárquica con semántica aria y reglas de overflow. Spec: [foundations/breadcrumb.json](foundations/breadcrumb.json).
- [Tabs](docs/tabs.md) — navegación por secciones con estados y semántica aria de tabs. Spec: [foundations/tabs.json](foundations/tabs.json).
- [Pagination](docs/pagination.md) — navegación entre páginas de resultados con estados, variantes y semántica aria. Spec: [foundations/pagination.json](foundations/pagination.json).
- [Canonical terminology](docs/terminology.md) — glosario único de naming para specs/docs/rules/comando `/titan`.
- [Menu y Select](docs/menu-and-select.md) — menús desplegables (y submenus) y Select; tokens completos; estructura React Aria. Specs: [foundations/menu.json](foundations/menu.json), [foundations/select.json](foundations/select.json).
- [Grid](docs/grid.md) — grid 16 columnas para layout; N columnas = span N; contenido centrado max 1920px. Spec: [foundations/grid.json](foundations/grid.json).
- [Template](docs/template.md) — navbar 100% + contenido max 1920px (responsive 1440, 1280); al pedir "layout" o "template" montar navbar y área con grid. Spec: [foundations/template.json](foundations/template.json).
