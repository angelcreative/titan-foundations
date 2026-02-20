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
} from 'lucide-react'
import {
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
} from 'titan-compositions'

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
  { id: 'navbar', label: 'Navbar', icon: PanelTop },
  { id: 'breadcrumb', label: 'Breadcrumb', icon: Navigation },
  { id: 'cardgrid', label: 'Card Grid + Table', icon: LayoutDashboard },
  { id: 'buttons', label: 'Buttons', icon: MousePointerClick },
  { id: 'pills', label: 'Pills', icon: Tag },
  { id: 'tags', label: 'Tags', icon: Type },
  { id: 'menus', label: 'Menus', icon: ChevronDown },
  { id: 'select', label: 'Select', icon: ListFilter },
  { id: 'tabs', label: 'Tabs', icon: Layers },
  { id: 'pagination', label: 'Pagination', icon: Hash },
  { id: 'drawer', label: 'Drawer', icon: PanelRight },
  { id: 'dialog', label: 'Dialog', icon: MessageSquare },
  { id: 'tooltips', label: 'Tooltips', icon: Info },
  { id: 'toasts', label: 'Toasts', icon: BellRing },
  { id: 'forms', label: 'Form Controls', icon: ToggleLeft },
  { id: 'inputs', label: 'Inputs', icon: TextCursorInput },
  { id: 'sidebar', label: 'Sidebar', icon: PanelLeft },
  { id: 'loader', label: 'Loader', icon: Loader2 },
  { id: 'slider', label: 'Slider', icon: SlidersHorizontal },
  { id: 'progress', label: 'Progress Bar', icon: BarChart3 },
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
      "url": "https://mcp-remote-worker.titands.workers.dev/sse"
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

