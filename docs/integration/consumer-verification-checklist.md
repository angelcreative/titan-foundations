# Consumer Verification Checklist (Safe Removal Gate)

Use this checklist before removing local fallback artifacts (`foundations/*.json`, docs, or rules) for components that are already official in Titan React.

## Scope

Applies to: `Menu`, `Select`, `Navbar`, and any future component moving from local fallback to Titan React ownership.

## Verification steps

1. **Consumer inventory**
   - List all apps/repos using the component.
   - Record current package version of `@audienseco/titan-react`.

2. **Implementation source check**
   - Confirm each consumer imports and renders the Titan React component (not local fallback implementation).
   - Confirm no consumer depends on local spec/rule generation for that component.

3. **Visual parity check**
   - Validate parity in all required themes (`audiense`, `demand`, `insights`, etc.).
   - Validate required states (empty/loading/error/success where relevant).

4. **Accessibility check**
   - Keyboard flow, focus visibility, labels/aria, disabled behavior.

5. **Icon policy check**
   - Titan React icon first.
   - Lucide only for missing icons.

6. **Operational sign-off**
   - Product/design sign-off for parity.
   - Engineering sign-off for migration completeness.

## Evidence template

| Consumer repo/app | Titan React version | Source is Titan React | Theme parity | A11y parity | Sign-off |
| --- | --- | --- | --- | --- | --- |
| `<repo-a>` | `<x.y.z>` | yes/no | yes/no | yes/no | yes/no |

## Removal decision rule

Only remove local fallback artifacts when **all** active consumers are `yes` on:

- source is Titan React
- theme parity
- a11y parity
- sign-off

If any entry is `no`, keep local fallback artifacts and set a new review date.
