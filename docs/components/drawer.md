# Drawer

A side panel (right by default) with an overlay behind it that dims background content.

## Anatomy

1. **Overlay** — blocks interaction with page content.
2. **Panel** — fixed-width drawer container.
3. **Header** — title on the left, ghost icon close button (X) on the right.
4. **Body** — scrollable content area when needed.

## Behavioral rules

- Keep close button icon-only and fully rounded.
- Drawer is an overlay layer and does not affect page layout width.
- If trigger is not provided, use default trigger props (`triggerLabel`, optional icon/className).

## Slots and structure

Use drawer slots/classes consistently (`drawer-overlay`, `drawer-modal`, `drawer-panel`, `drawer-header`, `drawer-body`).

Spec: `component-specs/drawer.json`.
