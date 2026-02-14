# Menu/Select Removal Readiness (Dry-Run)

This dry-run is the execution sheet for items 6 and 7 in `menu-select-deprecation-candidates.md`.

## Metadata

- Component(s): `Menu`, `Select`
- Audit date: TBD
- Prepared by: TBD
- Target Titan React version: TBD
- Planned removal scope:
  - `foundations/menu.json`
  - `foundations/select.json`
  - `docs/menu-and-select.md` (convert to appendix or remove)
  - `.cursor/rules/menu-and-select.mdc` (convert to fallback appendix or remove)

## Consumer evidence table

| Consumer repo/app | Titan React version | Uses Titan React Menu/Select in runtime | No dependency on local fallback artifacts | Theme parity | A11y parity | Product sign-off | Engineering sign-off |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `<repo-a>` | `<x.y.z>` | yes/no | yes/no | yes/no | yes/no | yes/no | yes/no |
| `<repo-b>` | `<x.y.z>` | yes/no | yes/no | yes/no | yes/no | yes/no | yes/no |

## Evidence links

- Design QA artifacts: TBD
- Accessibility validation artifacts: TBD
- PRs/migrations in consumer repos: TBD

## Decision

- [ ] **GO**: safe to execute item 6 and item 7.
- [ ] **NO-GO**: keep local fallback artifacts and re-audit.

## Notes and next review date

- Open gaps: TBD
- Actions: TBD
- Next review date: TBD
