# Titan Global Agent Policy (Highest Priority)

This policy is mandatory for any agent/tool operating in this repository (Cursor, Claude Code, v0, or any other LLM agent).

## Trigger condition

Apply this policy immediately when any of these conditions is true:

- Titan MCP is available.
- The user says or implies: "Titan", "setup Titan", "use Titan", "with Titan", "Titan foundations", "Titan DS".

## Non-negotiable execution order

1. **Use Titan compositions first** (`titan-compositions`).
2. If needed, use **Titan contracts** from `component-specs/` + Titan tokens from `tokens/foundations/`.
3. Use `docs/anatomies/` to map user intent to existing Titan UI patterns.
4. If still not possible, return **`BLOCKER`** and request explicit confirmation before any custom HTML/CSS.

## Forbidden behavior

- Do not invent ad-hoc UI with custom HTML/CSS when Titan coverage exists.
- Do not guess Titan APIs or structures when unsure.
- Do not bypass Titan contracts because of convenience.

## Limited exception

Raw HTML is allowed only for structural wrappers without a Titan equivalent (`main`, `section`, layout wrappers), and must still be styled with Titan tokens.
