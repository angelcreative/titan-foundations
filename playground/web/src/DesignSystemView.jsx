import { useState, useCallback, useRef } from 'react'
import { Ruler, Palette, Type, Layers, Sparkles, Image, Search, User, Settings } from 'lucide-react'
import {
  TitanSidebar,
  TitanSidebarItem,
  TitanCard,
  TitanCardGrid,
  TitanBreadcrumb,
  TitanButton,
  TitanSelect,
} from 'titan-compositions'

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const SPACING = [
  { token: '--spacing-5xs', value: '2px' },
  { token: '--spacing-4xs', value: '4px' },
  { token: '--spacing-3xs', value: '6px' },
  { token: '--spacing-2xs', value: '8px' },
  { token: '--spacing-xs', value: '10px' },
  { token: '--spacing-s', value: '12px' },
  { token: '--spacing-m', value: '16px' },
  { token: '--spacing-l', value: '24px' },
  { token: '--spacing-xl', value: '32px' },
  { token: '--spacing-2xl', value: '40px' },
  { token: '--spacing-3xl', value: '48px' },
  { token: '--spacing-4xl', value: '64px' },
  { token: '--spacing-5xl', value: '80px' },
]

const BORDERS = {
  radius: [
    { token: '--rounded-xs', value: '4px' },
    { token: '--rounded-s', value: '8px' },
    { token: '--rounded-m', value: '12px' },
    { token: '--rounded-l', value: '16px' },
    { token: '--rounded-xl', value: '20px' },
  ],
  stroke: [
    { token: '--stroke-s', value: '1px' },
    { token: '--stroke-m', value: '2px' },
    { token: '--stroke-l', value: '3px' },
    { token: '--stroke-xl', value: '4px' },
  ],
}

const TYPOGRAPHY = [
  { use: 'Page title (max)', token: '--font-size-4xl', size: '46px', leading: '--font-leading-5xl' },
  { use: 'Section title', token: '--font-size-3xl', size: '32px', leading: '--font-leading-4xl' },
  { use: 'Card title', token: '--font-size-2xl', size: '24px', leading: '--font-leading-3xl' },
  { use: 'Subsection', token: '--font-size-xl', size: '20px', leading: '--font-leading-2xl' },
  { use: 'Body default', token: '--font-size-l', size: '16px', leading: '--font-leading-xl' },
  { use: 'Body small', token: '--font-size-m', size: '14px', leading: '--font-leading-m' },
  { use: 'Labels / Hints', token: '--font-size-s', size: '12px', leading: '--font-leading-s' },
]

const ICON_SIZES = [
  { token: '--icon-size-s', size: '12px', box: '15px', stroke: '1.25px', use: 'Table headers, breadcrumbs' },
  { token: '--icon-size-m', size: '16px', box: '20px', stroke: '1.5px', use: 'Buttons, menus, pills, tables' },
  { token: '--icon-size-l', size: '24px', box: '30px', stroke: '2px', use: 'Empty states, hero icons' },
]

const THEMES = ['insights', 'audiense', 'neutral', 'demand', 'linkedin', 'tweetbinder', 'brand']
const THEME_COLORS = {
  insights: 'var(--color-blueberry-600)',
  audiense: 'var(--color-pomegranate-600)',
  neutral: 'var(--color-black-600)',
  demand: 'var(--color-aquamarine-600)',
  linkedin: 'var(--color-indigo-600)',
  tweetbinder: 'var(--color-ocean-600)',
  brand: 'var(--color-pulse-600)',
}

const SOLID_COLOR_FAMILIES = [
  'black', 'white', 'steel', 'blue', 'ocean', 'indigo', 'blueberry', 'violet', 'purple',
  'pink', 'magenta', 'red', 'tomato', 'pomegranate', 'orange', 'mango', 'yellow', 'lime',
  'green', 'teal', 'aquamarine', 'turquoise', 'avocado', 'brown', 'cacao',
  'error', 'disabled', 'information', 'success', 'warning',
  'pulse', 'ground',
]

const OPACITY_COLOR_FAMILIES = [
  'black', 'white', 'steel', 'blue', 'ocean', 'indigo', 'blueberry', 'violet', 'purple',
  'pink', 'magenta', 'red', 'tomato', 'orange', 'mango', 'yellow', 'lime',
  'green', 'teal', 'aquamarine', 'turquoise', 'avocado', 'brown', 'cacao',
]

/* ------------------------------------------------------------------ */
/*  Design System View                                                 */
/* ------------------------------------------------------------------ */

const DS_NAV_ITEMS = [
  { id: 'foundations', label: 'Foundations', icon: Ruler },
  { id: 'themes', label: 'Themes', icon: Palette },
  { id: 'typography', label: 'Typography', icon: Type },
  { id: 'colors', label: 'Colors', icon: Sparkles },
  { id: 'tokens', label: 'Tokens', icon: Layers },
  { id: 'icons', label: 'Icons', icon: Image },
]

export function DesignSystemView({ theme, onThemeChange }) {
  const [breadcrumb, setBreadcrumb] = useState([])
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const mainScrollRef = useRef(null)

  const goTo = useCallback((path) => setBreadcrumb(path), [])
  const goBack = useCallback(() => setBreadcrumb((p) => p.slice(0, -1)), [])
  const currentSection = breadcrumb[0]

  return (
    <div className="app-layout">
      <TitanSidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed((c) => !c)}
        activeId={currentSection ?? ''}
        onActiveChange={(id) => goTo([id])}
      >
        {DS_NAV_ITEMS.map((item) => (
          <TitanSidebarItem key={item.id} id={item.id} icon={item.icon}>
            {item.label}
          </TitanSidebarItem>
        ))}
      </TitanSidebar>

      <main ref={mainScrollRef} className="page ds-page">
        {breadcrumb.length > 0 && (
          <section className="card ds-breadcrumb-card">
            <TitanBreadcrumb
              items={breadcrumb.slice(0, -1).map((b, i) => ({
                id: b,
                label: b.charAt(0).toUpperCase() + b.slice(1),
                onPress: () => goTo(breadcrumb.slice(0, i + 1)),
              }))}
              currentLabel={breadcrumb[breadcrumb.length - 1].charAt(0).toUpperCase() + breadcrumb[breadcrumb.length - 1].slice(1)}
            />
            <TitanButton variant="secondary" onPress={goBack} style={{ marginTop: 'var(--spacing-s)' }}>
              ← Back
            </TitanButton>
          </section>
        )}

        {breadcrumb.length === 0 && (
          <section className="card">
            <h2 className="ds-page-title">Design System</h2>
            <p className="ds-page-lead">Foundations, themes, typography, colors, tokens, and icons.</p>
            <TitanCardGrid>
              <DSCard title="Foundations" desc="Spacing, borders, elevation" icon={Ruler} onClick={() => goTo(['foundations'])} />
              <DSCard title="Themes" desc="Six themes" icon={Palette} onClick={() => goTo(['themes'])} />
              <DSCard title="Typography" desc="Scale & vertical rhythm" icon={Type} onClick={() => goTo(['typography'])} />
              <DSCard title="Colors" desc="Solid & opacity palettes" icon={Sparkles} onClick={() => goTo(['colors'])} />
              <DSCard title="Tokens" desc="Semantic tokens" icon={Layers} onClick={() => goTo(['tokens'])} />
              <DSCard title="Icons" desc="Sizes & spacing" icon={Image} onClick={() => goTo(['icons'])} />
            </TitanCardGrid>
          </section>
        )}

        {currentSection === 'foundations' && (
          <FoundationsContent subLevel={breadcrumb[1]} goTo={goTo} />
        )}
        {currentSection === 'themes' && (
          <ThemesContent theme={theme} onThemeChange={onThemeChange} />
        )}
        {currentSection === 'typography' && (
          <TypographyContent subLevel={breadcrumb[1]} goTo={goTo} />
        )}
        {currentSection === 'colors' && (
          <ColorsContent subLevel={breadcrumb[1]} goTo={goTo} />
        )}
        {currentSection === 'tokens' && (
          <TokensContent subLevel={breadcrumb[1]} goTo={goTo} />
        )}
        {currentSection === 'icons' && (
          <IconsContent subLevel={breadcrumb[1]} goTo={goTo} />
        )}
      </main>
    </div>
  )
}

