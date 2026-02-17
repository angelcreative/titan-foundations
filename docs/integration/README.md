# Integration Docs

Operational docs to integrate React Aria, `titan-aria` wrappers, and local foundations/tokens without ownership collisions.

- `component-inventory.md`: ownership status and overlap inventory.
- `decision-policy.md`: mandatory layer precedence and icon fallback rules.
- `deduplication-roadmap.md`: migration and deprecation path for duplicated ownership.
- `fallback-contract.md`: technical contract for snowflake implementations.
- `post-update-audit-runbook.md`: manual audit workflow after integration changes.
- `pr-checklist-and-metrics.md`: governance checklist and tracking metrics.
- `menu-select-deprecation-candidates.md`: concrete file-by-file deduplication candidates for Menu and Select.
- `consumer-verification-checklist.md`: required evidence gate before removing local fallback artifacts.
- `removal-readiness-template.md`: reusable dry-run template before fallback artifact removal.
- `menu-select-removal-readiness.md`: prefilled dry-run sheet for Menu/Select removal decisions.
- `mcp-usage.md`: copy/paste prompts and operational contract for Cursor + MCP usage.
- `component-review-contract.md`: transversal QA contract, PASS/FAIL/BLOCKER criteria, and reusable review harness template.
- `smoke-review-checklist.md`: 10-minute smoke pass for states, interaction, a11y, and token compliance.
- `component-registry.json`: machine-readable catalog of all `titan-compositions` components — props, types, slots, composability, and coverage map for MCP code generation.
- `composition-patterns.json`: real UI composition recipes extracted from Audiense/Demand/Insights/TweetBinder — page layouts, card patterns, dialog patterns, form patterns, and micro-patterns with JSX templates for MCP code generation.
