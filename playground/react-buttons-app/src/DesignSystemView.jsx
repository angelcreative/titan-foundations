import { useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Ruler, Palette, Type, Layers, Sparkles, Image, Search, User, Settings } from 'lucide-react'
import { Button } from 'react-aria-components'

/* ------------------------------------------------------------------ */
/*  Data (from tokens/foundations)                                     */
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

/* ------------------------------------------------------------------ */
/*  Design System View                                                 */
/* ------------------------------------------------------------------ */

export function DesignSystemView({ theme, onThemeChange }) {
  const [breadcrumb, setBreadcrumb] = useState([])
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const goTo = useCallback((path) => {
    setBreadcrumb(path)
  }, [])

  const goBack = useCallback(() => {
    setBreadcrumb((prev) => prev.slice(0, -1))
  }, [])

  const currentLevel = breadcrumb.length
  const currentSection = breadcrumb[0]

  const DS_SIDEBAR_ITEMS = [
    { id: 'foundations', label: 'Foundations', icon: Ruler },
    { id: 'themes', label: 'Themes', icon: Palette },
    { id: 'typography', label: 'Typography', icon: Type },
    { id: 'colors', label: 'Colors', icon: Sparkles },
    { id: 'tokens', label: 'Tokens', icon: Layers },
    { id: 'icons', label: 'Icons', icon: Image },
  ]

  return (
    <div className="ds-layout">
      <aside className={`ds-sidebar${sidebarCollapsed ? ' ds-sidebar-collapsed' : ''}`}>
        <Button
          className="ds-sidebar-toggle"
          onPress={() => setSidebarCollapsed((c) => !c)}
          aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {sidebarCollapsed ? <ChevronRight /> : <ChevronLeft />}
        </Button>
        {!sidebarCollapsed && (
          <nav className="ds-sidebar-nav">
            <div className="ds-sidebar-header">Design System</div>
            {DS_SIDEBAR_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`ds-sidebar-item${currentSection === item.id ? ' ds-sidebar-item-active' : ''}`}
                onClick={() => goTo([item.id])}
              >
                <item.icon className="ds-sidebar-icon" />
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </aside>

      <main className="ds-content">
        {breadcrumb.length > 0 && (
          <div className="ds-breadcrumb">
            <button type="button" className="ds-breadcrumb-back" onClick={goBack}>
              ← Back
            </button>
            <span className="ds-breadcrumb-path">
              Design System {breadcrumb.map((b) => ` > ${b}`).join('')}
            </span>
          </div>
        )}

        {currentLevel === 0 && (
          <div className="ds-cards-grid">
            <DSCard
              title="Foundations"
              desc="Spacing, borders, elevation — the basics"
              icon={Ruler}
              onClick={() => goTo(['foundations'])}
            />
            <DSCard
              title="Themes"
              desc="insights, audiense, neutral, demand, linkedin, tweetbinder"
              icon={Palette}
              onClick={() => goTo(['themes'])}
            />
            <DSCard
              title="Typography"
              desc="Vertical rhythm, scale, body text"
              icon={Type}
              onClick={() => goTo(['typography'])}
            />
            <DSCard
              title="Colors"
              desc="Solid palettes & opacity variants"
              icon={Sparkles}
              onClick={() => goTo(['colors'])}
            />
            <DSCard
              title="Tokens"
              desc="Semantic & component tokens"
              icon={Layers}
              onClick={() => goTo(['tokens'])}
            />
            <DSCard
              title="Icons"
              desc="Lucide & Tabler — sizes, spacing"
              icon={Image}
              onClick={() => goTo(['icons'])}
            />
          </div>
        )}

        {currentSection === 'foundations' && (
          <FoundationsContent subLevel={breadcrumb[1]} goTo={goTo} goBack={goBack} />
        )}
        {currentSection === 'themes' && (
          <ThemesContent theme={theme} onThemeChange={onThemeChange} />
        )}
        {currentSection === 'typography' && (
          <TypographyContent subLevel={breadcrumb[1]} goTo={goTo} goBack={goBack} />
        )}
        {currentSection === 'colors' && (
          <ColorsContent subLevel={breadcrumb[1]} goTo={goTo} goBack={goBack} />
        )}
        {currentSection === 'tokens' && (
          <TokensContent subLevel={breadcrumb[1]} goTo={goTo} goBack={goBack} />
        )}
        {currentSection === 'icons' && (
          <IconsContent subLevel={breadcrumb[1]} goTo={goTo} goBack={goBack} />
        )}
      </main>
    </div>
  )
}

function DSCard({ title, desc, icon: Icon, onClick }) {
  return (
    <button type="button" className="ds-card" onClick={onClick}>
      <Icon className="ds-card-icon" />
      <h3 className="ds-card-title">{title}</h3>
      <p className="ds-card-desc">{desc}</p>
    </button>
  )
}

function FoundationsContent({ subLevel, goTo, goBack }) {
  if (!subLevel) {
    return (
      <div className="ds-section">
        <h2>Foundations</h2>
        <p className="ds-lead">Design tokens for spacing, borders, and elevation.</p>
        <div className="ds-cards-grid ds-cards-sm">
          <DSCard title="Spacing" desc="5xs → 5xl scale" icon={Ruler} onClick={() => goTo(['foundations', 'spacing'])} />
          <DSCard title="Borders" desc="Radius & stroke" icon={Ruler} onClick={() => goTo(['foundations', 'borders'])} />
          <DSCard title="Elevation" desc="Shadows" icon={Ruler} onClick={() => goTo(['foundations', 'elevation'])} />
        </div>
      </div>
    )
  }
  if (subLevel === 'spacing') {
    return (
      <div className="ds-section">
        <h2>Spacing</h2>
        <p className="ds-lead">Multiples of 2 for consistent rhythm. Use tokens for padding and gaps.</p>
        <div className="ds-token-grid">
          {SPACING.map((s) => (
            <div key={s.token} className="ds-token-row">
              <div className="ds-token-swatch" style={{ width: s.value, minWidth: s.value, height: 24 }} />
              <code>{s.token}</code>
              <span>{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }
  if (subLevel === 'borders') {
    return (
      <div className="ds-section">
        <h2>Borders</h2>
        <p className="ds-lead">Radius and stroke tokens.</p>
        <h3>Radius</h3>
        <div className="ds-token-grid">
          {BORDERS.radius.map((r) => (
            <div key={r.token} className="ds-token-row">
              <div className="ds-token-swatch" style={{ width: 40, height: 40, borderRadius: r.value }} />
              <code>{r.token}</code>
              <span>{r.value}</span>
            </div>
          ))}
        </div>
        <h3>Stroke</h3>
        <div className="ds-token-grid">
          {BORDERS.stroke.map((s) => (
            <div key={s.token} className="ds-token-row">
              <div className="ds-token-swatch" style={{ width: 40, height: 8, borderBottom: `${s.value} solid var(--color-steel-600)` }} />
              <code>{s.token}</code>
              <span>{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }
  if (subLevel === 'elevation') {
    return (
      <div className="ds-section">
        <h2>Elevation</h2>
        <p className="ds-lead">Box shadows for depth.</p>
        <div className="ds-elevation-row">
          <div className="ds-elevation-card" style={{ boxShadow: 'var(--elevation-slot-1)' }}>1</div>
          <div className="ds-elevation-card" style={{ boxShadow: 'var(--elevation-slot-2)' }}>2</div>
          <div className="ds-elevation-card" style={{ boxShadow: 'var(--elevation-slot-3)' }}>3</div>
        </div>
      </div>
    )
  }
  return null
}

function ThemesContent({ theme, onThemeChange }) {
  return (
    <div className="ds-section">
      <h2>Themes</h2>
      <p className="ds-lead">Six themes available. Set via data-theme on html.</p>
      <div className="ds-theme-selector">
        <label>Preview theme:</label>
        <select value={theme} onChange={(e) => onThemeChange(e.target.value)}>
          {THEMES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="ds-theme-preview">
        {THEMES.map((t) => (
          <div
            key={t}
            className={`ds-theme-card${theme === t ? ' ds-theme-card-active' : ''}`}
            onClick={() => onThemeChange(t)}
          >
            <div className="ds-theme-swatch" style={{ background: THEME_COLORS[t] }} />
            <span>{t}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function TypographyContent({ subLevel, goTo, goBack }) {
  if (!subLevel) {
    return (
      <div className="ds-section">
        <h2>Typography</h2>
        <p className="ds-lead">Base size 16px (--font-size-l). Vertical rhythm via line-height.</p>
        <div className="ds-cards-grid ds-cards-sm">
          <DSCard title="Scale" desc="Sizes & line-heights" icon={Type} onClick={() => goTo(['typography', 'scale'])} />
          <DSCard title="Vertical rhythm" desc="Spacing between blocks" icon={Type} onClick={() => goTo(['typography', 'rhythm'])} />
        </div>
      </div>
    )
  }
  if (subLevel === 'scale') {
    return (
      <div className="ds-section">
        <h2>Typography scale</h2>
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
                <td>{t.use}</td>
                <td><code>{t.token}</code></td>
                <td>{t.size}</td>
                <td style={{ fontSize: `var(${t.token})`, lineHeight: `var(${t.leading})` }}>
                  Sample text
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  if (subLevel === 'rhythm') {
    return (
      <div className="ds-section">
        <h2>Vertical rhythm</h2>
        <p className="ds-lead">Use --spacing-s (12px) or --spacing-m (16px) between blocks.</p>
        <div className="ds-rhythm-demo">
          <h3 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--spacing-s)' }}>Card title</h3>
          <p style={{ fontSize: 'var(--font-size-l)', marginBottom: 'var(--spacing-m)' }}>
            Body text at 16px. Consistent spacing creates visual rhythm.
          </p>
          <p style={{ fontSize: 'var(--font-size-s)', color: 'var(--copy-slot-secondary)' }}>
            Hints and labels at 12px.
          </p>
        </div>
      </div>
    )
  }
  return null
}

function ColorsContent({ subLevel, goTo, goBack }) {
  const colorFamilies = ['black', 'steel', 'white', 'blue', 'ocean', 'pomegranate', 'mango', 'teal', 'tomato']
  if (!subLevel) {
    return (
      <div className="ds-section">
        <h2>Colors</h2>
        <p className="ds-lead">Solid palettes (100–900) and opacity variants (10–90).</p>
        <div className="ds-cards-grid ds-cards-sm">
          <DSCard title="Solid" desc="100–900 scale" icon={Sparkles} onClick={() => goTo(['colors', 'solid'])} />
          <DSCard title="Opacity" desc="10–90 variants" icon={Sparkles} onClick={() => goTo(['colors', 'opacity'])} />
        </div>
      </div>
    )
  }
  if (subLevel === 'solid') {
    return (
      <div className="ds-section">
        <h2>Solid colors</h2>
        <p className="ds-lead">--color-{'{family}'}-100 to -900</p>
        {colorFamilies.slice(0, 4).map((fam) => (
          <div key={fam} className="ds-color-row">
            <span className="ds-color-label">{fam}</span>
            {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((n) => (
              <div
                key={n}
                className="ds-color-swatch"
                style={{ background: `var(--color-${fam}-${n})` }}
                title={`--color-${fam}-${n}`}
              />
            ))}
          </div>
        ))}
      </div>
    )
  }
  if (subLevel === 'opacity') {
    return (
      <div className="ds-section">
        <h2>Opacity colors</h2>
        <p className="ds-lead">--color-{'{family}'}-10 to -90 (over white)</p>
        <div className="ds-color-row">
          <span className="ds-color-label">steel</span>
          {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((n) => (
            <div
              key={n}
              className="ds-color-swatch"
              style={{ background: `var(--color-steel-${n})` }}
              title={`--color-steel-${n}`}
            />
          ))}
        </div>
      </div>
    )
  }
  return null
}

function TokensContent({ subLevel, goTo, goBack }) {
  if (!subLevel) {
    return (
      <div className="ds-section">
        <h2>Tokens</h2>
        <p className="ds-lead">Semantic and component tokens.</p>
        <div className="ds-token-list">
          <p><code>--copy-slot-primary</code> <code>--copy-slot-secondary</code></p>
          <p><code>--button-primary-slot-bg</code> <code>--button-slot-font-size</code></p>
          <p><code>--input-slot-border</code> <code>--menu-slot-radius</code></p>
        </div>
      </div>
    )
  }
  return null
}

function IconsContent({ subLevel, goTo, goBack }) {
  if (!subLevel) {
    return (
      <div className="ds-section">
        <h2>Icons</h2>
        <p className="ds-lead">Lucide & Tabler. Base grid 16×16, 2px safe area. Spacing: 4px icon-to-text, 8px in buttons.</p>
        <div className="ds-cards-grid ds-cards-sm">
          <DSCard title="Sizes" desc="12, 16, 24px" icon={Image} onClick={() => goTo(['icons', 'sizes'])} />
        </div>
      </div>
    )
  }
  if (subLevel === 'sizes') {
    const icons = [
      { name: 'Search', Icon: Search },
      { name: 'User', Icon: User },
      { name: 'Settings', Icon: Settings },
    ]
    return (
      <div className="ds-section">
        <h2>Icon sizes</h2>
        <p className="ds-lead">12px (s), 16px (m), 24px (l). Stroke scales: 1.25, 1.5, 2. Spacing: 4px icon-to-text, 8px in buttons.</p>
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
                <td><code>{s.token}</code></td>
                <td>{s.size}</td>
                <td>{s.stroke}</td>
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
    )
  }
  return null
}
