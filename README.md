# titan-foundations

Titan design system tokens and tooling.

## Repository structure

- `tokens/foundations/`: primitive token sources (spacing, typography, borders, elevation, colors).
- `component-specs/`: component and layout JSON specs (navbar, menu, select, template, etc.).
- `docs/core/`: core documentation and policies.
- `docs/components/`: component contracts and usage docs.
- `docs/anatomies/`: universal UI anatomy patterns used by LLM/MCP.
- `docs/integration/`: integration workflow, ownership, and runbooks.

## Main entry points

- [Global agent policy](AGENTS.md)
- [Documentation index](docs/README.md)
- [Titan themes](tokens/themes/README.md)
- [titan-aria](packages/titan-aria/README.md)
- [Titan CLI](packages/titan-cli/README.md)
- [Component specs](component-specs/README.md)
- [MCP usage](docs/integration/mcp-usage.md)

**When using titan-aria:** install `lucide-react` in your app (peer dependency).