function SetupGuide() {
  return (
    <div className="setup-guide">
      <h1>How to set up Titan</h1>
      <p className="setup-intro">Everything you need to start designing with Titan in Cursor. No coding required.</p>

      {/* ── FAQ ── */}
      <section className="setup-section setup-faq">
        <h2>What can you ask /titan?</h2>
        <p>Once installed, you can ask the AI anything about Titan. Here are some examples:</p>
        <ul className="setup-faq-list">
          <li><strong>"Build a settings page with sidebar navigation, form fields, and a save button"</strong> — Generates a full page layout using Titan components and tokens.</li>
          <li><strong>"Show me all available button variants and when to use each one"</strong> — Returns the component registry with props, states, and usage guidance.</li>
          <li><strong>"Create a report list page with filters, table, and pagination"</strong> — Combines multiple compositions into a real SaaS pattern.</li>
          <li><strong>"Review this UI and check it follows Titan tokens and patterns"</strong> — Validates your code against the design system rules.</li>
          <li><strong>"Bootstrap a new Vite + React project with Titan theme insights"</strong> — Returns ready-to-paste setup snippets (fonts, CSS links, theme config).</li>
        </ul>
      </section>

      {/* ── 1. Install MCP ── */}
      <section className="setup-section">
        <h2>1. Install the Titan MCP</h2>
        <p>The MCP (Model Context Protocol) connects Cursor to the Titan Design System. It gives the AI full knowledge of components, tokens, patterns, and rules.</p>
        <ol className="setup-steps">
          <li>Open <strong>Cursor → Settings → Cursor Settings</strong></li>
          <li>Go to the <strong>MCP</strong> tab</li>
          <li>Click <strong>+ Add new global MCP server</strong></li>
          <li>Paste this configuration and save:</li>
        </ol>
        <CodeBlock code={MCP_CONFIG} />
      </section>

      {/* ── 2. Using /titan ── */}
      <section className="setup-section">
        <h2>2. Using /titan</h2>
        <p>Once the MCP is installed, type <code>/titan</code> in Cursor chat to invoke the Titan Design System. The AI will automatically use Titan components, tokens, and patterns.</p>
        <h3>Check for updates</h3>
        <p>Ask the AI to verify it has the latest version of the design system:</p>
        <CodeBlock code={'/titan "check for new versions"'} />
        <p>This ensures you always work with the most up-to-date components and tokens.</p>
      </section>

      {/* ── 3. Cursor Commands ── */}
      <section className="setup-section">
        <h2>3. Cursor Commands</h2>
        <p>Add these as custom commands in Cursor. Go to <strong>Cursor → Settings → Cursor Settings → Commands</strong>, create a new <code>.md</code> file for each, and paste the content.</p>

        <div className="setup-command">
          <h3><code>/refine-ui</code></h3>
          <p>Polish an existing interface without changing layout or structure. Improves typography, color balance, spacing, and visual hierarchy. Use it after building a screen to make it feel more premium.</p>
          <CodeBlock code={CMD_REFINE_UI} />
        </div>

        <div className="setup-command">
          <h3><code>/ux-brainstorm</code></h3>
          <p>Get 3 design alternatives (simple, balanced, advanced) for any screen or flow. Each option includes layout wireframes, hierarchy, interactions, and all states.</p>
          <CodeBlock code={CMD_UX_BRAINSTORM} />
        </div>

        <div className="setup-command">
          <h3><code>/ux-redesign</code></h3>
          <p>Propose fundamentally different layout alternatives for the same UI. Each alternative includes wireframe, hierarchy, pros/cons, and when to use it.</p>
          <CodeBlock code={CMD_UX_REDESIGN} />
        </div>

        <div className="setup-command">
          <h3><code>/user-stories</code></h3>
          <p>Convert a validated UX flow into small, vertical user stories with acceptance criteria and scope boundaries.</p>
          <CodeBlock code={CMD_USER_STORIES} />
        </div>
      </section>

      {/* ── 4. Cursor Rule ── */}
      <section className="setup-section">
        <h2>4. Cursor Rule</h2>
        <p>Add this as a User Rule in <strong>Cursor → Settings → Cursor Settings → Rules</strong>. It sets the AI to think like a senior UX designer for every conversation.</p>
        <CodeBlock code={RULE_SENIOR_UX} />
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
          <TitanSidebarHeader>Components</TitanSidebarHeader>
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
            <TitanBreadcrumb
              items={[
                { id: 'home', label: 'Home' },
                { id: 'creator', label: 'Creator discovery' },
              ]}
              currentLabel="Campaigns"
            />
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

          {/* ── 6. Menus ───────────────────────────────────── */}
          <ShowcaseCard
            id="menus"
            title="Menus"
            ariaImports="import { Button, Menu, MenuItem, MenuTrigger, Popover, SubmenuTrigger } from 'react-aria-components'"
            ariaDesc="Full menu system built on React Aria: MenuTrigger manages open/close, Popover handles positioning, Menu + MenuItem provide keyboard navigation (arrow keys, typeahead), and SubmenuTrigger enables cascading sub-menus."
            ariaComponents={['MenuTrigger', 'Button', 'Popover', 'Menu', 'MenuItem', 'SubmenuTrigger']}
            foundations={[
              { category: 'Spacing', detail: '--menu-slot-pad-y / --menu-slot-pad-x for popover padding; --menu-item-slot-pad-x for item padding; --spacing-4xs for item list gap; --spacing-2xs for submenu offset.' },
              { category: 'Sizing', detail: '--menu-slot-min-width / --menu-slot-max-width constrain popover width; --menu-item-slot-height for item hit area.' },
              { category: 'Surface', detail: '--menu-slot-bg popover background; --menu-slot-shadow for elevation; --popover-slot-border-width / --popover-slot-border-color for border.' },
              { category: 'Typography', detail: '--button-slot-font-size, --button-slot-line-height, --button-slot-font-weight for menu item text.' },
              { category: 'Icons', detail: '--icon-size-m and --icon-stroke-m for item icons and chevrons.' },
            ]}
            tokenGroups={[
              { label: 'Popover', tokens: ['--menu-slot-bg', '--menu-slot-color', '--menu-slot-min-width', '--menu-slot-max-width', '--menu-slot-radius', '--menu-slot-shadow', '--menu-slot-pad-y', '--menu-slot-pad-x'] },
              { label: 'Border', tokens: ['--popover-slot-border-width', '--popover-slot-border-color'] },
              { label: 'Item', tokens: ['--menu-item-slot-height', '--menu-item-slot-radius', '--menu-item-slot-pad-x', '--menu-item-slot-color', '--menu-item-slot-bg', '--menu-item-slot-gap', '--menu-item-slot-icon'] },
              { label: 'Item states', tokens: ['--menu-item-slot-bg-hover', '--menu-item-slot-bg-active', '--menu-item-slot-bg-selected', '--menu-item-slot-disabled'] },
              { label: 'Destructive', tokens: ['--menu-item-destructive-slot-color', '--menu-item-destructive-slot-icon', '--menu-item-destructive-slot-bg-hover', '--menu-item-destructive-slot-bg-active'] },
            ]}
            code={CODE_MENUS}
          >
            <div className="row">
              <TitanMenuDropdown
                triggerLabel="Open menu"
                items={[
                  { id: 'search', label: 'Search profiles', icon: <Search /> },
                  { id: 'profile', label: 'Profile settings', icon: <User /> },
                  { id: 'notifications', label: 'Notifications', icon: <Bell /> },
                  { id: 'disabled', label: 'Disabled option', icon: <Settings />, disabled: true },
                  { id: 'delete', label: 'Delete audience', icon: <Trash2 />, destructive: true },
                ]}
              />
              <TitanMenuDropdown
                triggerLabel="Open cascading menu"
                items={[
                  { id: 'overview', label: 'Overview', icon: <Search /> },
                  {
                    id: 'export',
                    label: 'Export',
                    icon: <Settings />,
                    children: [
                      { id: 'csv', label: 'CSV file' },
                      { id: 'xlsx', label: 'XLSX file' },
                      { id: 'pdf', label: 'PDF file' },
                    ],
                  },
                  { id: 'delete-2', label: 'Delete audience', icon: <Trash2 />, destructive: true },
                ]}
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

        </main>
      </div>
      )}
    </>
  )
}

export default App
