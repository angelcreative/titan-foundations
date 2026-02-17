# Component Review Contract

Cross-component QA contract for Titan implementation reviews.

## Universal Checklist (per component)

- Contractual structure is present and named according to foundations/docs terminology.
- Required visible states are rendered in review harness.
- Interaction matrix is demonstrable (pointer + keyboard where applicable).
- Accessibility acceptance criteria are validated.
- Semantic tokens are used when available (no hardcoded overrides where token exists).
- Component-specific rules gates pass without exceptions.

## PASS / FAIL / BLOCKER Criteria

- **PASS**
  - All required states are visible.
  - Interaction and keyboard behavior match contract.
  - A11y criteria pass.
  - Token usage is compliant.

- **FAIL**
  - One or more required visible states are missing.
  - Interaction matrix is only partially implemented.
  - Component-specific rule gate fails.
  - Hardcoded styling replaces available semantic token contract.

- **BLOCKER**
  - Required anatomy/semantics cannot be implemented.
  - Critical token mapping for required states is missing.
  - Accessibility baseline cannot be guaranteed (for example missing focus trap where required).

## Minimum Evidence Required

- **State evidence**: screenshot or story snapshot showing required states.
- **Interaction evidence**: short capture or reproducible steps proving matrix transitions.
- **A11y evidence**: keyboard flow and semantic checks (ARIA/current/focus behavior).
- **Token evidence**: mapping list from rendered styles to semantic tokens.

## Reusable Review Harness Template

Use this template for each component under review:

1. **Contract resolution**
   - foundation file(s)
   - doc/rule references
   - theme used
2. **State panel**
   - render all required visible states side by side
3. **Interaction panel**
   - pointer transitions
   - keyboard transitions
4. **A11y panel**
   - focus order
   - labels/roles/current states
   - trap/escape behavior when relevant
5. **Gate results**
   - PASS/FAIL/BLOCKER checklist with reasons

## Definition of Done (DoD)

A component is not done unless it satisfies all:

- contractual structure
- required visible states
- interaction + keyboard behavior
- semantic token usage (no hardcode when token exists)
- accessibility checklist
- rules gates pass with no exceptions
