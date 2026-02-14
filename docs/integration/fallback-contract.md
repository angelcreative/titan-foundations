# Fallback Technical Contract

This contract applies when a component is not available in Titan React and is implemented with React Aria + Titan tokens/foundations.

## 1) Build primitives

- Use `react-aria-components` primitives for behavior and accessibility.
- Reuse `titan-aria` wrappers when they match the use case.
- Keep implementation headless-first, styling through Titan tokens.

## 2) Token and styling contract

- Use Titan semantic tokens from `tokens/css/titan.css` and the active theme.
- Avoid hardcoded brand values.
- Keep spacing, radius, typography, and elevation aligned with foundations.

## 3) Theme contract

- Load order must remain:
  1. `titan.css`
  2. one theme file (for example `_demand.css`)
  3. `titan-aria/styles` (if used)
- Theme activation via `<html data-theme="...">`.
- Fallback components must visually adapt to all supported themes.

## 4) Interaction and state contract

Every fallback component must define and verify:

- Empty state
- Loading state
- Error state
- Success feedback (when action-oriented)
- Hover/focus/pressed/disabled states

## 5) Accessibility contract

- Keyboard navigation parity with React Aria patterns.
- Visible focus indicators.
- Correct labels/roles/aria attributes.
- Touch targets and contrast aligned with WCAG 2.1 AA intent.

## 6) Icon contract

- Prefer icon assets/components from Titan React when available.
- If missing, use `lucide-react`.
- Keep icon size/color tied to Titan tokens, not fixed values.

## 7) Snowflake metadata (mandatory)

Each fallback implementation must document:

- `status: snowflake`
- why Titan React equivalent is missing
- migration trigger (Titan React component/version)
- owner and next audit date
