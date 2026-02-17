import { useEffect, useMemo, useRef, useState } from 'react'
import {
  AlertCircle,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Bell,
  Handshake,
  Info,
  Search,
  Tag,
  Plus,
  Settings,
  Star,
  Trash2,
  User,
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
  TitanSwitchField,
  TitanTabs,
  TitanTag,
  TitanTextareaField,
  TitanToastRegion,
  TitanTooltip,
} from 'titan-compositions'

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

function App() {
  const [theme, setTheme] = useState('insights')
  const [pills, setPills] = useState(INITIAL_PILL_ITEMS)
  const [toasts, setToasts] = useState([])
  const toastIdRef = useRef(0)
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
    const variantToCopy = {
      success: {
        title: 'Saved successfully',
        body: 'Your dashboard filters were updated.',
        icon: <CheckCircle2 />,
      },
      error: {
        title: 'Could not save',
        body: 'Check required fields and try again.',
        icon: <AlertCircle />,
      },
      info: {
        title: 'Heads up',
        body: 'Sync is running in the background.',
        icon: <Info />,
      },
      warning: {
        title: 'Review needed',
        body: 'Some fields need your attention.',
        icon: <AlertTriangle />,
      },
    }
    const payload = variantToCopy[variant]
    setToasts((prev) => [...prev, {id, variant, ...payload}])
  }

  function dismissToast(id) {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  function dismissPill(id) {
    setPills((prev) => prev.filter((pill) => pill.id !== id))
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <>
      <TitanNavbar theme={theme} userInitial="A" />

      <main className="page">
        <section className="card">
        <h1>Titan Compositions import check</h1>
        <label htmlFor="theme-select">Theme</label>
        <select
          id="theme-select"
          className="theme-select"
          value={theme}
          onChange={(event) => setTheme(event.target.value)}
        >
          {THEMES.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
        </section>

        <section className="card">
          <h2>Breadcrumb + 2/4 2/4 + 4/4 layout</h2>
          <TitanBreadcrumb
            items={[
              { id: 'home', label: 'Home' },
              { id: 'creator', label: 'Creator discovery' },
            ]}
            currentLabel="Campaigns"
          />
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
        </section>

        <section className="card">
        <h2>Buttons + Icon buttons</h2>
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
        </section>

        <section className="card">
          <h2>Pills</h2>
          <div className="pill-row">
            {pills.map((pill) => (
              <TitanPill key={pill.id} id={pill.id} label={pill.label} tone={pill.tone} onDismiss={dismissPill} />
            ))}
          </div>
        </section>

        <section className="card">
          <h2>Tags / Labels</h2>
          <div className="tag-row">
            {TAG_ITEMS.map((item) => (
              <TitanTag key={item.tone} label={item.label} tone={item.tone} />
            ))}
          </div>
        </section>

        <section className="card">
          <h2>Menus</h2>
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
              triggerLabel="Open icon menu"
              triggerIcon={<Plus />}
              iconOnly
              placement="bottom end"
              items={[
                { id: 'report', label: 'Create report' },
                { id: 'segment', label: 'Create segment' },
                { id: 'alert', label: 'Create alert' },
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
        </section>

        <section className="card">
          <h2>Select</h2>
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
          </div>
        </section>

        <section className="card">
          <h2>Tabs</h2>
          <TitanTabs
            defaultSelectedKey="overview"
            items={[
              { id: 'overview', label: 'Overview', content: 'Overview panel content' },
              { id: 'audience', label: 'Audience', content: 'Audience panel content' },
              { id: 'reports', label: 'Reports', content: 'Reports panel content' },
              { id: 'disabled', label: 'Disabled', content: 'Disabled panel content', disabled: true },
            ]}
          />
        </section>

        <section className="card">
          <h2>Pagination</h2>
          <div className="pagination-container">
            <TitanPagination
              ariaLabel="Pagination with ellipsis"
              pages={[1, 'ellipsis', 8, 9, 10, 'ellipsis', 20]}
              currentPage={9}
            />
          </div>
        </section>

        <section className="card">
          <h2>Drawer</h2>
          <TitanDrawer triggerLabel="Open drawer" title="Filter audience">
            <p>Use this panel to refine audience segments by geography, age, and interests.</p>
            <p>Content is scrollable when needed and keeps header structure fixed.</p>
          </TitanDrawer>
        </section>

        <section className="card">
          <h2>Dialog</h2>
          <TitanDialog
            triggerLabel="Open dialog"
            title="Delete report?"
            body="This action cannot be undone. The report will be permanently removed."
            leftAction={<TitanButton variant="secondary">Cancel</TitanButton>}
            rightAction={<TitanButton variant="delete">Delete</TitanButton>}
          />
        </section>

        <section className="card">
          <h2>Tooltips</h2>
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
          </div>
        </section>

        <section className="card">
          <h2>Toasts</h2>
          <div className="row">
            <TitanButton variant="secondary" onPress={() => pushToast('success')}>Show success toast</TitanButton>
            <TitanButton variant="secondary" onPress={() => pushToast('error')}>Show error toast</TitanButton>
            <TitanButton variant="secondary" onPress={() => pushToast('info')}>Show info toast</TitanButton>
            <TitanButton variant="secondary" onPress={() => pushToast('warning')}>Show warning toast</TitanButton>
          </div>
          <TitanToastRegion toasts={toasts} onDismiss={dismissToast} />
        </section>

        <section className="card">
          <h2>Checkboxes, radios and switch (theme colors)</h2>
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
        </section>

        <section className="card">
          <h2>Inputs + Textarea</h2>
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
            <TitanInputField
              placeholder="Search creators..."
              leadingIcon={<Search />}
            />
            <TitanInputField
              label="Email"
              placeholder="name@company.com"
              leadingIcon={<AlertCircle />}
              errorMessage="Enter a valid business email."
              isInvalid
            />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
