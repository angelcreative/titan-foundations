# MCP Usage (Cursor + Titan)

This is the practical usage contract so you can request interfaces and get consistent Titan outputs.

## What MCP should do by default

1. Resolve whether requested component exists in `@audienseco/titan-react`.
2. If yes, use Titan React implementation.
3. If no, build fallback with React Aria + Titan tokens/foundations.
4. For icons, use Titan React icon first; if missing, use `lucide-react`.

## Ready-to-use prompts

### Generic UI request

```text
Create this UI with Titan rules:
- Use @audienseco/titan-react first for any available component.
- If missing, fallback to React Aria + Titan tokens/foundations from this repo.
- For icons, use Titan React icons first; if missing, use lucide-react.
- Do not create two official implementations of the same component.
```

### Navbar request

```text
Build page shell with navbar:
- Prefer Titan React NavBar.
- Only if NavBar is unavailable in current version, use local fallback spec (foundations/navbar.json + docs/logos-and-navbar.md).
- Keep exact icon policy and theme logo mapping.
```

### Menu/Select request

```text
Build filters area with Menu and Select:
- Prefer Titan React Menu and Select.
- Use local foundations/menu.json and foundations/select.json only as fallback/reference.
- Keep tokens/theme behavior aligned with titan.css + active theme.
```

### Exploratory component request

```text
Create a new exploratory component pattern:
- If component does not exist in Titan React, build with React Aria + Titan semantic tokens.
- Mark output as snowflake fallback (temporary).
- Keep empty/loading/error/success states and accessibility parity.
```

## Theme and style invariants

- Load order: `titan.css` -> one theme file -> component styles.
- Set `<html data-theme="...">`.
- Use semantic Titan tokens; avoid hardcoded brand values.

## Sources of truth

- Policy: `docs/integration/decision-policy.md`
- Inventory: `docs/integration/component-inventory.md`
- Fallback contract: `docs/integration/fallback-contract.md`
