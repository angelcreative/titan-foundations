# Titan Component Decision Policy

This policy defines which layer to use to implement UI, without collisions.

## Priority order (mandatory)

1. **Titan React first**  
   If the component exists in your installed `@audienseco/titan-react` version, use it.

2. **React Aria + Titan tokens/foundations fallback**  
   If the component does not exist in Titan React, build with React Aria primitives and Titan tokens.

3. **Icons fallback rule**  
   Prefer Titan React icons. If a specific icon is missing, use `lucide-react`.

## Production adoption override

If a Titan React component is tagged as `snowflake` in catalog metadata but is already approved and used in production by your team, treat it as official for implementation decisions in this repository.

## Single source of truth rule

- Never maintain two active implementations of the same component as official.
- When a component becomes official in Titan React, local fallback becomes deprecated.

## Snowflake rule

Fallback implementations must be marked as `snowflake` (temporary) and include:

- Reason why fallback exists.
- Exit criteria (what Titan React component/version replaces it).
- Owner and review date.

## Styling and theme invariants

Regardless of layer:

- Use Titan semantic tokens (no hardcoded brand colors).
- Respect theme contract (`data-theme`).
- Keep behavior accessible (React Aria patterns, keyboard/focus/labels).

## Fast decision table

| Scenario | Use |
| --- | --- |
| Component available in Titan React | Titan React |
| Component missing in Titan React | React Aria + Titan tokens/foundations |
| Required icon missing in Titan React | Lucide icon fallback |
