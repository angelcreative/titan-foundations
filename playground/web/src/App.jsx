import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Checkbox } from 'react-aria-components'
import { LineChart as RechartsLineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, PieChart, Pie, Cell as RechartsCell } from 'recharts'
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
  ArrowUp,
  ArrowDown,
  ArrowUpDown,
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
  TrendingUp,
  LineChart,
  Eye,
  BarChartHorizontal,
  BarChart2,
  ExternalLink,
  Globe,
  MapPin,
  MoreVertical,
  Pencil,
  Merge,
  Download,
  Gamepad2,
  Headphones,
  Minus,
} from 'lucide-react'
import {
  TitanBadge,
  TitanBadgeAnchor,
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

  TitanTwoUpOneDownLayout,
  TitanTable,
  TitanTableHeader,
  TitanColumn,
  TitanTableBody,
  TitanRow,
  TitanCell,
  TitanTableExampleBasic,
  TitanTableExampleDynamic,
  TitanTableExampleAsync,
  TitanTableExampleLinks,
  TitanTableExampleClickableNameCell,
  TitanTableExampleCellTypes,
  TitanTableExampleEmpty,
  TitanTableExampleSelection,
  TitanTableExampleSortable,
  TitanTableExampleHeaderVariants,
  TitanTableExampleResizable,
  TitanTableExampleDragDrop,
  TitanErrorButton,
  TitanDestructiveIconButton,
  TitanLink,
  TitanAvatar,
  TitanPillGroup,
  TitanPillList,
  TitanButtonGroup,
  TitanIndividualButton,
  TitanDivider,
  TitanCollapsible,
} from 'titan-compositions'
import { today, getLocalTimeZone } from '@internationalized/date'
import { DesignSystemView } from './DesignSystemView'

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

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

const COMMON_PATTERN_NAV_ITEMS = [
  { id: 'kpi-trend-card', label: 'KPI Trend Card', icon: TrendingUp },
  { id: 'kpi-chart-card', label: 'KPI Chart Card', icon: LineChart },
  { id: 'distribution-bar-card', label: 'Distribution Bar Card', icon: BarChartHorizontal },
  { id: 'profile-list-card', label: 'Profile List Card', icon: Users },
  { id: 'double-bar-chart-card', label: 'Double Bar Chart Card', icon: BarChart3 },
  { id: 'single-bar-chart-card', label: 'Single Bar Chart Card', icon: BarChart2 },
  { id: 'insight-variant-cards', label: 'Insight Variant Cards', icon: LayoutGrid },
  { id: 'sortable-penetration-list', label: 'Sortable Penetration List', icon: ListFilter },
  { id: 'top-cities-table-card', label: 'Top Cities Table', icon: MapPin },
  { id: 'skills-table-card', label: 'Skills Table', icon: Type },
  { id: 'audience-segment-card', label: 'Audience Segment Card', icon: Users },
  { id: 'comparison-bar-cards', label: 'Comparison Bar Cards', icon: BarChartHorizontal },
  { id: 'multimedia-grid-cards', label: 'Multimedia Grid Cards', icon: LayoutGrid },
  { id: 'table', label: 'Table (Advanced)', icon: Table2 },
]

const NAV_ITEMS = [
  { id: 'avatar', label: 'Avatar', icon: User },
  { id: 'badge', label: 'Badge', icon: CircleDot },
  { id: 'breadcrumb', label: 'Breadcrumb', icon: Navigation },
  { id: 'buttongroup', label: 'Button Group', icon: Columns2 },
  { id: 'buttons', label: 'Buttons', icon: MousePointerClick },
  { id: 'calendar', label: 'Calendar', icon: CalendarDays },
  { id: 'cardgrid', label: 'Card Grid', icon: LayoutDashboard },
  { id: 'collapsible', label: 'Collapsible', icon: ChevronDown },
  { id: 'dialog', label: 'Dialog', icon: MessageSquare },
  { id: 'divider', label: 'Divider', icon: Minus },
  { id: 'drawer', label: 'Drawer', icon: PanelRight },
  { id: 'forms', label: 'Form Controls', icon: ToggleLeft },
  { id: 'inputs', label: 'Inputs', icon: TextCursorInput },
  { id: 'link', label: 'Link', icon: ExternalLink },
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

/** KPI line chart styled with Titan tokens (Recharts). */
const DISTRIBUTION_BAR_ITEMS = [
  { label: 'Spanish', value: 95.2 },
  { label: 'English', value: 4.1 },
  { label: 'Italian', value: 0.2 },
  { label: 'Portuguese', value: 0.2 },
]

/** Distribution bar list with load animation: bars animate from 0 to value on mount. */
function DistributionBarListAnimated() {
  const [values, setValues] = useState(DISTRIBUTION_BAR_ITEMS.map(() => 0))
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setTimeout(() => setValues(DISTRIBUTION_BAR_ITEMS.map((d) => d.value)), 80)
    })
    return () => cancelAnimationFrame(id)
  }, [])
  return (
    <div className="distribution-bar-list">
      {DISTRIBUTION_BAR_ITEMS.map((item, i) => (
        <TitanProgressBar key={item.label} label={item.label} value={values[i]} maxValue={100} />
      ))}
    </div>
  )
}

const DOUBLE_BAR_DATA = [
  { name: '13-17', male: 3, female: 3 },
  { name: '18-24', male: 35, female: 32 },
  { name: '25-34', male: 18, female: 7 },
  { name: '35-44', male: 3, female: 1 },
  { name: '45-64', male: 1, female: 1 },
  { name: '65+', male: 0.5, female: 0.5 },
]

