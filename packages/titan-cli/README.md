# @audiense/titan-cli

CLI to create a **Titan monorepo**: one install, many projects. For use with Cursor and Claude (and the Titan MCP).

## Install

```bash
npm install -g @audiense/titan-cli
```

Or run without installing:

```bash
npx @audiense/titan-cli init
```

## Commands

| Command | Description |
|--------|-------------|
| `titan init` | Creates `titan-main/` with dependencies and `apps/demo`. Run once. |
| `titan new <name>` | Creates `apps/<name>` (run from inside `titan-main`). No extra install. |
| `titan update` | Updates Titan deps in root (run from `titan-main`). |

## Workflow

1. **Once:** Run `titan init` (e.g. from your Desktop or projects folder). This creates `titan-main/` and runs `pnpm install` or `npm install` there.
2. Open the **titan-main** folder in Cursor. Connect the Titan MCP (or if already connected, you're ready).
3. Open `apps/demo` in the same window — it has a placeholder page with next-step instructions. You can delete that content and ask the assistant to build something with Titan.
4. **New project:** From `titan-main`, run `titan new onboarding` (or any name). Use `apps/onboarding` without running install again.
5. **Update Titan:** From `titan-main`, run `titan update`.

Make and v0 are unchanged: connect the MCP there as usual. This CLI is for Cursor/Claude so you don’t run a full install per project on your machine.
