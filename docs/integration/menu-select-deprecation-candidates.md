# Menu/Select Deprecation Candidates

This is the concrete file-by-file candidate list to execute deduplication now that `Menu` and `Select` are treated as official in Titan React for your team.

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

- Make Titan React the default source for `Menu` and `Select`.
- Keep local specs as fallback/reference during transition.
- Avoid deleting useful token guidance too early.

## Immediate candidates (safe now)

### 1) Cursor rule ownership wording

- File: `.cursor/rules/menu-and-select.mdc`
- Action:
  - Add precedence note: Titan React first for Menu/Select when available.
  - Keep current React Aria/token structure only as fallback contract.
- Reason:
  - This is the highest-leverage guardrail to stop new duplicate implementations.

### 2) Docs ownership wording

- File: `docs/menu-and-select.md`
- Action:
  - Add top ownership note: Titan React is default source.
  - Keep tokens + structure as fallback/reference section.
- Reason:
  - Preserves design knowledge while clarifying source of truth.

### 3) Foundations usage guidance

- File: `foundations/README.md`
- Action:
  - Add explicit note that `menu.json` and `select.json` are fallback/reference when Titan React equivalents exist.
- Reason:
  - Prevents local specs being interpreted as the primary path.

## Transition candidates (after consumer verification)

### 4) Foundations specs lifecycle tag

- Files:
  - `foundations/menu.json`
  - `foundations/select.json`
- Action:
  - Add lifecycle metadata (for example: `status: "fallback-reference"`).
  - Optionally add `owner: "Titan React"` and `migrationNote`.
- Reason:
  - Makes machine-readable ownership explicit.

### 5) Integration inventory refinement

- File: `docs/integration/component-inventory.md`
- Action:
  - Track each of these as:
    - `OfficialInTitanReact` (source)
    - `fallback artifacts retained` (list of local files still present)
- Reason:
  - Improves audit traceability for future cleanup.

## Removal candidates (only when no consumers remain)

### 6) Retire local menu/select specs

- Files:
  - `foundations/menu.json`
  - `foundations/select.json`
- Preconditions:
  - No active generator/rule/workflow depends on these files.
  - Teams have migrated to Titan React usage paths.
  - Audit runbook sign-off completed.
- Action:
  - Delete specs and remove references from docs/rules.

### 7) Slim down menu/select docs/rules

- Files:
  - `docs/menu-and-select.md`
  - `.cursor/rules/menu-and-select.mdc`
- Action:
  - Convert from implementation guide to “fallback appendix” or remove if obsolete.

## Suggested execution order

1. Update rule and docs ownership wording (items 1, 2, 3).
2. Run one audit cycle on real consumer repos.
3. Add lifecycle metadata (item 4).
4. Decide retention or removal based on active usage (items 6, 7).
