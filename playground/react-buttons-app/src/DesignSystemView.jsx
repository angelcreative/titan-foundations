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
      <section className="card">
        <h2 className="ds-section-title">Tokens</h2>
        <p className="ds-lead">Semantic and component tokens. Full documentation: <code className="ds-code">docs/tokens.md</code></p>
        <div className="ds-token-list">
          <p><code className="ds-code">--copy-slot-primary</code> <code className="ds-code">--copy-slot-secondary</code></p>
          <p><code className="ds-code">--button-primary-slot-bg</code> <code className="ds-code">--button-slot-font-size</code></p>
          <p><code className="ds-code">--input-slot-border</code> <code className="ds-code">--menu-slot-radius</code></p>
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
