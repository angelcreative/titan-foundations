# Dialog (source-driven contract)

> Source of truth: documented Dialog page (Zeroheight capture) and associated component source when available.  
> This file is the implementation contract used by MCP/rules.
> Canonical glossary: `docs/terminology.md` (mandatory naming).

Canonical terminology (mandatory): `overlay`, `container`, `title`, `body`, `close-button`, `footer-actions`, states `default/hover/pressed/disabled/loading`, feedback `success/error/empty`.

## Purpose

Dialog is a modal surface for confirmational, informational, and blocking tasks without leaving current context.

## Anatomy

Required:
- Overlay
- Dialog container
- Title
- Body content

Optional:
- Illustration (optional, not always present)
- Close icon button
- Footer actions
- Header/footer dividers

## Tokens

Use semantic dialog tokens:

- `--dialog-slot-bg`
- `--dialog-slot-radius`
- `--dialog-slot-shadow`
- `--dialog-slot-pad`
- `--dialog-slot-gap`
- `--dialog-header-slot-gap`
- `--dialog-title-slot-color`
- `--dialog-body-slot-color`
- `--dialog-close-slot-radius`
- `--dialog-close-slot-bg-hover`
- `--dialog-close-slot-bg-active`
- `--dialog-close-slot-icon`
- `--overlay-backdrop`
- `--focus-ring`, `--focus-ring-offset`

## Sizing and layout

- Content-first width with sensible max width.
- Never overflow viewport.
- If body content exceeds viewport, use internal content scroll.
- Keep spacing token-driven (avoid hardcoded px when token exists).

## Interactions

- Open: from trigger or programmatic action.
- Close: action button, optional close icon, `Esc`, or overlay click (when allowed by flow).
- Focus: trap while open; restore to trigger when closed.

## States and feedback

For actionable dialogs:
- default, hover, pressed, disabled, loading

Coverage:
- success feedback
- error feedback
- empty informational case (if no payload/content is available)

## Accessibility

- Proper dialog semantics (labelled title + described body).
- Focus trap and keyboard navigation.
- Visible focus ring.
- Action labels must be explicit and context-based.

## Rules

- Illustration is optional and context-dependent.
- Do not block dialog implementation if no illustration is provided.
- If required anatomy cannot be rendered: `BLOCKER`.
- If required states are missing: `FAIL`.

Spec: `foundations/dialog.json`.
