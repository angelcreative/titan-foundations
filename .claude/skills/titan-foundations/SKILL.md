---
name: titan-foundations
description: Navigate Titan foundations docs and enforce repo-native component specs, anatomies, and integration rules.
---

Use this skill when working **inside the titan-foundations repo** — editing tokens, component specs, anatomies, or titan-compositions source code.

For **consuming** the design system in external apps (via MCP, npm package, or CDN), follow the `titan-ds` skill in the MCP worker instead. This skill and that one are complementary, not overlapping.

## Required navigation order

1. Read `docs/README.md` to pick the right doc domain.
2. For tokens and naming, read `docs/core/tokens.md` and `docs/core/terminology.md`.
3. For component contracts, read `docs/components/` and the matching `component-specs/*.json`.
4. For UI pattern requests, resolve via `docs/anatomies/README.md` then read the selected anatomy file.
5. For implementation ownership and overlap, read `docs/integration/decision-policy.md` and `docs/integration/component-inventory.md`.

## Page chrome (navbar / sidebar / breadcrumb)

- **Navbar + breadcrumb + cards (no sidebar):** `TitanTwoUpOneDownLayout`, or `main.page.page--flush-breadcrumb` with `page-breadcrumb-host` (see `titan-compositions.css`). Navbar inner row is centered at max **1440px** (`.navbar-inner` uses `--layout-chrome-inner-max-width`).
- **Navbar + sidebar + breadcrumb + main:** `TitanAppShell` — sidebar flush left under the navbar; breadcrumb and main sit in the column to the right (`viewport − sidebar`); inner content uses `.titan-app-content-inner` (1280 / 1440 rules).
- **Navbar only** (no breadcrumb): plain `main.page` (keep default top padding). Do not use `page--flush-breadcrumb` without a breadcrumb row.

Details: **`docs/components/breadcrumb.md`** (layout + tokens), **`.cursor/rules/breadcrumb.mdc`**.

## Mandatory behavior

- If Titan MCP is available, or the request says/implies "Titan", "setup Titan", or "use Titan", enforce Titan-only execution (compositions -> component-specs + tokens -> anatomies -> BLOCKER).
- Prefer Titan-native structures and tokens over ad-hoc custom CSS.
- Keep primitive tokens in `tokens/foundations/`; do not add component specs there.
- Keep component/layout contracts in `component-specs/`.
- Treat `docs/anatomies/` as the source for reusable pattern anatomy and intent resolution.
