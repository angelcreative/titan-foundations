# Smoke Review Checklist (10 minutes)

Quick validation pass for Titan component contracts after UI generation or implementation changes.

## Scope

Run this checklist for:

- `button`
- `menu`
- `select`
- `tabs`
- `pagination`
- `table-borderless`
- `drawer`
- `breadcrumb`

Use contracts from `foundations/*.json`, component docs in `docs/*.md`, and gates in `.cursor/rules/*.mdc`.

## How to run (time-boxed)

1. **Minute 0-1: setup**
   - Open the review harness/story/screen where all target components are present.
   - Confirm active theme (default `insights` unless intentionally testing another).

2. **Minute 1-5: visible states pass**
   - Validate each component shows required visible states from `requiredStatesVisible`.
   - Minimum required checks:
     - `button`: default/hover/pressed/disabled/focus-visible
     - `menu`: default/hover/pressed/selected/disabled/focus-visible
     - `select`: trigger default/hover/pressed/disabled/focus-visible + item focused/pressed/selected/disabled
     - `tabs`: default/hover/selected/disabled/focus-visible
     - `pagination`: page default/hover/selected/disabled/focus-visible + nav default/hover/disabled/focus-visible
     - `table-borderless`: sort inactive/asc/desc + row hover + actions menu states
     - `drawer`: open/closing + close button default/hover/pressed/focus-visible
     - `breadcrumb`: interactive default/hover/pressed/focus-visible + current item non-interactive

3. **Minute 5-8: interaction + keyboard pass**
   - Keyboard-only pass (`Tab`, arrows, `Enter`, `Space`, `Escape`).
   - Mandatory quick checks:
     - `tabs`: arrow navigation + selection activation
     - `select`: open, navigate, select, close with `Escape`
     - `menu`: trigger open/close + arrow navigation
     - `drawer`: close by overlay click, close button, and `Escape`
     - `pagination`: previous/next behavior at bounds
     - `table-borderless`: sort cycles `inactive -> asc -> desc -> inactive`

4. **Minute 8-10: semantic token + a11y pass**
   - Confirm no hardcoded override where semantic token exists.
   - Confirm landmark/ARIA essentials:
     - `breadcrumb`: `aria-current="page"` on current item only
     - `pagination`: nav landmark + current page semantics
     - `drawer`: focus trap + focus return on close
     - icon-only interactive controls have accessible name (`aria-label`)

## Global hard gate

For icon-only interactive controls:

- Prefer secondary icon-button behavior (theme-aware).
- If not available, fallback must be:
  - `background: var(--color-black-100)`
  - `border-radius: 9999px`

If neither is true -> `FAIL`.

## PASS / FAIL / BLOCKER rubric

- **PASS**
  - Required visible states present.
  - Interaction matrix behavior demonstrated.
  - A11y acceptance criteria pass.
  - Token usage compliant.

- **FAIL**
  - One or more required visible states missing.
  - Keyboard behavior incomplete.
  - Rule gate broken (for example table sort cycle, breadcrumb current-item semantics).
  - Hardcoded styling used where token contract exists.

- **BLOCKER**
  - Required structure/semantics cannot be represented.
  - Critical state token mapping missing.
  - A11y baseline cannot be guaranteed (for example missing drawer focus trap).

## Evidence to attach per run

- 1 screenshot (or story snapshot) with visible states.
- 1 short interaction capture (or step log) with keyboard pass.
- 1 brief checklist result with PASS/FAIL/BLOCKER and reason.

## Fast fail conditions (stop immediately)

- Table sort does not complete `inactive -> asc -> desc -> inactive`.
- Drawer missing `overlay + close + header/body` structure.
- Breadcrumb current item clickable or missing `aria-current="page"`.
- Select/Tabs missing disabled/selected/keyboard behavior.
- Required visible states not rendered in review harness.