function DSCard({ title, desc, icon: Icon, onClick }) {
  return (
    <TitanCard span={8} className="ds-card-clickable">
      <button type="button" className="ds-card-btn" onClick={onClick}>
        <Icon className="ds-card-icon" />
        <span className="ds-card-title">{title}</span>
        <span className="ds-card-desc">{desc}</span>
      </button>
    </TitanCard>
  )
}

function FoundationsContent({ subLevel, goTo }) {
  if (!subLevel) {
    return (
      <section className="card ds-doc-card">
        <h2 className="ds-section-title">Foundations</h2>
        <p className="ds-lead">The foundational layer defines the raw visual vocabulary: spacing, borders, and elevation. Every component in Titan is built from these primitives — never from magic numbers.</p>
        <div className="ds-doc">
          <h3>Why foundations matter</h3>
          <p>Foundations enforce <strong>visual consistency</strong> across all products. When every padding, radius, and shadow comes from the same scale, users perceive a single coherent product even when features are built by different teams. It also makes theming possible — change the foundation, and everything downstream updates.</p>
          <p>The three pillars are:</p>
          <ul>
            <li><strong>Spacing</strong> — Controls whitespace, padding, gaps, and margins. Built on a base-2 scale (multiples of 2px) for pixel-perfect alignment.</li>
            <li><strong>Borders</strong> — Radius and stroke width. Radius creates the visual "softness" of the UI; stroke width creates hierarchy between separators, inputs, and focus rings.</li>
            <li><strong>Elevation</strong> — Box shadows that create the z-axis layering: cards float above backgrounds, popovers float above cards, modals float above everything.</li>
          </ul>
        </div>
        <TitanCardGrid>
          <DSCard title="Spacing" desc="5xs → 5xl" icon={Ruler} onClick={() => goTo(['foundations', 'spacing'])} />
          <DSCard title="Borders" desc="Radius & stroke" icon={Ruler} onClick={() => goTo(['foundations', 'borders'])} />
          <DSCard title="Elevation" desc="Shadows" icon={Ruler} onClick={() => goTo(['foundations', 'elevation'])} />
        </TitanCardGrid>
      </section>
    )
  }
  if (subLevel === 'spacing') {
    return (
      <section className="card ds-doc-card">
        <h2 className="ds-section-title">Spacing</h2>
        <div className="ds-doc">
          <p>The spacing scale uses <strong>multiples of 2px</strong> to guarantee subpixel-free rendering on all screens. Every value in the scale has a semantic name (5xs through 7xl) so you never hardcode pixel values.</p>
          <h3>Why this scale?</h3>
          <ul>
            <li><strong>Density without cramming:</strong> SaaS dashboards show lots of data. Small steps (2, 4, 6, 8px) let you create dense UIs that still breathe, while large steps (48, 64, 80px) separate major content areas.</li>
            <li><strong>Consistent rhythm:</strong> When every gap comes from the same scale, the eye perceives order. Jakob&apos;s Law — users spend most of their time on other apps that use consistent spacing.</li>
            <li><strong>No magic numbers:</strong> If a designer says "a bit more space," you move one step up the scale instead of guessing pixels.</li>
          </ul>
          <h3>When to use what</h3>
          <ul>
            <li><code className="ds-code">5xs–4xs</code> (2–4px): Minimal gaps — icon-to-text, pill padding, inline elements.</li>
            <li><code className="ds-code">3xs–2xs</code> (6–8px): Inner padding — inside buttons, form controls, table cells.</li>
            <li><code className="ds-code">xs–s</code> (10–12px): Component gaps — between items in a list, between label and input.</li>
            <li><code className="ds-code">m</code> (16px): Base rhythm — between paragraphs, card internal sections.</li>
            <li><code className="ds-code">l–xl</code> (24–32px): Section gaps — between card groups, between sidebar and content.</li>
            <li><code className="ds-code">2xl–5xl</code> (40–80px): Page-level — top margins, section dividers, hero spacing.</li>
          </ul>
        </div>
        <div className="ds-token-grid">
          {SPACING.map((s) => (
            <div key={s.token} className="ds-token-row">
              <div className="ds-token-swatch" style={{ width: s.value, minWidth: s.value, height: 20 }} />
              <code className="ds-code">{s.token}</code>
              <span className="ds-muted">{s.value}</span>
            </div>
          ))}
        </div>
      </section>
    )
  }
  if (subLevel === 'borders') {
    return (
      <section className="card ds-doc-card">
        <h2 className="ds-section-title">Borders</h2>
        <div className="ds-doc">
          <p>Borders have two dimensions: <strong>radius</strong> (how rounded corners are) and <strong>stroke</strong> (how thick lines are). Both create visual hierarchy.</p>
          <h3>Why these radius values?</h3>
          <ul>
            <li><code className="ds-code">rounded-xs</code> (4px): Subtle rounding for small elements — pills, tags, badges, table header corners. Just enough to soften without looking "bubbly."</li>
            <li><code className="ds-code">rounded-s</code> (8px): Default for interactive elements — buttons, inputs, select triggers, cards. Friendly but professional.</li>
            <li><code className="ds-code">rounded-m</code> (12px): Larger containers — dialogs, drawers, popovers. Creates a clear "floating" feel.</li>
            <li><code className="ds-code">rounded-l</code> (16px): Feature cards, hero elements. Strong visual presence.</li>
            <li><code className="ds-code">rounded-xl</code> (20px): Special emphasis — avatars, promotional elements.</li>
          </ul>
          <h3>Why these stroke values?</h3>
          <ul>
            <li><code className="ds-code">stroke-s</code> (1px): Default for separators, table borders, input borders. Visible but unobtrusive.</li>
            <li><code className="ds-code">stroke-m</code> (2px): Focus rings, active state borders. Draws attention without being heavy.</li>
            <li><code className="ds-code">stroke-l</code> (3px): Strong emphasis — selected tabs, progress indicators.</li>
            <li><code className="ds-code">stroke-xl</code> (4px): Maximum emphasis — reserved for primary visual indicators.</li>
          </ul>
        </div>
        <h3 className="ds-subtitle">Radius</h3>
        <div className="ds-token-grid">
          {BORDERS.radius.map((r) => (
            <div key={r.token} className="ds-token-row">
              <div className="ds-token-swatch" style={{ width: 36, height: 36, borderRadius: r.value }} />
              <code className="ds-code">{r.token}</code>
              <span className="ds-muted">{r.value}</span>
            </div>
          ))}
        </div>
        <h3 className="ds-subtitle">Stroke</h3>
        <div className="ds-token-grid">
          {BORDERS.stroke.map((s) => (
            <div key={s.token} className="ds-token-row">
              <div className="ds-token-swatch" style={{ width: 36, height: 6, borderBottom: `${s.value} solid var(--color-steel-500)` }} />
              <code className="ds-code">{s.token}</code>
              <span className="ds-muted">{s.value}</span>
            </div>
          ))}
        </div>
      </section>
    )
  }
  if (subLevel === 'elevation') {
    return (
      <section className="card ds-doc-card">
        <h2 className="ds-section-title">Elevation</h2>
        <div className="ds-doc">
          <p>Elevation uses box-shadows to create a sense of <strong>physical depth</strong>. Higher elevation = more prominent shadow = element feels closer to the user.</p>
          <h3>Why three levels?</h3>
          <ul>
            <li><strong>Level 1</strong> — Subtle lift. Used for cards, table containers, and panels that sit on the page background. The user perceives them as "on the surface" but distinct from it.</li>
            <li><strong>Level 2</strong> — Medium lift. Used for dropdowns, popovers, select menus, and notification panels. These elements are temporary and need to feel like they float above the content.</li>
            <li><strong>Level 3</strong> — Maximum lift. Used for dialogs and drawers — modal overlays that demand attention and must feel clearly separated from the rest of the UI.</li>
          </ul>
          <p>Shadows use <code className="ds-code">--color-steel-10</code> (an opacity color) to create neutral, theme-agnostic depth. This means shadows look correct across all six themes without adjustment.</p>
        </div>
        <div className="ds-elevation-row">
          <div className="ds-elevation-card" style={{ boxShadow: 'var(--elevation-slot-1)' }}><span>1</span><span className="ds-muted" style={{ fontSize: 12 }}>Cards, panels</span></div>
          <div className="ds-elevation-card" style={{ boxShadow: 'var(--elevation-slot-2)' }}><span>2</span><span className="ds-muted" style={{ fontSize: 12 }}>Dropdowns, popovers</span></div>
          <div className="ds-elevation-card" style={{ boxShadow: 'var(--elevation-slot-3)' }}><span>3</span><span className="ds-muted" style={{ fontSize: 12 }}>Dialogs, drawers</span></div>
        </div>
      </section>
    )
  }
  return null
}

