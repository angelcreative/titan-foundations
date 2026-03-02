# Titan Component Decision Policy

This policy defines which layer to use to implement UI, without collisions.

## Priority order (mandatory)

1. **React Aria base**  
   Build behavior and accessibility with `react-aria-components`.

2. **Titan visual contract**  
   Apply Titan semantic tokens/foundations for spacing, typography, color, radius, and elevation.

3. **Compatibility wrappers (`titan-aria`)**  
   Reuse wrappers when they reduce rework and preserve parity with the same token contract.

4. **Icon rule**  
   Use **lucide-react** first; if the icon is not available there, use **@tabler/icons-react** as fallback. Always bind size/color to Titan tokens.

## Single source of truth rule

- Never maintain two active implementations of the same component in one solution.
- Prefer one path per component (`AriaBase` or `TitanAriaWrapper`) and document exceptions.

## Snowflake rule

Temporary implementations must be marked as `snowflake` and include:

- Reason why temporary path exists.
- Exit criteria (what implementation or wrapper state closes it).
- Owner and review date.

## Styling and theme invariants

Regardless of layer:

- Use Titan semantic tokens (no hardcoded brand colors).
- Respect theme contract (`data-theme`).
- Keep behavior accessible (React Aria patterns, keyboard/focus/labels).

## Fast decision table

| Scenario | Use |
| --- | --- |
| Standard component flow | `react-aria-components` + Titan tokens/foundations |
| Existing wrapper already fits | `titan-aria` wrapper + Titan tokens/foundations |
| Missing icon | `lucide-react` first, then `@tabler/icons-react`; Titan token-driven color/size |
