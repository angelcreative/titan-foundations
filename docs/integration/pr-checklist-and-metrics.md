# PR Checklist and Metrics

Use this checklist in PRs that touch components, layout patterns, or design-system usage.

## PR checklist

- [ ] I used React Aria + Titan tokens/foundations as the primary implementation path.
- [ ] If a `titan-aria` wrapper exists, I evaluated using it to avoid rework while keeping parity.
- [ ] I avoided duplicate active implementations for the same component.
- [ ] Fallback is tagged/documented as `snowflake` with migration trigger.
- [ ] Icons follow policy: `lucide-react` first, then `@tabler/icons-react`; Titan token-driven size/color.
- [ ] No hardcoded brand colors; semantic tokens only.
- [ ] Theme contract is respected (`data-theme`, load order, multi-theme behavior).
- [ ] Accessibility behavior verified (keyboard, focus, labels/aria).
- [ ] Required states handled where relevant (empty, loading, error, success).
- [ ] Docs/inventory updated if ownership status changed.
- [ ] If fallback artifacts are being removed, `consumer-verification-checklist.md` evidence is attached.

## Governance metrics

Track these monthly:

1. **Snowflake count**
   - Total number of active `SnowflakeFallback` components.
2. **Snowflake age**
   - Average and max age (days) of active snowflakes.
3. **Migration velocity**
   - Number of snowflakes normalized to `AriaBase`/`TitanAriaWrapper` per cycle.
4. **Duplicate ownership incidents**
   - PRs/reworks caused by two simultaneous sources of truth.
5. **Icon fallback ratio**
   - Icon usages that are token-bound vs icon usages with hardcoded styling.

## Quality gates

- If snowflake count increases for 2 consecutive cycles, trigger a focused audit.
- If max snowflake age exceeds the agreed threshold, require explicit owner action.