function ThemesContent({ theme, onThemeChange }) {
  return (
    <section className="card ds-doc-card">
      <h2 className="ds-section-title">Themes</h2>
      <div className="ds-doc">
        <p>Titan powers <strong>six Audiense products</strong>, each with its own brand color. Themes let every product share the same components while looking distinct. This is achieved through a single CSS attribute: <code className="ds-code">data-theme</code> on the <code className="ds-code">&lt;html&gt;</code> tag.</p>
        <h3>How it works</h3>
        <p>Each theme CSS file overrides a small set of semantic tokens — primarily the "primary" color family (buttons, links, selected states, focus rings). Everything else (neutrals, error states, spacing) stays the same. This means:</p>
        <ul>
          <li>Components are <strong>theme-agnostic</strong> — they reference <code className="ds-code">--button-primary</code>, not <code className="ds-code">--color-blueberry-600</code>.</li>
          <li>Switching themes is a <strong>single attribute change</strong>, not a CSS rebuild.</li>
          <li>You can preview themes in real-time (try it below).</li>
        </ul>
        <h3>Activation</h3>
        <pre className="ds-code-block">{`<html data-theme="insights">  <!-- Blueberry primary -->
<html data-theme="demand">    <!-- Aquamarine primary -->
<html data-theme="neutral">   <!-- Black primary -->`}</pre>
      </div>
      <TitanSelect
        label="Preview theme"
        options={THEMES.map((t) => ({ id: t, label: t }))}
        selectedKey={theme}
        onSelectionChange={(k) => onThemeChange(String(k))}
      />
      <div className="ds-theme-preview">
        {THEMES.map((t) => (
          <button
            key={t}
            type="button"
            className={`ds-theme-card${theme === t ? ' ds-theme-card-active' : ''}`}
            onClick={() => onThemeChange(t)}
          >
            <div className="ds-theme-swatch" style={{ background: THEME_COLORS[t] }} />
            <span>{t}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

function TypographyContent({ subLevel, goTo }) {
  if (!subLevel) {
    return (
      <section className="card ds-doc-card">
        <h2 className="ds-section-title">Typography</h2>
        <div className="ds-doc">
          <p>Typography is the most impactful foundation — users spend 80%+ of their time reading text. The type scale is designed for <strong>SaaS dashboards</strong>: data-dense, scannable, and clear at every size.</p>
          <h3>Key decisions</h3>
          <ul>
            <li><strong>Base size: 14px</strong> (<code className="ds-code">font-size-m</code>) for body text in data-heavy interfaces. 16px (<code className="ds-code">font-size-l</code>) for content-heavy pages.</li>
            <li><strong>Three weights only</strong> (400, 500, 600): Enough to create hierarchy without visual noise. 400 for body, 500 for emphasis/labels, 600 for headings.</li>
            <li><strong>Paired line-heights:</strong> Each font size has a matching line-height token (<code className="ds-code">font-leading-*</code>) that creates consistent vertical rhythm.</li>
          </ul>
        </div>
        <TitanCardGrid>
          <DSCard title="Scale" desc="Sizes & line-heights" icon={Type} onClick={() => goTo(['typography', 'scale'])} />
          <DSCard title="Vertical rhythm" desc="Spacing between blocks" icon={Type} onClick={() => goTo(['typography', 'rhythm'])} />
        </TitanCardGrid>
      </section>
    )
  }
  if (subLevel === 'scale') {
    return (
      <section className="card ds-doc-card">
        <h2 className="ds-section-title">Typography scale</h2>
        <div className="ds-doc">
          <p>The scale goes from 12px (labels, hints, captions) to 46px (page titles). Each step has a clear purpose:</p>
        </div>
        <div className="ds-table-wrap">
          <table className="ds-table">
            <thead>
              <tr>
                <th>Use</th>
                <th>Token</th>
                <th>Size</th>
                <th>Sample</th>
              </tr>
            </thead>
            <tbody>
              {TYPOGRAPHY.map((t) => (
                <tr key={t.token}>
                  <td className="ds-muted">{t.use}</td>
                  <td><code className="ds-code">{t.token}</code></td>
                  <td className="ds-muted">{t.size}</td>
                  <td style={{ fontSize: `var(${t.token})`, lineHeight: `var(${t.leading})` }}>
                    Sample text
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    )
  }
  if (subLevel === 'rhythm') {
    return (
      <section className="card ds-doc-card">
        <h2 className="ds-section-title">Vertical rhythm</h2>
        <div className="ds-doc">
          <p>Vertical rhythm is the consistent spacing between text blocks. It makes content feel <strong>organized</strong> even before you read it — your eye perceives the structure instantly (Law of Proximity).</p>
          <ul>
            <li>Use <code className="ds-code">--spacing-3xs</code> (6px) between a label and its input.</li>
            <li>Use <code className="ds-code">--spacing-s</code> (12px) between paragraphs within a section.</li>
            <li>Use <code className="ds-code">--spacing-m</code> (16px) between sections in a card.</li>
            <li>Use <code className="ds-code">--spacing-l</code> (24px) between major content blocks.</li>
          </ul>
        </div>
        <div className="ds-rhythm-demo">
          <h3 className="ds-rhythm-title">Card title</h3>
          <p className="ds-rhythm-body">
            Body text at 16px. Consistent spacing creates visual rhythm that guides the eye down the page without effort.
          </p>
          <p className="ds-rhythm-hint">Hints and labels at 12px — secondary information that supports but doesn&apos;t compete with the body.</p>
        </div>
      </section>
    )
  }
  return null
}

function ColorsContent({ subLevel, goTo }) {
  if (!subLevel) {
    return (
      <section className="card ds-doc-card">
        <h2 className="ds-section-title">Colors</h2>
        <div className="ds-doc">
          <p>Titan has <strong>25+ color families</strong>, each available in two variants: solid and opacity. This breadth exists because Audiense products deal heavily with data visualization — charts, pills, tags, and segments need distinct, accessible colors.</p>
          <h3>Solid vs Opacity</h3>
          <ul>
            <li><strong>Solid (100–900):</strong> Full-opacity colors from light to dark. Use for backgrounds, text, borders, and any element that sits on a solid surface. 100 is the lightest tint, 900 is the darkest shade.</li>
            <li><strong>Opacity (10–90):</strong> Colors with alpha transparency. Use for overlays, hover states, subtle tints, and elements that need to blend with whatever is behind them. 10 is nearly invisible, 90 is nearly opaque.</li>
          </ul>
          <h3>Special families</h3>
          <p>Beyond brand colors, Titan defines <strong>semantic families</strong>: <code className="ds-code">error</code>, <code className="ds-code">success</code>, <code className="ds-code">warning</code>, <code className="ds-code">information</code>, and <code className="ds-code">disabled</code>. These are used for status states and should never be used for decorative purposes.</p>
        </div>
        <TitanCardGrid>
          <DSCard title="Solid" desc="All palettes" icon={Sparkles} onClick={() => goTo(['colors', 'solid'])} />
          <DSCard title="Opacity" desc="All opacity variants" icon={Sparkles} onClick={() => goTo(['colors', 'opacity'])} />
        </TitanCardGrid>
      </section>
    )
  }
  if (subLevel === 'solid') {
    return (
      <section className="card">
        <h2 className="ds-section-title">Solid colors</h2>
        <p className="ds-lead">Each family has 9 steps (100–900). Lighter numbers = lighter tones. The 600 step is typically the "primary" for each family — it&apos;s the most vibrant and readable.</p>
        <div className="ds-colors-block">
          {SOLID_COLOR_FAMILIES.map((fam) => (
            <div key={fam} className="ds-color-row">
              <span className="ds-color-label">{fam}</span>
              <div className="ds-color-row-swatches">
              {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((n) => {
                const token = `--color-${fam}-${n}`
                return (
                  <div
                    key={n}
                    className="ds-color-swatch"
                    style={{ background: `var(${token})` }}
                    title={token}
                  />
                )
              })}
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  if (subLevel === 'opacity') {
    return (
      <section className="card">
        <h2 className="ds-section-title">Opacity colors</h2>
        <p className="ds-lead">Same families as solid, but with alpha transparency (10–90). Lower numbers are more transparent. Perfect for hover states, surface tints, and overlays that need to blend with the background.</p>
        <div className="ds-colors-block">
          {OPACITY_COLOR_FAMILIES.map((fam) => (
            <div key={fam} className="ds-color-row ds-color-row-opacity">
              <span className="ds-color-label">{fam}</span>
              <div className="ds-color-row-swatches">
                {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((n) => {
                  const token = `--color-${fam}-${n}`
                  return (
                    <div
                      key={n}
                      className="ds-color-swatch"
                      style={{ background: `var(${token})` }}
                      title={token}
                    />
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  return null
}

function TokensContent({ subLevel }) {
  if (!subLevel) {
    return (
      <section className="card ds-doc-card">
        <h2 className="ds-section-title">Tokens</h2>
        <p className="ds-lead">Tokens are the single source of truth for every visual decision in Titan. They replace hardcoded values with named, reusable, themeable references.</p>
        <div className="ds-doc">
          <h3>1. Architecture</h3>
          <p>Tokens are organized in <strong>three layers</strong>, each building on the one below:</p>
          <ul>
            <li><strong>Layer 1 — Primitives</strong> (<code className="ds-code">tokens/foundations/*.json</code>): Raw values — hex colors, px, font weights. These are the "atoms." They have no opinion about usage; <code className="ds-code">color-blueberry-600</code> is just a blue hex, not "the primary button color."</li>
            <li><strong>Layer 2 — Semantics + Slots</strong> (<code className="ds-code">tokens/css/titan.css</code>): CSS variables that reference primitives and assign <strong>meaning</strong>. <code className="ds-code">--button-primary</code> references <code className="ds-code">color-blueberry-600</code> in the Insights theme — this is the layer that gives purpose to raw values.</li>
            <li><strong>Layer 3 — Themes</strong> (<code className="ds-code">tokens/themes/_*.css</code>): Product overrides that re-point semantic tokens to different primitives. When you switch from Insights to Demand, <code className="ds-code">--button-primary</code> changes from blueberry to aquamarine — without touching any component code.</li>
          </ul>
          <h4>Why three layers?</h4>
          <p>This separation solves a real problem: <strong>design drift</strong>. Without it, teams hardcode <code className="ds-code">#3B82F6</code> in 400 places, then a rebrand means find-and-replace across the entire codebase. With tokens, you change one variable and the entire app updates. The semantic layer is critical because it decouples <em>what a color means</em> from <em>what it looks like</em>.</p>

          <h3>2. Token sources</h3>
          <p>Understanding where tokens live helps you know what to read, what to reference, and what <strong>never</strong> to edit.</p>
          <h4>2.1 Primitive sources: <code className="ds-code">tokens/foundations/</code></h4>
          <div className="ds-table-wrap">
            <table className="ds-table">
              <thead>
                <tr>
                  <th>File</th>
                  <th>Content</th>
                  <th>Example key</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><code className="ds-code">colors-solid.json</code></td><td>Solid colors (hex)</td><td><code className="ds-code">color-black-100</code>, <code className="ds-code">color-blueberry-600</code></td></tr>
                <tr><td><code className="ds-code">colors-opacity.json</code></td><td>Colors with alpha (8-digit hex)</td><td><code className="ds-code">$color-steel-10</code>, <code className="ds-code">$color-white-50</code></td></tr>
                <tr><td><code className="ds-code">spacing.json</code></td><td>Spacing scale</td><td><code className="ds-code">spacing-5xs</code> (2px) → <code className="ds-code">spacing-7xl</code> (160px)</td></tr>
                <tr><td><code className="ds-code">typography.json</code></td><td>Sizes, weights, line-heights, compositions</td><td><code className="ds-code">font-size-s</code>, <code className="ds-code">font-leading-2xl</code>, <code className="ds-code">body-m-500</code></td></tr>
                <tr><td><code className="ds-code">borders.json</code></td><td>Radii and stroke widths</td><td><code className="ds-code">rounded-s</code>, <code className="ds-code">stroke-m</code>, <code className="ds-code">border-dft</code></td></tr>
                <tr><td><code className="ds-code">elevation.json</code></td><td>Shadows, compositions</td><td><code className="ds-code">box-shadow-1</code>, <code className="ds-code">elevation-2</code></td></tr>
              </tbody>
            </table>
          </div>

          <h4>2.2 Component specs: <code className="ds-code">foundations/</code> (root)</h4>
          <p>Component rules (navbar, menu, button, etc.), not primitives. Use <code className="ds-code">$</code> for token refs: <code className="ds-code">$spacing-s</code>, <code className="ds-code">$color-steel-700</code>, <code className="ds-code">$rounded-m</code>.</p>

          <h4>2.3 Output: <code className="ds-code">tokens/css/titan.css</code></h4>
          <p><strong>Automatic build:</strong> <code className="ds-code">npm run build:tokens</code> generates primitives from <code className="ds-code">tokens/foundations/*.json</code> (Style Dictionary) and concatenates with <code className="ds-code">titan-semantic.css</code>. Primitives go to <code className="ds-code">titan-foundations.generated.css</code>; the build produces <code className="ds-code">titan.css</code> (header + foundations + semantic).</p>

          <h3>3. Naming convention</h3>
          <p>A predictable naming system means developers can <strong>guess the token name</strong> without looking it up. If you know the pattern, you know the token.</p>
          <h4>3.1 Primitives (JSON)</h4>
          <div className="ds-table-wrap">
            <table className="ds-table">
              <thead>
                <tr>
                  <th>Pattern</th>
                  <th>Meaning</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><code className="ds-code">{'{category}'}-{'{name}'}-{'{scale}'}</code></td><td>Numeric scale</td><td><code className="ds-code">color-black-100</code>, <code className="ds-code">color-steel-600</code></td></tr>
                <tr><td><code className="ds-code">{'{category}'}-{'{size}'}</code></td><td>Semantic size</td><td><code className="ds-code">spacing-xs</code>, <code className="ds-code">spacing-2xl</code>, <code className="ds-code">font-size-m</code></td></tr>
                <tr><td><code className="ds-code">{'{category}'}-{'{type}'}</code></td><td>Specific type</td><td><code className="ds-code">rounded-s</code>, <code className="ds-code">stroke-m</code>, <code className="ds-code">font-weight-500</code></td></tr>
                <tr><td><code className="ds-code">{'{composition}'}-{'{role}'}</code></td><td>Composition</td><td><code className="ds-code">border-dft</code>, <code className="ds-code">elevation-1</code>, <code className="ds-code">text-button</code></td></tr>
              </tbody>
            </table>
          </div>

          <h4>3.2 Color scales</h4>
          <p><strong>Solid (100–900):</strong> Lighter → darker. <code className="ds-code">color-black-100</code> (#f7f7f7) → <code className="ds-code">color-black-900</code> (#1f1f1f). Keys: <code className="ds-code">color-{'{family}'}-{'{step}'}</code>. Values: 6-digit hex (#RRGGBB).</p>
          <p><strong>Opacity (10–90):</strong> More transparent → more opaque. Keys use <code className="ds-code">$</code> prefix to distinguish from solid: <code className="ds-code">$color-white-10</code>, <code className="ds-code">$color-steel-50</code>. Values: 8-digit hex (#RRGGBBAA). Output as rgba in CSS.</p>
          <p><strong>Families:</strong> black, white, steel, blue, ocean, indigo, blueberry, violet, purple, pink, magenta, red, tomato, pomegranate, orange, mango, yellow, lime, green, teal, aquamarine, turquoise, avocado, brown, cacao, error, disabled, information, success, warning.</p>

          <h4>3.3 Spacing</h4>
          <p>Spacing follows a <strong>base-2 scale</strong> — every value is a multiple of 2px, ensuring clean rendering on all screens (no subpixel issues).</p>
          <div className="ds-table-wrap">
            <table className="ds-table">
              <thead>
                <tr>
                  <th>Token</th>
                  <th>Value</th>
                  <th>Typical use</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><code className="ds-code">spacing-5xs</code></td><td>2px</td><td>Minimal gaps (border offsets, fine adjustments)</td></tr>
                <tr><td><code className="ds-code">spacing-4xs</code></td><td>4px</td><td>Icon-to-text gap, badge padding, pill inline spacing</td></tr>
                <tr><td><code className="ds-code">spacing-3xs</code></td><td>6px</td><td>Label-to-input gap, compact list items</td></tr>
                <tr><td><code className="ds-code">spacing-2xs</code></td><td>8px</td><td>Inner padding (buttons, inputs, table cells), icon button padding</td></tr>
                <tr><td><code className="ds-code">spacing-xs</code></td><td>10px</td><td>Between form fields, compact card padding</td></tr>
                <tr><td><code className="ds-code">spacing-s</code></td><td>12px</td><td>Card section gaps, sidebar item padding, dialog header padding</td></tr>
                <tr><td><code className="ds-code">spacing-m</code></td><td>16px</td><td>Base rhythm — paragraphs, card body padding, form field stacks</td></tr>
                <tr><td><code className="ds-code">spacing-l</code></td><td>24px</td><td>Between card groups, section margins, drawer padding</td></tr>
                <tr><td><code className="ds-code">spacing-xl</code></td><td>32px</td><td>Major section gaps, page-level vertical rhythm</td></tr>
                <tr><td><code className="ds-code">spacing-2xl</code></td><td>40px</td><td>Large section dividers</td></tr>
                <tr><td><code className="ds-code">spacing-3xl</code></td><td>48px</td><td>Hero spacing, page top margins</td></tr>
                <tr><td><code className="ds-code">spacing-4xl</code></td><td>64px</td><td>Major layout gaps</td></tr>
                <tr><td><code className="ds-code">spacing-5xl</code></td><td>80px</td><td>Full-page section separators</td></tr>
                <tr><td><code className="ds-code">spacing-6xl</code></td><td>96px</td><td>Expanded layouts, marketing pages</td></tr>
                <tr><td><code className="ds-code">spacing-7xl</code></td><td>160px</td><td>Maximum — rarely used outside hero sections</td></tr>
              </tbody>
            </table>
          </div>

          <h4>3.4 Typography</h4>
          <p>Typography tokens come in three layers: <strong>sizes</strong> (how big), <strong>leading</strong> (how much vertical space), and <strong>compositions</strong> (pre-built combos). Compositions are the most useful — they bundle size + weight + leading into a single token.</p>
          <div className="ds-table-wrap">
            <table className="ds-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Pattern</th>
                  <th>Example</th>
                  <th>Why</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Size</td><td><code className="ds-code">font-size-{'{s|m|l|xl|2xl|3xl|4xl}'}</code></td><td><code className="ds-code">font-size-s</code> (12px)</td><td>Raw size, combine with weight + leading yourself</td></tr>
                <tr><td>Line-height</td><td><code className="ds-code">font-leading-{'{s|m|l|xl|2xl|3xl|4xl|5xl}'}</code></td><td><code className="ds-code">font-leading-2xl</code> (24px)</td><td>Controls vertical rhythm; always pair with a size</td></tr>
                <tr><td>Weight</td><td><code className="ds-code">font-weight-{'{400|500|600}'}</code></td><td><code className="ds-code">font-weight-500</code></td><td>400 = body, 500 = emphasis, 600 = headings</td></tr>
                <tr><td>Composition</td><td><code className="ds-code">{'{role}'}-{'{size}'}-{'{weight}'}</code></td><td><code className="ds-code">body-m-500</code>, <code className="ds-code">heading-xl-600</code></td><td>Pre-built combos — use these when possible for consistency</td></tr>
              </tbody>
            </table>
          </div>

          <h4>3.5 Slots (component-level tokens)</h4>
          <div className="ds-doc" style={{ background: 'var(--color-black-100)', padding: 'var(--spacing-m)', borderRadius: 'var(--rounded-s)', marginBottom: 'var(--spacing-m)' }}>
            <p style={{ margin: '0 0 var(--spacing-xs)', fontWeight: 'var(--text-weight-semibold)' }}>TL;DR — what does &quot;-slot-&quot; mean in a token name?</p>
            <p style={{ margin: '0 0 var(--spacing-xs)' }}><code className="ds-code">-slot-</code> is <strong>just a naming label</strong>. It does not activate any special CSS behavior. <code className="ds-code">--button-slot-bg</code> and <code className="ds-code">--button-bg</code> would work identically — both are regular CSS variables.</p>
            <p style={{ margin: '0 0 var(--spacing-xs)' }}>The word &quot;slot&quot; simply tells you: <strong>&quot;this property is the public, configurable API of the component.&quot;</strong> If a token has <code className="ds-code">-slot-</code> in its name, it means the design system intentionally exposes it for you to customize — via themes, overrides, or scoped CSS.</p>
            <p style={{ margin: 0 }}>Think of it as a label on a socket: it tells you &quot;plug in here&quot; but the electricity works the same either way.</p>
          </div>
          <p><strong>Slots are the bridge between foundation tokens and component implementation.</strong> They are the reason you can override a card&apos;s background without touching its source code.</p>
          <h5>What is a slot?</h5>
          <p>A slot is a CSS variable scoped to a <strong>specific component property</strong>. Think of it as a "socket" — the component plugs into it, and you control what value comes out. For example, <code className="ds-code">--card-slot-bg</code> controls the card&apos;s background. By default it resolves to <code className="ds-code">var(--surface-slot-card)</code> (white), but you can override it in your app to be anything.</p>
          <h5>Why slots instead of direct primitives?</h5>
          <ul>
            <li><strong>Theming:</strong> Slots are the mechanism that makes theming work. When a theme CSS file sets <code className="ds-code">--button-primary: var(--color-aquamarine-600)</code>, every button that uses the <code className="ds-code">--button-primary</code> slot automatically updates — no component code changes.</li>
            <li><strong>Override without fork:</strong> If you need a custom card background in one section, you set <code className="ds-code">--card-slot-bg</code> in a CSS scope — no component props, no wrapper, no fork.</li>
            <li><strong>Documentation as API:</strong> The list of slots <em>is</em> the component&apos;s visual API. Designers and developers can audit exactly what can be customized.</li>
          </ul>
          <h5>Slot naming patterns</h5>
          <div className="ds-table-wrap">
            <table className="ds-table">
              <thead>
                <tr>
                  <th>Pattern</th>
                  <th>Meaning</th>
                  <th>Example</th>
                  <th>Resolves to</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><code className="ds-code">{'{component}'}-slot-{'{property}'}</code></td><td>A specific visual property of a component</td><td><code className="ds-code">card-slot-bg</code>, <code className="ds-code">card-slot-radius</code></td><td><code className="ds-code">var(--surface-slot-card)</code>, <code className="ds-code">var(--rounded-s)</code></td></tr>
                <tr><td><code className="ds-code">{'{category}'}-slot-{'{role}'}</code></td><td>A semantic role shared across components</td><td><code className="ds-code">copy-slot-title</code>, <code className="ds-code">icon-slot-secondary</code></td><td><code className="ds-code">var(--color-steel-900)</code>, <code className="ds-code">var(--color-steel-700)</code></td></tr>
                <tr><td><code className="ds-code">surface-slot-{'{role}'}</code></td><td>Background surfaces for different contexts</td><td><code className="ds-code">surface-slot-hover</code>, <code className="ds-code">surface-slot-card</code></td><td><code className="ds-code">var(--color-steel-100)</code>, <code className="ds-code">var(--color-white-900)</code></td></tr>
              </tbody>
            </table>
          </div>
          <h5>How slot chains work</h5>
          <p>Slots often reference other semantic tokens, creating a <strong>chain</strong>:</p>
          <pre className="ds-code-block">{`/* Component slot → Semantic token → Primitive */
--card-slot-bg: var(--surface-slot-card);
--surface-slot-card: var(--color-white-900);
--color-white-900: #ffffff;`}</pre>
          <p>This chain means: when Titan changes the base surface color, every card updates. When a theme overrides <code className="ds-code">--surface-slot-card</code>, every card in that theme updates. Maximum flexibility with zero coupling.</p>

          <h4>3.6 Elevation (boxShadow)</h4>
          <p>Shadows create the <strong>z-axis hierarchy</strong> of the interface. They use <code className="ds-code">type: &quot;boxShadow&quot;</code> with <code className="ds-code">dropShadow</code>. Shadows reference opacity colors (<code className="ds-code">{'{$color-steel-10}'}</code>) instead of black so they appear neutral across all themes:</p>
          <pre className="ds-code-block">{`"box-shadow-1": {
  "value": {
    "x": "0",
    "y": "4",
    "blur": "12",
    "spread": "0",
    "color": "{$color-steel-10}",
    "type": "dropShadow"
  },
  "type": "boxShadow"
}`}</pre>

          <h3>4. Token references</h3>
          <h4>4.1 In JSON</h4>
          <p><strong>Simple reference:</strong> <code className="ds-code">{'{token-name}'}</code></p>
          <pre className="ds-code-block">{`"text-button": {
  "value": {
    "fontFamily": "{font-audiense}",
    "fontSize": "{font-size-l}",
    "lineHeight": "{font-leading-m}"
  }
}`}</pre>
          <p><strong>Reference with $ prefix:</strong> <code className="ds-code">{'{$token-name}'}</code></p>
          <pre className="ds-code-block">{`"box-shadow-1": {
  "value": { "color": "{$color-steel-10}" }
}`}</pre>
          <p>In <code className="ds-code">colors-opacity.json</code>, keys use <code className="ds-code">$</code> to distinguish from solid: <code className="ds-code">{`"$color-white-10": { "value": "#ffffff1a" }`}</code></p>

          <h4>4.2 In CSS</h4>
          <p><strong>CSS variables:</strong> <code className="ds-code">--token-name</code></p>
          <pre className="ds-code-block">{`--color-black-100: #f7f7f7;
--spacing-s: 12px;
--card-slot-bg: var(--surface-slot-card);`}</pre>
          <p><strong>Chained references:</strong></p>
          <pre className="ds-code-block">{`--card-slot-bg: var(--surface-slot-card);
--surface-slot-card: var(--color-white-900);`}</pre>

          <h3>5. How to create tokens (consumer guide)</h3>
          <p>This section explains how a <strong>consumer</strong> of the Design System can create or extend tokens.</p>

          <h4>5.1 When to create your own tokens</h4>
          <ul>
            <li>You need a value that <strong>doesn&apos;t exist</strong> in Titan (e.g. a specific brand color).</li>
            <li>You want a <strong>semantic alias</strong> for your app (e.g. <code className="ds-code">--app-header-bg</code>).</li>
            <li>You need to <strong>extend</strong> a component with your own tokens.</li>
          </ul>

          <h4>5.2 Step 1: Decide token type</h4>
          <div className="ds-table-wrap">
            <table className="ds-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Where to define</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>New primitive</strong></td><td>Only if you contribute to Titan repo</td><td>New color in <code className="ds-code">colors-solid.json</code></td></tr>
                <tr><td><strong>Semantic / alias</strong></td><td>In your app CSS</td><td><code className="ds-code">{`:root { --app-sidebar-bg: var(--color-steel-100); }`}</code></td></tr>
                <tr><td><strong>Theme override</strong></td><td>In your theme file</td><td><code className="ds-code">{`:root { --button-primary: var(--color-marca-600); }`}</code></td></tr>
              </tbody>
            </table>
          </div>
          <p><strong>Rule:</strong> If you only consume Titan, <strong>do not edit</strong> <code className="ds-code">tokens/foundations/*.json</code> or <code className="ds-code">tokens/css/titan.css</code>. Define your tokens in your own CSS.</p>

          <h4>5.3 Step 2: Create a semantic token</h4>
          <p><strong>Goal:</strong> Have an alias that references a Titan token.</p>
          <p>1. Load Titan before your CSS:</p>
          <pre className="ds-code-block">{`<link rel="stylesheet" href="/path/to/tokens/css/titan.css" />
<link rel="stylesheet" href="/path/to/tokens/themes/_neutral.css" />
<link rel="stylesheet" href="/path/to/my-app.css" />`}</pre>
          <p>2. In your app CSS, define your token:</p>
          <pre className="ds-code-block">{`:root {
  --my-sidebar-bg: var(--color-steel-100);
  --my-card-accent: var(--color-blueberry-500);
}`}</pre>
          <p>3. Use the token in your components:</p>
          <pre className="ds-code-block">{`.my-sidebar {
  background: var(--my-sidebar-bg);
}`}</pre>

          <h4>5.4 Step 3: Create a theme-aware token</h4>
          <p><strong>Goal:</strong> Have your token use the primary color of the active theme.</p>
          <p>1. Reference tokens that already change by theme:</p>
          <pre className="ds-code-block">{`:root {
  --my-cta-bg: var(--button-primary);
  --my-cta-text: var(--text-on-primary);
}`}</pre>
          <p>2. Or define theme overrides in your app:</p>
          <pre className="ds-code-block">{`html[data-theme="insights"] {
  --my-brand-accent: var(--color-blueberry-600);
}

html[data-theme="demand"] {
  --my-brand-accent: var(--color-aquamarine-600);
}`}</pre>

          <h4>5.5 Step 4: Extend a component slot</h4>
          <p><strong>Goal:</strong> Change the look of a Titan component without touching its code.</p>
          <p>Titan slots are CSS variables. You can override them:</p>
          <pre className="ds-code-block">{`/* In your app, after loading Titan */
:root {
  --card-slot-radius: var(--rounded-m); /* override: rounder cards */
  --card-slot-pad: var(--spacing-xl);   /* override: more padding */
}`}</pre>
          <p>Or in a specific scope:</p>
          <pre className="ds-code-block">{`.my-dashboard .card {
  --card-slot-bg: var(--color-blueberry-100);
}`}</pre>

          <h4>5.6 Step 5: Create a primitive (Titan contributor)</h4>
          <p><strong>Only if you contribute to the Titan repo:</strong></p>
          <p>1. <strong>Solid color:</strong> Edit <code className="ds-code">tokens/foundations/colors-solid.json</code>:</p>
          <pre className="ds-code-block">{`"color-newfamily-100": {
  "value": "#f0f0f0",
  "type": "color",
  "description": "Optional description"
}`}</pre>
          <p>2. <strong>Run the build</strong> after modifying JSON: <code className="ds-code">npm run build:tokens</code></p>
          <p>3. <strong>Spacing:</strong> Edit <code className="ds-code">tokens/foundations/spacing.json</code> and run <code className="ds-code">npm run build:tokens</code></p>
          <p>4. <strong>Typography:</strong> Edit <code className="ds-code">tokens/foundations/typography.json</code> and run <code className="ds-code">npm run build:tokens</code></p>
          <p><strong>Important:</strong> After modifying any JSON in <code className="ds-code">tokens/foundations/</code>, run <code className="ds-code">npm run build:tokens</code> to regenerate <code className="ds-code">titan.css</code>.</p>

          <h4>5.7 Consumer summary</h4>
          <div className="ds-table-wrap">
            <table className="ds-table">
              <thead>
                <tr>
                  <th>Action</th>
                  <th>Where</th>
                  <th>How</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Use existing tokens</td><td>In your CSS/components</td><td><code className="ds-code">var(--card-slot-bg)</code></td></tr>
                <tr><td>Create semantic alias</td><td>Your CSS</td><td><code className="ds-code">{`:root { --my-token: var(--color-steel-100); }`}</code></td></tr>
                <tr><td>Theme override</td><td>Your CSS</td><td><code className="ds-code">{`html[data-theme="X"] { --my-token: ... }`}</code></td></tr>
                <tr><td>Slot override</td><td>Your CSS</td><td><code className="ds-code">{`:root { --card-slot-radius: var(--rounded-l); }`}</code></td></tr>
                <tr><td>Add primitive</td><td>Contributors only</td><td>JSON + <code className="ds-code">npm run build:tokens</code></td></tr>
              </tbody>
            </table>
          </div>

          <h3>6. How themes work</h3>
          <p>Titan supports <strong>six product themes</strong>. Each theme re-points a set of semantic tokens to different primitives — the components themselves never change. This is the core benefit of the three-layer architecture.</p>
          <h4>6.1 Load order</h4>
          <p>The load order matters — each file can override variables from the previous one. Get it wrong and tokens won&apos;t resolve:</p>
          <ol>
            <li><code className="ds-code">tokens/css/titan.css</code> (primitives + base semantics)</li>
            <li>A theme: <code className="ds-code">tokens/themes/_insights.css</code>, <code className="ds-code">_neutral.css</code>, etc.</li>
            <li>Component styles: <code className="ds-code">titan-compositions/styles</code>, <code className="ds-code">titan-aria/styles</code></li>
          </ol>
          <h4>6.2 Activation</h4>
          <pre className="ds-code-block">{`<html data-theme="insights">`}</pre>
          <h4>6.3 Available themes</h4>
          <p>Each theme maps to one of Audiense&apos;s products. The primary color drives buttons, links, selected states, and focus rings:</p>
          <div className="ds-table-wrap">
            <table className="ds-table">
              <thead>
                <tr>
                  <th>Theme</th>
                  <th>Primary color</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><code className="ds-code">neutral</code></td><td>black</td></tr>
                <tr><td><code className="ds-code">insights</code></td><td>blueberry</td></tr>
                <tr><td><code className="ds-code">audiense</code></td><td>pomegranate</td></tr>
                <tr><td><code className="ds-code">demand</code></td><td>aquamarine</td></tr>
                <tr><td><code className="ds-code">linkedin</code></td><td>indigo</td></tr>
                <tr><td><code className="ds-code">tweetbinder</code></td><td>ocean</td></tr>
              </tbody>
            </table>
          </div>

          <h3>7. Tokens by use (quick reference)</h3>
          <p>When building a UI, start here. Find the <strong>intent</strong> (what you want to style) and use the corresponding token:</p>
          <div className="ds-table-wrap">
            <table className="ds-table">
              <thead>
                <tr>
                  <th>Use</th>
                  <th>Token(s)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Title / header</td><td><code className="ds-code">--copy-slot-title</code>, <code className="ds-code">--card-title-slot-color</code></td></tr>
                <tr><td>Body text</td><td><code className="ds-code">--copy-slot-body</code>, <code className="ds-code">--card-body-slot-color</code></td></tr>
                <tr><td>Secondary / muted</td><td><code className="ds-code">--copy-slot-muted</code>, <code className="ds-code">--card-meta-slot-color</code></td></tr>
                <tr><td>Links</td><td><code className="ds-code">--text-link</code>, <code className="ds-code">--text-primary-active</code>, <code className="ds-code">--text-secondary</code></td></tr>
                <tr><td>Card background</td><td><code className="ds-code">--card-slot-bg</code>, <code className="ds-code">--surface-slot-card</code></td></tr>
                <tr><td>Default border</td><td><code className="ds-code">--border-slot-default</code>, <code className="ds-code">--card-slot-border</code></td></tr>
                <tr><td>Spacing</td><td><code className="ds-code">--spacing-s</code>, <code className="ds-code">--spacing-m</code>, <code className="ds-code">--spacing-l</code></td></tr>
                <tr><td>Card radius</td><td><code className="ds-code">--card-slot-radius</code>, <code className="ds-code">--rounded-s</code></td></tr>
                <tr><td>Shadow</td><td><code className="ds-code">--elevation-slot-1</code>, <code className="ds-code">--box-shadow-1</code></td></tr>
              </tbody>
            </table>
          </div>

          <h3>8. Full flow</h3>
          <pre className="ds-code-block">{`tokens/foundations/*.json
    │
    │  npm run build:tokens (Style Dictionary)
    ▼
tokens/css/titan.css (primitives in :root + semantic slots)
    │
    │  load
    ▼
tokens/themes/_*.css (variable overrides by data-theme)
    │
    │  consume
    ▼
Your application — var(--card-slot-bg), var(--my-token), etc.`}</pre>

          <h3>9. Build</h3>
          <p>The build uses <strong>Style Dictionary</strong> to generate primitives from JSON:</p>
          <ol>
            <li><strong>Preprocess:</strong> <code className="ds-code">tokens/build/preprocess.js</code> converts flat keys (<code className="ds-code">color-black-100</code>) to nested structure and normalizes refs (<code className="ds-code">{'{$color-steel-10}'}</code> → <code className="ds-code">{'{color.steel.10}'}</code>).</li>
            <li><strong>Style Dictionary:</strong> Reads preprocessed JSON and generates <code className="ds-code">tokens/css/titan-foundations.generated.css</code> with CSS variables in <code className="ds-code">:root</code>.</li>
            <li><strong>Concatenation:</strong> <code className="ds-code">tokens/build/build.js</code> concatenates header + foundations + <code className="ds-code">titan-semantic.css</code> → <code className="ds-code">titan.css</code>.</li>
          </ol>
          <p><strong>Command:</strong> <code className="ds-code">npm run build:tokens</code></p>
          <p><strong>Implications:</strong></p>
          <ul>
            <li><strong>Consumers:</strong> Not affected. You use <code className="ds-code">titan.css</code> as-is; you don&apos;t need the JSON or to run the build.</li>
            <li><strong>Contributors:</strong> After modifying <code className="ds-code">tokens/foundations/*.json</code>, run <code className="ds-code">npm run build:tokens</code> and commit the updated <code className="ds-code">titan.css</code>.</li>
          </ul>

          <h3>10. Checklist for new tokens</h3>
          <ul className="ds-checklist">
            <li>Is it a primitive? → Add to the corresponding JSON in <code className="ds-code">tokens/foundations/</code>.</li>
            <li>Do you contribute to the repo? → Run <code className="ds-code">npm run build:tokens</code>.</li>
            <li>Are you a consumer? → Define in your own CSS as alias or override.</li>
            <li>Should it change by theme? → Use tokens that already change or define overrides by <code className="ds-code">data-theme</code>.</li>
            <li>Is it a component slot? → Use or extend <code className="ds-code">{'{component}'}-slot-{'{property}'}</code>.</li>
          </ul>

          <h3>11. Generating tokens with AI (Cursor, Claude)</h3>
          <p>If you contribute to the Titan repo and want to add new primitives, you can ask Cursor or Claude to generate them. The AI must follow the exact formats below.</p>

          <h4>11.1 When to use</h4>
          <p><strong>Contributors only.</strong> Adding primitives to <code className="ds-code">tokens/foundations/*.json</code>. Consumers do not need this — they define tokens in their own CSS.</p>

          <h4>11.2 Prompt format</h4>
          <p>Be specific: file path, token type, and desired values. Example:</p>
          <pre className="ds-code-block">{`"Add a new solid color family 'coral' with scale 100–900 to tokens/foundations/colors-solid.json. Use hex values similar to the orange family."

"Add spacing-8xl (192px) to tokens/foundations/spacing.json following the exact format of existing tokens."

"Add a new typography composition 'body-xl-500' to tokens/foundations/typography.json: font-size-xl, font-leading-2xl, font-weight-500."`}</pre>

          <h4>11.3 File paths and JSON structures</h4>
          <p>The AI must use these exact paths and formats:</p>
          <div className="ds-table-wrap">
            <table className="ds-table">
              <thead>
                <tr>
                  <th>Token type</th>
                  <th>File</th>
                  <th>Key format</th>
                  <th>Value structure</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Solid color</td>
                  <td><code className="ds-code">tokens/foundations/colors-solid.json</code></td>
                  <td><code className="ds-code">color-{'{family}'}-{'{100-900}'}</code></td>
                  <td><code className="ds-code">{`{"value": "#hex", "type": "color", "description": "..."}`}</code></td>
                </tr>
                <tr>
                  <td>Opacity color</td>
                  <td><code className="ds-code">tokens/foundations/colors-opacity.json</code></td>
                  <td><code className="ds-code">$color-{'{family}'}-{'{10-90}'}</code></td>
                  <td><code className="ds-code">{`{"value": "#RRGGBBAA", "type": "color", "description": "..."}`}</code></td>
                </tr>
                <tr>
                  <td>Spacing</td>
                  <td><code className="ds-code">tokens/foundations/spacing.json</code></td>
                  <td><code className="ds-code">spacing-{'{5xs|4xs|3xs|2xs|xs|s|m|l|xl|2xl|3xl|4xl|5xl|6xl|7xl}'}</code></td>
                  <td><code className="ds-code">{`{"value": "Npx", "type": "spacing"}`}</code></td>
                </tr>
                <tr>
                  <td>Font size</td>
                  <td><code className="ds-code">tokens/foundations/typography.json</code></td>
                  <td><code className="ds-code">font-size-{'{s|m|l|xl|2xl|3xl|4xl}'}</code></td>
                  <td><code className="ds-code">{`{"value": "Npx", "type": "fontSizes"}`}</code></td>
                </tr>
                <tr>
                  <td>Font weight</td>
                  <td><code className="ds-code">tokens/foundations/typography.json</code></td>
                  <td><code className="ds-code">font-weight-{'{400|500|600}'}</code></td>
                  <td><code className="ds-code">{`{"value": "Regular|Medium|SemiBold", "type": "fontWeights"}`}</code></td>
                </tr>
                <tr>
                  <td>Line height</td>
                  <td><code className="ds-code">tokens/foundations/typography.json</code></td>
                  <td><code className="ds-code">font-leading-{'{s|m|l|xl|2xl|3xl|4xl|5xl}'}</code></td>
                  <td><code className="ds-code">{`{"value": "Npx", "type": "lineHeights"}`}</code></td>
                </tr>
                <tr>
                  <td>Typography composition</td>
                  <td><code className="ds-code">tokens/foundations/typography.json</code></td>
                  <td><code className="ds-code">body-m-500</code>, <code className="ds-code">heading-xl-600</code>, <code className="ds-code">text-button</code></td>
                  <td><code className="ds-code">{`{"value": {"fontFamily": "{font-audiense}", "fontSize": "{font-size-l}", "lineHeight": "{font-leading-m}", "fontWeight": "{font-weight-500}"}, "type": "typography"}`}</code></td>
                </tr>
                <tr>
                  <td>Border radius</td>
                  <td><code className="ds-code">tokens/foundations/borders.json</code></td>
                  <td><code className="ds-code">rounded-{'{xs|s|m|l|xl}'}</code></td>
                  <td><code className="ds-code">{`{"value": "Npx", "type": "borderRadius"}`}</code></td>
                </tr>
                <tr>
                  <td>Box shadow</td>
                  <td><code className="ds-code">tokens/foundations/elevation.json</code></td>
                  <td><code className="ds-code">box-shadow-{'{n}'}</code></td>
                  <td><code className="ds-code">{`{"value": {"x":"0","y":"4","blur":"12","spread":"0","color":"{$color-steel-10}","type":"dropShadow"}, "type":"boxShadow"}`}</code></td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4>11.4 Reference syntax</h4>
          <ul>
            <li><strong>In values:</strong> <code className="ds-code">{'{token-name}'}</code> (e.g. <code className="ds-code">{'{font-size-l}'}</code>).</li>
            <li><strong>For opacity colors:</strong> <code className="ds-code">{'{$color-family-step}'}</code> (e.g. <code className="ds-code">{'{$color-steel-10}'}</code>).</li>
            <li><strong>In colors-opacity.json keys:</strong> Use <code className="ds-code">$</code> prefix: <code className="ds-code">$color-white-10</code>.</li>
          </ul>

          <h4>11.5 After AI generates</h4>
          <p>1. Run <code className="ds-code">npm run build:tokens</code>.</p>
          <p>2. Verify <code className="ds-code">tokens/css/titan.css</code> contains the new variables.</p>
          <p>3. Commit both the JSON files and the updated <code className="ds-code">titan.css</code>.</p>

          <h4>11.6 Example prompts</h4>
          <pre className="ds-code-block">{`Add spacing-8xl (192px) to tokens/foundations/spacing.json.
Format: "spacing-8xl": {"value": "192px", "type": "spacing"}

Add a new solid color family 'coral' 100–900 to tokens/foundations/colors-solid.json.
Follow the exact structure of color-orange. Include value, type, description.

Add font-decoration-none (value: none, type: textDecoration) to tokens/foundations/typography.json.`}</pre>
        </div>
      </section>
    )
  }
  return null
}

function IconsContent({ subLevel, goTo }) {
  const icons = [
    { name: 'Search', Icon: Search },
    { name: 'User', Icon: User },
    { name: 'Settings', Icon: Settings },
  ]
  if (!subLevel) {
    return (
      <section className="card ds-doc-card">
        <h2 className="ds-section-title">Icons</h2>
        <div className="ds-doc">
          <p>Titan uses <strong>Lucide</strong> and <strong>Tabler</strong> icon libraries, normalized to three consistent sizes with matched stroke widths. Titan also has its own icon set in titan-react for product-specific icons.</p>
          <h3>Why normalize?</h3>
          <p>Out of the box, Lucide renders at 24px with stroke-width 2, and Tabler at 24px with stroke-width 1.5. In a SaaS dashboard, most icons sit next to text or inside buttons at 16px — using the default size creates visual noise. Titan defines three sizes, each with a <strong>paired stroke width</strong> that maintains legibility without looking heavy.</p>
          <h3>Icon-to-text spacing</h3>
          <ul>
            <li><code className="ds-code">--spacing-4xs</code> (4px): Default gap between an icon and its label (buttons, menu items, pills).</li>
            <li><code className="ds-code">--spacing-2xs</code> (8px): Gap inside icon buttons (padding around the icon).</li>
          </ul>
          <h3>Where each size is used</h3>
          <ul>
            <li><strong>S (12px)</strong>: Table header sort arrows, info icons, breadcrumb separators — tiny helper icons that annotate without competing.</li>
            <li><strong>M (16px)</strong>: Default for most UI — buttons, pills, menu items, sidebar items, table body cells. The workhorse size.</li>
            <li><strong>L (24px)</strong>: Hero icons, empty states, standalone decorative icons. Used sparingly for visual impact.</li>
          </ul>
          <h3>Navbar exception</h3>
          <p>Navbar icons use a custom size: <code className="ds-code">--navbar-slot-icon-size: 20px</code> (between M and L). This is because the navbar has more vertical space and the 16px M icons looked too small at that height. The stroke width stays at <code className="ds-code">--icon-stroke-s</code> (1.25) to keep them looking thin and refined.</p>
          <h3>Icon buttons</h3>
          <ul>
            <li><strong>Ghost</strong> (<code className="ds-code">icon-ghost</code>): Transparent bg, subtle bg on hover/pressed. Used in navbars, toolbars.</li>
            <li><strong>Secondary</strong> (<code className="ds-code">icon-neutral-base</code>): Neutral bg, used for standalone actions.</li>
            <li><strong>Basic</strong> (<code className="ds-code">icon-base</code>): No bg on any state — only color change. Used in tables, dense lists, inline actions.</li>
            <li><strong>Destructive</strong> (<code className="ds-code">icon-delete-base</code>, <code className="ds-code">icon-delete-secondary</code>): Error-toned variants for delete/remove actions.</li>
          </ul>
          <h3>Table icon rules</h3>
          <ul>
            <li>Body cell icons are always <strong>decorative</strong> (plain SVGs) or <strong>basic icon buttons</strong> (<code className="ds-code">icon-base</code>) — no hover/pressed bg.</li>
            <li>Body cell icon size: <code className="ds-code">--icon-size-m</code> (16px).</li>
            <li>Header icon size: <code className="ds-code">--icon-size-s</code> (12px).</li>
          </ul>
        </div>
        <TitanCardGrid>
          <DSCard title="Sizes" desc="12, 16, 24px" icon={Image} onClick={() => goTo(['icons', 'sizes'])} />
        </TitanCardGrid>
      </section>
    )
  }
  if (subLevel === 'sizes') {
    return (
      <section className="card ds-doc-card">
        <h2 className="ds-section-title">Icon sizes</h2>
        <div className="ds-doc">
          <p>Each size has a paired <strong>stroke width</strong>. This pairing is critical — a 12px icon with a 2px stroke looks chunky, while a 24px icon with a 1.25px stroke looks threadbare. The numbers below are the sweet spot for each size:</p>
        </div>
        <div className="ds-table-wrap">
          <table className="ds-table">
            <thead>
              <tr>
                <th>Token</th>
                <th>Icon size</th>
                <th>Box (safe area)</th>
                <th>Stroke</th>
                <th>Where used</th>
                <th>Search</th>
                <th>User</th>
                <th>Settings</th>
              </tr>
            </thead>
            <tbody>
              {ICON_SIZES.map((s) => (
                <tr key={s.token}>
                  <td><code className="ds-code">{s.token}</code></td>
                  <td className="ds-muted">{s.size}</td>
                  <td className="ds-muted">{s.box}</td>
                  <td className="ds-muted">{s.stroke}</td>
                  <td className="ds-muted">{s.use}</td>
                  {icons.map(({ name, Icon }) => (
                    <td key={name}>
                      <Icon style={{ width: s.size, height: s.size, strokeWidth: parseFloat(s.stroke) }} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="ds-doc" style={{ marginTop: 'var(--spacing-m)' }}>
          <h3>What is the "box" (safe area)?</h3>
          <p>Each icon size has a corresponding <strong>box size</strong> (<code className="ds-code">--icon-box-s/m/l</code>). The box is the total space the icon occupies, including a small safe area around the glyph. This guarantees consistent touch targets and alignment — a 16px icon inside a 20px box has 2px of breathing room on each side, preventing it from feeling cramped against adjacent elements.</p>
        </div>
      </section>
    )
  }
  return null
}
