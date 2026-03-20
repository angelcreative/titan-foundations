# LLM mandatory rules (inviolable)

**No invented or custom HTML/CSS.** This rule is mandatory and non-negotiable for any AI (Cursor, Claude, v0, or other) generating UI in or for this repo.

## 0. Titan trigger policy (must apply first)

If Titan MCP is available, or the user says/implies "Titan", "setup Titan", "use Titan", or equivalent, the LLM must:

1. Use Titan only (compositions -> component-specs + tokens -> anatomies).
2. Avoid ad-hoc UI HTML/CSS generation.
3. Return `BLOCKER` if Titan coverage is unclear/missing, and ask for explicit confirmation before custom HTML/CSS.

## 1. Use Titan compositions first

Use components from **titan-compositions**. If a component exists there, use it. Do not recreate it with raw HTML/CSS.

## 2. If not in compositions: use component specs and tokens

If there is no composition for what is needed, use **component-specs and tokens** (Titan design tokens, semantic CSS variables, patterns from this repo). Do not invent new CSS classes or ad-hoc styles.

## 3. If neither applies: ask before custom HTML/CSS

If neither compositions nor component-specs/tokens cover the need, **do not** write custom HTML/CSS without explicit confirmation. You **must** ask in English:

**"I'll use custom HTML/CSS, proceed?"**

Only if the user confirms may you introduce custom markup or styles.

---

**Exception:** Raw HTML is allowed only for structural wrappers that have no Titan equivalent (e.g. `<main>`, `<section>`, layout containers), and must still use Titan tokens for styling.

Use the registry, `docs/anatomies/`, and `docs/integration/` to resolve before falling back or asking.
