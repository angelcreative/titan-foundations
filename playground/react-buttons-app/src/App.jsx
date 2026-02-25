import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  AlertCircle,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Bell,
  Clipboard,
  ClipboardCheck,
  Handshake,
  Info,
  Search,
  Tag,
  Plus,
  Settings,
  Star,
  Trash2,
  User,
  LayoutDashboard,
  Type,
  ToggleLeft,
  Table2,
  PanelLeft,
  PanelTop,
  MousePointerClick,
  ChevronDown,
  ListFilter,
  Layers,
  PanelRight,
  MessageSquare,
  BellRing,
  TextCursorInput,
  Hash,
  Navigation,
  Loader2,
  SlidersHorizontal,
  BarChart3,
  CalendarDays,
  Check,
  ThumbsUp,
  X,
  Users,
  ClipboardCheck as ClipboardCheckIcon,
  FileText,
  CircleDot,
  Columns2,
  LayoutGrid,
} from 'lucide-react'
import {
  TitanBadge,
  TitanBadgeAnchor,
  TitanBorderlessTable,
  TitanBreadcrumb,
  TitanButton,
  TitanCard,
  TitanCardGrid,
  TitanCheckboxField,
  TitanDialog,
  TitanDrawer,
  TitanFormControlsGroup,
  TitanIconButton,
  TitanInputField,
  TitanMenuDropdown,
  TitanSearchMenu,
  TitanProfileMenu,
  TitanNotificationsMenu,
  TitanNavbar,
  TitanPagination,
  TitanPill,
  TitanRadioGroupField,
  TitanSelect,
  TitanSidebar,
  TitanSidebarHeader,
  TitanSidebarItem,
  TitanSwitchField,
  TitanTabs,
  TitanTag,
  TitanTextareaField,
  TitanToastRegion,
  TitanTooltip,
  TitanLoader,
  TitanSlider,
  TitanRangeSlider,
  TitanProgressBar,
  TitanCalendar,
  TitanToggleButtonGroup,
  TitanTwoUpOneDownLayout,
} from 'titan-compositions'
import { today, getLocalTimeZone } from '@internationalized/date'

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const THEMES = ['insights', 'audiense', 'neutral', 'demand', 'linkedin', 'tweetbinder']

const TAG_ITEMS = [
  { tone: 'teal', label: 'Teal label' },
  { tone: 'mango', label: 'Mango label' },
  { tone: 'ocean', label: 'Ocean label' },
  { tone: 'tomato', label: 'Tomato label' },
  { tone: 'violet', label: 'Violet label' },
  { tone: 'magenta', label: 'Magenta label' },
  { tone: 'indigo', label: 'Indigo label' },
]

const INITIAL_PILL_ITEMS = [
  { id: 'pill-teal', tone: 'teal', label: 'Teal pill' },
  { id: 'pill-mango', tone: 'mango', label: 'Mango pill' },
  { id: 'pill-ocean', tone: 'ocean', label: 'Ocean pill' },
  { id: 'pill-tomato', tone: 'tomato', label: 'Tomato pill' },
]

const NAV_ITEMS = [
  { id: 'badge', label: 'Badge', icon: CircleDot },
  { id: 'breadcrumb', label: 'Breadcrumb', icon: Navigation },
  { id: 'buttons', label: 'Buttons', icon: MousePointerClick },
  { id: 'calendar', label: 'Calendar', icon: CalendarDays },
  { id: 'cardgrid', label: 'Card Grid + Table', icon: LayoutDashboard },
  { id: 'dialog', label: 'Dialog', icon: MessageSquare },
  { id: 'drawer', label: 'Drawer', icon: PanelRight },
  { id: 'forms', label: 'Form Controls', icon: ToggleLeft },
  { id: 'inputs', label: 'Inputs', icon: TextCursorInput },
  { id: 'loader', label: 'Loader', icon: Loader2 },
  { id: 'menus', label: 'Menus', icon: ChevronDown },
  { id: 'navbar', label: 'Navbar', icon: PanelTop },
  { id: 'pagination', label: 'Pagination', icon: Hash },
  { id: 'pills', label: 'Pills', icon: Tag },
  { id: 'progress', label: 'Progress Bar', icon: BarChart3 },
  { id: 'select', label: 'Select', icon: ListFilter },
  { id: 'sidebar', label: 'Sidebar', icon: PanelLeft },
  { id: 'slider', label: 'Slider', icon: SlidersHorizontal },
  { id: 'tabs', label: 'Tabs', icon: Layers },
  { id: 'tags', label: 'Tags', icon: Type },
  { id: 'toasts', label: 'Toasts', icon: BellRing },
  { id: 'togglegroup', label: 'Toggle Button Group', icon: Columns2 },
  { id: 'tooltips', label: 'Tooltips', icon: Info },
  { id: 'twouponedown', label: 'Two Up One Down Layout', icon: LayoutGrid },
]

/* ------------------------------------------------------------------ */
/*  Helper components                                                  */
/* ------------------------------------------------------------------ */

function TokenGroup({ label, tokens }) {
  return (
    <div className="token-group">
      <div className="token-group-label">{label}</div>
      <div className="token-list">
        {tokens.map((t) => (
          <span key={t} className="token-var">{t}</span>
        ))}
      </div>
    </div>
  )
}

