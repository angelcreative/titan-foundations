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
  { token: '--icon-size-s', size: '12px', stroke: '1.25px' },
  { token: '--icon-size-m', size: '16px', stroke: '1.5px' },
  { token: '--icon-size-l', size: '24px', stroke: '2px' },
]

const THEMES = ['insights', 'audiense', 'neutral', 'demand', 'linkedin', 'tweetbinder']
const THEME_COLORS = {
  insights: 'var(--color-blueberry-600)',
  audiense: 'var(--color-pomegranate-600)',
  neutral: 'var(--color-black-600)',
  demand: 'var(--color-aquamarine-600)',
  linkedin: 'var(--color-indigo-600)',
  tweetbinder: 'var(--color-ocean-600)',
}

const SOLID_COLOR_FAMILIES = [
  'black', 'white', 'steel', 'blue', 'ocean', 'indigo', 'blueberry', 'violet', 'purple',
  'pink', 'magenta', 'red', 'tomato', 'pomegranate', 'orange', 'mango', 'yellow', 'lime',
  'green', 'teal', 'aquamarine', 'turquoise', 'avocado', 'brown', 'cacao',
  'error', 'disabled', 'information', 'success', 'warning',
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
      <section className="card">
        <h2 className="ds-section-title">Foundations</h2>
        <p className="ds-lead">Spacing, borders, and elevation tokens.</p>
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
      <section className="card">
        <h2 className="ds-section-title">Spacing</h2>
        <p className="ds-lead">Multiples of 2. Use tokens for padding and gaps.</p>
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
      <section className="card">
        <h2 className="ds-section-title">Borders</h2>
        <p className="ds-lead">Radius and stroke tokens.</p>
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
      <section className="card">
        <h2 className="ds-section-title">Elevation</h2>
        <p className="ds-lead">Box shadows for depth.</p>
        <div className="ds-elevation-row">
          <div className="ds-elevation-card" style={{ boxShadow: 'var(--elevation-slot-1)' }}>1</div>
          <div className="ds-elevation-card" style={{ boxShadow: 'var(--elevation-slot-2)' }}>2</div>
          <div className="ds-elevation-card" style={{ boxShadow: 'var(--elevation-slot-3)' }}>3</div>
        </div>
      </section>
    )
  }
  return null
}

function ThemesContent({ theme, onThemeChange }) {
  return (
    <section className="card">
      <h2 className="ds-section-title">Themes</h2>
      <p className="ds-lead">Set via data-theme on html.</p>
      <TitanSelect
        label="Preview"
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
      <section className="card">
        <h2 className="ds-section-title">Typography</h2>
        <p className="ds-lead">Base 16px. Vertical rhythm via line-height.</p>
        <TitanCardGrid>
          <DSCard title="Scale" desc="Sizes & line-heights" icon={Type} onClick={() => goTo(['typography', 'scale'])} />
          <DSCard title="Vertical rhythm" desc="Spacing between blocks" icon={Type} onClick={() => goTo(['typography', 'rhythm'])} />
        </TitanCardGrid>
      </section>
    )
  }
  if (subLevel === 'scale') {
    return (
      <section className="card">
        <h2 className="ds-section-title">Typography scale</h2>
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
      <section className="card">
        <h2 className="ds-section-title">Vertical rhythm</h2>
        <p className="ds-lead">Use --spacing-s or --spacing-m between blocks.</p>
        <div className="ds-rhythm-demo">
          <h3 className="ds-rhythm-title">Card title</h3>
          <p className="ds-rhythm-body">
            Body text at 16px. Consistent spacing creates visual rhythm.
          </p>
          <p className="ds-rhythm-hint">Hints and labels at 12px.</p>
        </div>
      </section>
    )
  }
  return null
}

