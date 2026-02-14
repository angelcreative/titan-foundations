# Deduplication Roadmap

Roadmap to remove duplicated ownership and keep one source of truth.

## Guiding principle

If a component is official in Titan React, this repo must not keep a second official definition for the same component.

## Wave 1 (priority): Navbar

### Why first

- High visibility shell component.
- Already identified as existing in Titan React.
- Currently duplicated in local specs/docs/rules.

### Local files to demote from official ownership

- `foundations/navbar.json`
- `docs/logos-and-navbar.md`
- `.cursor/rules/navbar-logos.mdc`
- Any template rule/doc that hardcodes local navbar ownership.

### Transition mode

1. Keep local navbar artifacts as `fallback/reference`.
2. Mark Titan React navbar as the default implementation source.
3. Avoid generating new “official” navbar variants from local specs.

## Wave 2 (high priority): Menu and Select

`Menu` and `Select` are already considered official in Titan React for your team context (production usage), so they should be treated as active deduplication targets.

### Local files to demote from official ownership

- `foundations/menu.json`
- `foundations/select.json`
- `docs/menu-and-select.md`
- Any rule/doc that defaults to local ownership for menu/select

### Transition mode

1. Keep local menu/select artifacts as `fallback/reference`.
2. Mark Titan React menu/select as default implementation source.
3. Avoid creating new official variants from local menu/select specs.

## Wave 3: Other overlapping components

After each Titan React update, evaluate overlap for:

- Drawer
- Card/button/icon patterns currently covered by `titan-aria`

If official in Titan React, move local counterpart to deprecated fallback.

## Deprecation workflow

1. **Detect overlap** (inventory update).
2. **Flag local artifact** as deprecated fallback.
3. **Update references** in docs/rules to Titan React first.
4. **Migrate consuming code** to Titan React.
5. **Remove fallback** once no consumers remain.

## Exit criteria per component

A local fallback can be removed when:

- Titan React provides equivalent behavior and visual contract.
- Design/UX stakeholders accept parity.
- Accessibility parity is verified.
- No active consumer depends on the local fallback.
