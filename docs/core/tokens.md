# Titan Design System Tokens

Source of truth:
- `tokens/foundations/*.json`
- `tokens/css/titan.css`

## Token architecture

Titan tokens are organized in three layers:

1. **Primitives** (`tokens/foundations/*.json`)
2. **Semantic aliases and slots** (`tokens/css/titan.css`)
3. **Themes** (`tokens/themes/_*.css`)

## Primitive token sources

- `colors-solid.json`
- `colors-opacity.json`
- `spacing.json`
- `typography.json`
- `borders.json`
- `elevation.json`

## Component contracts vs primitives

- Keep primitive values in `tokens/foundations/`.
- Keep component/layout contracts in `component-specs/`.
- Do not mix these responsibilities.

## Build

Run:

```bash
npm run build:tokens
```

This regenerates token outputs and composes the final `titan.css`.

## Naming conventions

Common patterns:

- `{category}-{name}-{scale}`
- `{category}-{size}`
- `{category}-{type}`
- `{composition}-{role}`

Examples:

- `color-steel-600`
- `spacing-xl`
- `rounded-s`
- `elevation-1`

## References

### JSON references

- `{token-name}` for standard references.
- `{$token-name}` for `$`-prefixed tokens.

### CSS references

- Exposed as `--token-name`.
- Use `var(--token-name)` for alias chaining.

## Consumer usage rules

If you consume Titan in another app:

- Do not modify `tokens/foundations/*.json` directly.
- Do not modify generated `titan.css`.
- Define app-level aliases in your own stylesheet.
- Keep load order:
  1. `titan.css`
  2. one theme file
  3. app CSS

Example:

```css
:root {
  --app-sidebar-bg: var(--color-steel-100);
  --app-card-accent: var(--color-blueberry-500);
}

.app-sidebar {
  background: var(--app-sidebar-bg);
}
```
