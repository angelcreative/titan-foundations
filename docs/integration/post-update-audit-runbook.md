# Post-Update Audit Runbook (Titan React)

Use this runbook after each relevant Titan React update to migrate snowflakes and prevent duplicate ownership.

## Trigger

Run when:

- `@audienseco/titan-react` version changes in a consuming app/repo.
- Release notes mention new components, icon packs, or behavior updates.

## Inputs

- Titan React release notes/changelog.
- `docs/integration/component-inventory.md`
- `docs/integration/decision-policy.md`
- `docs/integration/deduplication-roadmap.md`
- `docs/integration/consumer-verification-checklist.md`

## Procedure

1. **Capture update scope**
   - List new/updated Titan React components and icons.
2. **Map overlaps**
   - Compare with local `SnowflakeFallback` entries.
3. **Classify each overlap**
   - `migrate-now`: parity is good enough.
   - `wait`: missing parity details (document gap).
4. **Plan migrations**
   - Create migration tasks per component.
   - Include acceptance criteria (visual, interaction, accessibility).
5. **Deprecate local fallback**
   - Mark fallback artifacts as deprecated.
   - Update docs/rules to point to Titan React first.
   - Run consumer verification checklist before removing artifacts.
6. **Close audit**
   - Update inventory status.
   - Record decisions and next review date.

## Minimum acceptance checklist per migrated component

- Visual parity in all supported themes.
- Keyboard/focus/aria parity.
- Empty/loading/error/success handling is preserved where applicable.
- Icon behavior follows Titan React first, Lucide fallback only if still needed.

## Output template

Document this in each audit cycle:

- Audit date
- Titan React version reviewed
- Components moved from `SnowflakeFallback` to `OfficialInTitanReact`
- Components kept as snowflake with reason
- Deprecated artifacts and removal target date
