# Menu/Select Deprecation Candidates

This is the concrete file-by-file candidate list to execute normalization for `Menu` and `Select` in the hybrid Aria model.

## Execution status

- [x] Item 1 executed
- [x] Item 2 executed
- [x] Item 3 executed
- [x] Item 4 executed
- [x] Item 5 executed
- [ ] Item 6 pending (requires no active consumers)
- [ ] Item 7 pending (final cleanup phase)

Gate before items 6 and 7:

- complete `docs/integration/consumer-verification-checklist.md` with sign-off evidence
- fill `docs/integration/menu-select-removal-readiness.md` and record GO/NO-GO decision

## Objective

- Make `AriaBase` (`react-aria-components` + Titan tokens) the default source for `Menu` and `Select`.
- Keep local specs as active operational references until usage is stable.
- Avoid deleting useful token guidance too early.

## Immediate candidates (safe now)

### 1) Cursor rule ownership wording

- File: `.cursor/rules/menu-and-select.mdc`
- Action:
  - Keep precedence as React Aria + Titan tokens/foundations.
  - Keep wrappers (`titan-aria`) as compatibility acceleration path.
- Reason:
  - This is the highest-leverage guardrail to stop new duplicate implementations.

### 2) Docs ownership wording

- File: `docs/components/menu-and-select.md`
- Action:
  - Keep top ownership note: hybrid Aria model is default source.
  - Keep tokens + structure as operational contract section.
- Reason:
  - Preserves design knowledge while clarifying source of truth.

### 3) Foundations usage guidance

- File: `component-specs/README.md`
- Action:
  - Add explicit note that `menu.json` and `select.json` are operational references for Aria/token consistency.
- Reason:
  - Prevents local specs being interpreted as the primary path.

## Transition candidates (after consumer verification)

### 4) Foundations specs lifecycle tag

- Files:
  - `component-specs/menu.json`
  - `component-specs/select.json`
- Action:
  - Add lifecycle metadata (for example: `status: "aria-primary"`).
  - Optionally add `owner: "HybridAriaModel"` and `migrationNote`.
- Reason:
  - Makes machine-readable ownership explicit.

### 5) Integration inventory refinement

- File: `docs/integration/component-inventory.md`
- Action:
  - Track each of these as:
    - `AriaBase` (source)
    - `TitanAriaWrapper` (when wrapper is used)
    - `artifacts retained` (list of local files still present)
- Reason:
  - Improves audit traceability for future cleanup.

## Removal candidates (only when no consumers remain)

### 6) Retire local menu/select specs

- Files:
  - `component-specs/menu.json`
  - `component-specs/select.json`
- Preconditions:
  - No active generator/rule/workflow depends on these files.
  - Teams have normalized to Aria/token usage paths.
  - Audit runbook sign-off completed.
- Action:
  - Delete specs and remove references from docs/rules.

### 7) Slim down menu/select docs/rules

- Files:
  - `docs/components/menu-and-select.md`
  - `.cursor/rules/menu-and-select.mdc`
- Action:
  - Convert from implementation guide to “fallback appendix” or remove if obsolete.

## Suggested execution order

1. Update rule and docs ownership wording (items 1, 2, 3).
2. Run one audit cycle on real consumer repos.
3. Add lifecycle metadata (item 4).
4. Decide retention or removal based on active usage (items 6, 7).