function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false)
  const timerRef = useRef(null)

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => setCopied(false), 2000)
    })
  }, [code])

  useEffect(() => () => clearTimeout(timerRef.current), [])

  return (
    <div className="code-block-wrap">
      <button
        type="button"
        className={`code-copy-btn${copied ? ' code-copy-btn-done' : ''}`}
        onClick={handleCopy}
        aria-label={copied ? 'Copied' : 'Copy code'}
      >
        {copied ? <ClipboardCheck /> : <Clipboard />}
        <span>{copied ? 'Copied' : 'Copy'}</span>
      </button>
      <pre className="code-pre"><code>{code}</code></pre>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Setup Guide                                                        */
/* ------------------------------------------------------------------ */

const MCP_CONFIG = `{
  "mcpServers": {
    "titands": {
      "url": "https://mcp-remote-worker.titands.workers.dev/mcp"
    }
  }
}`

const RULE_SENIOR_UX = `senior-ux-ui-designer

You are a senior UX/UI designer specialized in SaaS dashboards, reporting flows, tables, filters, and data visualization.

Primary goal: improve UX clarity, information architecture, and interaction design (not code quality by default).

Defaults:
- Start simple, then add progressive disclosure for complexity.
- Always cover: empty state, loading state, error state, success feedback.
- Prefer familiar SaaS patterns (Jakob's Law) unless there's a strong reason not to.
- Justify key decisions using Laws of UX (Jakob, Hick, Fitts, Miller, Proximity, Common Region).
- Ask at most 1–2 clarifying questions only if the task is ambiguous.

When proposing UI:
- Provide at least 2 alternatives when designing a screen/flow.
- Describe: hierarchy (what users see 1st/2nd/3rd), layout structure, and interactions.
- Be explicit about trade-offs (density vs scannability, power vs simplicity).
- Accessibility is default: WCAG 2.1 AA mindset (keyboard, focus, labels, contrast, target sizes).

Assume users are non-technical SaaS users who value speed, confidence, and clarity.`

const CMD_REFINE_UI = `# refine-ui

You are a senior SaaS UI/UX designer specializing in visual refinement and interface elegance.

Your task is to refine the visual quality of an existing interface WITHOUT changing its layout, structure, or interaction model.

This is NOT a redesign.

────────────────────────
GOAL
────────────────────────

Improve perceived quality, elegance, and visual hierarchy by:
- Reducing visual heaviness
- Softening typography and color usage
- Improving rhythm, spacing, and emphasis
- Making the UI feel calmer, more premium, and more intentional

────────────────────────
STRICT CONSTRAINTS
────────────────────────

DO NOT:
- Change layout or grid
- Add or remove components
- Change IA or flows
- Introduce new patterns
- Redesign cards, tables, or charts

ONLY:
- Adjust typography hierarchy
- Adjust font weights
- Adjust font sizes (especially large numbers)
- Adjust color intensity (neutrals, secondary text)
- Adjust spacing, padding, and density
- Adjust visual emphasis and contrast balance

────────────────────────
FOCUS AREAS
────────────────────────

1. Typography
- Identify where bold is overused
- Suggest lighter weights or mixed emphasis
- Reduce oversized numerals if they dominate
- Improve hierarchy using size + weight, not color alone

2. Color & Contrast
- Detect overly strong neutral shades
- Suggest softer gray ramps for secondary information
- Reduce unnecessary high-contrast text
- Preserve accessibility while lowering visual noise

3. Density & Rhythm
- Identify cramped areas
- Suggest micro-spacing improvements
- Improve vertical rhythm inside cards
- Make content breathe without growing components

4. Visual Hierarchy
- Clarify what should be primary vs secondary
- Reduce competing focal points
- Apply "less but clearer" emphasis

────────────────────────
OUTPUT FORMAT
────────────────────────

Return:

1. Quick Diagnosis — Why the UI feels heavy or unrefined
2. Refinement Suggestions — Bullet-pointed, grouped by Typography / Color / Spacing
3. Before → After Examples — Practical terms (e.g. "Metrics from 32px bold → 24px semibold")
4. Design Principles Applied — Reference Laws of UX (Aesthetic-Usability, Prägnanz, Visual Hierarchy)

Keep it concise, actionable, and design-focused. This is a polish pass, not a critique.`

const CMD_UX_BRAINSTORM = `# ux-brainstorm

You are in SaaS UX/UI design mode.

Task:
- Ask at most 2 clarifying questions only if necessary.
- Propose 3 options:
  A) Simple & familiar
  B) Balanced & optimized (recommended)
  C) Advanced (only if clearly justified)

For each option include:
- Core idea
- Information hierarchy (what users see first, second, third)
- Layout structure (ASCII wireframe)
- Key interactions
- States: empty, loading, error, success
- Trade-offs (clarity vs power, density vs scannability)

Context:
[USER INPUT]`

const CMD_UX_REDESIGN = `# ux-redesign

Propose 2–3 fundamentally different layout or information architecture alternatives
for the same SaaS UI.

For each alternative:
- Core principle
- ASCII wireframe
- Information hierarchy
- Key interactions
- Pros / cons
- When this layout is better than the current one

Input:
[UI description or @files]`

const CMD_USER_STORIES = `# user-stories

Convert this validated SaaS UX flow into small, vertical user stories
using the Hamburger method.

Output:
- User stories (As a…, I want…, so that…)
- Acceptance criteria
- Clear scope boundaries

Input:
[Flow description]`

const CLAUDE_CODE_CMD = `claude mcp add titands --transport http https://mcp-remote-worker.titands.workers.dev/mcp`

const WHAT_CAN_YOU_ASK = [
  { ask: 'Build a settings page with sidebar navigation, form fields, and a save button', result: 'Generates a full page layout using Titan components and tokens' },
  { ask: 'Create a login form with the Demand theme', result: 'Builds a themed form using composition patterns' },
  { ask: 'Show me all available button variants and when to use each one', result: 'Returns component details: props, states, slots' },
  { ask: 'Create a report list page with filters, table, and pagination', result: 'Combines multiple compositions into a real SaaS pattern' },
  { ask: 'Review this code and check it follows Titan rules', result: 'Validates against design system rules and auto-rewrites spacing' },
  { ask: 'Bootstrap a new Vite + React project with the insights theme', result: 'Returns ready-to-paste setup: fonts, CSS links, theme config' },
  { ask: 'Sync the latest Titan foundations data', result: 'Refreshes components, patterns, and tokens from the repo' },
]

const AVAILABLE_TOOLS = [
  { tool: 'titan_setup', purpose: 'Auto-setup project: npm install + write skill files', progressive: '—' },
  { tool: 'titan_syncFromGithub', purpose: 'Refresh live data from the titan-foundations repo', progressive: '—' },
  { tool: 'titan_getTheme', purpose: 'Resolve theme, get bootstrap snippets or full CSS', progressive: 'include=summary|bootstrap|css|all' },
  { tool: 'titan_getOverview', purpose: 'Architecture, workflow, available components/patterns', progressive: "Lightweight summary by default; include='full' for details" },
  { tool: 'titan_getComponentRegistry', purpose: 'Know WHAT components exist', progressive: "Names only by default; component='X' for full props/slots" },
  { tool: 'titan_getCompositionPattern', purpose: 'Know HOW to combine components into screens', progressive: "Compact index by default; pattern='X' for full JSX recipe" },
  { tool: 'titan_validateAndRewrite', purpose: 'Validate code against Titan rules + auto-rewrite spacing', progressive: '—' },
  { tool: 'titan_getFoundations', purpose: 'Foundation tokens + semantic token categories', progressive: '—' },
]

const SUPPORTED_THEMES = [
  { theme: 'insights', product: 'Default. Used when no theme is specified.' },
  { theme: 'audiense', product: 'Audiense core' },
  { theme: 'demand', product: 'Demand product' },
  { theme: 'linkedin', product: 'LinkedIn integration' },
  { theme: 'tweetbinder', product: 'TweetBinder' },
  { theme: 'digital', product: 'Digital product' },
  { theme: 'neutral', product: 'Neutral / white-label' },
  { theme: 'default', product: 'Generic fallback' },
]

const TROUBLESHOOTING = [
  { problem: 'MCP shows "failed" or "not authenticated"', solution: 'Check the URL ends in /mcp (not /sse). No auth is required.' },
  { problem: 'Components seem outdated', solution: 'Ask: "Sync the latest Titan foundations data"' },
  { problem: "AI doesn't use Titan tokens", solution: 'Ask: "Review this code and check it follows Titan rules"' },
  { problem: "Claude Code can't connect", solution: 'Run claude mcp add titands --transport http https://mcp-remote-worker.titands.workers.dev/mcp' },
]

function SetupGuide() {
  return (
    <div className="setup-guide">
      <h1>Titan Design System MCP</h1>

      {/* ── What is this? ── */}
      <section className="setup-section">
        <h2>What is this?</h2>
        <p>The Titan MCP connects your AI editor (Cursor or Claude Code) to the Titan Design System. It gives the AI full knowledge of components, tokens, patterns, themes, and validation rules — so you can build UIs by just describing what you want.</p>
      </section>

      {/* ── 1. Install ── */}
      <section className="setup-section">
        <h2>1. Install</h2>

        <h3>Cursor</h3>
        <ol className="setup-steps">
          <li>Open <strong>Cursor → Settings → Cursor Settings</strong></li>
          <li>Go to the <strong>MCP</strong> tab</li>
          <li>Click <strong>+ Add new global MCP server</strong></li>
          <li>Paste this and save:</li>
        </ol>
        <CodeBlock code={MCP_CONFIG} />

        <h3>Claude Code</h3>
        <p>Run this in your terminal:</p>
        <CodeBlock code={CLAUDE_CODE_CMD} />
      </section>

      {/* ── 2. First-time setup ── */}
      <section className="setup-section">
        <h2>2. First-time setup</h2>
        <p>After installing the MCP, ask the AI to set up your project:</p>
        <CodeBlock code={'"Set up this project for Titan"'} />
        <p>This runs <code>titan_setup</code>, which automatically:</p>
        <ul className="setup-auto-list">
          <li>Installs npm dependencies (<code>titan-compositions</code>, <code>react-aria-components</code>, <code>lucide-react</code>, <code>@tabler/icons-react</code>)</li>
          <li>Writes local skill files so the AI has offline Titan knowledge</li>
        </ul>
      </section>

      {/* ── 3. What can you ask? ── */}
      <section className="setup-section">
        <h2>3. What can you ask?</h2>
        <table className="setup-table">
          <thead>
            <tr>
              <th>What you say</th>
              <th>What happens</th>
            </tr>
          </thead>
          <tbody>
            {WHAT_CAN_YOU_ASK.map((row, i) => (
              <tr key={i}>
                <td>"{row.ask}"</td>
                <td>{row.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* ── 4. Available tools (8) ── */}
      <section className="setup-section">
        <h2>4. Available tools (8)</h2>
        <p>The MCP exposes these tools. You don't need to call them directly — the AI uses them automatically. But knowing them helps you understand what's possible.</p>
        <table className="setup-table">
          <thead>
            <tr>
              <th>Tool</th>
              <th>Purpose</th>
              <th>Progressive?</th>
            </tr>
          </thead>
          <tbody>
            {AVAILABLE_TOOLS.map((row, i) => (
              <tr key={i}>
                <td><code>{row.tool}</code></td>
                <td>{row.purpose}</td>
                <td>{row.progressive}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="setup-note">Progressive means the tool returns a lightweight response by default to save context, and full details only when requested. The AI handles this automatically.</p>
      </section>

      {/* ── 5. Cursor Commands ── */}
      <section className="setup-section">
        <h2>5. Cursor commands</h2>
        <p>Add these as custom commands in <strong>Cursor → Settings → Cursor Settings → Commands</strong>. Create a new <code>.md</code> file for each and paste the content.</p>

        <div className="setup-command">
          <h3><code>/refine-ui</code></h3>
          <p>Polish an existing interface without changing layout or structure. Improves typography, color balance, spacing, and visual hierarchy.</p>
          <CodeBlock code={CMD_REFINE_UI} />
        </div>

        <div className="setup-command">
          <h3><code>/ux-brainstorm</code></h3>
          <p>Get 3 design alternatives (simple, balanced, advanced) for any screen or flow.</p>
          <CodeBlock code={CMD_UX_BRAINSTORM} />
        </div>

        <div className="setup-command">
          <h3><code>/ux-redesign</code></h3>
          <p>Propose fundamentally different layout alternatives for the same UI.</p>
          <CodeBlock code={CMD_UX_REDESIGN} />
        </div>

        <div className="setup-command">
          <h3><code>/user-stories</code></h3>
          <p>Convert a validated UX flow into small, vertical user stories.</p>
          <CodeBlock code={CMD_USER_STORIES} />
        </div>
      </section>

      {/* ── 6. Cursor Rule ── */}
      <section className="setup-section">
        <h2>6. Cursor user rule</h2>
        <p>Add this as a User Rule in <strong>Cursor → Settings → Cursor Settings → Rules</strong>.</p>
        <CodeBlock code={RULE_SENIOR_UX} />
      </section>

      {/* ── 7. Supported themes ── */}
      <section className="setup-section">
        <h2>7. Supported themes</h2>
        <table className="setup-table">
          <thead>
            <tr>
              <th>Theme</th>
              <th>Product</th>
            </tr>
          </thead>
          <tbody>
            {SUPPORTED_THEMES.map((row, i) => (
              <tr key={i}>
                <td><code>{row.theme}</code></td>
                <td>{row.product}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="setup-note">To use a specific theme, just mention it in your prompt: "Build a dashboard with the demand theme".</p>
      </section>

      {/* ── Troubleshooting ── */}
      <section className="setup-section">
        <h2>Troubleshooting</h2>
        <table className="setup-table">
          <thead>
            <tr>
              <th>Problem</th>
              <th>Solution</th>
            </tr>
          </thead>
          <tbody>
            {TROUBLESHOOTING.map((row, i) => (
              <tr key={i}>
                <td>{row.problem}</td>
                <td>{row.solution}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}

const DEMO_SIDEBAR_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'users', label: 'Users', icon: User },
  { id: 'settings', label: 'Settings', icon: Settings },
  { id: 'notifications', label: 'Notifications', icon: Bell },
]

function SidebarDemo() {
  const [collapsed, setCollapsed] = useState(false)
  const [activeId, setActiveId] = useState('dashboard')

  return (
    <div className="sidebar-demo-wrap">
      <TitanSidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed((c) => !c)}
        activeId={activeId}
        onActiveChange={setActiveId}
      >
        <TitanSidebarHeader>Navigation</TitanSidebarHeader>
        {DEMO_SIDEBAR_ITEMS.map((item) => (
          <TitanSidebarItem key={item.id} id={item.id} icon={item.icon}>
            {item.label}
          </TitanSidebarItem>
        ))}
      </TitanSidebar>
      <div className="sidebar-demo-content">
        <p>Active: <strong>{activeId}</strong></p>
        <p>{collapsed ? 'Collapsed' : 'Expanded'}</p>
      </div>
    </div>
  )
}

function ShowcaseCard({ id, title, ariaImports, ariaDesc, ariaComponents, foundations, tokenGroups, code, children }) {
  return (
    <section id={id} className="card">
      <h2>{title}</h2>
      <div className="showcase-demo">{children}</div>
      <TitanTabs
        defaultSelectedKey="aria"
        items={[
          {
            id: 'aria',
            label: 'React Aria',
            content: (
              <div className="info-block">
                <code className="import-line">{ariaImports}</code>
                <p>{ariaDesc}</p>
                <h4>Components used</h4>
                <ul>
                  {ariaComponents.map((c) => (
                    <li key={c}><strong>{c}</strong></li>
                  ))}
                </ul>
              </div>
            ),
          },
          {
            id: 'foundations',
            label: 'Foundations',
            content: (
              <div className="info-block">
                {foundations.map((f, i) => (
                  <div key={i}>
                    <h4>{f.category}</h4>
                    <p>{f.detail}</p>
                  </div>
                ))}
              </div>
            ),
          },
          {
            id: 'tokens',
            label: 'Tokens',
            content: (
              <div className="info-block">
                {tokenGroups.map((g, i) => (
                  <TokenGroup key={i} label={g.label} tokens={g.tokens} />
                ))}
              </div>
            ),
          },
          {
            id: 'code',
            label: 'Code',
            content: <CodeBlock code={code} />,
          },
        ]}
      />
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Component source code strings                                      */
/* ------------------------------------------------------------------ */

const CODE_BREADCRUMB = `import { Breadcrumbs, Breadcrumb, Button } from 'react-aria-components'
import { ChevronRight } from 'lucide-react'

export function TitanBreadcrumb({ items, currentLabel, ariaLabel = 'Breadcrumb' }) {
  return (
    <Breadcrumbs className="breadcrumb-nav" aria-label={ariaLabel}>
      {items.map((item) => (
        <Breadcrumb key={item.id} className="breadcrumb-item">
          <Button className="breadcrumb-link" onPress={item.onPress}>
            {item.label}
          </Button>
          <span className="breadcrumb-separator" aria-hidden="true">
            <ChevronRight />
          </span>
        </Breadcrumb>
      ))}
      <Breadcrumb className="breadcrumb-item">
        <span className="breadcrumb-current" aria-current="page">
          {currentLabel}
        </span>
      </Breadcrumb>
    </Breadcrumbs>
  )
}`

const CODE_CARDGRID = `export function TitanCardGrid({ children }) {
  return <div className="cards-layout-grid">{children}</div>
}

export function TitanCard({ children, span = 16, className = '' }) {
  const spanClass = \`span-\${span}\`
  const merged = ['card', 'layout-card', spanClass, className].filter(Boolean).join(' ')
  return <article className={merged}>{children}</article>
}

// TitanBorderlessTable — pure HTML table, no React Aria
export function TitanBorderlessTable({ columns, rows }) {
  return (
    <div className="layout-table-wrap">
      <table className="table-borderless">
        <thead>
          <tr>
            {columns.map((col) => <th key={col.key} scope="col">{col.header}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              {columns.map((col) => (
                <td key={\`\${row.id}-\${col.key}\`}>{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}`

const CODE_BUTTONS = `import { Button } from 'react-aria-components'

const BUTTON_VARIANT_CLASS = {
  primary: 'btn btn-primary',
  secondary: 'btn btn-secondary',
  tertiary: 'btn btn-tertiary',
  link: 'btn btn-link-text',
  delete: 'btn btn-delete',
  'delete-secondary': 'btn btn-delete-secondary',
}

export function TitanButton({ variant = 'primary', className = '', icon, children, ...props }) {
  const baseClass = BUTTON_VARIANT_CLASS[variant]
  const withIconClass = icon ? 'with-icon' : ''
  const merged = [baseClass, withIconClass, className].filter(Boolean).join(' ')
  return (
    <Button className={merged} {...props}>
      {icon}
      {children}
    </Button>
  )
}

export function TitanIconButton({ variant = 'ghost', className = '', children, ...props }) {
  const ICON_VARIANT = { secondary: 'icon-secondary', ghost: 'icon-ghost', delete: 'icon-delete' }
  const merged = [ICON_VARIANT[variant], className].filter(Boolean).join(' ')
  return <Button className={merged} {...props}>{children}</Button>
}`

const CODE_PILLS = `import { Button } from 'react-aria-components'
import { X } from 'lucide-react'
import { getToneStyle } from './TitanButton'

export function TitanPill({ id, label, tone, onDismiss }) {
  return (
    <div className="pill" style={getToneStyle(tone, 'pill')}>
      <span>{label}</span>
      {onDismiss ? (
        <Button className="pill-close" aria-label={\`Remove \${label}\`} onPress={() => onDismiss(id)}>
          <X />
        </Button>
      ) : null}
    </div>
  )
}`

const CODE_TAGS = `import { getToneStyle } from './TitanButton'

export function TitanTag({ label, tone }) {
  return (
    <span className="tag-chip" style={getToneStyle(tone, 'tag')}>
      {label}
    </span>
  )
}`

const CODE_MENUS = `import { Button, Menu, MenuItem, MenuTrigger, Popover, SubmenuTrigger } from 'react-aria-components'
import { ChevronDown, ChevronRight } from 'lucide-react'

function TitanMenuNode({ item, onAction }) {
  if (item.children?.length) {
    return (
      <SubmenuTrigger>
        <MenuItem className="menu-item" textValue={item.label}>
          <span className="menu-item-start">
            {item.icon && <span className="menu-item-icon">{item.icon}</span>}
            <span>{item.label}</span>
          </span>
          <span className="menu-item-end" aria-hidden="true"><ChevronRight /></span>
        </MenuItem>
        <Popover className="menu-popover menu-popover-submenu" placement="end top">
          <Menu className="menu-list">
            {item.children.map((child) => (
              <TitanMenuNode key={child.id} item={child} onAction={onAction} />
            ))}
          </Menu>
        </Popover>
      </SubmenuTrigger>
    )
  }
  return (
    <MenuItem
      className={item.destructive ? 'menu-item menu-item-destructive' : 'menu-item'}
      textValue={item.label}
      isDisabled={item.disabled}
      onAction={() => onAction?.(item.id)}
    >
      <span className="menu-item-start">
        {item.icon && <span className="menu-item-icon">{item.icon}</span>}
        <span>{item.label}</span>
      </span>
    </MenuItem>
  )
}

export function TitanMenuDropdown({ triggerLabel, triggerIcon, iconOnly, placement, items, onAction }) {
  return (
    <MenuTrigger>
      {iconOnly ? (
        <Button className="icon-ghost menu-trigger-icon-ghost" aria-label={triggerLabel}>
          {triggerIcon}
        </Button>
      ) : (
        <Button className="btn btn-secondary menu-trigger-button">
          {triggerLabel}
          <span className="menu-trigger-chevron" aria-hidden="true"><ChevronDown /></span>
        </Button>
      )}
      <Popover className="menu-popover" placement={placement}>
        <Menu className="menu-list">
          {items.map((item) => <TitanMenuNode key={item.id} item={item} onAction={onAction} />)}
        </Menu>
      </Popover>
    </MenuTrigger>
  )
}`

const CODE_SELECT = `import { Button, Label, ListBox, ListBoxItem, Popover, Select, SelectValue } from 'react-aria-components'
import { ChevronDown } from 'lucide-react'

export function TitanSelect({ label, options, defaultSelectedKey, isDisabled = false }) {
  return (
    <Select className="select-root" defaultSelectedKey={defaultSelectedKey} isDisabled={isDisabled}>
      <Label className="select-label">{label}</Label>
      <Button className="select-trigger">
        <SelectValue />
        <span className="select-trigger-chevron" aria-hidden="true"><ChevronDown /></span>
      </Button>
      <Popover className="select-popover" placement="bottom start">
        <ListBox className="select-list">
          {options.map((option) => (
            <ListBoxItem key={option.id} id={option.id} className="select-item"
              isDisabled={option.disabled} textValue={option.label}>
              <span className="select-item-start">
                {option.icon && <span className="select-item-icon">{option.icon}</span>}
                <span>{option.label}</span>
              </span>
            </ListBoxItem>
          ))}
        </ListBox>
      </Popover>
    </Select>
  )
}`

const CODE_TABS = `import { Tab, TabList, TabPanel, Tabs } from 'react-aria-components'

export function TitanTabs({ items, defaultSelectedKey, overflow, orientation = 'horizontal', ariaLabel = 'Tabs' }) {
  const isVertical = orientation === 'vertical'
  const rootClass = isVertical ? 'tabs-root tabs-root-vertical'
    : overflow ? 'tabs-root tabs-root-overflow' : 'tabs-root'
  const listClass = isVertical ? 'tabs-list tabs-list-vertical'
    : overflow ? 'tabs-list tabs-list-scroll' : 'tabs-list'

  return (
    <Tabs className={rootClass} defaultSelectedKey={defaultSelectedKey} orientation={orientation}>
      <TabList className={listClass} aria-label={ariaLabel}>
        {items.map((item) => (
          <Tab key={item.id} id={item.id}
            className={isVertical ? 'tab-trigger tab-trigger-vertical' : 'tab-trigger'}
            isDisabled={item.disabled}>
            {item.label}
          </Tab>
        ))}
      </TabList>
      {items.map((item) => (
        <TabPanel key={item.id} id={item.id} className="tab-panel">{item.content}</TabPanel>
      ))}
    </Tabs>
  )
}`

const CODE_PAGINATION = `import { Button } from 'react-aria-components'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function TitanPagination({ ariaLabel, pages, currentPage, previousDisabled, nextDisabled, onPageChange, onPrevious, onNext }) {
  return (
    <nav className="pagination-nav" aria-label={ariaLabel}>
      <Button className="pagination-button pagination-nav-button" isDisabled={previousDisabled}
        aria-label="Previous page" onPress={onPrevious}>
        <ChevronLeft />
      </Button>
      {pages.map((page, i) =>
        page === 'ellipsis' ? (
          <span key={\`ellipsis-\${i}\`} className="pagination-ellipsis" aria-hidden="true">...</span>
        ) : (
          <Button key={\`\${ariaLabel}-\${page}\`}
            className={page === currentPage
              ? 'pagination-button pagination-page-button pagination-page-button-selected'
              : 'pagination-button pagination-page-button'}
            aria-current={page === currentPage ? 'page' : undefined}
            onPress={() => onPageChange?.(page)}>
            {page}
          </Button>
        )
      )}
      <Button className="pagination-button pagination-nav-button" isDisabled={nextDisabled}
        aria-label="Next page" onPress={onNext}>
        <ChevronRight />
      </Button>
    </nav>
  )
}`

const CODE_DRAWER = `import { Button, Dialog, DialogTrigger, Modal, ModalOverlay } from 'react-aria-components'
import { X } from 'lucide-react'

export function TitanDrawer({ triggerLabel, title, children }) {
  return (
    <DialogTrigger>
      <Button className="btn btn-secondary">{triggerLabel}</Button>
      <ModalOverlay isDismissable className="drawer-overlay">
        <Modal className="drawer-modal">
          <Dialog className="drawer-panel">
            {({ close }) => (
              <>
                <header className="drawer-header">
                  <h3 className="drawer-title">{title}</h3>
                  <Button className="icon-ghost drawer-close-button" aria-label="Close drawer" onPress={close}>
                    <X />
                  </Button>
                </header>
                <div className="drawer-body">{children}</div>
              </>
            )}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  )
}`

const CODE_DIALOG = `import { Button, Dialog, DialogTrigger, Modal, ModalOverlay } from 'react-aria-components'

export function TitanDialog({ triggerLabel, title, body, leftAction, rightAction }) {
  return (
    <DialogTrigger>
      <Button className="btn btn-secondary">{triggerLabel}</Button>
      <ModalOverlay isDismissable className="dialog-overlay">
        <Modal className="dialog-modal">
          <Dialog className="dialog-panel">
            <header className="dialog-header">
              <h3 className="dialog-title">{title}</h3>
            </header>
            <div className="dialog-body">{body}</div>
            <footer className="dialog-footer">
              {leftAction}
              {rightAction}
            </footer>
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  )
}`

const CODE_TOOLTIP = `import { Tooltip, TooltipTrigger } from 'react-aria-components'

export function TitanTooltip({ content, children, delay = 0, closeDelay = 0 }) {
  return (
    <TooltipTrigger delay={delay} closeDelay={closeDelay}>
      {children}
      <Tooltip className="tooltip-box">{content}</Tooltip>
    </TooltipTrigger>
  )
}`

const CODE_TOASTS = `import { Button } from 'react-aria-components'
import { X } from 'lucide-react'

export function TitanToastRegion({ toasts, onDismiss }) {
  return (
    <div className="toast-region" role="region" aria-label="Notifications" aria-live="polite">
      {toasts.map((toast) => (
        <article key={toast.id} className={\`toast-card toast-\${toast.variant}\`} role="status">
          <div className="toast-content">
            {toast.icon && <span className="toast-icon" aria-hidden="true">{toast.icon}</span>}
            <div className="toast-text">
              <strong>{toast.title}</strong>
              <span>{toast.body}</span>
            </div>
          </div>
          <Button className="icon-ghost toast-close-button" aria-label="Dismiss toast"
            onPress={() => onDismiss(toast.id)}>
            <X />
          </Button>
        </article>
      ))}
    </div>
  )
}`

const CODE_TOGGLE = `import { ToggleButton, ToggleButtonGroup } from 'react-aria-components'

export function TitanToggleButtonGroup({ items, selectedKey, defaultSelectedKey, onSelectionChange, ariaLabel = 'Options' }) {
  return (
    <ToggleButtonGroup
      className="toggle-button-group"
      selectionMode="single"
      selectedKeys={selectedKey ? new Set([selectedKey]) : undefined}
      defaultSelectedKeys={defaultSelectedKey ? new Set([defaultSelectedKey]) : undefined}
      onSelectionChange={(keys) => {
        const selected = [...keys][0]
        if (selected && onSelectionChange) onSelectionChange(String(selected))
      }}
      aria-label={ariaLabel}
    >
      {items.map((item) => (
        <ToggleButton key={item.id} id={item.id} className="toggle-button-item">
          {item.icon && item.iconPosition !== 'right' && <span className="toggle-button-icon">{item.icon}</span>}
          <span>{item.label}</span>
          {item.icon && item.iconPosition === 'right' && <span className="toggle-button-icon">{item.icon}</span>}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}`

const CODE_TWOUPONEDOWN = `import { TitanTwoUpOneDownLayout } from 'titan-compositions'

<TitanTwoUpOneDownLayout
  theme="insights"
  breadcrumbItems={[{ id: 'home', label: 'Home' }, { id: 'reports', label: 'Reports' }]}
  breadcrumbCurrentLabel="Overview"
  leftTop={<div>Left panel content</div>}
  rightTop={<div>Right panel content</div>}
  bottom={<div>Full-width bottom content</div>}
/>`

const CODE_FORM_CONTROLS = `import { Checkbox, Label, Radio, RadioGroup, Switch } from 'react-aria-components'
import { Check } from 'lucide-react'

export function TitanCheckboxField({ label, isDisabled = false, defaultSelected = false }) {
  return (
    <Checkbox className="checkbox-root" isDisabled={isDisabled} defaultSelected={defaultSelected}>
      <span className="checkbox-box">
        <Check className="checkbox-mark" />
      </span>
      <span className="choice-text">{label}</span>
    </Checkbox>
  )
}

export function TitanRadioGroupField({ label, options, defaultValue }) {
  return (
    <RadioGroup className="choice-group" defaultValue={defaultValue}>
      <Label className="choice-group-label">{label}</Label>
      <div className="choice-list">
        {options.map((opt) => (
          <Radio key={opt.value} className="radio-root" value={opt.value} isDisabled={opt.disabled}>
            <span className="radio-box"><span className="radio-dot" /></span>
            <span className="choice-text">{opt.label}</span>
          </Radio>
        ))}
      </div>
    </RadioGroup>
  )
}

export function TitanSwitchField({ label, isDisabled = false, defaultSelected = false }) {
  return (
    <Switch className="switch-root" isDisabled={isDisabled} defaultSelected={defaultSelected}>
      <span className="choice-text">{label}</span>
      <span className="switch-track"><span className="switch-thumb" /></span>
    </Switch>
  )
}`

const CODE_INPUTS = `import { FieldError, Group, Input, Label, Text, TextArea, TextField } from 'react-aria-components'

export function TitanInputField({ label, hint, counter, leadingIcon, trailingIcon, errorMessage, placeholder, className = 'field-root', ...props }) {
  const iconClass = ['input-with-icons',
    leadingIcon ? 'input-with-icons-left' : '',
    trailingIcon ? 'input-with-icons-right' : '',
  ].filter(Boolean).join(' ')

  return (
    <TextField className={className} {...props}>
      {label && <Label className="field-label">{label}</Label>}
      {leadingIcon || trailingIcon ? (
        <Group className={iconClass}>
          {leadingIcon && <span className="input-leading-icon">{leadingIcon}</span>}
          <Input className="input-field" placeholder={placeholder} />
          {trailingIcon && <span className="input-trailing-icon">{trailingIcon}</span>}
        </Group>
      ) : (
        <Input className="input-field" placeholder={placeholder} />
      )}
      {(hint || counter) && (
        <div className="field-help-row">
          {hint ? <Text slot="description" className="field-hint">{hint}</Text> : <span />}
          {counter && <span className="field-counter">{counter}</span>}
        </div>
      )}
      {errorMessage && <FieldError className="field-error">{errorMessage}</FieldError>}
    </TextField>
  )
}

export function TitanTextareaField({ label, hint, counter, errorMessage, placeholder, className = 'field-root', ...props }) {
  return (
    <TextField className={className} {...props}>
      {label && <Label className="field-label">{label}</Label>}
      <TextArea className="textarea-field" placeholder={placeholder} />
      {(hint || counter) && (
        <div className="field-help-row">
          {hint ? <Text slot="description" className="field-hint">{hint}</Text> : <span />}
          {counter && <span className="field-counter">{counter}</span>}
        </div>
      )}
      {errorMessage && <FieldError className="field-error">{errorMessage}</FieldError>}
    </TextField>
  )
}`

const CODE_LOADER = `export function TitanLoader({ size = 120, label = 'Loading…', className = '', style }) {
  return (
    <div className="titan-loader" role="status" aria-label={label} style={style}>
      <img
        className="titan-loader-img"
        src="/assets/logos/loader-l.gif"
        alt="" aria-hidden="true"
        width={size} height={size}
        style={{ width: size, height: size }}
      />
      <span className="titan-loader-sr-only">{label}</span>
    </div>
  )
}`

const CODE_SLIDER = `import { Slider, SliderThumb, SliderTrack, SliderOutput, Label } from 'react-aria-components'

export function TitanSlider({ label, defaultValue = 50, minValue = 0, maxValue = 100, step = 1, isDisabled, showOutput = true, onChange }) {
  return (
    <Slider className="slider-root" defaultValue={defaultValue} minValue={minValue} maxValue={maxValue} step={step} isDisabled={isDisabled} onChange={onChange}>
      <div className="slider-header">
        {label && <Label className="slider-label">{label}</Label>}
        {showOutput && <SliderOutput className="slider-output" />}
      </div>
      <SliderTrack className="slider-track">
        {({ state }) => (
          <>
            <div className="slider-track-fill" style={{ width: state.getThumbPercent(0) * 100 + '%' }} />
            <SliderThumb className="slider-thumb" index={0} />
          </>
        )}
      </SliderTrack>
    </Slider>
  )
}`

const CODE_RANGE_SLIDER = `export function TitanRangeSlider({ label, defaultValue = [20, 80], minValue = 0, maxValue = 100, step = 1, isDisabled, showOutput = true, onChange }) {
  return (
    <Slider className="slider-root slider-root-range" defaultValue={defaultValue} minValue={minValue} maxValue={maxValue} step={step} isDisabled={isDisabled} onChange={onChange}>
      <div className="slider-header">
        {label && <Label className="slider-label">{label}</Label>}
        {showOutput && <SliderOutput className="slider-output" />}
      </div>
      <SliderTrack className="slider-track">
        {({ state }) => {
          const left = state.getThumbPercent(0) * 100
          const right = state.getThumbPercent(1) * 100
          return (
            <>
              <div className="slider-track-fill" style={{ left: left + '%', width: (right - left) + '%' }} />
              <SliderThumb className="slider-thumb" index={0} />
              <SliderThumb className="slider-thumb" index={1} />
            </>
          )
        }}
      </SliderTrack>
    </Slider>
  )
}`

const CODE_PROGRESS = `import { ProgressBar, Label } from 'react-aria-components'

export function TitanProgressBar({ label, value = 0, minValue = 0, maxValue = 100, showValue = true }) {
  const percent = ((value - minValue) / (maxValue - minValue)) * 100
  return (
    <ProgressBar className="progress-root" value={value} minValue={minValue} maxValue={maxValue}>
      {({ valueText }) => (
        <>
          <div className="progress-header">
            {label && <Label className="progress-label">{label}</Label>}
            {showValue && <span className="progress-value">{valueText}</span>}
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: percent + '%' }} />
          </div>
        </>
      )}
    </ProgressBar>
  )
}`

const CODE_CALENDAR = `import { Calendar, CalendarGrid, CalendarGridHeader, CalendarGridBody, CalendarHeaderCell, CalendarCell, Button } from 'react-aria-components'
import { today, getLocalTimeZone } from '@internationalized/date'

export function TitanCalendar({ defaultValue, value, onChange, showTime = false, isDisabled, className = '' }) {
  const [focusedDate, setFocusedDate] = useState(value ?? defaultValue ?? today(getLocalTimeZone()))

  const months = useMemo(() => {
    const fmt = new Intl.DateTimeFormat(undefined, { month: 'long' })
    return Array.from({ length: 12 }, (_, i) => ({ value: i + 1, label: fmt.format(new Date(2024, i, 1)) }))
  }, [])

  return (
    <div className="calendar-wrapper">
      <Calendar focusedValue={focusedDate} onFocusChange={setFocusedDate} value={value} onChange={onChange} isDisabled={isDisabled}>
        <header className="calendar-header">
          <Button slot="previous" className="calendar-nav-btn">‹</Button>
          <div className="calendar-selects">
            <select value={focusedDate.month} onChange={(e) => setFocusedDate(focusedDate.set({ month: +e.target.value }))}>
              {months.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
            </select>
            <select value={focusedDate.year} onChange={(e) => setFocusedDate(focusedDate.set({ year: +e.target.value }))}>
              {years.map(y => <option key={y} value={y}>{y}</option>)}
            </select>
          </div>
          <Button slot="next" className="calendar-nav-btn">›</Button>
        </header>
        <CalendarGrid className="calendar-grid">
          <CalendarGridHeader>{(day) => <CalendarHeaderCell className="calendar-header-cell" />}</CalendarGridHeader>
          <CalendarGridBody>{(date) => <CalendarCell date={date} className="calendar-cell" />}</CalendarGridBody>
        </CalendarGrid>
      </Calendar>
    </div>
  )
}`

const CODE_NAVBAR = `import { Button } from 'react-aria-components'
import { Bell, ChevronDown, CircleHelp, Grip, Handshake, Settings, Sparkles } from 'lucide-react'

export function TitanNavbar({ theme = 'insights', userInitial = 'A', logoAlt, logoBasePath, onChangeProduct, onNotifications, onSupport, onHelp, onSettings, onFeaturedAction, onUserMenu }) {
  const logoFile = THEME_TO_LOGO[theme]
  return (
    <header className="navbar" role="banner">
      <div className="navbar-inner">
        <div className="navbar-left-group">
          <Button className="icon-ghost navbar-icon-button" aria-label="Change product" onPress={onChangeProduct}><Grip /></Button>
          <img className="navbar-logo" src={\`\${logoBasePath}/\${logoFile}\`} alt={logoAlt} />
        </div>
        <div className="navbar-right-group">
          <Button className="icon-ghost navbar-icon-button" aria-label="Notifications" onPress={onNotifications}><Bell /></Button>
          {/* ... Handshake, CircleHelp, Settings, Sparkles, avatar + chevron ... */}
        </div>
      </div>
    </header>
  )
}`

const CODE_SIDEBAR = `import { createContext, useContext, useState, useCallback } from 'react'
import { Button } from 'react-aria-components'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const SidebarContext = createContext({ collapsed: false, activeId: null, setActiveId: () => {} })

export function TitanSidebar({ collapsed = false, onToggle, defaultActiveId, onActiveChange, children }) {
  const [activeId, setUncontrolled] = useState(defaultActiveId ?? null)
  const setActiveId = useCallback((id) => { setUncontrolled(id); onActiveChange?.(id) }, [onActiveChange])

  return (
    <SidebarContext.Provider value={{ collapsed, activeId, setActiveId }}>
      <aside className="titan-sidebar" {...(collapsed ? { 'data-collapsed': '' } : {})}>
        {onToggle && (
          <Button className="titan-sidebar-toggle" onPress={onToggle}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}>
            {collapsed ? <ChevronRight /> : <ChevronLeft />}
          </Button>
        )}
        {children}
      </aside>
    </SidebarContext.Provider>
  )
}

export function TitanSidebarHeader({ children }) {
  return <div className="titan-sidebar-header">{children}</div>
}

export function TitanSidebarItem({ id, icon: Icon, onPress, children }) {
  const { collapsed, activeId, setActiveId } = useContext(SidebarContext)
  const isActive = activeId === id
  return (
    <Button className="titan-sidebar-item" data-active={isActive ? 'true' : undefined}
      aria-current={isActive ? 'page' : undefined}
      aria-label={collapsed && typeof children === 'string' ? children : undefined}
      onPress={() => { setActiveId(id); onPress?.() }}>
      {Icon && <Icon />}
      <span className="titan-sidebar-item-label">{children}</span>
    </Button>
  )
}`

/* ------------------------------------------------------------------ */
/*  App                                                                */
/* ------------------------------------------------------------------ */

function App() {
  const [activeView, setActiveView] = useState('components')
  const [theme, setTheme] = useState('insights')
  const [pills, setPills] = useState(INITIAL_PILL_ITEMS)
  const [toasts, setToasts] = useState([])
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const toastIdRef = useRef(0)
  const mainScrollRef = useRef(null)

  const tableRows = useMemo(
    () => [
      { id: 'r1', creator: 'Luna Media', network: 'Instagram', engagement: '6.7%' },
      { id: 'r2', creator: 'North Spark', network: 'TikTok', engagement: '4.1%' },
      { id: 'r3', creator: 'Daily Scope', network: 'YouTube', engagement: '8.2%' },
      { id: 'r4', creator: 'Urban Pulse', network: 'X', engagement: '3.5%' },
    ],
    []
  )
  const tableColumns = useMemo(
    () => [
      { key: 'creator', header: 'Creator' },
      { key: 'network', header: 'Network' },
      { key: 'engagement', header: 'Engagement' },
    ],
    []
  )

  function pushToast(variant) {
    const id = toastIdRef.current + 1
    toastIdRef.current = id
    const map = {
      success: { title: 'Saved successfully', body: 'Your dashboard filters were updated.', icon: <CheckCircle2 /> },
      error: { title: 'Could not save', body: 'Check required fields and try again.', icon: <AlertCircle /> },
      info: { title: 'Heads up', body: 'Sync is running in the background.', icon: <Info /> },
      warning: { title: 'Review needed', body: 'Some fields need your attention.', icon: <AlertTriangle /> },
    }
    setToasts((prev) => [...prev, { id, variant, ...map[variant] }])
  }

  function dismissToast(id) {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }

  function dismissPill(id) {
    setPills((prev) => prev.filter((p) => p.id !== id))
  }

  function scrollTo(sectionId) {
    const main = mainScrollRef.current
    const section = document.getElementById(sectionId)
    if (!main || !section || !main.contains(section)) return
    const top = section.getBoundingClientRect().top - main.getBoundingClientRect().top + main.scrollTop
    main.scrollTo({ top, behavior: 'smooth' })
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    const lock = () => window.scrollTo(0, 0)
    window.addEventListener('scroll', lock)
    return () => window.removeEventListener('scroll', lock)
  }, [])

  return (
    <>
      <div className="app-top-bar">
        <h1 className="app-top-title">Titan Design System MCP</h1>
        <div className="app-top-nav">
        <button
          className={`app-top-tab${activeView === 'components' ? ' app-top-tab-active' : ''}`}
          onClick={() => setActiveView('components')}
        >Components</button>
        <button
          className={`app-top-tab${activeView === 'setup' ? ' app-top-tab-active' : ''}`}
          onClick={() => setActiveView('setup')}
        >How to set up Titan</button>
        </div>
      </div>

      {activeView === 'setup' ? (
        <main className="page setup-page">
          <SetupGuide />
        </main>
      ) : (
      <div className="app-layout">
        <TitanSidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed((c) => !c)}
          defaultActiveId="navbar"
          onActiveChange={scrollTo}
        >
          {NAV_ITEMS.map((nav) => (
            <TitanSidebarItem key={nav.id} id={nav.id} icon={nav.icon}>
              {nav.label}
            </TitanSidebarItem>
          ))}
        </TitanSidebar>

        <main ref={mainScrollRef} className="page">
          {/* Page title + theme */}
          <section className="card theme-selector-card">
            <h1>Titan</h1>
            <TitanSelect
              label="Theme"
              options={THEMES.map((t) => ({ id: t, label: t }))}
              selectedKey={theme}
              onSelectionChange={(key) => setTheme(String(key))}
            />
          </section>

          {/* ── Navbar (composition) ───────────────────────── */}
          <ShowcaseCard
            id="navbar"
            title="Navbar"
            ariaImports="import { Button } from 'react-aria-components'"
            ariaDesc="TitanNavbar is a top bar composition: logo + nav actions (notifications, help, settings, etc.) and user menu. Themed via theme prop; logo path configurable."
            ariaComponents={['Button']}
            foundations={[
              { category: 'Sizing', detail: '--navbar-slot-height, --layout-navbar-width, --navbar-slot-logo-max-height.' },
              { category: 'Surface', detail: '--navbar-slot-bg, --navbar-slot-border.' },
              { category: 'Spacing', detail: '--navbar-slot-pad-x, --navbar-slot-pad-y.' },
              { category: 'Typography', detail: 'Logo and actions use button/icon tokens.' },
            ]}
            tokenGroups={[
              { label: 'Container', tokens: ['--navbar-slot-bg', '--navbar-slot-border', '--navbar-slot-height', '--layout-navbar-width'] },
              { label: 'Logo', tokens: ['--navbar-slot-logo-max-height'] },
              { label: 'Padding', tokens: ['--navbar-slot-pad-x', '--navbar-slot-pad-y'] },
            ]}
            code={CODE_NAVBAR}
          >
            <div className="navbar-demo-wrap">
              <TitanNavbar theme={theme} userInitial="A" />
            </div>
          </ShowcaseCard>

          {/* ── 1. Breadcrumb ──────────────────────────────── */}
          <ShowcaseCard
            id="breadcrumb"
            title="Breadcrumb"
            ariaImports="import { Breadcrumbs, Breadcrumb, Button } from 'react-aria-components'"
            ariaDesc="Uses React Aria Breadcrumbs for an accessible navigation landmark. Each item uses Breadcrumb + Button for keyboard navigation, and the current page is marked with aria-current='page'."
            ariaComponents={['Breadcrumbs', 'Breadcrumb', 'Button']}
            foundations={[
              { category: 'Spacing', detail: '--spacing-xl and --spacing-2xs for height calculation and item gaps.' },
              { category: 'Typography', detail: '--button-slot-font-size, --button-slot-line-height, --button-slot-font-weight for consistent text sizing with the button scale.' },
              { category: 'Borders', detail: '--stroke-slot-width for the bottom separator line.' },
              { category: 'Icons', detail: '--icon-size-s and --icon-stroke-s for the ChevronRight separator icon.' },
            ]}
            tokenGroups={[
              { label: 'Color', tokens: ['--text-link', '--text-link-hover', '--text-muted', '--divider-strong', '--color-black-200'] },
              { label: 'Layout', tokens: ['--spacing-xl', '--spacing-2xs', '--stroke-slot-width'] },
              { label: 'Typography', tokens: ['--button-slot-font-size', '--button-slot-line-height', '--button-slot-font-weight', '--button-slot-font-family'] },
              { label: 'Icons', tokens: ['--icon-size-s', '--icon-stroke-s'] },
            ]}
            code={CODE_BREADCRUMB}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
              <div>
                <div style={{ fontSize: '12px', color: '#888', marginBottom: 4 }}>Standard (3 items)</div>
                <TitanBreadcrumb
                  items={[
                    { id: 'home', label: 'Home' },
                    { id: 'creator', label: 'Creator discovery' },
                  ]}
                  currentLabel="Campaigns"
                />
              </div>
              <div>
                <div style={{ fontSize: '12px', color: '#888', marginBottom: 4 }}>Collapsed (7 items, max 5 visible)</div>
                <TitanBreadcrumb
                  items={[
                    { id: 'home', label: 'Home' },
                    { id: 'dashboard', label: 'Dashboard' },
                    { id: 'projects', label: 'Projects' },
                    { id: 'alpha', label: 'Alpha' },
                    { id: 'settings', label: 'Settings' },
                    { id: 'general', label: 'General' },
                  ]}
                  currentLabel="Notifications"
                  maxVisible={5}
                />
              </div>
              <div>
                <div style={{ fontSize: '12px', color: '#888', marginBottom: 4 }}>With disabled item</div>
                <TitanBreadcrumb
                  items={[
                    { id: 'home', label: 'Home' },
                    { id: 'archive', label: 'Archive', disabled: true },
                  ]}
                  currentLabel="Old reports"
                />
              </div>
            </div>
          </ShowcaseCard>

          {/* ── 2. Card Grid + Table ───────────────────────── */}
          <ShowcaseCard
            id="cardgrid"
            title="Card Grid + Table"
            ariaImports="// No React Aria — pure HTML (div, article, table)"
            ariaDesc="TitanCardGrid and TitanCard are pure layout primitives using a CSS 16-column grid. TitanBorderlessTable is semantic HTML <table> without any React Aria dependency."
            ariaComponents={['None — pure HTML div / article / table']}
            foundations={[
              { category: 'Spacing', detail: '--layout-grid-gap for column gaps; --spacing-2xs for internal card gaps; --dialog-slot-pad for card padding.' },
              { category: 'Surface', detail: '--color-white-900 card background; --color-black-300 card border; --card-slot-radius rounded corners.' },
              { category: 'Table', detail: '--table-slot-cell-pad-y / --table-slot-cell-pad-x for cell padding; --stroke-slot-width for separator lines.' },
              { category: 'Typography', detail: '--button-slot-font-size / --button-slot-line-height for cell text; --text-weight-semibold for headers, --text-weight-regular for cells.' },
            ]}
            tokenGroups={[
              { label: 'Card', tokens: ['--card-slot-border-width', '--card-slot-radius', '--dialog-slot-pad', '--color-white-900', '--color-black-300'] },
              { label: 'Grid', tokens: ['--layout-grid-gap', '--spacing-2xs', '--input-slot-height'] },
              { label: 'Table surface', tokens: ['--table-cell-background', '--table-row-hover', '--table-header-separator', '--table-row-separator'] },
              { label: 'Table text', tokens: ['--table-slot-header-color', '--table-slot-cell-color', '--text-weight-semibold', '--text-weight-regular'] },
              { label: 'Table spacing', tokens: ['--table-slot-cell-pad-y', '--table-slot-cell-pad-x', '--stroke-slot-width'] },
            ]}
            code={CODE_CARDGRID}
          >
            <TitanCardGrid>
              <TitanCard span={8}>
                <h3>Left 2/4</h3>
                <p>Card content imported from titan-compositions.</p>
              </TitanCard>
              <TitanCard span={8}>
                <h3>Right 2/4</h3>
                <p>Second card content imported from titan-compositions.</p>
              </TitanCard>
              <TitanCard span={16}>
                <h3>Bottom 4/4</h3>
                <TitanBorderlessTable columns={tableColumns} rows={tableRows} />
              </TitanCard>
            </TitanCardGrid>
          </ShowcaseCard>

          {/* ── 3. Buttons ─────────────────────────────────── */}
          <ShowcaseCard
            id="buttons"
            title="Buttons + Icon Buttons"
            ariaImports="import { Button } from 'react-aria-components'"
            ariaDesc="All button variants (primary, secondary, tertiary, link, delete) and icon buttons wrap React Aria's Button component, inheriting keyboard handling, press states (data-hovered, data-pressed, data-disabled), and ARIA semantics."
            ariaComponents={['Button']}
            foundations={[
              { category: 'Spacing', detail: '--button-slot-pad-x horizontal padding; --button-slot-gap icon-to-label gap; --spacing-s / --spacing-m / --spacing-4xs for with-icon variant padding.' },
              { category: 'Typography', detail: '--button-slot-font-size (14px), --button-slot-line-height (20px), --button-slot-font-weight (500).' },
              { category: 'Sizing', detail: '--button-slot-height-s minimum height; --button-slot-radius border radius; --button-icon-slot-size for icon-only buttons.' },
              { category: 'Icons', detail: '--icon-size-m (20px) and --icon-stroke-m (1.5) for inline SVGs.' },
              { category: 'Focus', detail: '--button-slot-focus-width, --button-slot-focus-color, --button-slot-focus-offset for visible focus ring.' },
            ]}
            tokenGroups={[
              { label: 'Shared', tokens: ['--button-slot-height-s', '--button-slot-radius', '--button-slot-pad-x', '--button-slot-gap', '--button-slot-font-size', '--button-slot-line-height', '--button-slot-font-weight'] },
              { label: 'Primary', tokens: ['--button-primary-slot-bg', '--button-primary-slot-label', '--button-primary-slot-bg-hover', '--button-primary-slot-bg-active', '--button-primary-slot-disabled-bg', '--button-primary-slot-disabled-label'] },
              { label: 'Secondary', tokens: ['--button-secondary-slot-bg', '--button-secondary-slot-label', '--button-secondary-slot-bg-hover', '--button-secondary-slot-label-hover', '--button-secondary-slot-bg-active', '--button-secondary-slot-label-active'] },
              { label: 'Tertiary', tokens: ['--button-tertiary-slot-bg', '--button-tertiary-slot-label', '--button-tertiary-slot-bg-hover', '--button-tertiary-slot-label-hover', '--button-tertiary-slot-bg-active', '--button-tertiary-slot-label-active'] },
              { label: 'Link', tokens: ['--text-link', '--text-link-hover'] },
              { label: 'Delete', tokens: ['--error-button-primary', '--error-button-primary-hover', '--error-button-primary-active', '--background-error', '--text-error-primary'] },
              { label: 'Icon buttons', tokens: ['--button-icon-slot-size', '--button-icon-slot-bg', '--button-icon-slot-icon', '--button-icon-slot-bg-hover', '--button-icon-slot-bg-active', '--button-icon-interactive-slot-bg', '--button-icon-interactive-slot-icon', '--button-icon-interactive-slot-radius'] },
              { label: 'Icons', tokens: ['--icon-size-m', '--icon-stroke-m'] },
            ]}
            code={CODE_BUTTONS}
          >
            <div className="row">
              <TitanButton variant="primary">Primary</TitanButton>
              <TitanButton variant="secondary">Secondary</TitanButton>
              <TitanButton variant="tertiary">Tertiary</TitanButton>
              <TitanButton variant="link" icon={<ArrowRight />}>Link button</TitanButton>
              <TitanButton variant="delete" icon={<Trash2 />}>Delete</TitanButton>
              <TitanButton variant="delete-secondary" icon={<Trash2 />}>Delete secondary</TitanButton>
              <TitanIconButton variant="secondary" aria-label="Add"><Plus /></TitanIconButton>
              <TitanIconButton variant="ghost" aria-label="Star"><Star /></TitanIconButton>
              <TitanIconButton variant="delete" aria-label="Delete"><Trash2 /></TitanIconButton>
            </div>
            <div className="row" style={{ marginTop: 'var(--spacing-s)' }}>
              <span style={{ fontSize: 'var(--font-size-s)', color: 'var(--copy-slot-secondary)', marginRight: 'var(--spacing-s)' }}>Disabled:</span>
              <TitanButton variant="primary" isDisabled>Primary</TitanButton>
              <TitanButton variant="secondary" isDisabled>Secondary</TitanButton>
              <TitanButton variant="tertiary" isDisabled>Tertiary</TitanButton>
              <TitanIconButton variant="secondary" aria-label="Add (disabled)" isDisabled><Plus /></TitanIconButton>
            </div>
          </ShowcaseCard>

          {/* ── 4. Pills ───────────────────────────────────── */}
          <ShowcaseCard
            id="pills"
            title="Pills"
            ariaImports="import { Button } from 'react-aria-components'"
            ariaDesc="The pill container is a plain div, but the dismiss/close button inside uses React Aria Button for accessible keyboard-operable removal with proper aria-label."
            ariaComponents={['Button (dismiss icon)']}
            foundations={[
              { category: 'Spacing', detail: '--pill-slot-pad-x for horizontal padding; --pill-slot-gap for label-to-close gap; --spacing-3xs for row gap between pills.' },
              { category: 'Typography', detail: '--button-slot-font-size, --button-slot-line-height for pill text; --text-weight-medium for label weight.' },
              { category: 'Sizing', detail: 'Dynamic min-height from --button-slot-line-height + --spacing-3xs + --stroke-slot-width. --icon-size-s for close icon.' },
              { category: 'Colors', detail: 'Tone-based system: maps tone names (teal, mango, ocean...) to --color-{tone}-100 (bg), --color-{tone}-700 (text), --color-{tone}-600 (icon). Semantic pills: success, error, alert, information, disabled.' },
            ]}
            tokenGroups={[
              { label: 'Pill structure', tokens: ['--pill-slot-bg', '--pill-slot-color', '--pill-slot-icon-color', '--pill-slot-radius', '--pill-slot-pad-x', '--pill-slot-gap'] },
              { label: 'Semantic tones', tokens: ['--pill-slot-success-bg', '--pill-slot-success-color', '--pill-slot-error-bg', '--pill-slot-error-color', '--pill-slot-alert-bg', '--pill-slot-information-bg'] },
              { label: 'Dynamic tones', tokens: ['--color-{tone}-100', '--color-{tone}-700', '--color-{tone}-600'] },
              { label: 'Close icon', tokens: ['--icon-size-s', '--icon-stroke-s'] },
            ]}
            code={CODE_PILLS}
          >
            <div className="pill-row">
              {pills.map((pill) => (
                <TitanPill key={pill.id} id={pill.id} label={pill.label} tone={pill.tone} onDismiss={dismissPill} />
              ))}
            </div>
          </ShowcaseCard>

          {/* ── 5. Tags ────────────────────────────────────── */}
          <ShowcaseCard
            id="tags"
            title="Tags / Labels"
            ariaImports="// No React Aria — pure HTML <span>"
            ariaDesc="Tags are non-interactive display-only labels. They use a plain <span> element with no React Aria dependency since they don't need keyboard or ARIA handling."
            ariaComponents={['None — pure HTML span']}
            foundations={[
              { category: 'Spacing', detail: '--pill-slot-pad-x for horizontal padding (shared with pill scale); --spacing-3xs for row gap.' },
              { category: 'Typography', detail: '--button-slot-font-size, --button-slot-line-height for consistent size; --text-weight-medium for label weight.' },
              { category: 'Colors', detail: 'Dynamic tone mapping: --color-{tone}-200 for background (darker than pills), --color-{tone}-600 for text. Defaults to --color-black-200 bg, --copy-slot-primary text.' },
              { category: 'Shape', detail: '--pill-slot-radius for rounded corners (shared with pill shape).' },
            ]}
            tokenGroups={[
              { label: 'Defaults', tokens: ['--color-black-200', '--copy-slot-primary'] },
              { label: 'Dynamic tones', tokens: ['--color-{tone}-200', '--color-{tone}-600'] },
              { label: 'Shared with Pill', tokens: ['--pill-slot-radius', '--pill-slot-pad-x'] },
              { label: 'Typography', tokens: ['--button-slot-font-size', '--button-slot-line-height', '--text-weight-medium'] },
            ]}
            code={CODE_TAGS}
          >
            <div className="tag-row">
              {TAG_ITEMS.map((item) => (
                <TitanTag key={item.tone} label={item.label} tone={item.tone} />
              ))}
            </div>
          </ShowcaseCard>

          {/* ── Badge ────────────────────────────────────────── */}
          <ShowcaseCard
            id="badge"
            title="Badge"
            ariaImports="// No React Aria — pure HTML <span>"
            ariaDesc="Badge is a non-interactive counter displayed over an icon or element. TitanBadgeAnchor positions the badge at the top-right corner of its child."
            ariaComponents={['None — pure HTML span']}
            foundations={[
              { category: 'Color', detail: '--badge-slot-bg (pomegranate-600 red); --badge-slot-color (white).' },
              { category: 'Sizing', detail: 'min-width 18px; padding controlled by --badge-slot-pad-x / --badge-slot-pad-y; --badge-slot-radius for rounded corners.' },
              { category: 'Typography', detail: '--badge-slot-font-size (body-s); --badge-slot-font-weight (600 semibold).' },
              { category: 'Position', detail: '--badge-slot-offset for top-right displacement when used inside TitanBadgeAnchor.' },
            ]}
            tokenGroups={[
              { label: 'Badge', tokens: ['--badge-slot-bg', '--badge-slot-color', '--badge-slot-radius', '--badge-slot-pad-x', '--badge-slot-pad-y', '--badge-slot-font-size', '--badge-slot-font-weight', '--badge-slot-offset'] },
            ]}
            code={`import { TitanBadge, TitanBadgeAnchor } from 'titan-compositions'

<TitanBadge count={5} />
<TitanBadgeAnchor count={3}>
  <TitanIconButton icon={<Bell />} variant="ghost" ariaLabel="Notifications" />
</TitanBadgeAnchor>`}
          >
            <div className="row" style={{ gap: '24px', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <TitanBadge count={3} />
                <span style={{ fontSize: 'var(--font-size-s)', color: '#888' }}>count=3</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <TitanBadge count={128} max={99} />
                <span style={{ fontSize: 'var(--font-size-s)', color: '#888' }}>99+</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <TitanBadgeAnchor count={5}>
                  <TitanIconButton icon={<Bell />} variant="ghost" ariaLabel="Notifications" />
                </TitanBadgeAnchor>
                <span style={{ fontSize: 'var(--font-size-s)', color: '#888' }}>Anchor + icon</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <TitanBadgeAnchor count={0}>
                  <TitanIconButton icon={<Bell />} variant="ghost" ariaLabel="Notifications" />
                </TitanBadgeAnchor>
                <span style={{ fontSize: 'var(--font-size-s)', color: '#888' }}>count=0 (hidden)</span>
              </div>
            </div>
          </ShowcaseCard>

          {/* ── 6. Menus ───────────────────────────────────── */}
          <ShowcaseCard
            id="menus"
            title="Menus"
            ariaImports="import { Button, Menu, MenuItem, MenuTrigger, Popover, Separator, SubmenuTrigger } from 'react-aria-components'"
            ariaDesc="Full menu system: standard items, submenus, destructive actions, search results with highlighting, profile items with avatars, and notification menus. All built on React Aria with keyboard navigation, ARIA roles, and collision-aware positioning."
            ariaComponents={['MenuTrigger', 'Button', 'Popover', 'Menu', 'MenuItem', 'Separator', 'SubmenuTrigger']}
            foundations={[
              { category: 'Spacing', detail: '--menu-slot-pad-y (10px) / --menu-slot-pad-x (8px) for container; --menu-item-slot-pad-x (12px) / --menu-item-slot-pad-y (10px) for items; --menu-slot-gap (4px) between items; --spacing-2xs for submenu and trigger offset.' },
              { category: 'Sizing', detail: '--menu-slot-min-width (230px) / --menu-slot-max-width (330px); --menu-item-slot-height (40px fixed); max 5 items visible (3 for notifications) with scroll.' },
              { category: 'Surface', detail: '--menu-slot-bg popover background; --menu-slot-shadow elevation; --menu-slot-radius (rounded-m, 12px); --menu-divider-color for separators.' },
              { category: 'Typography', detail: '--font-size-m / --text-weight-medium for standard labels (body-m-500); --text-weight-regular for search items (body-m-400); --text-weight-semibold for highlighted text (body-m-600); --font-size-s for secondary text.' },
              { category: 'Icons', detail: '--icon-size-m and --icon-stroke-m for item icons; left-element slot 20x20px with 16x16px safe area for custom graphics.' },
            ]}
            tokenGroups={[
              { label: 'Container', tokens: ['--menu-slot-bg', '--menu-slot-color', '--menu-slot-min-width', '--menu-slot-max-width', '--menu-slot-radius', '--menu-slot-shadow', '--menu-slot-pad-y', '--menu-slot-pad-x', '--menu-slot-gap', '--menu-slot-offset'] },
              { label: 'Border', tokens: ['--popover-slot-border-width', '--popover-slot-border-color'] },
              { label: 'Item', tokens: ['--menu-item-slot-height', '--menu-item-slot-radius', '--menu-item-slot-pad-x', '--menu-item-slot-pad-y', '--menu-item-slot-color', '--menu-item-slot-bg', '--menu-item-slot-gap', '--menu-item-slot-icon'] },
              { label: 'Item states', tokens: ['--menu-item-slot-bg-hover', '--menu-item-slot-bg-active', '--menu-item-slot-bg-selected', '--menu-item-slot-disabled'] },
              { label: 'Destructive', tokens: ['--menu-item-destructive-slot-color', '--menu-item-destructive-slot-icon', '--menu-item-destructive-slot-bg-hover', '--menu-item-destructive-slot-bg-active'] },
              { label: 'Divider', tokens: ['--menu-divider-color', '--menu-divider-width'] },
              { label: 'Secondary text', tokens: ['--menu-item-secondary-color'] },
            ]}
            code={CODE_MENUS}
          >
            <p style={{ fontSize: 'var(--font-size-s)', color: 'var(--copy-slot-secondary)', marginBottom: 'var(--spacing-s)' }}>Standard menu with icons, disabled, and destructive items:</p>
            <div className="row" style={{ marginBottom: 'var(--spacing-m)' }}>
              <TitanMenuDropdown
                triggerLabel="Standard menu"
                items={[
                  { id: 'search', label: 'Search profiles', icon: <Search /> },
                  { id: 'profile', label: 'Profile settings', icon: <User /> },
                  { id: 'notifications', label: 'Notifications', icon: <Bell /> },
                  { id: 'disabled', label: 'Disabled option', icon: <Settings />, disabled: true },
                  { id: 'delete', label: 'Delete audience', icon: <Trash2 />, destructive: true },
                ]}
              />
              <TitanMenuDropdown
                triggerLabel="Cascading submenu"
                items={[
                  { id: 'overview', label: 'Overview', icon: <Search /> },
                  {
                    id: 'export',
                    label: 'Export',
                    icon: <Settings />,
                    children: [
                      { id: 'csv', label: 'CSV file', icon: <FileText /> },
                      { id: 'xlsx', label: 'XLSX file', icon: <FileText /> },
                      { id: 'pdf', label: 'PDF file', icon: <FileText /> },
                    ],
                  },
                  { id: 'delete-2', label: 'Delete audience', icon: <Trash2 />, destructive: true },
                ]}
              />
            </div>

            <p style={{ fontSize: 'var(--font-size-s)', color: 'var(--copy-slot-secondary)', marginBottom: 'var(--spacing-s)' }}>Search menu with highlighted matches and Add New action:</p>
            <div className="row" style={{ marginBottom: 'var(--spacing-m)' }}>
              <TitanSearchMenu
                triggerLabel="Search (with results)"
                items={[
                  { id: 's1', label: 'Titan DS', icon: <ThumbsUp /> },
                  { id: 's2', label: 'Titan Design System', icon: <ThumbsUp /> },
                ]}
                query="Tit"
                onAddNew={() => {}}
              />
              <TitanSearchMenu
                triggerLabel="Search (no results)"
                items={[]}
                query="xyz"
                onAddNew={() => {}}
              />
            </div>

            <p style={{ fontSize: 'var(--font-size-s)', color: 'var(--copy-slot-secondary)', marginBottom: 'var(--spacing-s)' }}>Profile menu with avatar, name, username, and metric:</p>
            <div className="row" style={{ marginBottom: 'var(--spacing-m)' }}>
              <TitanProfileMenu
                triggerLabel="Profiles"
                items={[
                  { id: 'p1', name: 'Titan', username: 'titan', metric: '5.3M' },
                  { id: 'p2', name: 'Titan DS', username: 'titands', metric: '5.3M' },
                  { id: 'p3', name: 'Titan Design System', username: 'titandesignsystem', metric: '5.3M' },
                ]}
              />
            </div>

            <p style={{ fontSize: 'var(--font-size-s)', color: 'var(--copy-slot-secondary)', marginBottom: 'var(--spacing-s)' }}>Notifications menu (max 3 visible, with Mark all):</p>
            <div className="row" style={{ marginBottom: 'var(--spacing-m)' }}>
              <TitanNotificationsMenu
                triggerIcon={<Bell />}
                triggerLabel="Notifications"
                notifications={[
                  { id: 'n1', icon: <ClipboardCheckIcon />, title: <>The <strong>&ldquo;Coffee Brand Analysis&rdquo;</strong> report is ready to view</>, date: 'July 11 at 11:21 AM' },
                  { id: 'n2', icon: <X />, title: <>The <strong>&ldquo;US Musicians Prioritization&rdquo;</strong> report could not be released</>, date: 'June 24 at 00:07 AM' },
                  { id: 'n3', icon: <Users />, title: <>The required entities are <strong>now available in the system</strong></>, date: 'August 28 at 17:24 PM' },
                ]}
                markAllIcon={<Check />}
                onMarkAll={() => {}}
              />
              <TitanNotificationsMenu
                triggerIcon={<Bell />}
                triggerLabel="Empty notifications"
                notifications={[]}
                emptyIcon={<ThumbsUp />}
              />
            </div>
          </ShowcaseCard>

          {/* ── 7. Select ──────────────────────────────────── */}
          <ShowcaseCard
            id="select"
            title="Select"
            ariaImports="import { Button, Label, ListBox, ListBoxItem, Popover, Select, SelectValue } from 'react-aria-components'"
            ariaDesc="React Aria Select provides a fully accessible dropdown with keyboard navigation (arrow keys, Home/End, typeahead), automatic ARIA roles (listbox, option), and Label association. Popover handles positioning."
            ariaComponents={['Select', 'Label', 'Button', 'SelectValue', 'Popover', 'ListBox', 'ListBoxItem']}
            foundations={[
              { category: 'Spacing', detail: '--spacing-3xs for root gap; --spacing-m for label padding; --select-slot-button-pad-x / --select-slot-button-gap for trigger spacing.' },
              { category: 'Sizing', detail: '--select-slot-button-height trigger height; --select-slot-item-height item hit area; --menu-slot-min-width / --menu-slot-max-width for popover width.' },
              { category: 'Surface', detail: '--select-slot-button-bg / --select-slot-popover-bg backgrounds; --select-slot-popover-shadow elevation; border tokens for stroke.' },
              { category: 'Typography', detail: '--font-size-s for label; --button-slot-font-size for trigger and items. Font weights: --text-weight-medium for label, --button-slot-font-weight for items.' },
            ]}
            tokenGroups={[
              { label: 'Label', tokens: ['--font-size-s', '--font-leading-s', '--text-weight-medium', '--copy-slot-secondary', '--spacing-m'] },
              { label: 'Trigger', tokens: ['--select-slot-button-height', '--select-slot-button-radius', '--select-slot-button-border', '--select-slot-button-bg', '--select-slot-button-color', '--select-slot-button-pad-x', '--select-slot-button-gap', '--select-slot-chevron'] },
              { label: 'Popover', tokens: ['--select-slot-popover-bg', '--select-slot-popover-color', '--select-slot-popover-radius', '--select-slot-popover-shadow', '--select-slot-popover-border'] },
              { label: 'Items', tokens: ['--select-slot-item-height', '--select-slot-item-radius', '--select-slot-item-pad-x', '--select-slot-item-bg', '--select-slot-item-color', '--select-slot-item-icon'] },
              { label: 'Item states', tokens: ['--menu-item-slot-bg-hover', '--menu-item-slot-bg-active', '--menu-item-slot-bg-selected', '--select-slot-item-bg-disabled', '--select-slot-item-color-disabled'] },
            ]}
            code={CODE_SELECT}
          >
            <div className="row">
              <TitanSelect
                label="Network"
                defaultSelectedKey="insights"
                options={[
                  { id: 'insights', label: 'Insights' },
                  { id: 'audiense', label: 'Audiense', icon: <User /> },
                  { id: 'demand', label: 'Demand', icon: <Tag /> },
                  { id: 'linkedin', label: 'LinkedIn', icon: <Handshake /> },
                  { id: 'tweetbinder', label: 'TweetBinder', icon: <Bell /> },
                ]}
              />
              <TitanSelect
                label="Resource type"
                defaultSelectedKey="reports"
                options={[
                  { id: 'reports', label: 'Reports' },
                  { id: 'segments', label: 'Segments', icon: <User /> },
                  { id: 'alerts', label: 'Alerts', icon: <Bell /> },
                  { id: 'integrations', label: 'Integrations', icon: <Settings />, disabled: true },
                ]}
              />
              <TitanSelect
                label="Disabled select"
                defaultSelectedKey="one"
                isDisabled
                options={[
                  { id: 'one', label: 'Option one' },
                  { id: 'two', label: 'Option two' },
                ]}
              />
            </div>
          </ShowcaseCard>

          {/* ── 8. Tabs ────────────────────────────────────── */}
          <ShowcaseCard
            id="tabs"
            title="Tabs"
            ariaImports="import { Tab, TabList, TabPanel, Tabs } from 'react-aria-components'"
            ariaDesc="React Aria Tabs provides ARIA tablist/tab/tabpanel roles with automatic keyboard navigation (arrow keys to move between tabs, Enter/Space to select). Supports horizontal and vertical orientations."
            ariaComponents={['Tabs', 'TabList', 'Tab', 'TabPanel']}
            foundations={[
              { category: 'Spacing', detail: '--spacing-s for root gap; --tabs-slot-pad for tab list padding; --spacing-4xs for tab gap; --spacing-3xs / --spacing-xl for tab padding.' },
              { category: 'Surface', detail: '--tabs-slot-bg for tab list background; --card-slot-bg for panel background; --card-slot-border for panel border.' },
              { category: 'Shape', detail: '--tabs-slot-radius for tab list corners; --tab-slot-radius for individual tabs; --card-slot-radius for panel corners.' },
              { category: 'Typography', detail: '--button-slot-font-size, --button-slot-line-height, --button-slot-font-weight for tab labels.' },
              { category: 'Borders', detail: '--stroke-slot-width for tab border; --border-slot-default for default border color; --card-slot-border-width for panel border.' },
            ]}
            tokenGroups={[
              { label: 'Tab list', tokens: ['--tabs-slot-bg', '--tabs-slot-radius', '--tabs-slot-pad', '--spacing-4xs'] },
              { label: 'Tab trigger', tokens: ['--tab-slot-radius', '--tab-slot-bg', '--tab-slot-color', '--stroke-slot-width', '--border-slot-default'] },
              { label: 'Tab states', tokens: ['--tab-slot-bg-hover', '--tab-slot-bg-selected', '--tab-slot-color-selected', '--tab-slot-bg-disabled', '--tab-slot-color-disabled'] },
              { label: 'Tab panel', tokens: ['--card-slot-bg', '--card-slot-border-width', '--card-slot-border', '--card-slot-radius', '--spacing-m', '--copy-slot-body'] },
            ]}
            code={CODE_TABS}
          >
            <TitanTabs
              defaultSelectedKey="overview"
              ariaLabel="Demo tabs"
              items={[
                { id: 'overview', label: 'Overview', content: 'Overview panel content' },
                { id: 'audience', label: 'Audience', content: 'Audience panel content' },
                { id: 'reports', label: 'Reports', content: 'Reports panel content' },
                { id: 'disabled', label: 'Disabled', content: 'Disabled panel content', disabled: true },
              ]}
            />
            <div style={{ marginTop: 'var(--spacing-xl)' }}>
              <h4 style={{ marginBottom: 'var(--spacing-s)', color: 'var(--copy-slot-secondary)' }}>Vertical</h4>
              <TitanTabs
                orientation="vertical"
                defaultSelectedKey="influential"
                ariaLabel="Section navigation"
                items={[
                  { id: 'shared', label: 'Shared', content: 'Shared section content' },
                  { id: 'influential', label: 'Influential', content: 'Influential section content' },
                  { id: 'overview-v', label: 'Overview', content: 'Overview section content' },
                  { id: 'settings', label: 'Settings', content: 'Settings section content' },
                ]}
              />
            </div>
          </ShowcaseCard>

          {/* ── 9. Pagination ──────────────────────────────── */}
          <ShowcaseCard
            id="pagination"
            title="Pagination"
            ariaImports="import { Button } from 'react-aria-components'"
            ariaDesc="Each page button and prev/next arrow uses React Aria Button for keyboard handling. The current page is marked with aria-current='page'. Prev/Next buttons use aria-label for screen readers."
            ariaComponents={['Button']}
            foundations={[
              { category: 'Spacing', detail: '--spacing-4xs for gap between page buttons; --pagination-slot-pad-x for button horizontal padding.' },
              { category: 'Sizing', detail: '--pagination-slot-height for consistent button height and min-width (square hit area).' },
              { category: 'Shape', detail: '--pagination-slot-radius for button corners.' },
              { category: 'Icons', detail: '--icon-size-m and --icon-stroke-m for ChevronLeft/ChevronRight arrows.' },
              { category: 'Typography', detail: '--button-slot-font-size, --button-slot-line-height, --button-slot-font-weight for page numbers.' },
            ]}
            tokenGroups={[
              { label: 'Structure', tokens: ['--pagination-slot-height', '--pagination-slot-radius', '--pagination-slot-pad-x', '--spacing-4xs'] },
              { label: 'Colors', tokens: ['--pagination-slot-color'] },
              { label: 'States', tokens: ['--pagination-slot-page-hover-bg', '--pagination-slot-page-selected-bg', '--pagination-slot-page-disabled-bg', '--pagination-slot-page-disabled-color'] },
              { label: 'Icons', tokens: ['--icon-size-m', '--icon-stroke-m'] },
            ]}
            code={CODE_PAGINATION}
          >
            <div className="pagination-container">
              <TitanPagination
                ariaLabel="Pagination demo"
                pages={[1, 'ellipsis', 8, 9, 10, 'ellipsis', 20]}
                currentPage={9}
              />
            </div>
          </ShowcaseCard>

          {/* ── 10. Drawer ─────────────────────────────────── */}
          <ShowcaseCard
            id="drawer"
            title="Drawer"
            ariaImports="import { Button, Dialog, DialogTrigger, Modal, ModalOverlay } from 'react-aria-components'"
            ariaDesc="Uses React Aria DialogTrigger + ModalOverlay + Modal + Dialog for a slide-in panel. ModalOverlay handles backdrop and dismiss-on-click; Dialog provides focus trapping and ARIA dialog semantics; the close button renders function receives close()."
            ariaComponents={['DialogTrigger', 'Button', 'ModalOverlay', 'Modal', 'Dialog']}
            foundations={[
              { category: 'Sizing', detail: '--drawer-slot-width panel width; --drawer-close-slot-size / --drawer-close-slot-radius for close button.' },
              { category: 'Surface', detail: '--drawer-slot-bg panel background; --drawer-slot-shadow elevation; --drawer-overlay-slot-backdrop overlay color.' },
              { category: 'Spacing', detail: '--drawer-slot-pad panel padding; --drawer-slot-gap header-to-body gap; --spacing-s header bottom padding.' },
              { category: 'Shape', detail: '--drawer-slot-radius for top-left and bottom-left rounded corners.' },
              { category: 'Typography', detail: '--font-size-l / --font-leading-l for drawer title; --text-weight-semibold for title weight.' },
              { category: 'Borders', detail: '--stroke-slot-width and --drawer-header-border-bottom for header separator.' },
            ]}
            tokenGroups={[
              { label: 'Overlay', tokens: ['--drawer-overlay-slot-backdrop'] },
              { label: 'Panel', tokens: ['--drawer-slot-width', '--drawer-slot-bg', '--drawer-slot-radius', '--drawer-slot-shadow', '--drawer-slot-pad', '--drawer-slot-gap'] },
              { label: 'Header', tokens: ['--drawer-header-border-bottom', '--dialog-title-slot-color', '--font-size-l', '--font-leading-l', '--text-weight-semibold'] },
              { label: 'Close button', tokens: ['--drawer-close-slot-size', '--drawer-close-slot-radius', '--drawer-close-slot-bg-hover', '--drawer-close-slot-bg-active', '--drawer-close-slot-icon'] },
              { label: 'Body', tokens: ['--dialog-body-slot-color', '--button-slot-font-size', '--button-slot-line-height'] },
            ]}
            code={CODE_DRAWER}
          >
            <TitanDrawer triggerLabel="Open drawer" title="Filter audience">
              <p>Use this panel to refine audience segments by geography, age, and interests.</p>
              <p>Content is scrollable when needed and keeps header structure fixed.</p>
            </TitanDrawer>
          </ShowcaseCard>

          {/* ── 11. Dialog ─────────────────────────────────── */}
          <ShowcaseCard
            id="dialog"
            title="Dialog"
            ariaImports="import { Button, Dialog, DialogTrigger, Modal, ModalOverlay } from 'react-aria-components'"
            ariaDesc="Uses React Aria DialogTrigger + ModalOverlay + Modal + Dialog for a centered modal. ModalOverlay provides backdrop click-to-dismiss; Modal constrains width; Dialog provides focus trap, Escape key dismiss, and ARIA dialog role."
            ariaComponents={['DialogTrigger', 'Button', 'ModalOverlay', 'Modal', 'Dialog']}
            foundations={[
              { category: 'Surface', detail: '--dialog-slot-bg background; --dialog-slot-shadow elevation; --overlay-backdrop for dimmed backdrop.' },
              { category: 'Spacing', detail: '--dialog-slot-pad for panel padding; --dialog-slot-gap between header/body/footer; --dialog-header-slot-gap within header; --spacing-3xs for footer button gap.' },
              { category: 'Shape', detail: '--dialog-slot-radius for panel corners.' },
              { category: 'Typography', detail: '--font-size-l / --font-leading-l for dialog title; --text-weight-semibold for title; --button-slot-font-size for body text.' },
              { category: 'Layout', detail: '--spacing-xl for max-width calculation; centered via CSS grid place-items.' },
            ]}
            tokenGroups={[
              { label: 'Overlay', tokens: ['--overlay-backdrop'] },
              { label: 'Panel', tokens: ['--dialog-slot-bg', '--dialog-slot-radius', '--dialog-slot-shadow', '--dialog-slot-pad', '--dialog-slot-gap'] },
              { label: 'Header', tokens: ['--dialog-header-slot-gap', '--dialog-title-slot-color', '--font-size-l', '--font-leading-l', '--text-weight-semibold'] },
              { label: 'Body', tokens: ['--dialog-body-slot-color', '--button-slot-font-size', '--button-slot-line-height'] },
              { label: 'Footer', tokens: ['--spacing-3xs'] },
            ]}
            code={CODE_DIALOG}
          >
            <TitanDialog
              triggerLabel="Open dialog"
              title="Delete report?"
              body="This action cannot be undone. The report will be permanently removed."
              leftAction={<TitanButton variant="secondary">Cancel</TitanButton>}
              rightAction={<TitanButton variant="delete">Delete</TitanButton>}
            />
          </ShowcaseCard>

          {/* ── 12. Tooltips ───────────────────────────────── */}
          <ShowcaseCard
            id="tooltips"
            title="Tooltips"
            ariaImports="import { Tooltip, TooltipTrigger } from 'react-aria-components'"
            ariaDesc="React Aria TooltipTrigger manages show/hide on hover and focus. Tooltip provides the ARIA tooltip role and handles positioning. Configurable delay and closeDelay props."
            ariaComponents={['TooltipTrigger', 'Tooltip']}
            foundations={[
              { category: 'Surface', detail: '--tooltip-slot-bg background (typically dark); --tooltip-slot-shadow for subtle elevation.' },
              { category: 'Shape', detail: '--tooltip-slot-radius for rounded corners.' },
              { category: 'Spacing', detail: '--tooltip-slot-pad-y / --tooltip-slot-pad-x for content padding.' },
              { category: 'Typography', detail: '--font-size-s (small text); --font-leading-s line height; --text-weight-medium for readability.' },
              { category: 'Color', detail: '--tooltip-slot-color for text color (typically light on dark bg).' },
            ]}
            tokenGroups={[
              { label: 'Surface', tokens: ['--tooltip-slot-bg', '--tooltip-slot-color', '--tooltip-slot-shadow'] },
              { label: 'Shape', tokens: ['--tooltip-slot-radius'] },
              { label: 'Spacing', tokens: ['--tooltip-slot-pad-y', '--tooltip-slot-pad-x'] },
              { label: 'Typography', tokens: ['--font-size-s', '--font-leading-s', '--text-weight-medium'] },
            ]}
            code={CODE_TOOLTIP}
          >
            <div className="row">
              <TitanTooltip content="Refresh data">
                <TitanIconButton variant="ghost" aria-label="Refresh"><ArrowRight /></TitanIconButton>
              </TitanTooltip>
              <TitanTooltip content="Secondary action tooltip">
                <TitanButton variant="secondary">Hover me</TitanButton>
              </TitanTooltip>
              <TitanTooltip content="Helpful context in a tooltip">
                <TitanIconButton variant="ghost" aria-label="Info"><Info /></TitanIconButton>
              </TitanTooltip>
              <TitanTooltip title="Title" body="Something happened">
                <TitanIconButton variant="ghost" aria-label="Example"><AlertCircle /></TitanIconButton>
              </TitanTooltip>
            </div>
          </ShowcaseCard>

          {/* ── 13. Toasts ─────────────────────────────────── */}
          <ShowcaseCard
            id="toasts"
            title="Toasts"
            ariaImports="import { Button } from 'react-aria-components'"
            ariaDesc="The toast region uses role='region' with aria-label='Notifications' and aria-live='polite' for screen reader announcements. Each toast uses role='status'. The dismiss button uses React Aria Button."
            ariaComponents={['Button (dismiss)']}
            foundations={[
              { category: 'Surface', detail: '--toast-slot-bg base background; variant overrides: --color-error-100, --color-ocean-100, --color-mango-100.' },
              { category: 'Border', detail: '--toast-slot-border for stroke; --toast-slot-radius for corners; --toast-slot-shadow for elevation.' },
              { category: 'Spacing', detail: '--spacing-s for card padding; --spacing-3xs for content gap and region gap; --spacing-5xs for text gap.' },
              { category: 'Typography', detail: '--button-slot-font-size / --text-weight-semibold for title; --font-size-s for body.' },
              { category: 'Status icons', detail: '--status-success-icon, --status-error-icon, --status-info-icon, --status-warning-icon for per-variant icon colors.' },
            ]}
            tokenGroups={[
              { label: 'Card', tokens: ['--toast-slot-bg', '--toast-slot-color', '--toast-slot-border', '--toast-slot-radius', '--toast-slot-shadow'] },
              { label: 'Variant backgrounds', tokens: ['--color-error-100', '--color-ocean-100', '--color-mango-100'] },
              { label: 'Status icons', tokens: ['--status-success-icon', '--status-error-icon', '--status-info-icon', '--status-warning-icon'] },
              { label: 'Spacing', tokens: ['--spacing-s', '--spacing-3xs', '--spacing-5xs'] },
              { label: 'Icons & close', tokens: ['--icon-size-m', '--icon-stroke-m', '--button-icon-slot-size', '--copy-slot-secondary'] },
            ]}
            code={CODE_TOASTS}
          >
            <div className="row">
              <TitanButton variant="secondary" onPress={() => pushToast('success')}>Success toast</TitanButton>
              <TitanButton variant="secondary" onPress={() => pushToast('error')}>Error toast</TitanButton>
              <TitanButton variant="secondary" onPress={() => pushToast('info')}>Info toast</TitanButton>
              <TitanButton variant="secondary" onPress={() => pushToast('warning')}>Warning toast</TitanButton>
            </div>
            <TitanToastRegion toasts={toasts} onDismiss={dismissToast} />
          </ShowcaseCard>

          {/* ── Toggle Button Group ─────────────────────────── */}
          <ShowcaseCard
            id="togglegroup"
            title="Toggle Button Group"
            ariaImports="import { ToggleButton, ToggleButtonGroup } from 'react-aria-components'"
            ariaDesc="Segmented control for single selection (radio behavior). Each segment is a ToggleButton. Uses React Aria ToggleButtonGroup with selectionMode='single'. Themed via --button-group-* tokens."
            ariaComponents={['ToggleButtonGroup', 'ToggleButton']}
            foundations={[
              { category: 'Anatomy', detail: 'rounded-s outer corners; stroke-s border + internal separators; item padding 3xs (y) / 2xs (x); gap 4xs.' },
              { category: 'Container', detail: '--button-group-background, --button-group-border. No container padding — padding inside each item.' },
              { category: 'Items', detail: '--button-group-color default; --button-group-selected-background and --button-group-selected-color for selected. Subtle inset outline on selected.' },
              { category: 'Variants', detail: 'iconPosition: left | right for icon placement; supports 2–5+ segments.' },
            ]}
            tokenGroups={[
              { label: 'Container', tokens: ['--button-group-background', '--button-group-border', '--toggle-group-slot-radius', '--toggle-group-slot-stroke'] },
              { label: 'Item', tokens: ['--toggle-group-slot-item-pad-y', '--toggle-group-slot-item-pad-x', '--toggle-group-slot-item-gap', '--button-group-color', '--button-group-selected-background', '--button-group-selected-color'] },
            ]}
            code={CODE_TOGGLE}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
              <div>
                <p style={{ fontSize: 'var(--font-size-s)', color: 'var(--copy-slot-secondary)', marginBottom: 8 }}>Toggle (Natural selected)</p>
                <TitanToggleButtonGroup
                  ariaLabel="View mode"
                  items={[
                    { id: 'natural', label: 'Natural' },
                    { id: 'simple', label: 'Simple' },
                    { id: 'boolean', label: 'Boolean' },
                  ]}
                  defaultSelectedKey="natural"
                />
              </div>
              <div>
                <p style={{ fontSize: 'var(--font-size-s)', color: 'var(--copy-slot-secondary)', marginBottom: 8 }}>Variants: Icon Left | No Icon | Icon Right</p>
                <TitanToggleButtonGroup
                  ariaLabel="Icon variants"
                  items={[
                    { id: 'left', label: 'Icon Left', icon: <Plus />, iconPosition: 'left' },
                    { id: 'none', label: 'No Icon' },
                    { id: 'right', label: 'Icon Right', icon: <Plus />, iconPosition: 'right' },
                  ]}
                  defaultSelectedKey="none"
                />
              </div>
              <div>
                <p style={{ fontSize: 'var(--font-size-s)', color: 'var(--copy-slot-secondary)', marginBottom: 8 }}>Levels (2–5 segments)</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <TitanToggleButtonGroup
                    ariaLabel="Two levels"
                    items={[{ id: 'a', label: 'Two' }, { id: 'b', label: 'Levels' }]}
                    defaultSelectedKey="a"
                  />
                  <TitanToggleButtonGroup
                    ariaLabel="Three levels"
                    items={[{ id: 'a', label: 'Three' }, { id: 'b', label: 'Levels' }, { id: 'c', label: 'Example' }]}
                    defaultSelectedKey="b"
                  />
                  <TitanToggleButtonGroup
                    ariaLabel="Four levels"
                    items={[{ id: 'a', label: 'Four' }, { id: 'b', label: 'Levels' }, { id: 'c', label: 'Example' }, { id: 'd', label: 'Here' }]}
                    defaultSelectedKey="c"
                  />
                  <TitanToggleButtonGroup
                    ariaLabel="Five levels"
                    items={[
                      { id: 'a', label: 'Five' },
                      { id: 'b', label: 'Levels' },
                      { id: 'c', label: 'Of' },
                      { id: 'd', label: 'Button' },
                      { id: 'e', label: 'Group' },
                    ]}
                    defaultSelectedKey="d"
                  />
                </div>
              </div>
            </div>
          </ShowcaseCard>

          {/* ── 14. Form Controls ──────────────────────────── */}
          <ShowcaseCard
            id="forms"
            title="Form Controls"
            ariaImports="import { Checkbox, Label, Radio, RadioGroup, Switch } from 'react-aria-components'"
            ariaDesc="Checkbox provides ARIA checkbox role with data-selected state toggling. RadioGroup + Radio provides grouped radio buttons with arrow-key navigation. Switch provides ARIA switch role with toggle semantics. All support data-disabled, data-focus-visible."
            ariaComponents={['Checkbox', 'Label', 'Radio', 'RadioGroup', 'Switch']}
            foundations={[
              { category: 'Sizing (Checkbox)', detail: '--checkbox-slot-size (18px); --checkbox-slot-radius; --checkbox-slot-border-width.' },
              { category: 'Sizing (Radio)', detail: '--radio-slot-size (18px); --radio-slot-radius (50%); --radio-slot-border-width. Dot is half the radio size.' },
              { category: 'Sizing (Switch)', detail: '--toggle-slot-width / --toggle-slot-height for track; thumb calculated from height - stroke.' },
              { category: 'Spacing', detail: '--spacing-s for control-to-label gap; --spacing-3xs for stacked item gap; --spacing-m for group label padding.' },
              { category: 'Typography', detail: '--button-slot-font-size for choice text; --font-size-s for group labels; --text-weight-medium for labels.' },
              { category: 'Focus', detail: '--button-slot-focus-width / --button-slot-focus-color for focus ring; --toggle-slot-focus / --toggle-slot-selected-focus for switch focus.' },
            ]}
            tokenGroups={[
              { label: 'Checkbox', tokens: ['--checkbox-slot-size', '--checkbox-slot-radius', '--checkbox-slot-border-width', '--checkbox-slot-border', '--checkbox-slot-bg', '--checkbox-slot-check', '--checkbox-slot-border-hover', '--checkbox-slot-selected-border', '--checkbox-slot-selected-bg', '--checkbox-slot-selected-bg-hover', '--checkbox-slot-border-disabled', '--checkbox-slot-selected-bg-disabled'] },
              { label: 'Radio', tokens: ['--radio-slot-size', '--radio-slot-radius', '--radio-slot-border-width', '--radio-slot-border', '--radio-slot-selected-border', '--radio-slot-border-hover', '--radio-slot-selected-border-hover', '--radio-slot-border-disabled'] },
              { label: 'Switch', tokens: ['--toggle-slot-width', '--toggle-slot-height', '--toggle-slot-radius', '--toggle-slot-bg', '--toggle-slot-ball-bg', '--toggle-slot-bg-hover', '--toggle-slot-selected-bg', '--toggle-slot-selected-bg-hover', '--toggle-slot-disabled-bg'] },
              { label: 'Focus', tokens: ['--button-slot-focus-width', '--button-slot-focus-color', '--toggle-slot-focus', '--toggle-slot-selected-focus'] },
              { label: 'Text', tokens: ['--copy-slot-body', '--copy-slot-secondary', '--copy-slot-disabled'] },
            ]}
            code={CODE_FORM_CONTROLS}
          >
            <TitanFormControlsGroup>
              <div className="choice-group">
                <label className="choice-group-label">Checkboxes</label>
                <div className="choice-list">
                  <TitanCheckboxField label="Default" />
                  <TitanCheckboxField label="Selected" defaultSelected />
                  <TitanCheckboxField label="Disabled" isDisabled />
                  <TitanCheckboxField label="Disabled selected" isDisabled defaultSelected />
                </div>
              </div>
              <TitanRadioGroupField
                label="Radios"
                defaultValue="selected"
                options={[
                  { value: 'default', label: 'Default' },
                  { value: 'selected', label: 'Selected' },
                  { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
              />
              <div className="choice-group">
                <label className="choice-group-label">Switch</label>
                <div className="choice-list">
                  <TitanSwitchField label="Default" />
                  <TitanSwitchField label="Selected" defaultSelected />
                  <TitanSwitchField label="Disabled" isDisabled />
                  <TitanSwitchField label="Disabled selected" isDisabled defaultSelected />
                </div>
              </div>
            </TitanFormControlsGroup>
          </ShowcaseCard>

          {/* ── 15. Inputs + Textarea ──────────────────────── */}
          <ShowcaseCard
            id="inputs"
            title="Inputs + Textarea"
            ariaImports="import { FieldError, Group, Input, Label, Text, TextArea, TextField } from 'react-aria-components'"
            ariaDesc="React Aria TextField wraps input/textarea with automatic Label association. Input provides native input with data-hovered/focused/disabled states. Group wraps input+icons as a single focusable unit. FieldError shows validation messages. Text with slot='description' for hints."
            ariaComponents={['TextField', 'Label', 'Input', 'TextArea', 'Group', 'FieldError', 'Text']}
            foundations={[
              { category: 'Sizing', detail: '--input-slot-height for input height; --textarea-slot-min-height for textarea; --input-slot-radius for corners.' },
              { category: 'Spacing', detail: '--input-slot-pad-x horizontal; --input-slot-pad-y vertical (textarea); --spacing-3xs label-to-input gap; --spacing-m label indent.' },
              { category: 'Border', detail: '--input-slot-border-width default; state borders: --input-slot-border, --input-slot-border-hover, --input-slot-border-focus, --input-slot-border-error.' },
              { category: 'Focus', detail: '--input-slot-focus-width ring width; --input-slot-focus-color ring color; --input-slot-border-focus-visible for keyboard focus.' },
              { category: 'Typography', detail: '--font-size-m for input text; --font-size-s for label/hint/error; line heights to match.' },
              { category: 'Icons', detail: '--input-slot-icon / --input-slot-icon-focus / --input-slot-icon-error for leading/trailing icon states.' },
            ]}
            tokenGroups={[
              { label: 'Input structure', tokens: ['--input-slot-height', '--input-slot-radius', '--input-slot-border-width', '--input-slot-pad-x', '--input-slot-pad-y'] },
              { label: 'Input colors', tokens: ['--input-slot-bg', '--input-slot-color', '--input-slot-border', '--input-slot-placeholder'] },
              { label: 'Input states', tokens: ['--input-slot-border-hover', '--input-slot-border-focus', '--input-slot-border-focus-visible', '--input-slot-border-error', '--input-slot-disabled-bg', '--input-slot-border-disabled', '--input-slot-disabled-color'] },
              { label: 'Focus ring', tokens: ['--input-slot-focus-width', '--input-slot-focus-color'] },
              { label: 'Icons', tokens: ['--input-slot-icon', '--input-slot-icon-focus', '--input-slot-icon-error', '--icon-size-m', '--icon-stroke-m'] },
              { label: 'Textarea', tokens: ['--textarea-slot-min-height', '--textarea-slot-line-height'] },
              { label: 'Field helpers', tokens: ['--field-slot-help-gap', '--field-slot-gap', '--field-error-color', '--copy-slot-secondary'] },
            ]}
            code={CODE_INPUTS}
          >
            <div className="field-showcase-grid">
              <TitanInputField placeholder="Simple input" />
              <TitanInputField label="Workspace name" placeholder="Type workspace name" />
              <TitanInputField
                label="Contact email"
                placeholder="name@company.com"
                hint="Use a business email so your team can find you."
                counter="0/60"
              />
              <TitanTextareaField
                label="Summary"
                placeholder="Add a short summary..."
                hint="Keep it short and clear for dashboard readers."
                counter="0/240"
              />
              <TitanTextareaField
                label="Notes (with icons)"
                placeholder="Write your notes here..."
                leadingIcon={<FileText />}
                onClear={() => alert('Clear!')}
                autoExpand
              />
              <TitanInputField placeholder="Search creators..." leadingIcon={<Search />} />
              <TitanInputField
                label="Email"
                placeholder="name@company.com"
                leadingIcon={<AlertCircle />}
                errorMessage="Enter a valid business email."
                isInvalid
              />
              <TitanInputField label="Disabled input" placeholder="Cannot edit" isDisabled defaultValue="Disabled value" />
            </div>
          </ShowcaseCard>

          {/* ── 16. Sidebar ────────────────────────────────── */}
          <ShowcaseCard
            id="sidebar"
            title="Sidebar"
            ariaImports="import { Button } from 'react-aria-components'"
            ariaDesc="TitanSidebar uses React Aria Button for all interactive items (toggle, nav items). Active item is marked with aria-current='page'. When collapsed, items get explicit aria-label for screen readers. Toggle button has dynamic aria-label."
            ariaComponents={['Button']}
            foundations={[
              { category: 'Sizing', detail: '--sidebar-slot-width-expanded / --sidebar-slot-width-collapsed for sidebar width. --sidebar-slot-icon-size for item icons.' },
              { category: 'Surface', detail: '--sidebar-slot-bg background; --sidebar-slot-border right border.' },
              { category: 'Spacing', detail: '--sidebar-slot-padding for sidebar padding; --sidebar-slot-item-padding for item padding; --sidebar-slot-item-gap for icon-to-label gap.' },
              { category: 'Shape', detail: '--sidebar-slot-item-radius for item corners.' },
              { category: 'Typography', detail: '--sidebar-slot-header-font-size / --sidebar-slot-header-font-weight for section headers; --button-slot-font-size for items.' },
              { category: 'Colors', detail: '--sidebar-slot-item-color default; --sidebar-slot-item-color-hover hover; --sidebar-slot-item-color-active active; --sidebar-slot-header-color for headers.' },
            ]}
            tokenGroups={[
              { label: 'Container', tokens: ['--sidebar-slot-bg', '--sidebar-slot-border', '--sidebar-slot-padding', '--sidebar-slot-width-expanded', '--sidebar-slot-width-collapsed'] },
              { label: 'Items', tokens: ['--sidebar-slot-item-radius', '--sidebar-slot-item-color', '--sidebar-slot-item-gap', '--sidebar-slot-item-padding'] },
              { label: 'Item states', tokens: ['--sidebar-slot-item-bg-hover', '--sidebar-slot-item-color-hover', '--sidebar-slot-item-bg-active', '--sidebar-slot-item-color-active'] },
              { label: 'Header', tokens: ['--sidebar-slot-header-color', '--sidebar-slot-header-font-size', '--sidebar-slot-header-font-weight'] },
              { label: 'Icon & toggle', tokens: ['--sidebar-slot-icon-size'] },
            ]}
            code={CODE_SIDEBAR}
          >
            <SidebarDemo />
          </ShowcaseCard>

          {/* ── 17. Loader ─────────────────────────────────── */}
          <ShowcaseCard
            id="loader"
            title="Loader"
            ariaImports="// No React Aria — pure HTML (div + img)"
            ariaDesc="TitanLoader is a pure HTML component using the branded GIF loader. Uses role='status' and aria-label for screen reader announcements. The visible image is decorative (aria-hidden). A visually hidden span provides the accessible label."
            ariaComponents={['None — pure HTML div + img']}
            foundations={[
              { category: 'Sizing', detail: 'Default 120×120px, configurable via size prop.' },
              { category: 'Animation', detail: '300ms ease-out fade-in on mount via CSS keyframes.' },
              { category: 'Asset', detail: '/assets/logos/loader-l.gif — branded animated loader.' },
              { category: 'A11y', detail: 'role="status" for live region; aria-label for screen readers; sr-only text fallback.' },
            ]}
            tokenGroups={[
              { label: 'Structure', tokens: ['display: flex', 'align-items: center', 'justify-content: center'] },
              { label: 'Animation', tokens: ['animation: titan-loader-fade-in 300ms ease-out both'] },
            ]}
            code={CODE_LOADER}
          >
            <div style={{ display: 'flex', gap: '32px', alignItems: 'end' }}>
              <div style={{ textAlign: 'center' }}>
                <TitanLoader />
                <p style={{ marginTop: 8, fontSize: 13, color: 'var(--copy-slot-secondary)' }}>120×120 (default)</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <TitanLoader size={64} label="Loading data…" />
                <p style={{ marginTop: 8, fontSize: 13, color: 'var(--copy-slot-secondary)' }}>64×64</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <TitanLoader size={40} label="Loading…" />
                <p style={{ marginTop: 8, fontSize: 13, color: 'var(--copy-slot-secondary)' }}>40×40</p>
              </div>
            </div>
          </ShowcaseCard>

          {/* ── 18. Slider ─────────────────────────────────── */}
          <ShowcaseCard
            id="slider"
            title="Slider"
            ariaImports="import { Slider, SliderThumb, SliderTrack, SliderOutput, Label } from 'react-aria-components'"
            ariaDesc="Slider provides accessible range input with keyboard navigation (arrow keys, Home/End), ARIA valuemin/valuemax/valuenow, and label association. Supports single and multi-thumb (range) modes."
            ariaComponents={['Slider', 'SliderTrack', 'SliderThumb', 'SliderOutput', 'Label']}
            foundations={[
              { category: 'Track', detail: '4px height, rounded full, color-black-200 background.' },
              { category: 'Fill', detail: 'Theme primary color (button-primary-slot-bg).' },
              { category: 'Thumb', detail: '20px circle, white bg, 2px theme border, subtle shadow.' },
              { category: 'States', detail: 'Hover border change, focus-visible ring, disabled grey fill + border.' },
              { category: 'Range', detail: 'Multi-thumb variant fills only between the two thumbs.' },
            ]}
            tokenGroups={[
              { label: 'Track', tokens: ['--slider-slot-track-height', '--slider-slot-track-bg', '--slider-slot-track-fill', '--slider-slot-track-radius'] },
              { label: 'Thumb', tokens: ['--slider-slot-thumb-size', '--slider-slot-thumb-bg', '--slider-slot-thumb-border', '--slider-slot-thumb-radius', '--slider-slot-thumb-shadow'] },
              { label: 'Disabled', tokens: ['--slider-slot-disabled-track-fill', '--slider-slot-disabled-thumb-border'] },
            ]}
            code={CODE_SLIDER + '\n\n' + CODE_RANGE_SLIDER}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 400, width: '100%' }}>
              <TitanSlider label="Volume" defaultValue={50} />
              <TitanSlider label="Brightness" defaultValue={75} step={5} />
              <TitanSlider label="Disabled" defaultValue={30} isDisabled />
              <div style={{ borderTop: '1px solid var(--divider-strong)', paddingTop: 24 }}>
                <p style={{ margin: '0 0 12px', fontSize: 13, fontWeight: 500, color: 'var(--copy-slot-secondary)' }}>Range (multi-thumb)</p>
                <TitanRangeSlider label="Price range" defaultValue={[20, 80]} />
                <div style={{ marginTop: 16 }}>
                  <TitanRangeSlider label="Disabled range" defaultValue={[30, 70]} isDisabled />
                </div>
              </div>
            </div>
          </ShowcaseCard>

          {/* ── 19. Progress Bar ───────────────────────────── */}
          <ShowcaseCard
            id="progress"
            title="Progress Bar"
            ariaImports="import { ProgressBar, Label } from 'react-aria-components'"
            ariaDesc="ProgressBar provides an accessible determinate progress indicator with role='progressbar', aria-valuemin/max/now, and optional label association."
            ariaComponents={['ProgressBar', 'Label']}
            foundations={[
              { category: 'Track', detail: '8px height, rounded full, color-black-200 background.' },
              { category: 'Fill', detail: 'Theme primary color (button-primary-slot-bg), smooth width transition.' },
              { category: 'Labels', detail: 'Optional label and percentage value display.' },
            ]}
            tokenGroups={[
              { label: 'Track', tokens: ['--progress-slot-track-height', '--progress-slot-track-bg', '--progress-slot-track-radius'] },
              { label: 'Fill', tokens: ['--progress-slot-fill-bg'] },
              { label: 'Typography', tokens: ['--progress-slot-label-color', '--progress-slot-value-color'] },
            ]}
            code={CODE_PROGRESS}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 400, width: '100%' }}>
              <TitanProgressBar label="Upload progress" value={72} />
              <TitanProgressBar label="Storage used" value={45} />
              <TitanProgressBar label="Complete" value={100} />
              <TitanProgressBar label="Starting…" value={5} />
              <TitanProgressBar value={60} showValue={false} />
            </div>
          </ShowcaseCard>

          {/* ── 20. Calendar ───────────────────────────────── */}
          <ShowcaseCard
            id="calendar"
            title="Calendar"
            ariaImports="import { Calendar, CalendarGrid, CalendarGridHeader, CalendarGridBody, CalendarHeaderCell, CalendarCell, Button } from 'react-aria-components'"
            ariaDesc="Calendar provides a fully accessible date picker grid with keyboard navigation (arrow keys, Page Up/Down for months, Home/End), ARIA grid pattern, and automatic locale-aware day names and month formatting."
            ariaComponents={['Calendar', 'CalendarGrid', 'CalendarGridHeader', 'CalendarGridBody', 'CalendarHeaderCell', 'CalendarCell', 'Button (prev/next)']}
            foundations={[
              { category: 'Navigation', detail: 'Month/year dropdown selects + prev/next arrow buttons.' },
              { category: 'Grid', detail: '7-column grid with locale-aware weekday headers.' },
              { category: 'Selection', detail: 'Selected day uses theme accent color (button-primary-slot-bg).' },
              { category: 'States', detail: 'Hover, focus-visible ring, outside-month dimmed, disabled, unavailable (strikethrough).' },
              { category: 'Time', detail: 'Optional hour/minute inputs below the calendar grid via showTime prop.' },
            ]}
            tokenGroups={[
              { label: 'Container', tokens: ['--calendar-slot-bg', '--calendar-slot-border', '--calendar-slot-radius', '--calendar-slot-shadow'] },
              { label: 'Cell', tokens: ['--calendar-slot-cell-size', '--calendar-slot-cell-radius', '--calendar-slot-cell-selected-bg', '--calendar-slot-cell-selected-color'] },
              { label: 'Navigation', tokens: ['--calendar-slot-nav-size', '--calendar-slot-nav-hover-bg'] },
              { label: 'Time', tokens: ['--calendar-slot-time-border', '--calendar-slot-time-radius', '--calendar-slot-time-bg'] },
            ]}
            code={CODE_CALENDAR}
          >
            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'flex-start' }}>
              <div>
                <p style={{ margin: '0 0 8px', fontSize: 13, fontWeight: 500, color: 'var(--copy-slot-secondary)' }}>Date only</p>
                <TitanCalendar defaultValue={today(getLocalTimeZone())} />
              </div>
              <div>
                <p style={{ margin: '0 0 8px', fontSize: 13, fontWeight: 500, color: 'var(--copy-slot-secondary)' }}>With time</p>
                <TitanCalendar showTime defaultValue={today(getLocalTimeZone())} />
              </div>
            </div>
          </ShowcaseCard>

          {/* ── Two Up One Down Layout ─────────────────────── */}
          <ShowcaseCard
            id="twouponedown"
            title="Two Up One Down Layout"
            ariaImports="import { TitanTwoUpOneDownLayout } from 'titan-compositions'"
            ariaDesc="Page composition: Navbar + Breadcrumb + 2-column top row (TitanCard 8+8) + full-width bottom row (TitanCard 16). Composes TitanNavbar, TitanBreadcrumb, TitanCardGrid, TitanCard."
            ariaComponents={['TitanNavbar', 'TitanBreadcrumb', 'TitanCardGrid', 'TitanCard']}
            foundations={[
              { category: 'Layout', detail: 'Navbar at top; breadcrumb in first card; 16-column grid with 8+8 top, 16 bottom.' },
              { category: 'Theme', detail: 'theme prop passed to Navbar (insights, audiense, etc.); userInitial for avatar.' },
              { category: 'Slots', detail: 'leftTop, rightTop, bottom accept any ReactNode.' },
            ]}
            tokenGroups={[
              { label: 'Navbar', tokens: ['--navbar-slot-bg', '--navbar-slot-border', '--navbar-slot-height'] },
              { label: 'Breadcrumb', tokens: ['--breadcrumb-slot-*'] },
              { label: 'Card', tokens: ['--card-slot-radius', '--layout-grid-gap'] },
            ]}
            code={CODE_TWOUPONEDOWN}
          >
            <div style={{ border: '1px solid var(--color-black-300)', borderRadius: 'var(--rounded-m)', overflow: 'hidden' }}>
              <TitanTwoUpOneDownLayout
                theme={theme}
                breadcrumbItems={[
                  { id: 'home', label: 'Home' },
                  { id: 'reports', label: 'Reports' },
                ]}
                breadcrumbCurrentLabel="Overview"
                leftTop={<div style={{ padding: 'var(--spacing-m)', color: 'var(--copy-slot-secondary)' }}>Left panel content</div>}
                rightTop={<div style={{ padding: 'var(--spacing-m)', color: 'var(--copy-slot-secondary)' }}>Right panel content</div>}
                bottom={<div style={{ padding: 'var(--spacing-m)', color: 'var(--copy-slot-secondary)' }}>Full-width bottom content</div>}
              />
            </div>
          </ShowcaseCard>

        </main>
      </div>
      )}
    </>
  )
}

export default App
