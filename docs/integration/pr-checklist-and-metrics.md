# PR Checklist and Metrics

Use this checklist in PRs that touch components, layout patterns, or design-system usage.

## PR checklist

- [ ] I checked whether the component already exists in Titan React.
- [ ] If it exists in Titan React, I used Titan React (no local duplicate implementation).
- [ ] If it does not exist, I implemented fallback with React Aria + Titan tokens/foundations.
- [ ] Fallback is tagged/documented as `snowflake` with migration trigger.
- [ ] Icons follow policy: Titan React first, Lucide only when missing.
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
   - Number of snowflakes migrated to Titan React per release cycle.
4. **Duplicate ownership incidents**
   - PRs/reworks caused by two simultaneous sources of truth.
5. **Icon fallback ratio**
   - Lucide fallback usage vs Titan React icon usage.

## Quality gates

- If snowflake count increases for 2 consecutive cycles, trigger a focused audit.
- If max snowflake age exceeds the agreed threshold, require explicit owner action.