/** Double bar chart: two bars per x-axis item (Recharts), Titan tokens. */
function DoubleBarChartTitan() {
  return (
    <div className="double-bar-chart-area" aria-hidden="true">
      <ResponsiveContainer width="100%" height={160}>
        <BarChart data={DOUBLE_BAR_DATA} margin={{ top: 8, right: 8, bottom: 8, left: 8 }} barCategoryGap="20%" barGap={4}>
          <CartesianGrid strokeDasharray="2 2" stroke="var(--divider)" vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--text-muted)', fontSize: 10 }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--text-muted)', fontSize: 10 }} domain={[0, 40]} unit="%" />
          <Legend content={<DoubleBarLegend />} wrapperStyle={{ paddingTop: 'var(--spacing-s)' }} />
          <Bar dataKey="male" name="Male" fill="var(--color-orange-600)" radius={[2, 2, 0, 0]} />
          <Bar dataKey="female" name="Female" fill="var(--color-violet-600)" radius={[2, 2, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

function DoubleBarLegend() {
  return (
    <div className="double-bar-chart-legend">
      <span className="double-bar-legend-item"><i className="double-bar-legend-dot male" aria-hidden="true" /> Male</span>
      <span className="double-bar-legend-item"><i className="double-bar-legend-dot female" aria-hidden="true" /> Female</span>
    </div>
  )
}

const TOP_CITIES_DATA = [
  { id: '1', city: 'Tres Cantos', audiencePct: 1.12, baselinePct: 0.12, affinity: 9.63 },
  { id: '2', city: 'Villaviciosa de Odón', audiencePct: 0.98, baselinePct: 0.1, affinity: 8.21 },
  { id: '3', city: 'Boadilla del Monte', audiencePct: 0.85, baselinePct: 0.08, affinity: 7.94 },
  { id: '4', city: 'Majadahonda', audiencePct: 0.72, baselinePct: 0.07, affinity: 6.5 },
  { id: '5', city: 'Las Rozas de Madrid', audiencePct: 0.65, baselinePct: 0.06, affinity: 5.82 },
]

function TopCitiesTableDemo() {
  const [sortDescriptor, setSortDescriptor] = useState({ column: 'affinity', direction: 'descending' })
  const sorted = useMemo(() => {
    const list = [...TOP_CITIES_DATA]
    const dir = sortDescriptor.direction === 'ascending' ? 1 : -1
    if (sortDescriptor.column === 'city') {
      list.sort((a, b) => String(a.city).localeCompare(String(b.city)) * dir)
    } else {
      list.sort((a, b) => (a.affinity - b.affinity) * dir)
    }
    return list
  }, [sortDescriptor])
  const columns = [
    { key: 'city', header: 'City', sortable: true },
    { key: 'penetration', header: 'Penetration', render: (row) => (
      <div className="cities-penetration-cell">
        <div className="cities-dual-bar-row">
          <TitanProgressBar label="" value={row.audiencePct} maxValue={100} showValue={false} />
          <span className="cities-pct">{row.audiencePct}%</span>
        </div>
        <div className="cities-dual-bar-row">
          <TitanProgressBar label="" value={row.baselinePct} maxValue={100} showValue={false} className="cities-bar-light" />
          <span className="cities-pct">{row.baselinePct}%</span>
        </div>
      </div>
    ) },
    { key: 'affinity', header: 'Affinity', sortable: true, render: (row) => <span className="cities-affinity-pill">x {row.affinity.toFixed(2)}</span> },
  ]
  return (
    <>
      <div className="cities-table-scroll">
        <DataTable aria-label="Top cities" columns={columns} rows={sorted} sortDescriptor={sortDescriptor} onSortChange={setSortDescriptor} className="cities-table" />
      </div>
      <div className="cities-legend" role="presentation" aria-hidden="true">
        <span className="cities-legend-item"><i className="cities-legend-dot cities-legend-dot-audience" aria-hidden="true" /> Audience</span>
        <span className="cities-legend-item"><i className="cities-legend-dot cities-legend-dot-baseline" aria-hidden="true" /> Baseline</span>
      </div>
    </>
  )
}

const SKILLS_TABLE_DATA = [
  { id: '1', skill: 'Popular Science', audiencePct: 33.3, baselinePct: 0.84, affinity: 39.7 },
  { id: '2', skill: 'Research Projects', audiencePct: 33.3, baselinePct: 1.04, affinity: 32.1 },
  { id: '3', skill: 'Science', audiencePct: 35.3, baselinePct: 1.24, affinity: 28.5 },
  { id: '4', skill: 'Clinical Development', audiencePct: 41.2, baselinePct: 2.2, affinity: 18.7 },
]

function SkillsTableDemo() {
  const [sortDescriptor, setSortDescriptor] = useState({ column: 'affinity', direction: 'descending' })
  const sorted = useMemo(() => {
    const list = [...SKILLS_TABLE_DATA]
    const dir = sortDescriptor.direction === 'ascending' ? 1 : -1
    if (sortDescriptor.column === 'skill') {
      list.sort((a, b) => String(a.skill).localeCompare(String(b.skill)) * dir)
    } else {
      list.sort((a, b) => (a.affinity - b.affinity) * dir)
    }
    return list
  }, [sortDescriptor])
  const columns = [
    { key: 'skill', header: 'Skill', sortable: true },
    { key: 'penetration', header: 'Penetration', render: (row) => (
      <div className="cities-penetration-cell">
        <div className="cities-dual-bar-row">
          <TitanProgressBar label="" value={row.audiencePct} maxValue={100} showValue={false} />
          <span className="cities-pct">{row.audiencePct}%</span>
        </div>
        <div className="cities-dual-bar-row">
          <TitanProgressBar label="" value={row.baselinePct} maxValue={100} showValue={false} className="cities-bar-light" />
          <span className="cities-pct">{row.baselinePct}%</span>
        </div>
      </div>
    ) },
    { key: 'affinity', header: 'Affinity', sortable: true, render: (row) => <span className="cities-affinity-pill">x {row.affinity.toFixed(2)}</span> },
  ]
  return (
    <>
      <div className="cities-table-scroll">
        <DataTable aria-label="Skills" columns={columns} rows={sorted} sortDescriptor={sortDescriptor} onSortChange={setSortDescriptor} className="cities-table" />
      </div>
      <div className="cities-legend" role="presentation" aria-hidden="true">
        <span className="cities-legend-item"><i className="cities-legend-dot cities-legend-dot-audience" aria-hidden="true" /> Audience</span>
        <span className="cities-legend-item"><i className="cities-legend-dot cities-legend-dot-baseline" aria-hidden="true" /> Baseline</span>
      </div>
    </>
  )
}

const SORTABLE_PENETRATION_ROWS = [
  { id: '1', label: 'Sports', pct: 17.11 },
  { id: '2', label: 'Pets', pct: 16.08 },
  { id: '3', label: 'Education', pct: 11.24 },
  { id: '4', label: 'Science', pct: 10.46 },
  { id: '5', label: 'Society', pct: 8.9 },
  { id: '6', label: 'Movies', pct: 8.29 },
  { id: '7', label: 'Movies and TV', pct: 7.83 },
  { id: '8', label: 'Travel', pct: 7.15 },
]

function SortablePenetrationListDemo() {
  const [sortDescriptor, setSortDescriptor] = useState({ column: 'pct', direction: 'descending' })
  const sorted = useMemo(() => {
    const list = [...SORTABLE_PENETRATION_ROWS]
    const dir = sortDescriptor.direction === 'ascending' ? 1 : -1
    list.sort((a, b) => (a.pct - b.pct) * dir)
    return list
  }, [sortDescriptor])
  const columns = [
    { key: 'label', header: 'Interest', sortable: true },
    { key: 'pct', header: 'Avg. Penetration', sortable: true, render: (item) => (
      <div className="sortable-penetration-cell-bar">
        <TitanProgressBar label="" value={item.pct} maxValue={100} showValue={false} />
        <span className="sortable-penetration-pct">{item.pct}%</span>
      </div>
    ) },
  ]
  return (
    <div className="sortable-penetration-table-scroll">
      <DataTable aria-label="Interest penetration" columns={columns} rows={sorted} sortDescriptor={sortDescriptor} onSortChange={setSortDescriptor} className="table-sortable" />
    </div>
  )
}

const COMPARISON_BIO_ROWS = [
  { id: 'twitch', term: 'twitch', seg: 22.77, base: 10.75 },
  { id: 'videojuegos', term: 'videojuegos', seg: 21.25, base: 24.17 },
  { id: 'gamer', term: 'gamer', seg: 19.61, base: 19.31 },
  { id: 'streamer', term: 'streamer', seg: 15.29, base: 6.29 },
  { id: 'league', term: 'league', seg: 12.26, base: 4.1 },
]
const COMPARISON_AGE_ROWS = [
  { id: '25-34', range: '25-34', seg: 54.46, base: 54.74 },
  { id: '18-24', range: '18-24', seg: 19.92, base: 18.19 },
  { id: '35-44', range: '35-44', seg: 18.52, base: 18.87 },
  { id: '13-17', range: '13-17', seg: 3.2, base: 3.55 },
  { id: '45-54', range: '45-54', seg: 2.37, base: 3.11 },
]

function ComparisonBioCard() {
  const [sortDescriptor, setSortDescriptor] = useState({ column: 'seg', direction: 'descending' })
  const sorted = useMemo(() => {
    const list = [...COMPARISON_BIO_ROWS]
    const dir = sortDescriptor.direction === 'ascending' ? 1 : -1
    if (sortDescriptor.column === 'term') {
      list.sort((a, b) => String(a.term).localeCompare(String(b.term)) * dir)
    } else {
      list.sort((a, b) => (a.seg - b.seg) * dir)
    }
    return list
  }, [sortDescriptor])
  return (
    <TitanCard span={8} className="comparison-card top-cities-table-card">
      <div className="kpi-trend-header">
        <span className="kpi-trend-title">Bio</span>
        <TitanTooltip content="Distribution by most common words used by the audience and variance from the baseline.">
          <button type="button" className="kpi-trend-info" aria-label="More info">
            <Info size={16} strokeWidth={1.5} />
          </button>
        </TitanTooltip>
      </div>
      <p className="comparison-desc">This graph shows the distribution by most common words used by the audience to describe themselves, and its variance from the baseline.</p>
      <a href="#" className="comparison-read-more">Read more</a>
      <div className="comparison-table-scroll">
        <DataTable
          aria-label="Bio terms"
          columns={[
            { key: 'term', header: 'Term', sortable: true },
            { key: 'seg', header: '%', sortable: true, render: (row) => (
              <div className="comparison-bar-cell">
                <div className="comparison-bar-row">
                  <TitanProgressBar label="" value={row.seg} maxValue={100} showValue={false} className="comparison-bar-segment" />
                  <span className="comparison-pct">{row.seg}%</span>
                </div>
                <div className="comparison-bar-row">
                  <TitanProgressBar label="" value={row.base} maxValue={100} showValue={false} className="comparison-bar-baseline" />
                  <span className="comparison-pct">{row.base}%</span>
                </div>
              </div>
            ) },
          ]}
          rows={sorted}
          sortDescriptor={sortDescriptor}
          onSortChange={setSortDescriptor}
          className="table-sortable cities-table"
        />
      </div>
      <div className="comparison-legend">
        <span className="comparison-legend-item"><i className="comparison-legend-dot segment" aria-hidden="true" /> LoL Streaming</span>
        <span className="comparison-legend-item"><i className="comparison-legend-dot baseline" aria-hidden="true" /> Madrid Gaming Audience Analysis</span>
      </div>
      <div className="comparison-card-footer">
        <TitanDrawer
          title="Bio – Full table"
          triggerLabel="Show full table"
          triggerClassName="btn btn-tertiary comparison-footer-link"
          triggerIcon={<ArrowRight size={14} strokeWidth={1.5} aria-hidden="true" />}
        >
          <div className="comparison-drawer-content">
            <p className="comparison-desc">This graph shows the distribution by most common words used by the audience to describe themselves, and its variance from the baseline.</p>
            <div className="comparison-table-scroll">
              <DataTable
                aria-label="Bio terms (full)"
                columns={[
                  { key: 'term', header: 'Term', sortable: true },
                  { key: 'seg', header: '%', sortable: true, render: (row) => (
                    <div className="comparison-bar-cell">
                      <div className="comparison-bar-row">
                        <TitanProgressBar label="" value={row.seg} maxValue={100} showValue={false} className="comparison-bar-segment" />
                        <span className="comparison-pct">{row.seg}%</span>
                      </div>
                      <div className="comparison-bar-row">
                        <TitanProgressBar label="" value={row.base} maxValue={100} showValue={false} className="comparison-bar-baseline" />
                        <span className="comparison-pct">{row.base}%</span>
                      </div>
                    </div>
                  ) },
                ]}
                rows={sorted}
                sortDescriptor={sortDescriptor}
                onSortChange={setSortDescriptor}
                className="table-sortable cities-table"
              />
            </div>
            <div className="comparison-legend">
              <span className="comparison-legend-item"><i className="comparison-legend-dot segment" aria-hidden="true" /> LoL Streaming</span>
              <span className="comparison-legend-item"><i className="comparison-legend-dot baseline" aria-hidden="true" /> Madrid Gaming Audience Analysis</span>
            </div>
          </div>
        </TitanDrawer>
      </div>
    </TitanCard>
  )
}

function ComparisonAgeCard() {
  const [sortDescriptor, setSortDescriptor] = useState({ column: 'seg', direction: 'descending' })
  const sorted = useMemo(() => {
    const list = [...COMPARISON_AGE_ROWS]
    const dir = sortDescriptor.direction === 'ascending' ? 1 : -1
    if (sortDescriptor.column === 'range') {
      list.sort((a, b) => String(a.range).localeCompare(String(b.range)) * dir)
    } else {
      list.sort((a, b) => (a.seg - b.seg) * dir)
    }
    return list
  }, [sortDescriptor])
  return (
    <TitanCard span={8} className="comparison-card top-cities-table-card">
      <div className="kpi-trend-header">
        <span className="kpi-trend-title">Age</span>
        <TitanTooltip content="Distribution by age and its difference versus the baseline.">
          <button type="button" className="kpi-trend-info" aria-label="More info">
            <Info size={16} strokeWidth={1.5} />
          </button>
        </TitanTooltip>
      </div>
      <p className="comparison-desc">This graph shows the distribution by age and its difference versus the baseline.</p>
      <a href="#" className="comparison-read-more">Read more</a>
      <div className="comparison-table-scroll">
        <DataTable
          aria-label="Age ranges"
          columns={[
            { key: 'range', header: 'Range', sortable: true },
            { key: 'seg', header: '%', sortable: true, render: (row) => (
              <div className="comparison-bar-cell">
                <div className="comparison-bar-row">
                  <TitanProgressBar label="" value={row.seg} maxValue={100} showValue={false} className="comparison-bar-segment" />
                  <span className="comparison-pct">{row.seg}%</span>
                </div>
                <div className="comparison-bar-row">
                  <TitanProgressBar label="" value={row.base} maxValue={100} showValue={false} className="comparison-bar-baseline" />
                  <span className="comparison-pct">{row.base}%</span>
                </div>
              </div>
            ) },
          ]}
          rows={sorted}
          sortDescriptor={sortDescriptor}
          onSortChange={setSortDescriptor}
          className="table-sortable cities-table"
        />
      </div>
      <div className="comparison-legend">
        <span className="comparison-legend-item"><i className="comparison-legend-dot segment" aria-hidden="true" /> LoL Streaming</span>
        <span className="comparison-legend-item"><i className="comparison-legend-dot baseline" aria-hidden="true" /> Madrid Gaming Audience Analysis</span>
      </div>
      <div className="comparison-card-footer">
        <TitanDrawer
          title="Age – Full table"
          triggerLabel="Show full table"
          triggerClassName="btn btn-tertiary comparison-footer-link"
          triggerIcon={<ArrowRight size={14} strokeWidth={1.5} aria-hidden="true" />}
        >
          <div className="comparison-drawer-content">
            <p className="comparison-desc">This graph shows the distribution by age and its difference versus the baseline.</p>
            <div className="comparison-table-scroll">
              <DataTable
                aria-label="Age ranges (full)"
                columns={[
                  { key: 'range', header: 'Range', sortable: true },
                  { key: 'seg', header: '%', sortable: true, render: (row) => (
                    <div className="comparison-bar-cell">
                      <div className="comparison-bar-row">
                        <TitanProgressBar label="" value={row.seg} maxValue={100} showValue={false} className="comparison-bar-segment" />
                        <span className="comparison-pct">{row.seg}%</span>
                      </div>
                      <div className="comparison-bar-row">
                        <TitanProgressBar label="" value={row.base} maxValue={100} showValue={false} className="comparison-bar-baseline" />
                        <span className="comparison-pct">{row.base}%</span>
                      </div>
                    </div>
                  ) },
                ]}
                rows={sorted}
                sortDescriptor={sortDescriptor}
                onSortChange={setSortDescriptor}
                className="table-sortable cities-table"
              />
            </div>
            <div className="comparison-legend">
              <span className="comparison-legend-item"><i className="comparison-legend-dot segment" aria-hidden="true" /> LoL Streaming</span>
              <span className="comparison-legend-item"><i className="comparison-legend-dot baseline" aria-hidden="true" /> Madrid Gaming Audience Analysis</span>
            </div>
          </div>
        </TitanDrawer>
        <TitanButton variant="tertiary" className="comparison-footer-link">Download <Download size={14} strokeWidth={1.5} aria-hidden="true" /></TitanButton>
      </div>
    </TitanCard>
  )
}

const SINGLE_BAR_DATA = [
  { name: '13-17', value: 7.5 },
  { name: '18-24', value: 62 },
  { name: '25-34', value: 28 },
  { name: '35-44', value: 5 },
  { name: '45-64', value: 1.5 },
  { name: '65+', value: 0.5 },
]

/** Single bar chart: one bar per x-axis category (Recharts), Titan tokens. */
function SingleBarChartTitan() {
  return (
    <div className="single-bar-chart-area" aria-hidden="true">
      <ResponsiveContainer width="100%" height={160}>
        <BarChart data={SINGLE_BAR_DATA} margin={{ top: 8, right: 8, bottom: 8, left: 8 }} barCategoryGap="20%">
          <CartesianGrid strokeDasharray="2 2" stroke="var(--divider)" vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--text-muted)', fontSize: 10 }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--text-muted)', fontSize: 10 }} domain={[0, 80]} unit="%" />
          <Bar dataKey="value" fill="var(--button-primary)" radius={[2, 2, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

const KPI_FOLLOWERS_DATA = [
  { month: 'Aug', value: 104.5 },
  { month: 'Sep', value: 103 },
  { month: 'Oct', value: 101.5 },
  { month: 'Nov', value: 102 },
  { month: 'Dec', value: 102.5 },
  { month: 'Jan', value: 103.5 },
  { month: 'Feb', value: 104 },
]
const KPI_FOLLOWING_DATA = [
  { month: 'Aug', value: 305 },
  { month: 'Sep', value: 302 },
  { month: 'Oct', value: 298 },
  { month: 'Nov', value: 300 },
  { month: 'Dec', value: 301 },
  { month: 'Jan', value: 303 },
  { month: 'Feb', value: 305 },
]

function KpiLineChart({ data }) {
  return (
    <div className="kpi-chart-area" aria-hidden="true">
      <ResponsiveContainer width="100%" height={56}>
        <RechartsLineChart data={data} margin={{ top: 4, right: 4, bottom: 0, left: 4 }}>
          <CartesianGrid strokeDasharray="2 2" stroke="var(--divider)" vertical={false} />
          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: 'var(--text-muted)', fontSize: 10 }} />
          <YAxis hide domain={['dataMin', 'dataMax']} />
          <Line type="monotone" dataKey="value" stroke="var(--button-primary)" strokeWidth={1.5} dot={false} />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  )
}

const TABLE_ITEMS = [
  { id: '1', name: 'Games', type: 'File folder', date: '6/7/2020' },
  { id: '2', name: 'Program Files', type: 'File folder', date: '4/7/2021' },
  { id: '3', name: 'bootmgr', type: 'System file', date: '11/20/2010' },
  { id: '4', name: 'log.txt', type: 'Text Document', date: '1/18/2016' },
  { id: '5', name: 'config.ini', type: 'Configuration', date: '3/12/2019' },
  { id: '6', name: 'readme.md', type: 'Markdown', date: '8/22/2022' },
]

function TableCheckbox({ slot }) {
  return (
    <Checkbox slot={slot} className="checkbox-root">
      <span className="checkbox-box" aria-hidden="true">
        <Check className="checkbox-mark" />
      </span>
    </Checkbox>
  )
}

const FILES_COLUMNS = [
  { key: 'name', header: 'Name', sortable: true },
  { key: 'type', header: 'Type', sortable: true },
  { key: 'date', header: 'Date Modified', sortable: true },
]

/** DataTable — uses TitanTable primitives with columns/rows/sort (no selection). For custom render use columns[].render(row). Use stickyHeader=true when the table is inside a scroll container (cards). */
function DataTable({ columns, rows, sortDescriptor, onSortChange, 'aria-label': ariaLabel, className, stickyHeader = true }) {
  const sortedRows = useMemo(() => {
    if (!sortDescriptor || !onSortChange) return rows
    const list = [...rows]
    const key = sortDescriptor.column
    const dir = sortDescriptor.direction === 'ascending' ? 1 : -1
    list.sort((a, b) => {
      const va = a[key]
      const vb = b[key]
      if (typeof va === 'number' && typeof vb === 'number') return (va - vb) * dir
      return String(va ?? '').localeCompare(String(vb ?? ''), undefined, { numeric: true }) * dir
    })
    return list
  }, [rows, sortDescriptor])
  return (
    <TitanTable
      aria-label={ariaLabel}
      className={className}
      sortDescriptor={sortDescriptor}
      onSortChange={onSortChange}
      stickyHeader={stickyHeader}
    >
      <TitanTableHeader columns={columns}>
        {(col) => (
          <TitanColumn id={col.key} isRowHeader={col.isRowHeader ?? columns.indexOf(col) === 0} allowsSorting={col.sortable ?? false}>
            {col.header}
          </TitanColumn>
        )}
      </TitanTableHeader>
      <TitanTableBody items={sortedRows}>
        {(row) => (
          <TitanRow id={String(row.id)} columns={columns}>
            {(col) => <TitanCell>{col.render ? col.render(row) : row[col.key]}</TitanCell>}
          </TitanRow>
        )}
      </TitanTableBody>
    </TitanTable>
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

const CLAUDE_CODE_CMD = `claude mcp add --transport http titands https://mcp-remote-worker.titands.workers.dev/mcp`

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
  { tool: 'titan_setup', purpose: 'Full project scaffold (package.json, index.html, src/, skill files). Supports structure=\'single\' (default) or \'monorepo\' (npm workspaces + apps/*). Agent creates all files + runs npm install.', progressive: "structure='single'|'monorepo', theme, appName, target" },
  { tool: 'titan_syncFromGithub', purpose: 'Refresh live data from the titan-foundations repo', progressive: '—' },
  { tool: 'titan_getTheme', purpose: 'Resolve theme, get bootstrap snippets or full CSS', progressive: 'include=summary|bootstrap|css|all' },
  { tool: 'titan_getOverview', purpose: 'Architecture, workflow, available components/patterns', progressive: "Lightweight summary by default; include='full' for details" },
  { tool: 'titan_getComponentRegistry', purpose: 'Know WHAT components exist (discovery only)', progressive: "Names only by default; component='X' for full props/slots" },
  { tool: 'titan_getCompositionPattern', purpose: 'Know HOW to combine components into screens', progressive: "Compact index by default; pattern='X' for full JSX recipe" },
  { tool: 'titan_validateAndRewrite', purpose: 'Validate code against Titan rules + auto-rewrite spacing', progressive: '—' },
  { tool: 'titan_getFoundations', purpose: 'Foundation tokens + semantic token categories', progressive: '—' },
  { tool: 'titan_getDesignQualityGuidelines', purpose: 'DO/DON\'T guidelines for design quality and anti-AI slop', progressive: '—' },
]

const SUPPORTED_THEMES = [
  { theme: 'insights', product: 'Default. Used when no theme is specified.' },
  { theme: 'audiense', product: 'Audiense core' },
  { theme: 'demand', product: 'Demand product' },
  { theme: 'linkedin', product: 'LinkedIn integration' },
  { theme: 'tweetbinder', product: 'TweetBinder' },
  { theme: 'brand', product: 'Brand — Pulse (gold) primary, Ground (earth) neutral. No focus ring. Links use ocean-500.' },
  { theme: 'neutral', product: 'Neutral / white-label' },
]

const TROUBLESHOOTING = [
  { problem: 'MCP shows "failed" or "not authenticated"', solution: 'Check the URL ends in /mcp (not /sse). No auth is required.' },
  { problem: 'Components seem outdated', solution: 'Ask: "Sync the latest Titan foundations data"' },
  { problem: "AI doesn't use Titan tokens", solution: 'Ask: "Review this code and check it follows Titan rules"' },
  { problem: "Claude Code can't connect", solution: 'Run claude mcp add --transport http titands https://mcp-remote-worker.titands.workers.dev/mcp' },
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
        <p>After installing the MCP, ask the AI to set up your project. <code>titan_setup</code> generates a <strong>complete project scaffold</strong> — package.json, index.html with Titan head links, src/ files, vite config, and skill files. The AI creates all files and runs <code>npm install</code>.</p>

        <h3>Option A: Single app (default)</h3>
        <p>One project, one app. Tell the AI:</p>
        <CodeBlock code={'"Set up this project for Titan"'} />
        <p>This creates:</p>
        <CodeBlock code={`project-root/
├── package.json       ← all deps here
├── vite.config.js
├── index.html         ← Titan head links + data-theme
└── src/
    ├── main.jsx       ← imports titan-compositions/styles
    └── App.jsx        ← starter component`} />

        <h3>Option B: Monorepo (multiple apps, install once)</h3>
        <p>One root with npm workspaces. Dependencies install <strong>once</strong> at the root. Each app in <code>apps/</code> inherits them — no reinstalling per app. Tell the AI:</p>
        <CodeBlock code={'"Set up this project for Titan as a monorepo"'} />
        <p>This creates:</p>
        <CodeBlock code={`project-root/
├── package.json       ← workspaces: ["apps/*"], Titan deps here
└── apps/
    └── my-app/
        ├── package.json   ← only name + vite devDeps
        ├── vite.config.js
        ├── index.html     ← Titan head links + data-theme
        └── src/
            ├── main.jsx
            └── App.jsx`} />
        <p>To add a new app later, just say:</p>
        <CodeBlock code={'"Create a new app called dashboard in apps/"'} />
        <p>The AI will create the folder with its own <code>package.json</code>, <code>index.html</code>, and <code>src/</code>. Then one <code>npm install</code> from the root registers it. No dependency reinstall needed.</p>

        <h3>What gets created</h3>
        <table className="setup-table">
          <thead>
            <tr>
              <th>File</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>package.json</code></td><td>Dependencies (single) or workspace config + deps (monorepo)</td></tr>
            <tr><td><code>index.html</code></td><td>Google Fonts + titan.css + theme CSS + <code>data-theme</code></td></tr>
            <tr><td><code>src/main.jsx</code></td><td>React entry, imports <code>titan-compositions/styles</code></td></tr>
            <tr><td><code>src/App.jsx</code></td><td>Starter component with Titan typography</td></tr>
            <tr><td><code>vite.config.js</code></td><td>Vite + React plugin</td></tr>
            <tr><td><code>.cursor/skills/</code></td><td>Local Titan knowledge files for the IDE</td></tr>
          </tbody>
        </table>

        <h3>Option C: Figma Make</h3>
        <p>Figma Make runs in a <strong>sandbox where CDN @import fails</strong>. All CSS tokens must be local inline files. Tell the AI:</p>
        <CodeBlock code={'"Set up Titan MCP"'} />
        <p>This calls <code>titan_setup</code> with <code>target: 'figma-make'</code> and creates:</p>
        <CodeBlock code={`project-root/
├── package.json
├── vite.config.js
├── index.html             ← Google Fonts ONLY (no CDN links for tokens)
└── src/
    ├── styles/
    │   ├── titan-base-tokens.css  ← titan.css (downloaded from GitHub)
    │   └── titan-theme.css        ← theme CSS (downloaded from GitHub)
    ├── index.css              ← import order: local tokens → theme → compositions
    ├── main.jsx
    └── App.jsx`} />
        <p>Key differences from Cursor/Claude Code:</p>
        <ul className="setup-auto-list">
          <li><strong>No CDN links</strong> in <code>index.html</code> for token CSS (only Google Fonts is external)</li>
          <li><strong>Token CSS files are downloaded</strong> from GitHub and saved locally — the tool returns URLs for the agent to fetch and write as local files (they are too large to inline in the response)</li>
          <li><strong><code>index.css</code></strong> imports local tokens first, then theme, then <code>titan-compositions/styles</code></li>
          <li><strong>No skill files</strong> — Figma Make does not use <code>.cursor/</code> or <code>.claude/</code></li>
        </ul>

        <h3>Optional parameters</h3>
        <table className="setup-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Values</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>structure</code></td><td><code>single</code> | <code>monorepo</code></td><td><code>single</code></td></tr>
            <tr><td><code>theme</code></td><td>Any supported theme name</td><td><code>insights</code></td></tr>
            <tr><td><code>appName</code></td><td>Project/app folder name</td><td><code>my-app</code></td></tr>
            <tr><td><code>target</code></td><td><code>cursor</code> | <code>claude-code</code> | <code>both</code> | <code>figma-make</code></td><td><code>both</code></td></tr>
          </tbody>
        </table>
        <p className="setup-note">Figma Make: CDN <code>@import</code> is unreliable in sandboxed environments. The <code>figma-make</code> target bundles all token CSS locally so <code>var(--token)</code> always resolves.</p>
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
        <h2>4. Available tools (9)</h2>
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

function TokenChainRow({ row }) {
  return (
    <tr>
      <td style={{ fontWeight: 'var(--text-weight-medium)', color: 'var(--copy-slot-primary)' }}>{row.property}</td>
      <td>
        <span className="chain-step">
          {row.chain.map((step, i) => (
            <span key={i} className="chain-step">
              {i > 0 && <span className="chain-arrow">→</span>}
              {step.swatch && <span className="chain-swatch" style={{ background: step.swatch }} />}
              <span className={`chain-token ${step.type || 'component'}`}>{step.label}</span>
            </span>
          ))}
        </span>
      </td>
    </tr>
  )
}

function TokenChainToggle({ title, children }) {
  const [open, setOpen] = useState(false)
  const btnRef = useRef(null)
  function handleClick() {
    setOpen(o => !o)
    requestAnimationFrame(() => {
      const scrollParent = btnRef.current?.closest('.page')
      if (scrollParent) scrollParent.scrollLeft = 0
    })
  }
  return (
    <div className="token-chain-toggle">
      <button ref={btnRef} type="button" className="token-chain-toggle-btn" aria-expanded={open} onClick={handleClick}>
        <span>{title}</span>
        <ChevronDown style={{ width: 16, height: 16, transition: 'transform .2s', transform: open ? 'rotate(180deg)' : 'rotate(0)', flexShrink: 0 }} />
      </button>
      {open && <div className="token-chain-toggle-body">{children}</div>}
    </div>
  )
}

function TokenChainExplainer({ variations }) {
  if (!variations || variations.length === 0) return null
  return (
    <div className="token-chain-section">
      {variations.map((v, vi) => (
        <TokenChainToggle key={vi} title={v.name}>
          {v.description && <p style={{ margin: '0 0 var(--spacing-xs)', fontSize: 'var(--font-size-s)', color: 'var(--copy-slot-secondary)' }}>{v.description}</p>}
          <table className="token-chain-table">
            <thead>
              <tr>
                <th>Property</th>
                <th>Token chain</th>
              </tr>
            </thead>
            <tbody>
              {v.rows.map((row, ri) => <TokenChainRow key={ri} row={row} />)}
            </tbody>
          </table>
          <div className="chain-legend">
            <span className="chain-legend-item"><span className="chain-token component">component</span> Component token</span>
            <span className="chain-legend-item"><span className="chain-token primitive">primitive</span> Primitive / foundation</span>
            <span className="chain-legend-item"><span className="chain-token value">value</span> Resolved value</span>
          </div>
        </TokenChainToggle>
      ))}
    </div>
  )
}

function ShowcaseCard({ id, title, ariaImports, ariaDesc, ariaComponents, foundations, tokenGroups, code, tokenChains, children }) {
  return (
    <section id={id} className="card">
      <h2>{title}</h2>
      <div className="showcase-demo">{children}</div>
      {tokenChains && tokenChains.length > 0 && (
        <TokenChainExplainer variations={tokenChains} />
      )}
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

// TitanTable — React Aria Table API (see titan-compositions)
// Use TitanTable, TitanTableHeader, TitanColumn, TitanTableBody, TitanRow, TitanCell
// or TitanTableExampleBasic, TitanTableExampleSortable, etc.`

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
        <div className="app-top-bar-left">
          <h1 className="app-top-title">Titan Design System</h1>
          <nav className="app-top-nav">
            <button
              className={`app-top-tab${activeView === 'components' ? ' app-top-tab-active' : ''}`}
              onClick={() => setActiveView('components')}
            >Components</button>
            <button
              className={`app-top-tab${activeView === 'commonpatterns' ? ' app-top-tab-active' : ''}`}
              onClick={() => setActiveView('commonpatterns')}
            >Common patterns</button>
            <button
              className={`app-top-tab${activeView === 'setup' ? ' app-top-tab-active' : ''}`}
              onClick={() => setActiveView('setup')}
            >How to set up Titan</button>
            <button
              className={`app-top-tab${activeView === 'designsystem' ? ' app-top-tab-active' : ''}`}
              onClick={() => setActiveView('designsystem')}
            >Design System</button>
          </nav>
        </div>
        <div className="app-top-bar-right">
          <TitanMenuDropdown
            triggerLabel={`Theme ${theme}`}
            placement="bottom end"
            items={THEMES.map((t) => ({
              id: t,
              label: t,
              icon: <span className="app-theme-swatch" style={{ background: THEME_COLORS[t] }} aria-hidden="true" />,
            }))}
            onAction={(key) => setTheme(String(key))}
          />
        </div>
      </div>

      {activeView === 'setup' ? (
        <main className="page setup-page">
          <SetupGuide />
        </main>
      ) : activeView === 'designsystem' ? (
        <DesignSystemView theme={theme} onThemeChange={setTheme} />
      ) : (
      <div className="app-layout" key={activeView}>
        <TitanSidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed((c) => !c)}
          defaultActiveId={activeView === 'commonpatterns' ? 'kpi-trend-card' : 'navbar'}
          onActiveChange={scrollTo}
        >
          {activeView === 'commonpatterns' ? (
            <>
              <TitanSidebarHeader>Common patterns</TitanSidebarHeader>
              {COMMON_PATTERN_NAV_ITEMS.map((nav) => (
                <TitanSidebarItem key={nav.id} id={nav.id} icon={nav.icon}>
                  {nav.label}
                </TitanSidebarItem>
              ))}
            </>
          ) : (
            NAV_ITEMS.map((nav) => (
              <TitanSidebarItem key={nav.id} id={nav.id} icon={nav.icon}>
                {nav.label}
              </TitanSidebarItem>
            ))
          )}
        </TitanSidebar>

        <main ref={mainScrollRef} className="page">
          {activeView === 'components' && (
          <>
          {/* ── Avatar ──────────────────────────────────────── */}
          <ShowcaseCard
            id="avatar"
            title="Avatar"
            ariaImports="// No React Aria — pure HTML div with role='img'"
            ariaDesc="Displays a circular avatar with the first letter of the account name, or a fallback icon when no account is provided."
            ariaComponents={['None']}
            foundations={[
              { category: 'Colors', detail: '--avatar-background for circle bg; --text-on-color for letter/icon.' },
              { category: 'Sizing', detail: '--avatar-width (40px), --avatar-height (40px).' },
            ]}
            tokenGroups={[
              { label: 'Avatar', tokens: ['--avatar-background', '--avatar-width', '--avatar-height', '--text-on-color'] },
            ]}
            code={`import { TitanAvatar } from 'titan-compositions'\n\n<TitanAvatar account="John" />\n<TitanAvatar />`}
            tokenChains={[
              { name: 'Avatar (with initial)', description: 'Circular badge showing the first letter of the account name.', rows: [
                { property: 'Background', chain: [{ label: '--avatar-background', type: 'component' }, { label: '--color-steel-600', type: 'primitive' }, { label: '#6B7280', type: 'value' }] },
                { property: 'Text color', chain: [{ label: '--text-on-color', type: 'component' }, { label: '--color-white-900', type: 'primitive' }, { label: '#FFFFFF', type: 'value', swatch: '#FFFFFF' }] },
                { property: 'Width', chain: [{ label: '--avatar-width', type: 'component' }, { label: '40px', type: 'value' }] },
                { property: 'Height', chain: [{ label: '--avatar-height', type: 'component' }, { label: '40px', type: 'value' }] },
                { property: 'Border radius', chain: [{ label: 'border-radius: 50%', type: 'value' }] },
                { property: 'Font weight', chain: [{ label: '--text-weight-semibold', type: 'primitive' }, { label: '600', type: 'value' }] },
              ]},
              { name: 'Avatar (fallback icon)', description: 'When no account name is provided, a User icon is shown.', rows: [
                { property: 'Background', chain: [{ label: '--avatar-background', type: 'component' }, { label: '--color-steel-600', type: 'primitive' }, { label: '#6B7280', type: 'value' }] },
                { property: 'Icon color', chain: [{ label: '--text-on-color', type: 'component' }, { label: '--color-white-900', type: 'primitive' }, { label: '#FFFFFF', type: 'value' }] },
                { property: 'Icon size', chain: [{ label: '--icon-size-m', type: 'primitive' }, { label: '20px', type: 'value' }] },
              ]},
            ]}
          >
            <div className="row">
              <TitanAvatar account="John" aria-label="John's avatar" />
              <TitanAvatar account="Sarah" aria-label="Sarah's avatar" />
              <TitanAvatar aria-label="Anonymous avatar" />
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
            tokenChains={[
              { name: 'Badge (counter pill)', description: 'Red notification counter.', rows: [
                { property: 'Background', chain: [{ label: '--badge-slot-bg', type: 'component' }, { label: '--color-pomegranate-600', type: 'primitive' }, { label: '#DC2626', type: 'value', swatch: '#DC2626' }] },
                { property: 'Text color', chain: [{ label: '--badge-slot-color', type: 'component' }, { label: '--color-white-900', type: 'primitive' }, { label: '#FFFFFF', type: 'value' }] },
                { property: 'Font size', chain: [{ label: '--badge-slot-font-size', type: 'component' }, { label: '--font-size-s', type: 'primitive' }, { label: '12px', type: 'value' }] },
                { property: 'Font weight', chain: [{ label: '--badge-slot-font-weight', type: 'component' }, { label: '600', type: 'value' }] },
                { property: 'Border radius', chain: [{ label: '--badge-slot-radius', type: 'component' }, { label: '--rounded-full', type: 'primitive' }, { label: '9999px', type: 'value' }] },
                { property: 'Padding', chain: [{ label: '--badge-slot-pad-x / --badge-slot-pad-y', type: 'component' }, { label: '4px / 2px', type: 'value' }] },
              ]},
              { name: 'Badge Anchor', description: 'Positions badge at top-right of child element.', rows: [
                { property: 'Offset', chain: [{ label: '--badge-slot-offset', type: 'component' }, { label: '4px', type: 'value' }] },
              ]},
            ]}
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
            tokenChains={[
              { name: 'Breadcrumb link', description: 'Clickable breadcrumb item.', rows: [
                { property: 'Text color', chain: [{ label: 'color', type: 'component' }, { label: '--color-steel-600', type: 'primitive' }, { label: '#6B7280', type: 'value', swatch: '#6B7280' }] },
                { property: 'Font size', chain: [{ label: '--font-size-s', type: 'primitive' }, { label: '12px', type: 'value' }] },
                { property: 'Font weight', chain: [{ label: '--text-weight-regular', type: 'primitive' }, { label: '400', type: 'value' }] },
                { property: 'Font family', chain: [{ label: '--font-audiense', type: 'primitive' }, { label: 'Poppins', type: 'value' }] },
              ]},
              { name: 'Breadcrumb current page', description: 'Non-clickable current page label.', rows: [
                { property: 'Text color', chain: [{ label: 'color', type: 'component' }, { label: '--color-steel-500', type: 'primitive' }, { label: '#9CA3AF', type: 'value', swatch: '#9CA3AF' }] },
              ]},
              { name: 'Breadcrumb nav bar', description: 'Full-width container with bottom border.', rows: [
                { property: 'Min height', chain: [{ label: 'min-height', type: 'component' }, { label: '40px', type: 'value' }] },
                { property: 'Padding', chain: [{ label: '--spacing-xs', type: 'primitive' }, { label: '8px', type: 'value' }] },
                { property: 'Border bottom', chain: [{ label: '--stroke-slot-width', type: 'component' }, { label: '--color-black-200', type: 'primitive' }, { label: '#E5E7EB', type: 'value', swatch: '#E5E7EB' }] },
                { property: 'Separator icon', chain: [{ label: '--icon-size-s', type: 'primitive' }, { label: '12px', type: 'value' }] },
              ]},
            ]}
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

          {/* ── Button Group ─────────────────────────────────── */}
          <ShowcaseCard
            id="buttongroup"
            title="Button Group"
            ariaImports="import { ToggleButtonGroup, ToggleButton } from 'react-aria-components'"
            ariaDesc="A group of toggle buttons with single selection. Built on React Aria ToggleButtonGroup for keyboard navigation and ARIA support."
            ariaComponents={['ToggleButtonGroup', 'ToggleButton']}
            foundations={[
              { category: 'Colors', detail: '--button-group-background, --button-group-color, --button-group-border for default; --button-group-selected-* for selected state; --button-group-hover-* for hover.' },
              { category: 'Sizing', detail: 'Min 48px, max 112px per button; --spacing-3xs / --spacing-2xs for padding.' },
            ]}
            tokenGroups={[
              { label: 'Button Group', tokens: ['--button-group-background', '--button-group-border', '--button-group-color', '--button-group-icon-color', '--button-group-selected-background', '--button-group-selected-color', '--button-group-hover-color', '--button-group-disabled-color'] },
            ]}
            code={`import { TitanButtonGroup, TitanIndividualButton } from 'titan-compositions'\n\n<TitanButtonGroup>\n  <TitanIndividualButton id="list">List</TitanIndividualButton>\n  <TitanIndividualButton id="grid">Grid</TitanIndividualButton>\n</TitanButtonGroup>`}
            tokenChains={[
              { name: 'Button Group (horizontal)', description: 'Segmented toggle with single selection.', rows: [
                { property: 'Background', chain: [{ label: '--toggle-group-slot-bg', type: 'component' }, { label: '--color-black-100', type: 'primitive' }, { label: '#F3F4F6', type: 'value', swatch: '#F3F4F6' }] },
                { property: 'Border radius', chain: [{ label: '--toggle-group-slot-radius', type: 'component' }, { label: '--rounded-s', type: 'primitive' }, { label: '8px', type: 'value' }] },
                { property: 'Gap', chain: [{ label: '--spacing-4xs', type: 'primitive' }, { label: '2px', type: 'value' }] },
                { property: 'Padding', chain: [{ label: '--spacing-4xs', type: 'primitive' }, { label: '2px', type: 'value' }] },
              ]},
              { name: 'Individual button (selected)', rows: [
                { property: 'Background', chain: [{ label: '--toggle-btn-slot-selected-bg', type: 'component' }, { label: '--color-white-900', type: 'primitive' }, { label: '#FFFFFF', type: 'value' }] },
                { property: 'Text color', chain: [{ label: '--toggle-btn-slot-selected-label', type: 'component' }, { label: '--color-steel-700', type: 'primitive' }, { label: '#374151', type: 'value' }] },
                { property: 'Font weight', chain: [{ label: '--text-weight-semibold', type: 'primitive' }, { label: '600', type: 'value' }] },
              ]},
              { name: 'Individual button (unselected)', rows: [
                { property: 'Background', chain: [{ label: 'transparent', type: 'value' }] },
                { property: 'Text color', chain: [{ label: '--toggle-btn-slot-label', type: 'component' }, { label: '--color-steel-500', type: 'primitive' }, { label: '#9CA3AF', type: 'value' }] },
              ]},
            ]}
          >
            <div className="row">
              <TitanButtonGroup aria-label="View mode">
                <TitanIndividualButton id="list"><Layers /> List</TitanIndividualButton>
                <TitanIndividualButton id="grid"><LayoutGrid /> Grid</TitanIndividualButton>
                <TitanIndividualButton id="chart"><BarChart3 /> Chart</TitanIndividualButton>
              </TitanButtonGroup>
            </div>
            <div className="row" style={{ marginTop: 'var(--spacing-s)' }}>
              <span style={{ fontSize: 'var(--font-size-s)', color: 'var(--copy-slot-secondary)', marginRight: 'var(--spacing-s)' }}>Vertical:</span>
              <TitanButtonGroup orientation="vertical" aria-label="Options">
                <TitanIndividualButton id="a">Option A</TitanIndividualButton>
                <TitanIndividualButton id="b">Option B</TitanIndividualButton>
                <TitanIndividualButton id="c">Option C</TitanIndividualButton>
              </TitanButtonGroup>
            </div>
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
            tokenChains={[
              { name: 'Button Primary', description: 'Main call-to-action.', rows: [
                { property: 'Background', chain: [{ label: '--button-primary-slot-bg', type: 'component' }, { label: '--color-primary', type: 'primitive' }, { label: 'theme color', type: 'value' }] },
                { property: 'Text color', chain: [{ label: '--button-primary-slot-label', type: 'component' }, { label: '--text-on-color', type: 'primitive' }, { label: '#FFFFFF', type: 'value' }] },
                { property: 'Padding vertical', chain: [{ label: '--button-slot-pad-y', type: 'component' }, { label: '--spacing-xs', type: 'primitive' }, { label: '10px', type: 'value' }] },
                { property: 'Padding horizontal', chain: [{ label: '--button-slot-pad-x', type: 'component' }, { label: '--spacing-m', type: 'primitive' }, { label: '16px', type: 'value' }] },
                { property: 'Border radius', chain: [{ label: '--button-slot-radius', type: 'component' }, { label: '--rounded-s', type: 'primitive' }, { label: '8px', type: 'value' }] },
                { property: 'Font size', chain: [{ label: '--button-slot-font-size', type: 'component' }, { label: '--font-size-l', type: 'primitive' }, { label: '16px', type: 'value' }] },
                { property: 'Line height', chain: [{ label: '--button-slot-line-height', type: 'component' }, { label: '--font-leading-m', type: 'primitive' }, { label: '18px', type: 'value' }] },
                { property: 'Font weight', chain: [{ label: '--button-slot-font-weight', type: 'component' }, { label: '--text-weight-medium', type: 'primitive' }, { label: '500', type: 'value' }] },
                { property: 'Font family', chain: [{ label: '--font-audiense', type: 'primitive' }, { label: 'Poppins', type: 'value' }] },
              ]},
              { name: 'Button Secondary', description: 'Secondary action with border.', rows: [
                { property: 'Background', chain: [{ label: '--button-secondary-slot-bg', type: 'component' }, { label: '--color-white-900', type: 'primitive' }, { label: '#FFFFFF', type: 'value' }] },
                { property: 'Text color', chain: [{ label: '--button-secondary-slot-label', type: 'component' }, { label: '--color-steel-700', type: 'primitive' }, { label: '#374151', type: 'value' }] },
                { property: 'Border', chain: [{ label: '--button-secondary-slot-border', type: 'component' }, { label: '--color-black-300', type: 'primitive' }, { label: '#D1D5DB', type: 'value', swatch: '#D1D5DB' }] },
              ]},
              { name: 'Button Tertiary', description: 'Subtle background action.', rows: [
                { property: 'Background', chain: [{ label: '--button-tertiary-slot-bg', type: 'component' }, { label: 'transparent', type: 'value' }] },
                { property: 'Text color', chain: [{ label: '--button-tertiary-slot-label', type: 'component' }, { label: '--color-steel-700', type: 'primitive' }, { label: '#374151', type: 'value' }] },
              ]},
              { name: 'Button Link', description: 'Text-only link-style button.', rows: [
                { property: 'Text color', chain: [{ label: '--text-link', type: 'component' }, { label: '--color-primary', type: 'primitive' }, { label: 'theme color', type: 'value' }] },
                { property: 'Text decoration (hover)', chain: [{ label: 'underline', type: 'value' }] },
              ]},
              { name: 'Button Delete', description: 'Destructive primary action.', rows: [
                { property: 'Background', chain: [{ label: '--error-button-primary', type: 'component' }, { label: '--color-pomegranate-600', type: 'primitive' }, { label: '#DC2626', type: 'value', swatch: '#DC2626' }] },
                { property: 'Text color', chain: [{ label: '--text-on-color', type: 'primitive' }, { label: '#FFFFFF', type: 'value' }] },
              ]},
              { name: 'Button Disabled', description: 'Disabled state for all variants.', rows: [
                { property: 'Background', chain: [{ label: '--button-primary-slot-disabled-bg', type: 'component' }, { label: '--color-disabled-100', type: 'primitive' }, { label: '#F3F4F6', type: 'value' }] },
                { property: 'Text color', chain: [{ label: '--button-primary-slot-disabled-label', type: 'component' }, { label: '--color-disabled-300', type: 'primitive' }, { label: '#9CA3AF', type: 'value' }] },
                { property: 'Cursor', chain: [{ label: 'not-allowed', type: 'value' }] },
              ]},
              { name: 'Icon Button (secondary)', description: 'Icon-only button.', rows: [
                { property: 'Size', chain: [{ label: '--button-icon-slot-size', type: 'component' }, { label: '36px', type: 'value' }] },
                { property: 'Background', chain: [{ label: '--button-icon-slot-bg', type: 'component' }, { label: '--color-white-900', type: 'primitive' }, { label: '#FFFFFF', type: 'value' }] },
                { property: 'Icon color', chain: [{ label: '--button-icon-slot-icon', type: 'component' }, { label: '--color-steel-600', type: 'primitive' }, { label: '#6B7280', type: 'value' }] },
                { property: 'Border radius', chain: [{ label: '--button-icon-interactive-slot-radius', type: 'component' }, { label: '--rounded-s', type: 'primitive' }, { label: '8px', type: 'value' }] },
              ]},
              { name: 'Icon Button (ghost)', description: 'Transparent icon button.', rows: [
                { property: 'Background', chain: [{ label: 'transparent', type: 'value' }] },
                { property: 'Background (hover)', chain: [{ label: '--button-icon-slot-bg-hover', type: 'component' }, { label: '--color-black-100', type: 'primitive' }, { label: '#F3F4F6', type: 'value' }] },
                { property: 'Icon color', chain: [{ label: '--button-icon-slot-icon', type: 'component' }, { label: '--color-steel-600', type: 'primitive' }, { label: '#6B7280', type: 'value' }] },
              ]},
            ]}
          >
            <div className="row">
              <TitanButton variant="primary">Primary</TitanButton>
              <TitanButton variant="secondary">Secondary</TitanButton>
              <TitanButton variant="tertiary">Tertiary</TitanButton>
              <TitanButton variant="link" icon={<ArrowRight />}>Link button</TitanButton>
              <TitanButton variant="delete" icon={<Trash2 />}>Delete</TitanButton>
              <TitanButton variant="delete-secondary" icon={<Trash2 />}>Delete secondary</TitanButton>
              <TitanIconButton variant="secondary" aria-label="Add"><Plus /></TitanIconButton>
              <TitanIconButton variant="base" aria-label="Star"><Star /></TitanIconButton>
              <TitanIconButton variant="ghost" aria-label="Settings"><Settings /></TitanIconButton>
              <TitanIconButton variant="delete" aria-label="Delete"><Trash2 /></TitanIconButton>
            </div>
            <div className="row" style={{ marginTop: 'var(--spacing-s)' }}>
              <span style={{ fontSize: 'var(--font-size-s)', color: 'var(--copy-slot-secondary)', marginRight: 'var(--spacing-s)' }}>Disabled:</span>
              <TitanButton variant="primary" isDisabled>Primary</TitanButton>
              <TitanButton variant="secondary" isDisabled>Secondary</TitanButton>
              <TitanButton variant="tertiary" isDisabled>Tertiary</TitanButton>
              <TitanIconButton variant="secondary" aria-label="Add (disabled)" isDisabled><Plus /></TitanIconButton>
            </div>
            <div className="row" style={{ marginTop: 'var(--spacing-s)' }}>
              <span style={{ fontSize: 'var(--font-size-s)', color: 'var(--copy-slot-secondary)', marginRight: 'var(--spacing-s)' }}>Error / Destructive:</span>
              <TitanErrorButton variant="primary">Error Primary</TitanErrorButton>
              <TitanErrorButton variant="secondary">Error Secondary</TitanErrorButton>
              <TitanErrorButton variant="text">Error Text</TitanErrorButton>
              <TitanDestructiveIconButton variant="primary" aria-label="Delete"><Trash2 /></TitanDestructiveIconButton>
              <TitanDestructiveIconButton variant="secondary" aria-label="Delete"><Trash2 /></TitanDestructiveIconButton>
              <TitanDestructiveIconButton variant="base" aria-label="Delete"><Trash2 /></TitanDestructiveIconButton>
            </div>
            <div className="row" style={{ marginTop: 'var(--spacing-s)' }}>
              <span style={{ fontSize: 'var(--font-size-s)', color: 'var(--copy-slot-secondary)', marginRight: 'var(--spacing-s)' }}>With trailing icon:</span>
              <TitanButton variant="primary" iconEnd={<ArrowRight />}>Continue</TitanButton>
              <TitanButton variant="secondary" iconEnd={<ArrowRight />}>Next step</TitanButton>
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
            tokenChains={[
              { name: 'Calendar container', description: 'Date picker panel.', rows: [
                { property: 'Background', chain: [{ label: '--calendar-slot-bg', type: 'component' }, { label: '--color-white-900', type: 'primitive' }, { label: '#FFFFFF', type: 'value' }] },
                { property: 'Border radius', chain: [{ label: '--calendar-slot-radius', type: 'component' }, { label: '--rounded-m', type: 'primitive' }, { label: '12px', type: 'value' }] },
                { property: 'Shadow', chain: [{ label: '--calendar-slot-shadow', type: 'component' }, { label: '--shadow-m', type: 'primitive' }, { label: '0 4px 16px rgba(0,0,0,.08)', type: 'value' }] },
                { property: 'Padding', chain: [{ label: '--calendar-slot-pad', type: 'component' }, { label: '--spacing-m', type: 'primitive' }, { label: '16px', type: 'value' }] },
              ]},
              { name: 'Selected day', description: 'Highlighted active date cell.', rows: [
                { property: 'Background', chain: [{ label: '--calendar-selected-bg', type: 'component' }, { label: '--color-primary', type: 'primitive' }, { label: 'theme color', type: 'value' }] },
                { property: 'Text color', chain: [{ label: '--calendar-selected-color', type: 'component' }, { label: '--text-on-color', type: 'primitive' }, { label: '#FFFFFF', type: 'value' }] },
                { property: 'Border radius', chain: [{ label: '--rounded-s', type: 'primitive' }, { label: '8px', type: 'value' }] },
              ]},
              { name: 'Today indicator', description: 'Ring around current date.', rows: [
                { property: 'Border', chain: [{ label: '--calendar-today-border', type: 'component' }, { label: '--color-primary', type: 'primitive' }, { label: 'theme color', type: 'value' }] },
              ]},
              { name: 'Header & nav', description: 'Month/year label and prev/next buttons.', rows: [
                { property: 'Header text', chain: [{ label: '--calendar-header-color', type: 'component' }, { label: '--copy-slot-body', type: 'primitive' }, { label: '#1F2937', type: 'value' }] },
                { property: 'Nav button icon', chain: [{ label: '--icon-size-m', type: 'primitive' }, { label: '20px', type: 'value' }] },
              ]},
            ]}
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

          {/* ── 2. Card Grid ───────────────────────────────── */}
          <ShowcaseCard
            id="cardgrid"
            title="Card Grid"
            ariaImports="import { TitanCardGrid, TitanCard } from 'titan-compositions'"
            ariaDesc="TitanCardGrid uses a 16-column CSS grid. TitanCard span={4|8|12|16} controls width. Empty boxes below show layout only."
            ariaComponents={['TitanCardGrid', 'TitanCard']}
            foundations={[
              { category: 'Spacing', detail: '--layout-grid-gap for column/row gaps; --dialog-slot-pad for card padding.' },
              { category: 'Surface', detail: '--color-white-900 card background; --color-black-300 card border; --card-slot-radius.' },
            ]}
            tokenGroups={[
              { label: 'Card', tokens: ['--card-slot-border-width', '--card-slot-radius', '--dialog-slot-pad', '--color-white-900', '--color-black-300'] },
              { label: 'Grid', tokens: ['--layout-grid-gap'] },
            ]}
            code={`import { TitanCardGrid, TitanCard } from 'titan-compositions'

<div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--layout-grid-gap)' }}>
  {/* 1/4 + 3/4 */}
  <TitanCardGrid>
    <TitanCard span={4}><span className="cardgrid-label">1/4</span></TitanCard>
    <TitanCard span={12}><span className="cardgrid-label">3/4</span></TitanCard>
  </TitanCardGrid>
  {/* 2/4 + 2/4 */}
  <TitanCardGrid>
    <TitanCard span={8}><span className="cardgrid-label">2/4</span></TitanCard>
    <TitanCard span={8}><span className="cardgrid-label">2/4</span></TitanCard>
  </TitanCardGrid>
  {/* 1/4 × 4 */}
  <TitanCardGrid>
    <TitanCard span={4}><span className="cardgrid-label">1/4</span></TitanCard>
    <TitanCard span={4}><span className="cardgrid-label">1/4</span></TitanCard>
    <TitanCard span={4}><span className="cardgrid-label">1/4</span></TitanCard>
    <TitanCard span={4}><span className="cardgrid-label">1/4</span></TitanCard>
  </TitanCardGrid>
  {/* 4/4 */}
  <TitanCardGrid>
    <TitanCard span={16}><span className="cardgrid-label">4/4</span></TitanCard>
  </TitanCardGrid>
</div>`}
            tokenChains={[
              { name: 'Card Grid layout', description: '16-column CSS grid container.', rows: [
                { property: 'Grid gap', chain: [{ label: '--layout-grid-gap', type: 'component' }, { label: '16px', type: 'value' }] },
              ]},
              { name: 'Card', description: 'Individual card surface.', rows: [
                { property: 'Background', chain: [{ label: '--card-slot-bg', type: 'component' }, { label: '--color-white-900', type: 'primitive' }, { label: '#FFFFFF', type: 'value' }] },
                { property: 'Border', chain: [{ label: '--card-slot-border-width', type: 'component' }, { label: '--color-black-300', type: 'primitive' }, { label: '#D1D5DB', type: 'value', swatch: '#D1D5DB' }] },
                { property: 'Border radius', chain: [{ label: '--card-slot-radius', type: 'component' }, { label: '--rounded-m', type: 'primitive' }, { label: '12px', type: 'value' }] },
                { property: 'Padding', chain: [{ label: '--dialog-slot-pad', type: 'component' }, { label: '--spacing-l', type: 'primitive' }, { label: '24px', type: 'value' }] },
              ]},
            ]}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--layout-grid-gap)' }}>
              <TitanCardGrid>
                <TitanCard span={4}><span className="cardgrid-label">1/4</span></TitanCard>
                <TitanCard span={12}><span className="cardgrid-label">3/4</span></TitanCard>
              </TitanCardGrid>
              <TitanCardGrid>
                <TitanCard span={8}><span className="cardgrid-label">2/4</span></TitanCard>
                <TitanCard span={8}><span className="cardgrid-label">2/4</span></TitanCard>
              </TitanCardGrid>
              <TitanCardGrid>
                <TitanCard span={4}><span className="cardgrid-label">1/4</span></TitanCard>
                <TitanCard span={4}><span className="cardgrid-label">1/4</span></TitanCard>
                <TitanCard span={4}><span className="cardgrid-label">1/4</span></TitanCard>
                <TitanCard span={4}><span className="cardgrid-label">1/4</span></TitanCard>
              </TitanCardGrid>
              <TitanCardGrid>
                <TitanCard span={16}><span className="cardgrid-label">4/4</span></TitanCard>
              </TitanCardGrid>
            </div>
          </ShowcaseCard>
          {/* ── Collapsible ──────────────────────────────────── */}
          <ShowcaseCard
            id="collapsible"
            title="Collapsible"
            ariaImports="// No React Aria — pure HTML button with aria-expanded"
            ariaDesc="A collapsible panel with title and chevron icon that toggles visibility of its content."
            ariaComponents={['None']}
            foundations={[
              { category: 'Spacing', detail: '--spacing-2xs for header padding and content bottom padding.' },
              { category: 'Icons', detail: '--icon-size-s for chevron; --icon-stroke-s for stroke.' },
            ]}
            tokenGroups={[
              { label: 'Collapsible', tokens: ['--spacing-2xs', '--icon-size-s', '--icon-stroke-s', '--text-weight-medium'] },
            ]}
            code={`import { TitanCollapsible } from 'titan-compositions'\n\n<TitanCollapsible title="Section title">\n  <p>Content here</p>\n</TitanCollapsible>`}
            tokenChains={[
              { name: 'Collapsible trigger', description: 'Header button that toggles content.', rows: [
                { property: 'Background', chain: [{ label: 'transparent', type: 'value' }] },
                { property: 'Text color', chain: [{ label: '--copy-slot-body', type: 'component' }, { label: '--color-steel-800', type: 'primitive' }, { label: '#1F2937', type: 'value' }] },
                { property: 'Font weight', chain: [{ label: '--text-weight-medium', type: 'primitive' }, { label: '500', type: 'value' }] },
                { property: 'Chevron icon', chain: [{ label: '--icon-size-s', type: 'primitive' }, { label: '12px', type: 'value' }] },
              ]},
              { name: 'Collapsible content', description: 'Revealed panel area.', rows: [
                { property: 'Padding', chain: [{ label: '--spacing-2xs', type: 'primitive' }, { label: '8px', type: 'value' }] },
                { property: 'Text color', chain: [{ label: '--copy-slot-secondary', type: 'component' }, { label: '--color-steel-500', type: 'primitive' }, { label: '#9CA3AF', type: 'value' }] },
              ]},
            ]}
          >
            <div style={{ maxWidth: '400px' }}>
              <TitanCollapsible title="Advanced settings">
                <p style={{ color: 'var(--copy-slot-secondary)', fontSize: 'var(--font-size-m)' }}>These are the advanced settings for your report configuration. You can adjust filters, date ranges, and export options here.</p>
              </TitanCollapsible>
              <TitanDivider />
              <TitanCollapsible title="Export options">
                <p style={{ color: 'var(--copy-slot-secondary)', fontSize: 'var(--font-size-m)' }}>Choose your preferred export format: PDF, CSV, or Excel. Each format includes all visible data.</p>
              </TitanCollapsible>
            </div>
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
            tokenChains={[
              { name: 'Dialog overlay', description: 'Dimmed backdrop behind modal.', rows: [
                { property: 'Background', chain: [{ label: '--overlay-backdrop', type: 'component' }, { label: 'rgba(0, 0, 0, 0.4)', type: 'value' }] },
              ]},
              { name: 'Dialog panel', description: 'Centered modal container.', rows: [
                { property: 'Background', chain: [{ label: '--dialog-slot-bg', type: 'component' }, { label: '--color-white-900', type: 'primitive' }, { label: '#FFFFFF', type: 'value' }] },
                { property: 'Border radius', chain: [{ label: '--dialog-slot-radius', type: 'component' }, { label: '--rounded-m', type: 'primitive' }, { label: '12px', type: 'value' }] },
                { property: 'Shadow', chain: [{ label: '--dialog-slot-shadow', type: 'component' }, { label: '--shadow-l', type: 'primitive' }, { label: '0 8px 32px rgba(0,0,0,.12)', type: 'value' }] },
                { property: 'Padding', chain: [{ label: '--dialog-slot-pad', type: 'component' }, { label: '--spacing-l', type: 'primitive' }, { label: '24px', type: 'value' }] },
                { property: 'Gap', chain: [{ label: '--dialog-slot-gap', type: 'component' }, { label: '--spacing-m', type: 'primitive' }, { label: '16px', type: 'value' }] },
              ]},
              { name: 'Dialog title', description: 'Modal heading text.', rows: [
                { property: 'Font size', chain: [{ label: '--font-size-l', type: 'primitive' }, { label: '16px', type: 'value' }] },
                { property: 'Font weight', chain: [{ label: '--text-weight-semibold', type: 'primitive' }, { label: '600', type: 'value' }] },
                { property: 'Color', chain: [{ label: '--dialog-title-slot-color', type: 'component' }, { label: '--copy-slot-body', type: 'primitive' }, { label: '#1F2937', type: 'value' }] },
              ]},
            ]}
          >
            <TitanDialog
              triggerLabel="Open dialog"
              title="Delete report?"
              body="This action cannot be undone. The report will be permanently removed."
              leftAction={<TitanButton variant="secondary">Cancel</TitanButton>}
              rightAction={<TitanButton variant="delete">Delete</TitanButton>}
            />
          </ShowcaseCard>

          {/* ── Divider ──────────────────────────────────────── */}
          <ShowcaseCard
            id="divider"
            title="Divider"
            ariaImports="// No React Aria — pure HTML <hr>"
            ariaDesc="A horizontal rule styled with Titan tokens for visual separation."
            ariaComponents={['None']}
            foundations={[
              { category: 'Colors', detail: '--border for line color; --stroke-s for thickness.' },
            ]}
            tokenGroups={[
              { label: 'Divider', tokens: ['--border', '--stroke-s'] },
            ]}
            code={`import { TitanDivider } from 'titan-compositions'\n\n<TitanDivider />`}
            tokenChains={[
              { name: 'Divider', description: 'Horizontal separator line.', rows: [
                { property: 'Border color', chain: [{ label: '--divider-slot-color', type: 'component' }, { label: '--color-black-200', type: 'primitive' }, { label: '#E5E7EB', type: 'value', swatch: '#E5E7EB' }] },
                { property: 'Border width', chain: [{ label: '--stroke-slot-width', type: 'component' }, { label: '1px', type: 'value' }] },
              ]},
            ]}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-m)' }}>
              <span style={{ color: 'var(--copy-slot-secondary)', fontSize: 'var(--font-size-m)' }}>Content above</span>
              <TitanDivider />
              <span style={{ color: 'var(--copy-slot-secondary)', fontSize: 'var(--font-size-m)' }}>Content below</span>
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
            tokenChains={[
              { name: 'Drawer overlay', description: 'Dimmed backdrop behind drawer.', rows: [
                { property: 'Background', chain: [{ label: '--drawer-overlay-slot-backdrop', type: 'component' }, { label: 'rgba(0, 0, 0, 0.4)', type: 'value' }] },
              ]},
              { name: 'Drawer panel', description: 'Slide-in panel from the right.', rows: [
                { property: 'Background', chain: [{ label: '--drawer-slot-bg', type: 'component' }, { label: '--color-white-900', type: 'primitive' }, { label: '#FFFFFF', type: 'value' }] },
                { property: 'Width', chain: [{ label: '--drawer-slot-width', type: 'component' }, { label: '480px', type: 'value' }] },
                { property: 'Border radius', chain: [{ label: '--drawer-slot-radius', type: 'component' }, { label: '--rounded-m', type: 'primitive' }, { label: '12px', type: 'value' }] },
                { property: 'Shadow', chain: [{ label: '--drawer-slot-shadow', type: 'component' }, { label: '--shadow-l', type: 'primitive' }, { label: '0 8px 32px rgba(0,0,0,.12)', type: 'value' }] },
                { property: 'Padding', chain: [{ label: '--drawer-slot-pad', type: 'component' }, { label: '--spacing-l', type: 'primitive' }, { label: '24px', type: 'value' }] },
              ]},
              { name: 'Drawer header', description: 'Title bar with close button.', rows: [
                { property: 'Title color', chain: [{ label: '--dialog-title-slot-color', type: 'component' }, { label: '--copy-slot-body', type: 'primitive' }, { label: '#1F2937', type: 'value' }] },
                { property: 'Title font', chain: [{ label: '--font-size-l', type: 'primitive' }, { label: '16px', type: 'value' }] },
                { property: 'Border bottom', chain: [{ label: '--drawer-header-border-bottom', type: 'component' }, { label: '--color-black-200', type: 'primitive' }, { label: '#E5E7EB', type: 'value', swatch: '#E5E7EB' }] },
              ]},
            ]}
          >
            <TitanDrawer triggerLabel="Open drawer" title="Filter audience">
              <p>Use this panel to refine audience segments by geography, age, and interests.</p>
              <p>Content is scrollable when needed and keeps header structure fixed.</p>
            </TitanDrawer>
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
            tokenChains={[
              { name: 'Checkbox (checked)', description: 'Selected checkbox state.', rows: [
                { property: 'Background', chain: [{ label: '--checkbox-slot-selected-bg', type: 'component' }, { label: '--color-primary', type: 'primitive' }, { label: 'theme color', type: 'value' }] },
                { property: 'Check color', chain: [{ label: '--checkbox-slot-check', type: 'component' }, { label: '--color-white-900', type: 'primitive' }, { label: '#FFFFFF', type: 'value' }] },
                { property: 'Size', chain: [{ label: '--checkbox-slot-size', type: 'component' }, { label: '18px', type: 'value' }] },
                { property: 'Border radius', chain: [{ label: '--checkbox-slot-radius', type: 'component' }, { label: '--rounded-xs', type: 'primitive' }, { label: '4px', type: 'value' }] },
              ]},
              { name: 'Radio (selected)', description: 'Selected radio button state.', rows: [
                { property: 'Border', chain: [{ label: '--radio-slot-selected-border', type: 'component' }, { label: '--color-primary', type: 'primitive' }, { label: 'theme color', type: 'value' }] },
                { property: 'Size', chain: [{ label: '--radio-slot-size', type: 'component' }, { label: '18px', type: 'value' }] },
                { property: 'Border radius', chain: [{ label: '--radio-slot-radius', type: 'component' }, { label: '50%', type: 'value' }] },
              ]},
              { name: 'Switch (on)', description: 'Active toggle switch.', rows: [
                { property: 'Track background', chain: [{ label: '--toggle-slot-selected-bg', type: 'component' }, { label: '--color-primary', type: 'primitive' }, { label: 'theme color', type: 'value' }] },
                { property: 'Knob', chain: [{ label: '--toggle-slot-ball-bg', type: 'component' }, { label: '--color-white-900', type: 'primitive' }, { label: '#FFFFFF', type: 'value' }] },
                { property: 'Track width', chain: [{ label: '--toggle-slot-width', type: 'component' }, { label: '36px', type: 'value' }] },
                { property: 'Track height', chain: [{ label: '--toggle-slot-height', type: 'component' }, { label: '20px', type: 'value' }] },
              ]},
              { name: 'Label text', description: 'Form control labels.', rows: [
                { property: 'Color', chain: [{ label: '--copy-slot-body', type: 'component' }, { label: '--color-steel-800', type: 'primitive' }, { label: '#1F2937', type: 'value' }] },
                { property: 'Font size', chain: [{ label: '--button-slot-font-size', type: 'primitive' }, { label: '14px', type: 'value' }] },
              ]},
            ]}
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
            tokenChains={[
              { name: 'Input (default)', description: 'Standard text input field.', rows: [
                { property: 'Background', chain: [{ label: '--input-slot-bg', type: 'component' }, { label: '--color-white-900', type: 'primitive' }, { label: '#FFFFFF', type: 'value' }] },
                { property: 'Border', chain: [{ label: '--input-slot-border', type: 'component' }, { label: '--color-black-300', type: 'primitive' }, { label: '#D1D5DB', type: 'value', swatch: '#D1D5DB' }] },
                { property: 'Border (focus)', chain: [{ label: '--input-slot-border-focus', type: 'component' }, { label: '--color-primary', type: 'primitive' }, { label: 'theme color', type: 'value' }] },
                { property: 'Text color', chain: [{ label: '--input-slot-color', type: 'component' }, { label: '--copy-slot-body', type: 'primitive' }, { label: '#1F2937', type: 'value' }] },
                { property: 'Placeholder', chain: [{ label: '--input-slot-placeholder', type: 'component' }, { label: '--color-steel-400', type: 'primitive' }, { label: '#9CA3AF', type: 'value' }] },
                { property: 'Border radius', chain: [{ label: '--input-slot-radius', type: 'component' }, { label: '--rounded-s', type: 'primitive' }, { label: '8px', type: 'value' }] },
                { property: 'Height', chain: [{ label: '--input-slot-height', type: 'component' }, { label: '40px', type: 'value' }] },
              ]},
              { name: 'Textarea', description: 'Multi-line text input.', rows: [
                { property: 'Min height', chain: [{ label: '--textarea-slot-min-height', type: 'component' }, { label: '80px', type: 'value' }] },
                { property: 'Background', chain: [{ label: '--input-slot-bg', type: 'component' }, { label: '--color-white-900', type: 'primitive' }, { label: '#FFFFFF', type: 'value' }] },
                { property: 'Border', chain: [{ label: '--input-slot-border', type: 'component' }, { label: '--color-black-300', type: 'primitive' }, { label: '#D1D5DB', type: 'value' }] },
              ]},
              { name: 'Input (error)', description: 'Error state with red border.', rows: [
                { property: 'Border', chain: [{ label: '--input-slot-border-error', type: 'component' }, { label: '--color-pomegranate-600', type: 'primitive' }, { label: '#DC2626', type: 'value', swatch: '#DC2626' }] },
                { property: 'Error text', chain: [{ label: '--field-error-color', type: 'component' }, { label: '--color-pomegranate-600', type: 'primitive' }, { label: '#DC2626', type: 'value' }] },
              ]},
            ]}
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

          {/* ── Link ──────────────────────────────────────────── */}
          <ShowcaseCard
            id="link"
            title="Link"
            ariaImports="import { Link } from 'react-aria-components'"
            ariaDesc="A styled link built on React Aria Link, supporting sizes (s/m), visited state, disabled state, and optional trailing redirect icon."
            ariaComponents={['Link']}
            foundations={[
              { category: 'Colors', detail: '--link-color, --link-visited-color, --link-disabled-color for text; --link-icon-color for icon.' },
              { category: 'Typography', detail: 'Uses text-link-s (12px) or text-link-m (14px) utility classes.' },
              { category: 'Spacing', detail: '--spacing-4xs for icon gap.' },
            ]}
            tokenGroups={[
              { label: 'Link', tokens: ['--link-color', '--link-visited-color', '--link-disabled-color', '--link-icon-color', '--link-visited-icon-color', '--link-disabled-icon-color'] },
            ]}
            code={`import { TitanLink } from 'titan-compositions'\n\n<TitanLink href="https://audiense.com">Visit Audiense</TitanLink>\n<TitanLink href="#" withIcon>External link</TitanLink>\n<TitanLink href="#" size="s">Small link</TitanLink>`}
            tokenChains={[
              { name: 'Link (default)', description: 'Clickable text link.', rows: [
                { property: 'Text color', chain: [{ label: '--link-color', type: 'component' }, { label: '--color-primary', type: 'primitive' }, { label: 'theme color', type: 'value' }] },
                { property: 'Text color (hover)', chain: [{ label: '--link-color', type: 'component' }, { label: '--color-primary', type: 'primitive' }, { label: 'theme color', type: 'value' }] },
                { property: 'Text decoration', chain: [{ label: 'underline on hover', type: 'value' }] },
              ]},
              { name: 'Link (visited)', description: 'Previously visited link.', rows: [
                { property: 'Text color', chain: [{ label: '--link-visited-color', type: 'component' }, { label: '--color-steel-500', type: 'primitive' }, { label: '#9CA3AF', type: 'value' }] },
              ]},
              { name: 'Link (disabled)', description: 'Non-interactive link state.', rows: [
                { property: 'Text color', chain: [{ label: '--link-disabled-color', type: 'component' }, { label: '--color-disabled-300', type: 'primitive' }, { label: '#9CA3AF', type: 'value' }] },
                { property: 'Cursor', chain: [{ label: 'not-allowed', type: 'value' }] },
              ]},
            ]}
          >
            <div className="row">
              <TitanLink href="https://audiense.com" target="_blank">Visit Audiense</TitanLink>
              <TitanLink href="https://audiense.com" target="_blank" withIcon>External link</TitanLink>
              <TitanLink href="#" size="s">Small link</TitanLink>
              <TitanLink href="#" isDisabled>Disabled link</TitanLink>
            </div>
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
            tokenChains={[
              { name: 'Loader', description: 'Branded animated loading indicator.', rows: [
                { property: 'Size (default)', chain: [{ label: '--titan-loader-size', type: 'component' }, { label: '120px', type: 'value' }] },
                { property: 'Animation', chain: [{ label: 'titan-loader-fade-in', type: 'component' }, { label: '300ms ease-out', type: 'value' }] },
                { property: 'Asset', chain: [{ label: '/assets/logos/loader-l.gif', type: 'value' }] },
              ]},
            ]}
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
            tokenChains={[
              { name: 'Menu container', description: 'Floating dropdown panel.', rows: [
                { property: 'Background', chain: [{ label: '--menu-slot-bg', type: 'component' }, { label: '--color-white-900', type: 'primitive' }, { label: '#FFFFFF', type: 'value' }] },
                { property: 'Border', chain: [{ label: '--popover-slot-border-color', type: 'component' }, { label: '--color-black-200', type: 'primitive' }, { label: '#E5E7EB', type: 'value', swatch: '#E5E7EB' }] },
                { property: 'Shadow', chain: [{ label: '--menu-slot-shadow', type: 'component' }, { label: '--shadow-m', type: 'primitive' }, { label: '0 4px 16px rgba(0,0,0,.08)', type: 'value' }] },
                { property: 'Border radius', chain: [{ label: '--menu-slot-radius', type: 'component' }, { label: '--rounded-m', type: 'primitive' }, { label: '12px', type: 'value' }] },
              ]},
              { name: 'Menu item', description: 'Standard dropdown option.', rows: [
                { property: 'Text color', chain: [{ label: '--menu-item-slot-color', type: 'component' }, { label: '--copy-slot-body', type: 'primitive' }, { label: '#1F2937', type: 'value' }] },
                { property: 'Hover background', chain: [{ label: '--menu-item-slot-bg-hover', type: 'component' }, { label: '--color-black-100', type: 'primitive' }, { label: '#F3F4F6', type: 'value', swatch: '#F3F4F6' }] },
                { property: 'Height', chain: [{ label: '--menu-item-slot-height', type: 'component' }, { label: '40px', type: 'value' }] },
                { property: 'Icon color', chain: [{ label: '--menu-item-slot-icon', type: 'component' }, { label: '--color-steel-600', type: 'primitive' }, { label: '#6B7280', type: 'value' }] },
              ]},
              { name: 'Menu separator', description: 'Divider between item groups.', rows: [
                { property: 'Color', chain: [{ label: '--menu-divider-color', type: 'component' }, { label: '--color-black-200', type: 'primitive' }, { label: '#E5E7EB', type: 'value' }] },
                { property: 'Width', chain: [{ label: '--menu-divider-width', type: 'component' }, { label: '1px', type: 'value' }] },
              ]},
              { name: 'Menu item (destructive)', description: 'Red destructive action.', rows: [
                { property: 'Text color', chain: [{ label: '--menu-item-destructive-slot-color', type: 'component' }, { label: '--color-pomegranate-600', type: 'primitive' }, { label: '#DC2626', type: 'value', swatch: '#DC2626' }] },
                { property: 'Hover background', chain: [{ label: '--menu-item-destructive-slot-bg-hover', type: 'component' }, { label: '--color-error-100', type: 'primitive' }, { label: '#FEE2E2', type: 'value', swatch: '#FEE2E2' }] },
              ]},
            ]}
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
            tokenChains={[
              { name: 'Navbar container', description: 'Top navigation bar.', rows: [
                { property: 'Background', chain: [{ label: '--navbar-slot-bg', type: 'component' }, { label: '--color-white-900', type: 'primitive' }, { label: '#FFFFFF', type: 'value' }] },
                { property: 'Border bottom', chain: [{ label: '--navbar-slot-border', type: 'component' }, { label: '--color-black-200', type: 'primitive' }, { label: '#E5E7EB', type: 'value', swatch: '#E5E7EB' }] },
                { property: 'Height', chain: [{ label: '--navbar-slot-height', type: 'component' }, { label: '56px', type: 'value' }] },
                { property: 'Padding', chain: [{ label: '--navbar-slot-pad-x', type: 'component' }, { label: '--spacing-m', type: 'primitive' }, { label: '16px', type: 'value' }] },
              ]},
              { name: 'Navbar logo', description: 'Brand logo area.', rows: [
                { property: 'Max height', chain: [{ label: '--navbar-slot-logo-max-height', type: 'component' }, { label: '32px', type: 'value' }] },
              ]},
              { name: 'Navbar actions', description: 'Right-side icon buttons.', rows: [
                { property: 'Icon color', chain: [{ label: '--button-icon-slot-icon', type: 'component' }, { label: '--color-steel-600', type: 'primitive' }, { label: '#6B7280', type: 'value' }] },
                { property: 'Icon size', chain: [{ label: '--icon-size-m', type: 'primitive' }, { label: '20px', type: 'value' }] },
              ]},
            ]}
          >
            <div className="navbar-demo-wrap">
              <TitanNavbar theme={theme} userInitial="A" />
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
            tokenChains={[
              { name: 'Page button (default)', description: 'Unselected page number.', rows: [
                { property: 'Background', chain: [{ label: 'transparent', type: 'value' }] },
                { property: 'Text color', chain: [{ label: '--pagination-slot-color', type: 'component' }, { label: '--color-steel-600', type: 'primitive' }, { label: '#6B7280', type: 'value' }] },
                { property: 'Height', chain: [{ label: '--pagination-slot-height', type: 'component' }, { label: '36px', type: 'value' }] },
                { property: 'Border radius', chain: [{ label: '--pagination-slot-radius', type: 'component' }, { label: '--rounded-s', type: 'primitive' }, { label: '8px', type: 'value' }] },
              ]},
              { name: 'Page button (selected)', description: 'Active/current page.', rows: [
                { property: 'Background', chain: [{ label: '--pagination-slot-page-selected-bg', type: 'component' }, { label: '--color-primary', type: 'primitive' }, { label: 'theme color', type: 'value' }] },
                { property: 'Text color', chain: [{ label: '--text-on-color', type: 'primitive' }, { label: '#FFFFFF', type: 'value' }] },
              ]},
              { name: 'Page button (hover)', description: 'Hover state.', rows: [
                { property: 'Background', chain: [{ label: '--pagination-slot-page-hover-bg', type: 'component' }, { label: '--color-black-100', type: 'primitive' }, { label: '#F3F4F6', type: 'value', swatch: '#F3F4F6' }] },
              ]},
            ]}
          >
            <div className="pagination-container">
              <TitanPagination
                ariaLabel="Pagination demo"
                pages={[1, 'ellipsis', 8, 9, 10, 'ellipsis', 20]}
                currentPage={9}
              />
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
            tokenChains={[
              { name: 'Pill (default)', description: 'Dismissible tag with tone color.', rows: [
                { property: 'Background', chain: [{ label: '--pill-slot-bg', type: 'component' }, { label: '--color-{tone}-100', type: 'primitive' }, { label: 'tone-based', type: 'value' }] },
                { property: 'Text color', chain: [{ label: '--pill-slot-color', type: 'component' }, { label: '--color-{tone}-700', type: 'primitive' }, { label: 'tone-based', type: 'value' }] },
                { property: 'Border radius', chain: [{ label: '--pill-slot-radius', type: 'component' }, { label: '--rounded-full', type: 'primitive' }, { label: '9999px', type: 'value' }] },
                { property: 'Padding', chain: [{ label: '--pill-slot-pad-x', type: 'component' }, { label: '--spacing-xs', type: 'primitive' }, { label: '10px', type: 'value' }] },
              ]},
              { name: 'Pill (selected)', description: 'Active/highlighted pill state.', rows: [
                { property: 'Background', chain: [{ label: '--pill-slot-selected-bg', type: 'component' }, { label: '--color-primary', type: 'primitive' }, { label: 'theme color', type: 'value' }] },
                { property: 'Text color', chain: [{ label: '--pill-slot-selected-color', type: 'component' }, { label: '--text-on-color', type: 'primitive' }, { label: '#FFFFFF', type: 'value' }] },
              ]},
              { name: 'Pill close icon', description: 'Dismiss button inside pill.', rows: [
                { property: 'Icon color', chain: [{ label: '--pill-slot-icon-color', type: 'component' }, { label: '--color-{tone}-600', type: 'primitive' }, { label: 'tone-based', type: 'value' }] },
                { property: 'Icon size', chain: [{ label: '--icon-size-s', type: 'primitive' }, { label: '12px', type: 'value' }] },
              ]},
            ]}
          >
            <div className="pill-row">
              {pills.map((pill) => (
                <TitanPill key={pill.id} id={pill.id} label={pill.label} tone={pill.tone} onDismiss={dismissPill} />
              ))}
            </div>
            <div style={{ marginTop: 'var(--spacing-m)' }}>
              <span style={{ fontSize: 'var(--font-size-s)', color: 'var(--copy-slot-secondary)', display: 'block', marginBottom: 'var(--spacing-2xs)' }}>Pill Group (with TagGroup + TagList):</span>
              <TitanPillGroup aria-label="Categories" onRemove={(keys) => setPills((prev) => prev.filter((p) => !keys.has(p.id)))}>
                <TitanPillList>
                  {pills.map((pill) => (
                    <TitanPill key={pill.id} id={pill.id} label={pill.label} tone={pill.tone} />
                  ))}
                </TitanPillList>
              </TitanPillGroup>
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
            tokenChains={[
              { name: 'Progress track', description: 'Background bar container.', rows: [
                { property: 'Background', chain: [{ label: '--progress-slot-track-bg', type: 'component' }, { label: '--color-black-200', type: 'primitive' }, { label: '#E5E7EB', type: 'value', swatch: '#E5E7EB' }] },
                { property: 'Height', chain: [{ label: '--progress-slot-track-height', type: 'component' }, { label: '8px', type: 'value' }] },
                { property: 'Border radius', chain: [{ label: '--progress-slot-track-radius', type: 'component' }, { label: '--rounded-full', type: 'primitive' }, { label: '9999px', type: 'value' }] },
              ]},
              { name: 'Progress fill', description: 'Filled portion of the bar.', rows: [
                { property: 'Background', chain: [{ label: '--progress-slot-fill-bg', type: 'component' }, { label: '--color-primary', type: 'primitive' }, { label: 'theme color', type: 'value' }] },
              ]},
              { name: 'Progress labels', description: 'Label and percentage text.', rows: [
                { property: 'Label color', chain: [{ label: '--progress-slot-label-color', type: 'component' }, { label: '--copy-slot-body', type: 'primitive' }, { label: '#1F2937', type: 'value' }] },
                { property: 'Value color', chain: [{ label: '--progress-slot-value-color', type: 'component' }, { label: '--copy-slot-secondary', type: 'primitive' }, { label: '#6B7280', type: 'value' }] },
              ]},
            ]}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 400, width: '100%' }}>
              <TitanProgressBar label="Upload progress" value={72} />
              <TitanProgressBar label="Storage used" value={45} />
              <TitanProgressBar label="Complete" value={100} />
              <TitanProgressBar label="Starting…" value={5} />
              <TitanProgressBar value={60} showValue={false} />
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
            tokenChains={[
              { name: 'Select trigger', description: 'Dropdown button.', rows: [
                { property: 'Background', chain: [{ label: '--select-slot-button-bg', type: 'component' }, { label: '--color-white-900', type: 'primitive' }, { label: '#FFFFFF', type: 'value' }] },
                { property: 'Border', chain: [{ label: '--select-slot-button-border', type: 'component' }, { label: '--color-black-300', type: 'primitive' }, { label: '#D1D5DB', type: 'value', swatch: '#D1D5DB' }] },
                { property: 'Text color', chain: [{ label: '--select-slot-button-color', type: 'component' }, { label: '--copy-slot-body', type: 'primitive' }, { label: '#1F2937', type: 'value' }] },
                { property: 'Height', chain: [{ label: '--select-slot-button-height', type: 'component' }, { label: '40px', type: 'value' }] },
                { property: 'Border radius', chain: [{ label: '--select-slot-button-radius', type: 'component' }, { label: '--rounded-s', type: 'primitive' }, { label: '8px', type: 'value' }] },
              ]},
              { name: 'Select dropdown', description: 'Floating option list.', rows: [
                { property: 'Background', chain: [{ label: '--select-slot-popover-bg', type: 'component' }, { label: '--color-white-900', type: 'primitive' }, { label: '#FFFFFF', type: 'value' }] },
                { property: 'Shadow', chain: [{ label: '--select-slot-popover-shadow', type: 'component' }, { label: '--shadow-m', type: 'primitive' }, { label: '0 4px 16px rgba(0,0,0,.08)', type: 'value' }] },
                { property: 'Border radius', chain: [{ label: '--select-slot-popover-radius', type: 'component' }, { label: '--rounded-m', type: 'primitive' }, { label: '12px', type: 'value' }] },
              ]},
              { name: 'Select option (hover)', description: 'Highlighted list item.', rows: [
                { property: 'Background', chain: [{ label: '--menu-item-slot-bg-hover', type: 'component' }, { label: '--color-black-100', type: 'primitive' }, { label: '#F3F4F6', type: 'value', swatch: '#F3F4F6' }] },
                { property: 'Text color', chain: [{ label: '--select-slot-item-color', type: 'component' }, { label: '--copy-slot-body', type: 'primitive' }, { label: '#1F2937', type: 'value' }] },
              ]},
            ]}
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
            tokenChains={[
              { name: 'Sidebar container', description: 'Left navigation panel.', rows: [
                { property: 'Background', chain: [{ label: '--sidebar-slot-bg', type: 'component' }, { label: '--color-white-900', type: 'primitive' }, { label: '#FFFFFF', type: 'value' }] },
                { property: 'Border right', chain: [{ label: '--sidebar-slot-border', type: 'component' }, { label: '--color-black-200', type: 'primitive' }, { label: '#E5E7EB', type: 'value', swatch: '#E5E7EB' }] },
                { property: 'Width (expanded)', chain: [{ label: '--sidebar-slot-width-expanded', type: 'component' }, { label: '240px', type: 'value' }] },
                { property: 'Width (collapsed)', chain: [{ label: '--sidebar-slot-width-collapsed', type: 'component' }, { label: '64px', type: 'value' }] },
              ]},
              { name: 'Sidebar item (active)', description: 'Currently selected nav item.', rows: [
                { property: 'Background', chain: [{ label: '--sidebar-slot-item-bg-active', type: 'component' }, { label: '--color-black-100', type: 'primitive' }, { label: '#F3F4F6', type: 'value', swatch: '#F3F4F6' }] },
                { property: 'Text color', chain: [{ label: '--sidebar-slot-item-color-active', type: 'component' }, { label: '--color-steel-800', type: 'primitive' }, { label: '#1F2937', type: 'value' }] },
                { property: 'Border radius', chain: [{ label: '--sidebar-slot-item-radius', type: 'component' }, { label: '--rounded-s', type: 'primitive' }, { label: '8px', type: 'value' }] },
              ]},
              { name: 'Sidebar item (default)', description: 'Inactive nav item.', rows: [
                { property: 'Text color', chain: [{ label: '--sidebar-slot-item-color', type: 'component' }, { label: '--color-steel-600', type: 'primitive' }, { label: '#6B7280', type: 'value' }] },
                { property: 'Hover bg', chain: [{ label: '--sidebar-slot-item-bg-hover', type: 'component' }, { label: '--color-black-50', type: 'primitive' }, { label: '#F9FAFB', type: 'value' }] },
              ]},
              { name: 'Sidebar header', description: 'Section header label.', rows: [
                { property: 'Color', chain: [{ label: '--sidebar-slot-header-color', type: 'component' }, { label: '--color-steel-400', type: 'primitive' }, { label: '#9CA3AF', type: 'value' }] },
                { property: 'Font size', chain: [{ label: '--sidebar-slot-header-font-size', type: 'component' }, { label: '--font-size-s', type: 'primitive' }, { label: '12px', type: 'value' }] },
                { property: 'Font weight', chain: [{ label: '--sidebar-slot-header-font-weight', type: 'component' }, { label: '--text-weight-semibold', type: 'primitive' }, { label: '600', type: 'value' }] },
              ]},
            ]}
          >
            <SidebarDemo />
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
            tokenChains={[
              { name: 'Slider track', description: 'Horizontal track bar.', rows: [
                { property: 'Background', chain: [{ label: '--slider-slot-track-bg', type: 'component' }, { label: '--color-black-200', type: 'primitive' }, { label: '#E5E7EB', type: 'value', swatch: '#E5E7EB' }] },
                { property: 'Fill color', chain: [{ label: '--slider-slot-track-fill', type: 'component' }, { label: '--color-primary', type: 'primitive' }, { label: 'theme color', type: 'value' }] },
                { property: 'Height', chain: [{ label: '--slider-slot-track-height', type: 'component' }, { label: '4px', type: 'value' }] },
                { property: 'Border radius', chain: [{ label: '--slider-slot-track-radius', type: 'component' }, { label: '--rounded-full', type: 'primitive' }, { label: '9999px', type: 'value' }] },
              ]},
              { name: 'Slider thumb', description: 'Draggable handle.', rows: [
                { property: 'Background', chain: [{ label: '--slider-slot-thumb-bg', type: 'component' }, { label: '--color-white-900', type: 'primitive' }, { label: '#FFFFFF', type: 'value' }] },
                { property: 'Border', chain: [{ label: '--slider-slot-thumb-border', type: 'component' }, { label: '--color-primary', type: 'primitive' }, { label: 'theme color', type: 'value' }] },
                { property: 'Size', chain: [{ label: '--slider-slot-thumb-size', type: 'component' }, { label: '20px', type: 'value' }] },
                { property: 'Border radius', chain: [{ label: '--slider-slot-thumb-radius', type: 'component' }, { label: '--rounded-full', type: 'primitive' }, { label: '9999px', type: 'value' }] },
                { property: 'Shadow', chain: [{ label: '--slider-slot-thumb-shadow', type: 'component' }, { label: '0 1px 3px rgba(0,0,0,.1)', type: 'value' }] },
              ]},
            ]}
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
            tokenChains={[
              { name: 'Tab list', description: 'Container for tab triggers.', rows: [
                { property: 'Background', chain: [{ label: '--tabs-slot-bg', type: 'component' }, { label: '--color-black-100', type: 'primitive' }, { label: '#F3F4F6', type: 'value', swatch: '#F3F4F6' }] },
                { property: 'Border radius', chain: [{ label: '--tabs-slot-radius', type: 'component' }, { label: '--rounded-s', type: 'primitive' }, { label: '8px', type: 'value' }] },
                { property: 'Padding', chain: [{ label: '--tabs-slot-pad', type: 'component' }, { label: '--spacing-4xs', type: 'primitive' }, { label: '2px', type: 'value' }] },
              ]},
              { name: 'Tab trigger (selected)', description: 'Active tab button.', rows: [
                { property: 'Background', chain: [{ label: '--tab-slot-bg-selected', type: 'component' }, { label: '--color-white-900', type: 'primitive' }, { label: '#FFFFFF', type: 'value' }] },
                { property: 'Text color', chain: [{ label: '--tab-slot-color-selected', type: 'component' }, { label: '--color-steel-800', type: 'primitive' }, { label: '#1F2937', type: 'value' }] },
                { property: 'Border', chain: [{ label: '--stroke-slot-width', type: 'component' }, { label: '--border-slot-default', type: 'primitive' }, { label: '#E5E7EB', type: 'value' }] },
              ]},
              { name: 'Tab trigger (default)', description: 'Unselected tab.', rows: [
                { property: 'Text color', chain: [{ label: '--tab-slot-color', type: 'component' }, { label: '--color-steel-500', type: 'primitive' }, { label: '#9CA3AF', type: 'value' }] },
                { property: 'Border radius', chain: [{ label: '--tab-slot-radius', type: 'component' }, { label: '--rounded-xs', type: 'primitive' }, { label: '6px', type: 'value' }] },
              ]},
              { name: 'Tab panel', description: 'Content area below tabs.', rows: [
                { property: 'Background', chain: [{ label: '--card-slot-bg', type: 'component' }, { label: '--color-white-900', type: 'primitive' }, { label: '#FFFFFF', type: 'value' }] },
                { property: 'Border', chain: [{ label: '--card-slot-border-width', type: 'component' }, { label: '--card-slot-border', type: 'primitive' }, { label: '#E5E7EB', type: 'value' }] },
                { property: 'Border radius', chain: [{ label: '--card-slot-radius', type: 'component' }, { label: '--rounded-m', type: 'primitive' }, { label: '12px', type: 'value' }] },
                { property: 'Padding', chain: [{ label: '--spacing-m', type: 'primitive' }, { label: '16px', type: 'value' }] },
              ]},
            ]}
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
            tokenChains={[
              { name: 'Tag (default)', description: 'Non-interactive display label.', rows: [
                { property: 'Background', chain: [{ label: '--color-black-200', type: 'primitive' }, { label: '#E5E7EB', type: 'value', swatch: '#E5E7EB' }] },
                { property: 'Text color', chain: [{ label: '--copy-slot-primary', type: 'component' }, { label: '--color-steel-800', type: 'primitive' }, { label: '#1F2937', type: 'value' }] },
                { property: 'Border radius', chain: [{ label: '--pill-slot-radius', type: 'component' }, { label: '--rounded-full', type: 'primitive' }, { label: '9999px', type: 'value' }] },
                { property: 'Padding', chain: [{ label: '--pill-slot-pad-x', type: 'component' }, { label: '--spacing-xs', type: 'primitive' }, { label: '10px', type: 'value' }] },
              ]},
              { name: 'Tag (toned)', description: 'Color-coded variant using tone palette.', rows: [
                { property: 'Background', chain: [{ label: '--color-{tone}-200', type: 'primitive' }, { label: 'tone-based', type: 'value' }] },
                { property: 'Text color', chain: [{ label: '--color-{tone}-600', type: 'primitive' }, { label: 'tone-based', type: 'value' }] },
              ]},
            ]}
          >
            <div className="tag-row">
              {TAG_ITEMS.map((item) => (
                <TitanTag key={item.tone} label={item.label} tone={item.tone} />
              ))}
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
            tokenChains={[
              { name: 'Toast (success)', description: 'Green success notification.', rows: [
                { property: 'Background', chain: [{ label: '--toast-slot-bg', type: 'component' }, { label: '--color-white-900', type: 'primitive' }, { label: '#FFFFFF', type: 'value' }] },
                { property: 'Icon color', chain: [{ label: '--status-success-icon', type: 'component' }, { label: '--color-forest-600', type: 'primitive' }, { label: '#16A34A', type: 'value', swatch: '#16A34A' }] },
                { property: 'Border', chain: [{ label: '--toast-slot-border', type: 'component' }, { label: '--color-black-200', type: 'primitive' }, { label: '#E5E7EB', type: 'value' }] },
                { property: 'Border radius', chain: [{ label: '--toast-slot-radius', type: 'component' }, { label: '--rounded-m', type: 'primitive' }, { label: '12px', type: 'value' }] },
                { property: 'Shadow', chain: [{ label: '--toast-slot-shadow', type: 'component' }, { label: '--shadow-m', type: 'primitive' }, { label: '0 4px 16px rgba(0,0,0,.08)', type: 'value' }] },
              ]},
              { name: 'Toast (error)', description: 'Red error notification.', rows: [
                { property: 'Background', chain: [{ label: '--color-error-100', type: 'primitive' }, { label: '#FEE2E2', type: 'value', swatch: '#FEE2E2' }] },
                { property: 'Icon color', chain: [{ label: '--status-error-icon', type: 'component' }, { label: '--color-pomegranate-600', type: 'primitive' }, { label: '#DC2626', type: 'value', swatch: '#DC2626' }] },
              ]},
              { name: 'Toast (warning)', description: 'Amber warning notification.', rows: [
                { property: 'Background', chain: [{ label: '--color-mango-100', type: 'primitive' }, { label: '#FEF3C7', type: 'value', swatch: '#FEF3C7' }] },
                { property: 'Icon color', chain: [{ label: '--status-warning-icon', type: 'component' }, { label: '--color-mango-600', type: 'primitive' }, { label: '#D97706', type: 'value', swatch: '#D97706' }] },
              ]},
              { name: 'Toast (info)', description: 'Blue informational notification.', rows: [
                { property: 'Background', chain: [{ label: '--color-ocean-100', type: 'primitive' }, { label: '#DBEAFE', type: 'value', swatch: '#DBEAFE' }] },
                { property: 'Icon color', chain: [{ label: '--status-info-icon', type: 'component' }, { label: '--color-ocean-600', type: 'primitive' }, { label: '#2563EB', type: 'value', swatch: '#2563EB' }] },
              ]},
              { name: 'Toast text', description: 'Title and body typography.', rows: [
                { property: 'Title color', chain: [{ label: '--toast-slot-color', type: 'component' }, { label: '--copy-slot-body', type: 'primitive' }, { label: '#1F2937', type: 'value' }] },
                { property: 'Title weight', chain: [{ label: '--text-weight-semibold', type: 'primitive' }, { label: '600', type: 'value' }] },
                { property: 'Body font size', chain: [{ label: '--font-size-s', type: 'primitive' }, { label: '12px', type: 'value' }] },
              ]},
            ]}
          >
            <div className="row">
              <TitanButton variant="secondary" onPress={() => pushToast('success')}>Success toast</TitanButton>
              <TitanButton variant="secondary" onPress={() => pushToast('error')}>Error toast</TitanButton>
              <TitanButton variant="secondary" onPress={() => pushToast('info')}>Info toast</TitanButton>
              <TitanButton variant="secondary" onPress={() => pushToast('warning')}>Warning toast</TitanButton>
            </div>
            <TitanToastRegion toasts={toasts} onDismiss={dismissToast} />
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
            tokenChains={[
              { name: 'Tooltip', description: 'Hoverable contextual hint.', rows: [
                { property: 'Background', chain: [{ label: '--tooltip-slot-bg', type: 'component' }, { label: '--color-steel-800', type: 'primitive' }, { label: '#1F2937', type: 'value', swatch: '#1F2937' }] },
                { property: 'Text color', chain: [{ label: '--tooltip-slot-color', type: 'component' }, { label: '--color-white-900', type: 'primitive' }, { label: '#FFFFFF', type: 'value' }] },
                { property: 'Border radius', chain: [{ label: '--tooltip-slot-radius', type: 'component' }, { label: '--rounded-s', type: 'primitive' }, { label: '8px', type: 'value' }] },
                { property: 'Shadow', chain: [{ label: '--tooltip-slot-shadow', type: 'component' }, { label: '--shadow-s', type: 'primitive' }, { label: '0 2px 8px rgba(0,0,0,.08)', type: 'value' }] },
                { property: 'Padding', chain: [{ label: '--tooltip-slot-pad-y / --tooltip-slot-pad-x', type: 'component' }, { label: '6px / 10px', type: 'value' }] },
                { property: 'Font size', chain: [{ label: '--font-size-s', type: 'primitive' }, { label: '12px', type: 'value' }] },
                { property: 'Font weight', chain: [{ label: '--text-weight-medium', type: 'primitive' }, { label: '500', type: 'value' }] },
              ]},
            ]}
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

          {/* ── Two Up One Down Layout ─────────────────────── */}
          <ShowcaseCard
            id="twouponedown"
            title="Two Up One Down Layout"
            ariaImports="import { TitanTwoUpOneDownLayout } from 'titan-compositions'"
            ariaDesc="Page composition: Navbar + Breadcrumb + 2-column top row (TitanCard 8+8) + full-width bottom row (TitanCard 16). Composes TitanNavbar, TitanBreadcrumb, TitanCardGrid, TitanCard."
            ariaComponents={['TitanNavbar', 'TitanBreadcrumb', 'TitanCardGrid', 'TitanCard']}
            foundations={[
              { category: 'Layout', detail: 'Navbar at top; breadcrumb strip (page--flush-breadcrumb + page-breadcrumb-host, not a card); 16-column grid with 8+8 top, 16 bottom.' },
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

          </>
          )}

          {activeView === 'commonpatterns' && (
          <>
          {/* ── 2a. KPI Trend Card ─────────────────────────── */}
          <ShowcaseCard
            id="kpi-trend-card"
            title="KPI Trend Card"
            ariaImports="// No React Aria — TitanCardGrid + TitanCard + Titan tokens"
            ariaDesc="Dashboard metric card: title with optional info icon, large value, and colored trend. Arrow up = positive, always aquamarine (fixed, no theme). Arrow down = negative = error red. Uses Titan tokens for typography and color."
            ariaComponents={['None — pure HTML + Titan tokens']}
            foundations={[
              { category: 'Surface', detail: 'Card uses --surface-0 (--color-white-900), --card-slot-radius, --dialog-slot-pad.' },
              { category: 'Typography', detail: 'Title: --text-title, --text-weight-semibold. Value: larger --text-title. Trend: --button-slot-font-size, --text-muted for period.' },
              { category: 'Trend color', detail: 'Positive (arrow up): always --color-aquamarine-600 (fixed, no theme). Negative (arrow down): --text-error-primary.' },
            ]}
            tokenGroups={[
              { label: 'Card', tokens: ['--surface-0', '--card-slot-radius', '--dialog-slot-pad'] },
              { label: 'Text', tokens: ['--text-title', '--text-muted', '--text-weight-semibold', '--button-slot-font-size'] },
              { label: 'Trend', tokens: ['--text-error-primary', '--color-aquamarine-600'] },
            ]}
            code={`import { TitanCardGrid, TitanCard, TitanTooltip } from 'titan-compositions'
import { Info, ArrowDown, ArrowUp } from 'lucide-react'

function KPITrendCard({ title, value, trendPercent, trendLabel, variant }) {
  const isPositive = variant === 'positive'
  return (
    <article className="card layout-card span-8 kpi-trend-card">
      <div className="kpi-trend-header">
        <span className="kpi-trend-title">{title}</span>
        <TitanTooltip content="Metric definition or source.">
          <button type="button" className="kpi-trend-info" aria-label="More info"><Info /></button>
        </TitanTooltip>
      </div>
      <div className="kpi-trend-value">{value}</div>
      <div className={\`kpi-trend-row kpi-trend-\${variant}\`}>
        {isPositive ? <ArrowUp /> : <ArrowDown />}
        <span>{isPositive ? '' : '-'}{Math.abs(trendPercent)}% {trendLabel}</span>
      </div>
    </article>
  )
}

<TitanCardGrid>
  <KPITrendCard title="Followers" value="101.9K" trendPercent={0.59} trendLabel="this month" variant="negative" />
  <KPITrendCard title="Avg Likes" value="172.3K" trendPercent={1.25} trendLabel="this month" variant="positive" />
</TitanCardGrid>`}
          >
            <TitanCardGrid>
              <TitanCard span={8} className="kpi-trend-card">
                <div className="kpi-trend-header">
                  <span className="kpi-trend-title">Followers</span>
                  <TitanTooltip content="Total followers for the selected period.">
                    <button type="button" className="kpi-trend-info" aria-label="More info">
                      <Info size={16} strokeWidth={1.5} />
                    </button>
                  </TitanTooltip>
                </div>
                <div className="kpi-trend-value">101.9K</div>
                <div className="kpi-trend-row kpi-trend-negative">
                  <ArrowDown size={16} strokeWidth={2} />
                  <span>0.59% this month</span>
                </div>
              </TitanCard>
              <TitanCard span={8} className="kpi-trend-card">
                <div className="kpi-trend-header">
                  <span className="kpi-trend-title">Avg Likes</span>
                  <TitanTooltip content="Average likes per post in the period.">
                    <button type="button" className="kpi-trend-info" aria-label="More info">
                      <Info size={16} strokeWidth={1.5} />
                    </button>
                  </TitanTooltip>
                </div>
                <div className="kpi-trend-value">172.3K</div>
                <div className="kpi-trend-row kpi-trend-positive">
                  <ArrowUp size={16} strokeWidth={2} />
                  <span>1.25% this month</span>
                </div>
              </TitanCard>
            </TitanCardGrid>
          </ShowcaseCard>

          {/* ── 2a2. KPI Chart Card (metric + line chart) ────── */}
          <ShowcaseCard
            id="kpi-chart-card"
            title="KPI Chart Card"
            ariaImports="// No React Aria — TitanCardGrid + TitanCard + Titan tokens; chart slot for your chart library"
            ariaDesc="Dashboard metric card with title, optional info icon, colored trend (positive/negative), and a real line chart over time (Recharts). Chart uses Titan tokens: --button-primary for line, --divider for grid, --text-muted for axis labels."
            ariaComponents={['Recharts (LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer) + Titan tokens']}
            foundations={[
              { category: 'Surface', detail: 'Same as KPI Trend Card: --surface-0, --card-slot-radius, --dialog-slot-pad.' },
              { category: 'Typography & trend', detail: 'Title and trend row: same tokens as KPI Trend Card. Chart axis labels: --text-muted, --button-slot-font-size (small).' },
              { category: 'Chart', detail: 'Line/stroke: --button-primary or --text-secondary. Grid/axis: --divider or --color-steel-100. Chart area is a slot; replace with Recharts/Chart.js etc. if needed.' },
            ]}
            tokenGroups={[
              { label: 'Card', tokens: ['--surface-0', '--card-slot-radius', '--dialog-slot-pad'] },
              { label: 'Text & trend', tokens: ['--text-title', '--text-muted', '--text-error-primary', '--color-aquamarine-600'] },
              { label: 'Chart', tokens: ['--button-primary', '--divider'] },
            ]}
            code={`import { TitanCardGrid, TitanCard, TitanTooltip } from 'titan-compositions'
import { Info, ArrowDown, ArrowUp } from 'lucide-react'

function KPIChartCard({ title, trendPercent, trendLabel, variant, chartPoints, yLabels, xLabels }) {
  return (
    <article className="card layout-card span-8 kpi-chart-card">
      <div className="kpi-trend-header">
        <span className="kpi-trend-title">{title}</span>
        <TitanTooltip content="Metric definition."><button type="button" className="kpi-trend-info" aria-label="Info"><Info /></button></TitanTooltip>
      </div>
      <div className={\`kpi-trend-row kpi-trend-\${variant}\`}>
        {variant === 'positive' ? <ArrowUp /> : <ArrowDown />}
        <span>{variant === 'positive' ? '' : '-'}{Math.abs(trendPercent)}% {trendLabel}</span>
      </div>
      <div className="kpi-chart-area" aria-hidden="true">
        {/* Slot: render your chart library or SVG polyline here */}
      </div>
    </article>
  )
}

<TitanCardGrid>
  <KPIChartCard title="Followers" trendPercent={0.59} trendLabel="this month" variant="negative" />
  <KPIChartCard title="Following" trendPercent={1.35} trendLabel="this month" variant="positive" />
</TitanCardGrid>`}
          >
            <TitanCardGrid>
              <TitanCard span={8} className="kpi-chart-card">
                <div className="kpi-trend-header">
                  <span className="kpi-trend-title">Followers</span>
                  <TitanTooltip content="Total followers over the selected period.">
                    <button type="button" className="kpi-trend-info" aria-label="More info">
                      <Info size={16} strokeWidth={1.5} />
                    </button>
                  </TitanTooltip>
                </div>
                <div className="kpi-trend-row kpi-trend-negative">
                  <ArrowDown size={16} strokeWidth={2} />
                  <span>0.59% this month</span>
                </div>
                <KpiLineChart data={KPI_FOLLOWERS_DATA} />
              </TitanCard>
              <TitanCard span={8} className="kpi-chart-card">
                <div className="kpi-trend-header">
                  <span className="kpi-trend-title">Following</span>
                  <TitanTooltip content="Accounts you follow over the period.">
                    <button type="button" className="kpi-trend-info" aria-label="More info">
                      <Info size={16} strokeWidth={1.5} />
                    </button>
                  </TitanTooltip>
                </div>
                <div className="kpi-trend-row kpi-trend-positive">
                  <ArrowUp size={16} strokeWidth={2} />
                  <span>1.35% this month</span>
                </div>
                <KpiLineChart data={KPI_FOLLOWING_DATA} />
              </TitanCard>
            </TitanCardGrid>
          </ShowcaseCard>

          {/* ── 2a3. Distribution Bar Card (proportions list) ─ */}
          <ShowcaseCard
            id="distribution-bar-card"
            title="Distribution Bar Card"
            ariaImports="import { TitanCard, TitanTooltip, TitanProgressBar, TitanButton } from 'titan-compositions'"
            ariaDesc="Card with title + info icon, list of proportion bars (label + percentage + track), and a 'View more' link. Uses TitanProgressBar for each row; link uses --text-link."
            ariaComponents={['ProgressBar', 'Button (link)']}
            foundations={[
              { category: 'Surface', detail: 'TitanCard with --surface-0, --card-slot-radius, --dialog-slot-pad.' },
              { category: 'Progress bar', detail: '--progress-slot-track-bg (track), --progress-slot-fill-bg (teal fill), --progress-slot-label-color, --progress-slot-value-color.' },
              { category: 'Footer', detail: 'View more: TitanButton variant="tertiary", label + icon (e.g. View more <Eye />).' },
            ]}
            tokenGroups={[
              { label: 'Card', tokens: ['--surface-0', '--card-slot-radius', '--dialog-slot-pad'] },
              { label: 'Progress', tokens: ['--progress-slot-track-bg', '--progress-slot-fill-bg', '--progress-slot-track-height', '--progress-slot-label-color', '--progress-slot-value-color'] },
              { label: 'Link', tokens: ['--text-link', '--text-link-hover'] },
            ]}
            code={`import { TitanCard, TitanTooltip, TitanProgressBar, TitanButton } from 'titan-compositions'
import { Info, Eye } from 'lucide-react'

<TitanCard span={8} className="distribution-bar-card">
  <div className="kpi-trend-header">
    <span className="kpi-trend-title">Language</span>
    <TitanTooltip content="Distribution by language.">
      <button type="button" className="kpi-trend-info" aria-label="Info"><Info /></button>
    </TitanTooltip>
  </div>
  <div className="distribution-bar-list">
    <TitanProgressBar label="Spanish" value={95.2} maxValue={100} />
    <TitanProgressBar label="English" value={4.1} maxValue={100} />
    <TitanProgressBar label="Italian" value={0.2} maxValue={100} />
    <TitanProgressBar label="Portuguese" value={0.2} maxValue={100} />
  </div>
  <TitanButton variant="tertiary">View more <Eye /></TitanButton>
</TitanCard>`}
          >
            <TitanCardGrid>
              <TitanCard span={8} className="distribution-bar-card">
                <div className="kpi-trend-header">
                  <span className="kpi-trend-title">Language</span>
                  <TitanTooltip content="Distribution of content by language in the selected period.">
                    <button type="button" className="kpi-trend-info" aria-label="More info">
                      <Info size={16} strokeWidth={1.5} />
                    </button>
                  </TitanTooltip>
                </div>
                <DistributionBarListAnimated />
                <TitanButton variant="tertiary" className="distribution-bar-more">View more <Eye size={16} strokeWidth={1.5} aria-hidden="true" /></TitanButton>
              </TitanCard>
            </TitanCardGrid>
          </ShowcaseCard>

          {/* ── 2a4. Profile List Card (entity list + View more) ─ */}
          <ShowcaseCard
            id="profile-list-card"
            title="Profile List Card"
            ariaImports="import { TitanCard, TitanTooltip, TitanButton, TitanIconButton } from 'titan-compositions'"
            ariaDesc="Titan th-less table (layout-table-wrap + table-borderless): two columns. Col 1: avatar + handle + name; col 2: icon (variant A) or number/cifra (variant B). Optional header + View more link. Handles use --text-link; col 2 value uses --text-body, tabular-nums."
            ariaComponents={['Button (link)', 'Button (icon) or plain number']}
            foundations={[
              { category: 'Surface', detail: 'TitanCard; avatar circle --color-black-200 or --surface-hover; cell group gap --spacing-s.' },
              { category: 'Layout', detail: 'Titan th-less table: layout-table-wrap + table-borderless, tbody only. Col 1 = profile-list-cell-group (avatar + content); col 2 = icon or number.' },
              { category: 'Typography', detail: 'Handle: --text-link. Description: --text-muted. Col 2 number: --text-body, font-variant-numeric tabular-nums.' },
              { category: 'Icon variant', detail: 'Col 2: TitanIconButton ghost (e.g. ExternalLink). Number variant: plain span/div with value.' },
            ]}
            tokenGroups={[
              { label: 'Card', tokens: ['--surface-0', '--card-slot-radius', '--dialog-slot-pad'] },
              { label: 'Link & text', tokens: ['--text-link', '--text-link-hover', '--text-muted', '--font-size-s'] },
              { label: 'Col 2 value', tokens: ['--text-body', '--text-weight-medium'] },
              { label: 'Avatar', tokens: ['--color-black-200'] },
            ]}
            code={`import { TitanCard, TitanTooltip, TitanButton, TitanIconButton } from 'titan-compositions'
import { Info, Eye, ExternalLink, User } from 'lucide-react'

<TitanCard span={8} className="profile-list-card">
  <div className="kpi-trend-header">
    <span className="kpi-trend-title">Audience lookalikes</span>
    <TitanTooltip content="Profiles similar to your audience.">
      <button type="button" className="kpi-trend-info" aria-label="Info"><Info /></button>
    </TitanTooltip>
  </div>
  <div className="layout-table-wrap">
    <table className="table-borderless profile-list-table" aria-label="Audience lookalikes">
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>
              <div className="profile-list-cell-group">
                <div className="profile-list-avatar" aria-hidden="true">{item.initial}</div>
                <div className="profile-list-content">
                  <a href={item.href} className="profile-list-handle">{item.handle}</a>
                  <span className="profile-list-desc">{item.description}</span>
                </div>
              </div>
            </td>
            <td className="profile-list-col-action">
              <TitanIconButton variant="ghost" aria-label="Open profile"><ExternalLink /></TitanIconButton>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  <TitanButton variant="tertiary">View more <Eye /></TitanButton>
</TitanCard>`}
          >
            <TitanCardGrid>
              <TitanCard span={8} className="profile-list-card">
                <div className="kpi-trend-header">
                  <span className="kpi-trend-title">Audience lookalikes</span>
                  <TitanTooltip content="Profiles with similar audience to yours.">
                    <button type="button" className="kpi-trend-info" aria-label="More info">
                      <Info size={16} strokeWidth={1.5} />
                    </button>
                  </TitanTooltip>
                </div>
                <div className="layout-table-wrap">
                  <table className="table-borderless profile-list-table" aria-label="Audience lookalikes">
                    <tbody>
                      <tr>
                        <td>
                          <div className="profile-list-cell-group">
                            <div className="profile-list-avatar" aria-hidden="true"><User size={20} strokeWidth={1.5} /></div>
                            <div className="profile-list-content">
                              <a href="#profile" className="profile-list-handle">@clave.growth</a>
                              <span className="profile-list-desc">clave.growth</span>
                            </div>
                          </div>
                        </td>
                        <td className="profile-list-col-action">
                          <TitanIconButton variant="ghost" aria-label="Open in new tab">
                            <ExternalLink size={16} strokeWidth={1.5} />
                          </TitanIconButton>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="profile-list-cell-group">
                            <div className="profile-list-avatar" aria-hidden="true">A</div>
                            <div className="profile-list-content">
                              <a href="#profile" className="profile-list-handle">@ale_x4nder</a>
                              <span className="profile-list-desc">Eduuuu</span>
                            </div>
                          </div>
                        </td>
                        <td className="profile-list-col-action">
                          <TitanIconButton variant="ghost" aria-label="Open in new tab">
                            <ExternalLink size={16} strokeWidth={1.5} />
                          </TitanIconButton>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="profile-list-cell-group">
                            <div className="profile-list-avatar" aria-hidden="true">J</div>
                            <div className="profile-list-content">
                              <a href="#profile" className="profile-list-handle">@jmesvc</a>
                              <span className="profile-list-desc">maybe dying</span>
                            </div>
                          </div>
                        </td>
                        <td className="profile-list-col-action">
                          <TitanIconButton variant="ghost" aria-label="Open in new tab">
                            <ExternalLink size={16} strokeWidth={1.5} />
                          </TitanIconButton>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="profile-list-cell-group">
                            <div className="profile-list-avatar" aria-hidden="true">P</div>
                            <div className="profile-list-content">
                              <a href="#profile" className="profile-list-handle">@pabloojca7</a>
                              <span className="profile-list-desc">Pabloo</span>
                            </div>
                          </div>
                        </td>
                        <td className="profile-list-col-action">
                          <TitanIconButton variant="ghost" aria-label="Open in new tab">
                            <ExternalLink size={16} strokeWidth={1.5} />
                          </TitanIconButton>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <TitanButton variant="tertiary" className="distribution-bar-more">View more <Eye size={16} strokeWidth={1.5} aria-hidden="true" /></TitanButton>
              </TitanCard>
              <TitanCard span={8} className="profile-list-card">
                <div className="kpi-trend-header">
                  <span className="kpi-trend-title">Top creators</span>
                  <TitanTooltip content="By engagement in the period.">
                    <button type="button" className="kpi-trend-info" aria-label="More info">
                      <Info size={16} strokeWidth={1.5} />
                    </button>
                  </TitanTooltip>
                </div>
                <div className="layout-table-wrap">
                  <table className="table-borderless profile-list-table" aria-label="Top creators">
                    <tbody>
                      <tr>
                        <td>
                          <div className="profile-list-cell-group">
                            <div className="profile-list-avatar" aria-hidden="true">M</div>
                            <div className="profile-list-content">
                              <a href="#profile" className="profile-list-handle">@maria.creates</a>
                              <span className="profile-list-desc">Maria García</span>
                            </div>
                          </div>
                        </td>
                        <td className="profile-list-col-action"><span className="profile-list-value">1.2k</span></td>
                      </tr>
                      <tr>
                        <td>
                          <div className="profile-list-cell-group">
                            <div className="profile-list-avatar" aria-hidden="true">L</div>
                            <div className="profile-list-content">
                              <a href="#profile" className="profile-list-handle">@lucia.art</a>
                              <span className="profile-list-desc">Lucía Fernández</span>
                            </div>
                          </div>
                        </td>
                        <td className="profile-list-col-action"><span className="profile-list-value">845</span></td>
                      </tr>
                      <tr>
                        <td>
                          <div className="profile-list-cell-group">
                            <div className="profile-list-avatar" aria-hidden="true">C</div>
                            <div className="profile-list-content">
                              <a href="#profile" className="profile-list-handle">@carlos.design</a>
                              <span className="profile-list-desc">Carlos Ruiz</span>
                            </div>
                          </div>
                        </td>
                        <td className="profile-list-col-action"><span className="profile-list-value">612</span></td>
                      </tr>
                      <tr>
                        <td>
                          <div className="profile-list-cell-group">
                            <div className="profile-list-avatar" aria-hidden="true">A</div>
                            <div className="profile-list-content">
                              <a href="#profile" className="profile-list-handle">@ana.photos</a>
                              <span className="profile-list-desc">Ana López</span>
                            </div>
                          </div>
                        </td>
                        <td className="profile-list-col-action"><span className="profile-list-value">498</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <TitanButton variant="tertiary" className="distribution-bar-more">View more <Eye size={16} strokeWidth={1.5} aria-hidden="true" /></TitanButton>
              </TitanCard>
            </TitanCardGrid>
          </ShowcaseCard>

          {/* ── 2a5. Double Bar Chart Card (grouped bars + legend) ─ */}
          <ShowcaseCard
            id="double-bar-chart-card"
            title="Double Bar Chart Card"
            ariaImports="import { TitanCard, TitanTooltip } from 'titan-compositions'"
            ariaDesc="Card with title + info icon and a grouped bar chart (Recharts): each x-axis item has two bars comparing two values (e.g. Male vs Female by age). Bar colors: --color-orange-600, --color-violet-600; grid --divider; labels --text-muted."
            ariaComponents={['Recharts BarChart, Bar (x2), XAxis, YAxis, CartesianGrid, Legend + Titan tokens']}
            foundations={[
              { category: 'Surface', detail: 'TitanCard; same header as other dashboard cards.' },
              { category: 'Chart', detail: 'Two bars per category (double bar). Series 1: --color-orange-600. Series 2: --color-violet-600. Grid: --divider. Axis/labels: --text-muted.' },
            ]}
            tokenGroups={[
              { label: 'Card', tokens: ['--surface-0', '--card-slot-radius', '--dialog-slot-pad'] },
              { label: 'Bars', tokens: ['--color-orange-600', '--color-violet-600'] },
              { label: 'Axis', tokens: ['--text-muted', '--divider'] },
            ]}
            code={`import { TitanCard, TitanTooltip } from 'titan-compositions'
import { Info } from 'lucide-react'

<TitanCard span={16} className="double-bar-chart-card">
  <div className="kpi-trend-header">
    <span className="kpi-trend-title">Age and Gender Split</span>
    <TitanTooltip content="Distribution by age and gender.">
      <button type="button" className="kpi-trend-info" aria-label="Info"><Info /></button>
    </TitanTooltip>
  </div>
  <div className="double-bar-chart-area" aria-hidden="true">
    {/* Recharts BarChart: two <Bar dataKey="male" dataKey="female" />, fill Titan tokens */}
  </div>
  <div className="double-bar-chart-legend">
    <span className="double-bar-legend-item"><i className="double-bar-legend-dot male" /> Male</span>
    <span className="double-bar-legend-item"><i className="double-bar-legend-dot female" /> Female</span>
  </div>
</TitanCard>`}
          >
            <TitanCardGrid>
              <TitanCard span={16} className="double-bar-chart-card">
                <div className="kpi-trend-header">
                  <span className="kpi-trend-title">Age and Gender Split</span>
                  <TitanTooltip content="Percentage distribution by age range and gender.">
                    <button type="button" className="kpi-trend-info" aria-label="More info">
                      <Info size={16} strokeWidth={1.5} />
                    </button>
                  </TitanTooltip>
                </div>
                <DoubleBarChartTitan />
              </TitanCard>
            </TitanCardGrid>
          </ShowcaseCard>

          {/* ── 2a6. Single Bar Chart Card (one bar per category) ─ */}
          <ShowcaseCard
            id="single-bar-chart-card"
            title="Single Bar Chart Card"
            ariaImports="import { TitanCard, TitanTooltip } from 'titan-compositions'"
            ariaDesc="Card with title + info icon and a single-series bar chart (Recharts): one bar per x-axis category (e.g. Age Split). Bar fill --button-primary; grid --divider; labels --text-muted."
            ariaComponents={['Recharts BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer + Titan tokens']}
            foundations={[
              { category: 'Surface', detail: 'TitanCard; same header as other dashboard cards.' },
              { category: 'Chart', detail: 'One bar per category. Bar: --button-primary. Grid: --divider. Axis/labels: --text-muted.' },
            ]}
            tokenGroups={[
              { label: 'Card', tokens: ['--surface-0', '--card-slot-radius', '--dialog-slot-pad'] },
              { label: 'Bar', tokens: ['--button-primary'] },
              { label: 'Axis', tokens: ['--text-muted', '--divider'] },
            ]}
            code={`import { TitanCard, TitanTooltip } from 'titan-compositions'
import { Info } from 'lucide-react'

<TitanCard span={8} className="single-bar-chart-card">
  <div className="kpi-trend-header">
    <span className="kpi-trend-title">Age Split</span>
    <TitanTooltip content="Distribution by age.">
      <button type="button" className="kpi-trend-info" aria-label="Info"><Info /></button>
    </TitanTooltip>
  </div>
  <div className="single-bar-chart-area" aria-hidden="true">
    {/* Recharts BarChart: single <Bar dataKey="value" />, fill --button-primary */}
  </div>
</TitanCard>`}
          >
            <TitanCardGrid>
              <TitanCard span={8} className="single-bar-chart-card">
                <div className="kpi-trend-header">
                  <span className="kpi-trend-title">Age Split</span>
                  <TitanTooltip content="Percentage distribution by age range.">
                    <button type="button" className="kpi-trend-info" aria-label="More info">
                      <Info size={16} strokeWidth={1.5} />
                    </button>
                  </TitanTooltip>
                </div>
                <SingleBarChartTitan />
              </TitanCard>
            </TitanCardGrid>
          </ShowcaseCard>

          {/* ── 2a7. Insight Variant Cards (familia de 3 con variantes) ─ */}
          <ShowcaseCard
            id="insight-variant-cards"
            title="Insight Variant Cards"
            ariaImports="import { TitanCardGrid, TitanCard, TitanTooltip } from 'titan-compositions'"
            ariaDesc="Family of 3 cards: each has title + info icon, a label (e.g. Predominantly), primary value with optional icon + percentage in success box, contextual sentence in green, separator, and secondary variants (list with optional percentages). Uses --background-success for percentage boxes, --text-success-on-color for context."
            ariaComponents={['None — layout + Titan tokens']}
            foundations={[
              { category: 'Surface', detail: 'TitanCardGrid (3 columns); each TitanCard same as other dashboard cards.' },
              { category: 'Highlight', detail: 'Percentage boxes: --background-success, --text-success-on-color. Context sentence: --text-success-on-color or --text-secondary.' },
              { category: 'Divider', detail: '--divider for separator between primary and variants.' },
            ]}
            tokenGroups={[
              { label: 'Card', tokens: ['--surface-0', '--card-slot-radius', '--dialog-slot-pad'] },
              { label: 'Success', tokens: ['--background-success', '--text-success-on-color'] },
              { label: 'Text', tokens: ['--text-title', '--text-muted', '--divider'] },
            ]}
            code={`import { TitanCardGrid, TitanCard, TitanTooltip } from 'titan-compositions'
import { Info, User } from 'lucide-react'

<TitanCardGrid>
  <TitanCard span={8} className="insight-variant-card">
    <div className="kpi-trend-header">
      <span className="kpi-trend-title">Gender</span>
      <TitanTooltip content="…"><button type="button" className="kpi-trend-info" aria-label="Info"><Info /></button></TitanTooltip>
    </div>
    <p className="insight-variant-label">Predominantly</p>
    <div className="insight-variant-primary">
      <User size={16} /><span>male</span><span className="insight-variant-pct">71.83%</span>
    </div>
    <p className="insight-variant-context">Male is 2.5x higher than female…</p>
    <hr className="insight-variant-divider" />
    <div className="insight-variant-list">Female with <span className="insight-variant-pct">28.17%</span></div>
  </TitanCard>
  {/* Age, Top Market cards same structure */}
</TitanCardGrid>`}
          >
            <TitanCardGrid>
              <TitanCard span={8} className="insight-variant-card">
                <div className="kpi-trend-header">
                  <span className="kpi-trend-title">Gender</span>
                  <TitanTooltip content="Audience gender distribution.">
                    <button type="button" className="kpi-trend-info" aria-label="More info">
                      <Info size={16} strokeWidth={1.5} />
                    </button>
                  </TitanTooltip>
                </div>
                <p className="insight-variant-label">Predominantly</p>
                <div className="insight-variant-primary">
                  <User size={18} strokeWidth={1.5} aria-hidden="true" />
                  <span className="insight-variant-primary-text">male</span>
                  <span className="insight-variant-pct">71.83%</span>
                </div>
                <p className="insight-variant-context">Male is 2.5x higher than female based on the global gender distribution.</p>
                <hr className="insight-variant-divider" />
                <div className="insight-variant-list">
                  <span className="insight-variant-item">Female with <span className="insight-variant-pct">28.17%</span></span>
                </div>
              </TitanCard>
              <TitanCard span={8} className="insight-variant-card">
                <div className="kpi-trend-header">
                  <span className="kpi-trend-title">Age</span>
                  <TitanTooltip content="Audience age distribution.">
                    <button type="button" className="kpi-trend-info" aria-label="More info">
                      <Info size={16} strokeWidth={1.5} />
                    </button>
                  </TitanTooltip>
                </div>
                <p className="insight-variant-label">Predominantly</p>
                <div className="insight-variant-primary">
                  <span className="insight-variant-primary-text">25-34</span>
                  <span className="insight-variant-pct">40.6%</span>
                </div>
                <p className="insight-variant-context">1.3 times more than 18-24 based on the global age distribution.</p>
                <hr className="insight-variant-divider" />
                <ul className="insight-variant-list insight-variant-ranked">
                  <li>2nd. 18-24</li>
                  <li>3rd. 35-44</li>
                  <li>4th. 45-64</li>
                </ul>
              </TitanCard>
              <TitanCard span={8} className="insight-variant-card">
                <div className="kpi-trend-header">
                  <span className="kpi-trend-title">Top Market</span>
                  <TitanTooltip content="Audience concentration by market.">
                    <button type="button" className="kpi-trend-info" aria-label="More info">
                      <Info size={16} strokeWidth={1.5} />
                    </button>
                  </TitanTooltip>
                </div>
                <p className="insight-variant-label">They're concentrated in</p>
                <div className="insight-variant-primary">
                  <Globe size={18} strokeWidth={1.5} aria-hidden="true" />
                  <span className="insight-variant-primary-text">United States</span>
                  <span className="insight-variant-pct">42.5%</span>
                </div>
                <p className="insight-variant-context">4.2 times more than United Kingdom.</p>
                <hr className="insight-variant-divider" />
                <ul className="insight-variant-list">
                  <li><Globe size={14} strokeWidth={1.5} aria-hidden="true" /><span>United Kingdom</span><span className="insight-variant-pct">10.04%</span></li>
                  <li><Globe size={14} strokeWidth={1.5} aria-hidden="true" /><span>Brazil</span><span className="insight-variant-pct">8.97%</span></li>
                </ul>
              </TitanCard>
            </TitanCardGrid>
          </ShowcaseCard>

          {/* ── 2a8. Sortable Penetration List Card ───────────── */}
          <ShowcaseCard
            id="sortable-penetration-list"
            title="Sortable Penetration List"
            ariaImports="import { TitanCard, TitanProgressBar } from 'titan-compositions'"
            ariaDesc="Card with a Titan table (layout-table-wrap + table-borderless, table-sortable): thead th bold, sort on Avg. Penetration (column-sort-header + ArrowUp/ArrowDown). Internal scroll (max-height + overflow-y) on the table wrap; sticky header so thead stays visible. First row highlight --background-success."
            ariaComponents={['TitanTable', 'ProgressBar']}
            foundations={[
              { category: 'Table', detail: 'Titan table: layout-table-wrap + table-borderless, thead th bold (--table-slot-header-color), --table-header-separator, --table-row-separator, --table-row-hover.' },
              { category: 'Sort', detail: 'Titan ordering: Column allowsSorting, sortDescriptor + onSortChange, column-sort-header + column-sort-icon (ArrowUp/ArrowDown/ArrowUpDown), aria-sort.' },
              { category: 'Scroll', detail: 'Table inside card: wrapper with max-height; layout-table-wrap has overflow-y: auto. No sticky header (sticky only for async/load-more tables).' },
              { category: 'Highlight', detail: 'First row (top after sort): --background-success.' },
            ]}
            tokenGroups={[
              { label: 'Card & table', tokens: ['--surface-0', '--card-slot-radius', '--table-slot-header-color', '--table-header-separator', '--table-row-separator'] },
              { label: 'Progress', tokens: ['--progress-slot-track-bg', '--progress-slot-fill-bg'] },
              { label: 'Row highlight', tokens: ['--background-success'] },
            ]}
            code={`import { TitanCard, TitanTable, TitanTableHeader, TitanColumn, TitanTableBody, TitanRow, TitanCell, TitanProgressBar } from 'titan-compositions'

<TitanCard span={8} className="sortable-penetration-card">
  <div className="sortable-penetration-table-scroll">
    <TitanTable aria-label="Interest penetration" sortDescriptor={sortDescriptor} onSortChange={setSortDescriptor} className="table-sortable">
      <TitanTableHeader columns={columns}>
        {(col) => <TitanColumn id={col.key} isRowHeader={col.key === 'label'} allowsSorting={col.key === 'pct'}>{col.header}</TitanColumn>}
      </TitanTableHeader>
      <TitanTableBody items={sorted}>
        {(item) => (
          <TitanRow id={item.id} columns={columns} className={sorted[0]?.id === item.id ? 'sortable-penetration-row-highlight' : undefined}>
            <TitanCell>{item.label}</TitanCell>
            <TitanCell>
              <div className="sortable-penetration-cell-bar">
                <TitanProgressBar label="" value={item.pct} maxValue={100} showValue={false} />
                <span className="sortable-penetration-pct">{item.pct}%</span>
              </div>
            </TitanCell>
          </TitanRow>
        )}
      </TitanTableBody>
    </TitanTable>
  </div>
</TitanCard>`}
          >
            <TitanCardGrid>
              <TitanCard span={8} className="sortable-penetration-card">
                <SortablePenetrationListDemo />
              </TitanCard>
            </TitanCardGrid>
          </ShowcaseCard>

          {/* ── 2a9. Top Cities Table Card ────────────────────── */}
          <ShowcaseCard
            id="top-cities-table-card"
            title="Top Cities Table"
            ariaImports="import { TitanCard, TitanTooltip, DataTable, TitanProgressBar } from 'titan-compositions'"
            ariaDesc="DataTable (TitanTable primitives) with sortDescriptor and onSortChange: City, Penetration (two bars + %), Affinity sortable. Legend below table."
            ariaComponents={['TitanTable', 'ProgressBar', 'Tooltip']}
            foundations={[
              { category: 'Table', detail: 'TitanTable: sortDescriptor, onSortChange, sortable columns.' },
              { category: 'Penetration', detail: 'Two stacked TitanProgressBar; second bar lighter --progress-slot-track-bg.' },
              { category: 'Affinity', detail: 'Pill: --pill-background, --pill-color.' },
            ]}
            tokenGroups={[
              { label: 'Card', tokens: ['--surface-0', '--card-slot-radius', '--dialog-slot-pad'] },
              { label: 'Table', tokens: ['--table-slot-header-color', '--table-header-separator', '--table-row-separator', '--table-row-hover'] },
              { label: 'Progress & pill', tokens: ['--progress-slot-fill-bg', '--progress-slot-track-bg', '--pill-background', '--pill-color'] },
            ]}
            code={`import { TitanCard, TitanTooltip, TitanTable, TitanTableHeader, TitanColumn, TitanTableBody, TitanRow, TitanCell, TitanProgressBar } from 'titan-compositions'

<TitanCard span={8} className="top-cities-table-card">
  <div className="kpi-trend-header">… Top Cities …</div>
  <div className="cities-table-scroll">
    <TitanTable aria-label="Top cities" sortDescriptor={sortDescriptor} onSortChange={setSortDescriptor} className="table-sortable cities-table">
      <TitanTableHeader columns={columns}>
        {(col) => <TitanColumn id={col.key} isRowHeader={col.key === 'city'} allowsSorting={col.sortable}>{col.header}</TitanColumn>}
      </TitanTableHeader>
      <TitanTableBody items={sorted}>
        {(row) => <TitanRow id={row.id} columns={columns}>{(col) => <TitanCell>{col.render ? col.render(row) : row[col.key]}</TitanCell>}</TitanRow>}
      </TitanTableBody>
    </TitanTable>
  </div>
  <div className="cities-legend">…</div>
</TitanCard>`}
          >
            <TitanCardGrid>
              <TitanCard span={8} className="top-cities-table-card">
                <div className="kpi-trend-header">
                  <span className="kpi-trend-title">Top Cities</span>
                  <TitanTooltip content="Cities by penetration and affinity.">
                    <button type="button" className="kpi-trend-info" aria-label="More info">
                      <Info size={16} strokeWidth={1.5} />
                    </button>
                  </TitanTooltip>
                </div>
                <TopCitiesTableDemo />
              </TitanCard>
            </TitanCardGrid>
          </ShowcaseCard>

          {/* ── 2a10. Skills Table Card (search variant) ─ */}
          <ShowcaseCard
            id="skills-table-card"
            title="Skills Table"
            ariaImports="import { TitanCard, TitanInputField, DataTable, TitanProgressBar } from 'titan-compositions'"
            ariaDesc="Search above; DataTable (TitanTable) with sortDescriptor and onSortChange: Skill, Penetration (two bars + %), Affinity sortable. Legend below table."
            ariaComponents={['TitanTable', 'TextField', 'ProgressBar']}
            foundations={[
              { category: 'Search', detail: 'TitanInputField with leadingIcon Search, placeholder; --input-* tokens.' },
              { category: 'Table', detail: 'TitanTable: sortDescriptor, onSortChange, sortable columns.' },
            ]}
            tokenGroups={[
              { label: 'Card', tokens: ['--surface-0', '--card-slot-radius', '--dialog-slot-pad'] },
              { label: 'Input', tokens: ['--input-slot-height', '--input-background', '--input-border'] },
              { label: 'Table', tokens: ['--table-slot-header-color', '--table-header-separator', '--table-row-separator', '--table-row-hover'] },
              { label: 'Progress & pill', tokens: ['--progress-slot-fill-bg', '--progress-slot-track-bg', '--pill-background', '--pill-color'] },
            ]}
            code={`import { TitanCard, TitanInputField, TitanTable, TitanTableHeader, TitanColumn, TitanTableBody, TitanRow, TitanCell, TitanProgressBar } from 'titan-compositions'

<TitanCard span={8} className="top-cities-table-card">
  <div className="kpi-trend-header">… Skills …</div>
  <TitanInputField leadingIcon={<Search />} placeholder="Search for a skill" />
  <div className="cities-table-scroll">
    <TitanTable aria-label="Skills" sortDescriptor={sortDescriptor} onSortChange={setSortDescriptor} className="table-sortable cities-table">
      <TitanTableHeader columns={columns}>{(col) => <TitanColumn id={col.key} allowsSorting={col.sortable}>{col.header}</TitanColumn>}</TitanTableHeader>
      <TitanTableBody items={sorted}>{(row) => <TitanRow id={row.id} columns={columns}>{(col) => <TitanCell>{col.render ? col.render(row) : row[col.key]}</TitanCell>}</TitanRow>}</TitanTableBody>
    </TitanTable>
  </div>
  <div className="cities-legend">…</div>
</TitanCard>`}
          >
            <TitanCardGrid>
              <TitanCard span={8} className="top-cities-table-card skills-table-card">
                <div className="kpi-trend-header">
                  <span className="kpi-trend-title">Skills</span>
                  <TitanTooltip content="Filter and compare skills by penetration and affinity.">
                    <button type="button" className="kpi-trend-info" aria-label="More info">
                      <Info size={16} strokeWidth={1.5} />
                    </button>
                  </TitanTooltip>
                </div>
                <div className="skills-search-wrap">
                  <TitanInputField
                    leadingIcon={<Search size={18} strokeWidth={1.5} />}
                    placeholder="Search for a skill"
                    aria-label="Search for a skill"
                    className="skills-search-field"
                  />
                </div>
                <SkillsTableDemo />
              </TitanCard>
            </TitanCardGrid>
          </ShowcaseCard>

          {/* ── 2a11. Audience Segment Card (familia de cards) ─ */}
          <ShowcaseCard
            id="audience-segment-card"
            title="Audience Segment Card"
            ariaImports="import { TitanCard, TitanMenuDropdown, TitanTag, TitanButton } from 'titan-compositions'"
            ariaDesc="Family of segment cards: purple accent, title + icons + kebab menu (Edit, Create report, See members, Merge, Export, Integrate, Delete). Sections: cluster size (donut), bio keywords (chips + %), affinities (avatars + links), hashtags (chips), characteristics (mini table). Footer: View more details link."
            ariaComponents={['MenuDropdown', 'Tag', 'Button']}
            foundations={[
              { category: 'Accent', detail: 'Left border or tab: --button-primary or --color-violet-600.' },
              { category: 'Sections', detail: 'Grey headings --text-muted; chips --pill-background or --tag-*; donut SVG stroke.' },
              { category: 'Menu', detail: 'TitanMenuDropdown iconOnly with destructive item (Delete).' },
            ]}
            tokenGroups={[
              { label: 'Card', tokens: ['--surface-0', '--card-slot-radius', '--dialog-slot-pad'] },
              { label: 'Accent & chips', tokens: ['--color-violet-600', '--pill-background', '--pill-color'] },
              { label: 'Link', tokens: ['--text-link', '--text-link-hover'] },
            ]}
            code={`import { TitanCard, TitanMenuDropdown, TitanTag, TitanButton } from 'titan-compositions'
import { Headphones, Gamepad2, MoreVertical, Pencil, Eye, Merge, Download, Globe, Trash2, ArrowRight } from 'lucide-react'

<TitanCard span={8} className="segment-card">
  <div className="segment-header">
    <div className="segment-title-row">
      <span className="segment-accent" />
      <h3>LoL Streaming</h3>
      <Headphones size={18} /><Gamepad2 size={18} />
    </div>
    <TitanMenuDropdown iconOnly triggerIcon={<MoreVertical />} placement="bottom end"
      items={[
        { id: 'edit', label: 'Edit', icon: <Pencil /> },
        { id: 'report', label: 'Create report', icon: <FileText /> },
        { id: 'members', label: 'See cluster members', icon: <Eye /> },
        { id: 'merge', label: 'Merge this cluster', icon: <Merge /> },
        { id: 'export', label: 'Export', icon: <Download /> },
        { id: 'integrate', label: 'Integrate', icon: <Globe /> },
        { id: 'delete', label: 'Delete', icon: <Trash2 />, destructive: true },
      ]}
    />
  </div>
  <div className="segment-body">… Cluster size (donut), Bio keywords, Affinities, Hashtags, Top characteristics …</div>
  <TitanButton variant="tertiary">View more details <ArrowRight /></TitanButton>
</TitanCard>`}
          >
            <TitanCardGrid>
              {[
                {
                  title: 'LoL Streaming',
                  headerBg: 'var(--color-violet-100)',
                  donutFill: 'var(--color-violet-600)',
                  donutRest: 'var(--color-violet-200)',
                  donutFillHex: '#7f5df6',
                  donutRestHex: '#dbd2fc',
                  clusterPct: 12.83,
                  bio: [{ term: 'league', pct: '12%' }, { term: 'legends', pct: '12%' }, { term: 'league legends', pct: '11%' }],
                  affinities: [{ initial: 'L', label: 'League of Legends ES' }, { initial: 'K', label: 'KNekro' }, { initial: 'L', label: 'League of Legends' }],
                  hashtags: ['#laveladadelañov', '#valorant', '#lavelada5'],
                  chars: [{ label: 'Age', value: '25-34', pct: '54.46%' }, { label: 'Gender', value: 'Male', pct: '78.95%' }, { label: 'Countries', value: 'Spain', pct: '100%' }, { label: 'Interests', value: 'Games', pct: '53.9%' }],
                },
                {
                  title: 'Fitness Creators',
                  headerBg: 'var(--color-ocean-100)',
                  donutFill: 'var(--color-ocean-600)',
                  donutRest: 'var(--color-ocean-200)',
                  donutFillHex: '#3981f7',
                  donutRestHex: '#c5dcfd',
                  clusterPct: 8.2,
                  bio: [{ term: 'fitness', pct: '18%' }, { term: 'gym', pct: '14%' }, { term: 'workout', pct: '12%' }],
                  affinities: [{ initial: 'C', label: 'CrossFit' }, { initial: 'P', label: 'Peloton' }, { initial: 'N', label: 'Nike Training' }],
                  hashtags: ['#fitness', '#gymlife', '#workout'],
                  chars: [{ label: 'Age', value: '18-34', pct: '62%' }, { label: 'Gender', value: 'Mixed', pct: '51%' }, { label: 'Countries', value: 'USA', pct: '45%' }, { label: 'Interests', value: 'Sports', pct: '71%' }],
                },
                {
                  title: 'Travel & Food',
                  headerBg: 'var(--color-pomegranate-100)',
                  donutFill: 'var(--color-pomegranate-600)',
                  donutRest: 'var(--color-pomegranate-200)',
                  donutFillHex: '#f74f25',
                  donutRestHex: '#fec1b1',
                  clusterPct: 15.1,
                  bio: [{ term: 'travel', pct: '22%' }, { term: 'foodie', pct: '16%' }, { term: 'restaurant', pct: '11%' }],
                  affinities: [{ initial: 'M', label: 'Michelin Guide' }, { initial: 'T', label: 'TripAdvisor' }, { initial: 'A', label: 'Airbnb' }],
                  hashtags: ['#travel', '#foodie', '#wanderlust'],
                  chars: [{ label: 'Age', value: '25-44', pct: '58%' }, { label: 'Gender', value: 'Female', pct: '61%' }, { label: 'Countries', value: 'Spain', pct: '38%' }, { label: 'Interests', value: 'Food', pct: '64%' }],
                },
              ].map((data) => (
                <TitanCard
                  key={data.title}
                  span={4}
                  className="segment-card"
                >
                  <div
                    className="segment-card-inner"
                    style={{
                      '--segment-header-bg': data.headerBg,
                      '--segment-donut-fill': data.donutFill,
                      '--segment-donut-rest': data.donutRest,
                    }}
                  >
                  <div className="segment-header">
                    <div className="segment-title-row">
                      <h3 className="segment-title">{data.title}</h3>
                    </div>
                    <TitanMenuDropdown
                      iconOnly
                      triggerIcon={<MoreVertical size={20} strokeWidth={1.5} />}
                      placement="bottom end"
                      triggerLabel="Options"
                      items={[
                        { id: 'edit', label: 'Edit', icon: <Pencil size={16} /> },
                        { id: 'report', label: 'Create report', icon: <FileText size={16} /> },
                        { id: 'members', label: 'See cluster members', icon: <Eye size={16} /> },
                        { id: 'merge', label: 'Merge this cluster', icon: <Merge size={16} /> },
                        { id: 'export', label: 'Export', icon: <Download size={16} /> },
                        { id: 'integrate', label: 'Integrate', icon: <Globe size={16} /> },
                        { id: 'delete', label: 'Delete', icon: <Trash2 size={16} />, destructive: true },
                      ]}
                    />
                  </div>
                  <div className="segment-body">
                    <div className="segment-section segment-cluster-donut">
                      <h4 className="segment-section-title">Cluster size</h4>
                      <div className="segment-donut-wrap">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={[
                                { name: 'segment', value: data.clusterPct },
                                { name: 'rest', value: 100 - data.clusterPct },
                              ]}
                              cx="50%"
                              cy="50%"
                              innerRadius="78%"
                              outerRadius="100%"
                              stroke="none"
                              dataKey="value"
                            >
                              <RechartsCell fill={data.donutFillHex} />
                              <RechartsCell fill={data.donutRestHex} />
                            </Pie>
                          </PieChart>
                        </ResponsiveContainer>
                        <span className="segment-donut-value">{data.clusterPct}%</span>
                      </div>
                    </div>
                    <div className="segment-section">
                      <h4 className="segment-section-title">Distinctive bio keywords</h4>
                      <div className="segment-chips">
                        {data.bio.map((b) => (
                          <span key={b.term} className="segment-chip">{b.term} <span className="segment-chip-pct">{b.pct}</span></span>
                        ))}
                      </div>
                    </div>
                    <div className="segment-section">
                      <h4 className="segment-section-title">Distinctive affinities</h4>
                      <div className="segment-affinities">
                        {data.affinities.map((a, i) => (
                          <div key={i} className="segment-affinity-item">
                            <div className="segment-avatar">{a.initial}</div>
                            <a href="#affinity" className="segment-affinity-label" title={a.label}>{a.label}</a>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="segment-section">
                      <h4 className="segment-section-title">Top hashtags</h4>
                      <div className="segment-chips segment-hashtags">
                        {data.hashtags.map((tag) => (
                          <span key={tag} className="segment-chip">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="segment-section">
                      <h4 className="segment-section-title">Top characteristics</h4>
                      <table className="segment-char-table">
                        <tbody>
                          {data.chars.map((r) => (
                            <tr key={r.label}><td>{r.label}</td><td>{r.value}</td><td>{r.pct}</td></tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <TitanButton variant="tertiary" className="segment-footer-link">View more details <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" /></TitanButton>
                  </div>
                </TitanCard>
              ))}
            </TitanCardGrid>
          </ShowcaseCard>

          {/* ── 2a12. Comparison Bar Cards (Bio / Age vs baseline) ─ */}
          <ShowcaseCard
            id="comparison-bar-cards"
            title="Comparison Bar Cards"
            ariaImports="import { TitanCardGrid, TitanCard, DataTable, TitanProgressBar, TitanButton } from 'titan-compositions'"
            ariaDesc="Family of two cards: title (bold), description, Read more link, DataTable (TitanTable) with sortDescriptor, onSortChange and dual bars per row, legend, tertiary footer button (label + icon)."
            ariaComponents={['TitanTable', 'ProgressBar', 'Button']}
            foundations={[
              { category: 'Layout', detail: 'Title bold --text-muted; description --text-body; Read more --text-link. Table: Titan 100% (layout-table-wrap + table-borderless, sortable).' },
              { category: 'Legend', detail: 'Dot + label; optional Gamepad2. Footer: TitanButton variant="tertiary", label + icon.' },
            ]}
            tokenGroups={[
              { label: 'Card', tokens: ['--surface-0', '--card-slot-radius', '--dialog-slot-pad'] },
              { label: 'Table', tokens: ['--table-slot-header-color', '--table-header-separator', '--table-row-separator', '--table-row-hover'] },
              { label: 'Bars', tokens: ['--color-violet-600', '--color-violet-200'] },
              { label: 'Links', tokens: ['--text-link', '--text-muted'] },
            ]}
            code={`import { TitanCardGrid, TitanCard, TitanTable, TitanTableHeader, TitanColumn, TitanTableBody, TitanRow, TitanCell, TitanProgressBar, TitanButton } from 'titan-compositions'

<TitanCard span={8} className="comparison-card top-cities-table-card">
  <div className="kpi-trend-header">
    <span className="kpi-trend-title">Bio</span>
    <TitanTooltip content="…"><button type="button" className="kpi-trend-info" aria-label="More info"><Info /></button></TitanTooltip>
  </div>
  <p className="comparison-desc">…</p>
  <a href="#" className="comparison-read-more">Read more</a>
  <div className="comparison-table-scroll">
    <TitanTable aria-label="Bio terms" sortDescriptor={sortDescriptor} onSortChange={setSortDescriptor} className="table-sortable cities-table">
      <TitanTableHeader columns={columns}>{(col) => <TitanColumn id={col.key} isRowHeader={col.key === 'term'} allowsSorting={col.sortable}>{col.header}</TitanColumn>}</TitanTableHeader>
      <TitanTableBody items={sorted}>{(row) => <TitanRow id={row.id} columns={columns}>{(col) => <TitanCell>{col.render ? col.render(row) : row[col.key]}</TitanCell>}</TitanRow>}</TitanTableBody>
    </TitanTable>
  </div>
  <div className="comparison-legend">…</div>
  <div className="comparison-card-footer">
    <TitanButton variant="tertiary">Show full table <ArrowRight /></TitanButton>
  </div>
</TitanCard>`}
          >
            <TitanCardGrid>
              <ComparisonBioCard />
              <ComparisonAgeCard />
            </TitanCardGrid>
          </ShowcaseCard>

          {/* ── 2a13. Multimedia Grid Cards ──────────────────── */}
          <ShowcaseCard
            id="multimedia-grid-cards"
            title="Multimedia Grid Cards"
            ariaImports="import { TitanCardGrid, TitanCard } from 'titan-compositions'"
            ariaDesc="Grid of media tiles: 3:2 aspect ratio, full-cover background image, dark gradient (opacity 0.9→0) under title, circular purple badge with percentage. Use for content libraries, recommendations, watch progress."
            ariaComponents={['None — layout + tokens']}
            foundations={[
              { category: 'Grid', detail: 'TitanCardGrid; tile aspect-ratio 3:2; gap --layout-grid-gap.' },
              { category: 'Tile', detail: 'Card bg: image cover; overlay gradient (steel-900 opacity 0.9→0); title --text-on-color; badge --color-violet-600 with opacity.' },
            ]}
            tokenGroups={[
              { label: 'Card', tokens: ['--surface-0', '--card-slot-radius'] },
              { label: 'Badge', tokens: ['--color-violet-600', '--text-on-color'] },
            ]}
            code={`import { TitanCardGrid, TitanCard } from 'titan-compositions'

<div className="multimedia-grid">
  {items.map((item) => (
    <TitanCard key={item.id} span={4} className="multimedia-tile" style={{ backgroundImage: \`url(\${item.imageUrl})\` }}>
      <div className="multimedia-tile-gradient" aria-hidden="true" />
      <span className="multimedia-tile-badge">{item.pct}%</span>
      <h3 className="multimedia-tile-title">{item.title}</h3>
    </TitanCard>
  ))}
</div>`}
          >
            <TitanCardGrid className="multimedia-grid-wrap">
              {[
                { id: '1', title: 'La Resistencia por M+', pct: '8.9', imageUrl: 'https://images.pexels.com/photos/261585/pexels-photo-261585.jpeg?auto=compress&cs=tinysrgb&w=600' },
                { id: '2', title: 'Pokémon', pct: '5.1', imageUrl: 'https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&w=600' },
                { id: '3', title: 'Andreu Buenafuente', pct: '6', imageUrl: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=600' },
                { id: '4', title: 'ESPN Esports', pct: '2', imageUrl: 'https://images.pexels.com/photos/3672623/pexels-photo-3672623.jpeg?auto=compress&cs=tinysrgb&w=600' },
                { id: '5', title: 'euphoria', pct: '0.2', imageUrl: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=600' },
                { id: '6', title: 'Gas Monkey Garage', pct: '0.2', imageUrl: 'https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=600' },
                { id: '7', title: 'Mr. Robot', pct: '0.3', imageUrl: 'https://images.pexels.com/photos/1667843/pexels-photo-1667843.jpeg?auto=compress&cs=tinysrgb&w=600' },
                { id: '8', title: 'Rick and Morty', pct: '1.7', imageUrl: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600' },
                { id: '9', title: 'The Grand Tour', pct: '0.5', imageUrl: 'https://images.pexels.com/photos/257092/pexels-photo-257092.jpeg?auto=compress&cs=tinysrgb&w=600' },
                { id: '10', title: 'TEEN WOLF MOVIE', pct: '0.3', imageUrl: 'https://images.pexels.com/photos/3757139/pexels-photo-3757139.jpeg?auto=compress&cs=tinysrgb&w=600' },
                { id: '11', title: 'The Office on Peacock', pct: '0.3', imageUrl: 'https://images.pexels.com/photos/414660/pexels-photo-414660.jpeg?auto=compress&cs=tinysrgb&w=600' },
                { id: '12', title: 'Sons of Anarchy', pct: '0.2', imageUrl: 'https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg?auto=compress&cs=tinysrgb&w=600' },
              ].map((item) => (
                <TitanCard key={item.id} span={4} className="multimedia-tile" style={{ backgroundImage: `url(${item.imageUrl})` }}>
                  <div className="multimedia-tile-gradient" aria-hidden="true" />
                  <span className="multimedia-tile-badge">{item.pct}%</span>
                  <h3 className="multimedia-tile-title">{item.title}</h3>
                </TitanCard>
              ))}
            </TitanCardGrid>
          </ShowcaseCard>

          {/* ── 2b. Table (Advanced) — React Aria ────────────── */}
          <ShowcaseCard
            id="table"
            title="Table (Advanced)"
            ariaImports="import { TitanTable, TitanTableHeader, TitanColumn, TitanTableBody, TitanRow, TitanCell, TitanTableExampleBasic } from 'titan-compositions'"
            ariaDesc="TitanTable primitives follow React Aria Table API. Nine examples: Basic, Dynamic content, Async load more, Links, Empty state, Selection + onRowAction, Sortable, Resizable columns, Drag and drop."
            ariaComponents={['TitanTable', 'TitanTableHeader', 'TitanColumn', 'TitanRow', 'TitanTableBody', 'TitanCell']}
            foundations={[
              { category: 'Table', detail: 'Tokens: --table-slot-cell-pad-y/x, --table-header-separator, --table-row-separator, --table-row-hover.' },
              { category: 'Features', detail: 'Selection, sortDescriptor/onSortChange, renderEmptyState, ResizableTableContainer, TableLoadMoreItem, useDragAndDrop.' },
            ]}
            tokenGroups={[
              { label: 'Table', tokens: ['--table-cell-background', '--table-row-hover', '--table-header-separator', '--table-row-separator', '--table-slot-header-color', '--table-slot-cell-color'] },
            ]}
            code={`import { TitanTableExampleBasic } from 'titan-compositions'

<TitanTableExampleBasic />`}
          >
            <TitanCardGrid>
            <TitanCard span={16}>
              <h3>1. Basic</h3>
              <TitanTableExampleBasic />
            </TitanCard>
            <TitanCard span={16}>
              <h3>2. Dynamic content (show/hide columns, add row)</h3>
              <TitanTableExampleDynamic />
            </TitanCard>
            {false && <TitanCard span={16}>
              <h3>3. Async / Load more</h3>
              <TitanTableExampleAsync />
            </TitanCard>}
            <TitanCard span={16}>
              <h3>4. Links (Row href)</h3>
              <TitanTableExampleLinks />
            </TitanCard>
            <TitanCard span={16}>
              <h3>4b. Clickable name cell</h3>
              <TitanTableExampleClickableNameCell />
            </TitanCard>
            <TitanCard span={16}>
              <h3>4c. Cell types (date+icon, initials, status, actions)</h3>
              <TitanTableExampleCellTypes />
            </TitanCard>
            <TitanCard span={16}>
              <h3>5. Empty state</h3>
              <TitanTableExampleEmpty />
            </TitanCard>
            <TitanCard span={16}>
              <h3>6. Selection + onRowAction</h3>
              <TitanTableExampleSelection />
            </TitanCard>
            <TitanCard span={16}>
              <h3>7. Sortable</h3>
              <TitanTableExampleSortable />
            </TitanCard>
            <TitanCard span={16}>
              <h3>7b. Header variants</h3>
              <p className="text-secondary" style={{ marginBottom: 'var(--spacing-s)' }}>
                [sort] label · label [info] · [sort] label [info] · label
              </p>
              <TitanTableExampleHeaderVariants />
            </TitanCard>
            <TitanCard span={16}>
              <h3>8. Resizable columns</h3>
              <TitanTableExampleResizable />
            </TitanCard>
            <TitanCard span={16}>
              <h3>9. Drag and drop</h3>
              <TitanTableExampleDragDrop />
            </TitanCard>
            </TitanCardGrid>
          </ShowcaseCard>
          </>
          )}

        </main>
      </div>
      )}
    </>
  )
}

export default App