function ColorsContent({ subLevel, goTo }) {
  if (!subLevel) {
    return (
      <section className="card">
        <h2 className="ds-section-title">Colors</h2>
        <p className="ds-lead">Solid (100–900) and opacity (10–90).</p>
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
        <p className="ds-lead">--color-{'{family}'}-100 to -900</p>
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
        <p className="ds-lead">--color-{'{family}'}-10 to -90 (over white)</p>
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
        <p className="ds-lead">Source of truth: <code className="ds-code">tokens/foundations/*.json</code> and <code className="ds-code">tokens/css/titan.css</code>. JSON defines primitives; titan.css exposes them as CSS variables and adds the semantic layer.</p>
        <div className="ds-doc">
          <h3>1. Architecture</h3>
          <p>Tokens are organized in <strong>three layers</strong>:</p>
          <ul>
            <li><strong>Layer 1 — Primitives</strong> (<code className="ds-code">tokens/foundations/*.json</code>): Raw values — hex colors, px, font weights.</li>
            <li><strong>Layer 2 — Semantics + Slots</strong> (<code className="ds-code">tokens/css/titan.css</code>): CSS variables that reference primitives.</li>
            <li><strong>Layer 3 — Themes</strong> (<code className="ds-code">tokens/themes/_*.css</code>): Product overrides — neutral, insights, demand, etc.</li>
          </ul>

          <h3>2. Token sources</h3>
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
          <p><strong>Solid (100–900):</strong> Lighter → darker. <code className="ds-code">color-black-100</code> (#f7f7f7) → <code className="ds-code">color-black-900</code> (#1f1f1f).</p>
          <p><strong>Opacity (10–90):</strong> More transparent → more opaque. <code className="ds-code">color-steel-10</code> (rgba(109,131,139,0.1)).</p>
          <p><strong>Families:</strong> black, white, steel, blue, ocean, indigo, blueberry, violet, purple, pink, magenta, red, tomato, pomegranate, orange, mango, yellow, lime, green, teal, aquamarine, turquoise, avocado, brown, cacao, error, disabled, information, success, warning.</p>

          <h4>3.3 Spacing</h4>
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
                <tr><td><code className="ds-code">spacing-5xs</code></td><td>2px</td><td>Minimal gaps</td></tr>
                <tr><td><code className="ds-code">spacing-4xs</code></td><td>4px</td><td>Icon-to-text</td></tr>
                <tr><td><code className="ds-code">spacing-2xs</code></td><td>8px</td><td>Inner padding</td></tr>
                <tr><td><code className="ds-code">spacing-s</code></td><td>12px</td><td></td></tr>
                <tr><td><code className="ds-code">spacing-m</code></td><td>16px</td><td>Base</td></tr>
                <tr><td><code className="ds-code">spacing-l</code></td><td>24px</td><td></td></tr>
                <tr><td><code className="ds-code">spacing-xl</code></td><td>32px</td><td></td></tr>
                <tr><td><code className="ds-code">spacing-2xl</code></td><td>40px</td><td></td></tr>
                <tr><td><code className="ds-code">spacing-3xl</code></td><td>48px</td><td></td></tr>
                <tr><td><code className="ds-code">spacing-4xl</code></td><td>64px</td><td></td></tr>
                <tr><td><code className="ds-code">spacing-5xl</code></td><td>80px</td><td></td></tr>
                <tr><td><code className="ds-code">spacing-7xl</code></td><td>160px</td><td></td></tr>
              </tbody>
            </table>
          </div>

          <h4>3.4 Typography</h4>
          <div className="ds-table-wrap">
            <table className="ds-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Pattern</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Size</td><td><code className="ds-code">font-size-{'{s|m|l|xl|2xl|3xl|4xl}'}</code></td><td><code className="ds-code">font-size-s</code> (12px)</td></tr>
                <tr><td>Line-height</td><td><code className="ds-code">font-leading-{'{s|m|l|xl|2xl|3xl|4xl|5xl}'}</code></td><td><code className="ds-code">font-leading-2xl</code> (24px)</td></tr>
                <tr><td>Weight</td><td><code className="ds-code">font-weight-{'{400|500|600}'}</code></td><td><code className="ds-code">font-weight-500</code></td></tr>
                <tr><td>Composition</td><td><code className="ds-code">{'{role}'}-{'{size}'}-{'{weight}'}</code></td><td><code className="ds-code">body-m-500</code>, <code className="ds-code">heading-xl-600</code></td></tr>
              </tbody>
            </table>
          </div>

          <h4>3.5 Slots (components)</h4>
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
                <tr><td><code className="ds-code">{'{component}'}-slot-{'{property}'}</code></td><td>Component property</td><td><code className="ds-code">card-slot-bg</code>, <code className="ds-code">card-slot-radius</code></td></tr>
                <tr><td><code className="ds-code">{'{category}'}-slot-{'{role}'}</code></td><td>Semantic role</td><td><code className="ds-code">copy-slot-title</code>, <code className="ds-code">icon-slot-secondary</code></td></tr>
                <tr><td><code className="ds-code">surface-slot-{'{role}'}</code></td><td>Surface</td><td><code className="ds-code">surface-slot-hover</code>, <code className="ds-code">surface-slot-card</code></td></tr>
              </tbody>
            </table>
          </div>

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
          <h4>6.1 Load order</h4>
          <ol>
            <li><code className="ds-code">tokens/css/titan.css</code> (primitives + base semantics)</li>
            <li>A theme: <code className="ds-code">tokens/themes/_insights.css</code>, <code className="ds-code">_neutral.css</code>, etc.</li>
            <li>Component styles: <code className="ds-code">titan-compositions/styles</code>, <code className="ds-code">titan-aria/styles</code></li>
          </ol>
          <h4>6.2 Activation</h4>
          <pre className="ds-code-block">{`<html data-theme="insights">`}</pre>
          <h4>6.3 Available themes</h4>
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
      <section className="card">
        <h2 className="ds-section-title">Icons</h2>
        <p className="ds-lead">Lucide & Tabler. 16×16 base, 2px safe area. 4px icon-to-text, 8px in buttons.</p>
        <TitanCardGrid>
          <DSCard title="Sizes" desc="12, 16, 24px" icon={Image} onClick={() => goTo(['icons', 'sizes'])} />
        </TitanCardGrid>
      </section>
    )
  }
  if (subLevel === 'sizes') {
    return (
      <section className="card">
        <h2 className="ds-section-title">Icon sizes</h2>
        <p className="ds-lead">Stroke: 1.25, 1.5, 2. Spacing: 4px icon-to-text, 8px in buttons.</p>
        <div className="ds-table-wrap">
          <table className="ds-table">
            <thead>
              <tr>
                <th>Token</th>
                <th>Size</th>
                <th>Stroke</th>
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
                  <td className="ds-muted">{s.stroke}</td>
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
      </section>
    )
  }
  return null
}
