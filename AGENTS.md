# AGENTS.md

## Cursor Cloud specific instructions

This is a **frontend-only design system** (Titan Foundations by Audiense). No backend, database, or Docker is required.

### Architecture

| Package | Path | Purpose |
|---|---|---|
| `titan-aria` | `packages/titan-aria` | React Aria wrapper library styled with Titan tokens |
| `titan-compositions` | `packages/titan-compositions` | Higher-level page compositions built on titan-aria |
| Playground | `playground/react-buttons-app` | Vite React app for visual smoke testing of all components |

### Build order (dependency chain)

1. `packages/titan-aria` — `npm ci && npm run build`
2. `packages/titan-compositions` — `npm ci && npm run build`  (depends on titan-aria; the playground links to this via `file:` reference)
3. `playground/react-buttons-app` — `npm ci` (depends on titan-compositions)

### Key commands

| Task | Directory | Command |
|---|---|---|
| Lint | `playground/react-buttons-app` | `npm run lint` |
| Build playground | `playground/react-buttons-app` | `npm run build` |
| Dev server | `playground/react-buttons-app` | `npm run dev -- --host 0.0.0.0 --port 5173` |
| Build titan-compositions | `packages/titan-compositions` | `npm run build` |
| Build titan-aria | `packages/titan-aria` | `npm run build` |

### Non-obvious caveats

- There is **no root `package.json`** and no workspace orchestrator (no Turborepo/Lerna/pnpm workspaces). Each sub-package manages its own `node_modules` independently.
- The playground depends on `titan-compositions` via a `file:../../packages/titan-compositions` link. You **must build titan-compositions before** installing playground deps, otherwise the playground will reference a stale or missing `dist/`.
- Lint is only configured in the playground (`eslint`). The library packages have no lint script.
- No automated test suite exists in any package. Validation is visual via the playground.
- The CI workflow (`.github/workflows/deploy-pages.yml`) uses Node 20; Node 22 works locally without issues.
