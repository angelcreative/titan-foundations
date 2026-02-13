# titan-foundations

Titan design system tokens and tooling. This repository contains:

- **Titan tokens** — Base CSS variables (`tokens/css/titan.css`) and theme files (e.g. `_neutral.css`, `_demand.css`, `_insights.css`) under `tokens/themes/`. Apps load `titan.css` plus one theme and set `data-theme="…"` on `<html>`.
- **titan-aria** — A React component library in `packages/titan-aria` that integrates [React Aria Components](https://react-spectrum.adobe.com/react-aria/components.html) with Titan. Components (Button, Card, inputs, Dialog, etc.) use Titan CSS variables for appearance. Load Titan (base + theme) first, then `titan-aria` styles.

See:

- [Titan themes](tokens/themes/README.md) for load order and available themes (neutral, audiense, demand, insights, linkedin, tweetbinder).
- [titan-aria](packages/titan-aria/README.md) for installation and usage.
