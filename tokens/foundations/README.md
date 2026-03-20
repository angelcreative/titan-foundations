# Tokens Foundations (primitives only)

This folder contains only token primitives consumed by `tokens/css/titan.css`:

- `spacing.json`
- `typography.json`
- `borders.json`
- `elevation.json`
- `colors-opacity.json`
- `colors-solid.json`

## Scope

- Use this folder for numeric/foundation primitives (spacing scale, font sizes, borders, elevation, color primitives).
- Do not store component structure specs here (navbar/menu/select/template/etc.).

## Separation of concerns

- `tokens/foundations/` -> primitive token sources.
- `component-specs/` (repo root) -> component/layout specs used by generation rules (navbar, menu, select, grid, drawer, template, table-borderless, copy-and-links).

Keeping this separation avoids ambiguous resolution in MCP/tooling and ensures component specs like `component-specs/navbar.json` are applied correctly.
