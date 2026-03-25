import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
  type ComponentType,
} from 'react'
import { Button } from 'react-aria-components'
import { TitanInputField } from './TitanInput'
import { renderIconNode } from './icons/renderIconNode'

/* ------------------------------------------------------------------ */
/*  Context                                                            */
/* ------------------------------------------------------------------ */

interface SidebarCtx {
  collapsed: boolean
  activeId: string | null
  setActiveId: (id: string) => void
}

const SidebarContext = createContext<SidebarCtx>({
  collapsed: false,
  activeId: null,
  setActiveId: () => {},
})

/* ------------------------------------------------------------------ */
/*  TitanSidebar                                                       */
/* ------------------------------------------------------------------ */

export interface TitanSidebarProps {
  collapsed?: boolean
  onToggle?: () => void
  activeId?: string
  defaultActiveId?: string
  onActiveChange?: (id: string) => void
  collapsedWidth?: string
  expandedWidth?: string
  children: ReactNode
}

export function TitanSidebar({
  collapsed = false,
  onToggle,
  activeId: controlledActiveId,
  defaultActiveId,
  onActiveChange,
  children,
}: TitanSidebarProps) {
  const [uncontrolledActiveId, setUncontrolledActiveId] = useState(
    defaultActiveId ?? null,
  )

  const isControlled = controlledActiveId !== undefined
  const activeId = isControlled ? controlledActiveId : uncontrolledActiveId

  const setActiveId = useCallback(
    (id: string) => {
      if (!isControlled) setUncontrolledActiveId(id)
      onActiveChange?.(id)
    },
    [isControlled, onActiveChange],
  )

  return (
    <SidebarContext.Provider value={{ collapsed, activeId, setActiveId }}>
      <aside
        className="titan-sidebar"
        {...(collapsed ? { 'data-collapsed': '' } : {})}
      >
        <div className="titan-sidebar-body">{children}</div>
        {onToggle && (
          <Button
            className="titan-sidebar-toggle"
            onPress={onToggle}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? renderIconNode('panel-left-open') : renderIconNode('panel-left-close')}
          </Button>
        )}
      </aside>
    </SidebarContext.Provider>
  )
}

/* ------------------------------------------------------------------ */
/*  TitanSidebarHeader                                                 */
/* ------------------------------------------------------------------ */

export interface TitanSidebarHeaderProps {
  children: ReactNode
}

/** Optional section label (e.g. “Navigation”). Omit for a nav with no heading. */
export function TitanSidebarHeader({ children }: TitanSidebarHeaderProps) {
  return <div className="titan-sidebar-header">{children}</div>
}

/* ------------------------------------------------------------------ */
/*  TitanSidebarItem                                                   */
/* ------------------------------------------------------------------ */

export interface TitanSidebarItemProps {
  id: string
  /** Icon: component or string name (resolved via Titan-first icon pipeline). */
  icon?: ComponentType<{ className?: string }> | string
  /** Optional: submenu / hierarchy (e.g. future indent). Styling matches other items. */
  nested?: boolean
  onPress?: () => void
  children: ReactNode
}

export function TitanSidebarItem({
  id,
  icon,
  nested = false,
  onPress,
  children,
}: TitanSidebarItemProps) {
  const { collapsed, activeId, setActiveId } = useContext(SidebarContext)
  const isActive = activeId === id

  return (
    <Button
      className="titan-sidebar-item"
      data-nested={nested ? 'true' : undefined}
      data-active={isActive ? 'true' : undefined}
      aria-current={isActive ? 'page' : undefined}
      aria-label={collapsed && typeof children === 'string' ? children : undefined}
      onPress={() => {
        setActiveId(id)
        onPress?.()
      }}
    >
      {icon ? renderIconNode(icon) : null}
      <span className="titan-sidebar-item-label">{children}</span>
    </Button>
  )
}

/* ------------------------------------------------------------------ */
/*  TitanSidebarSection — group (optional title + block of items)      */
/* ------------------------------------------------------------------ */

export interface TitanSidebarSectionProps {
  children: ReactNode
}

/** Wraps a titled block or a cluster of items; use with `TitanSidebarHeader` + items. */
export function TitanSidebarSection({ children }: TitanSidebarSectionProps) {
  return <div className="titan-sidebar-section">{children}</div>
}

/* ------------------------------------------------------------------ */
/*  TitanSidebarSearch — top search (hidden when sidebar collapsed)    */
/* ------------------------------------------------------------------ */

export interface TitanSidebarSearchProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  'aria-label'?: string
}

export function TitanSidebarSearch({
  placeholder = 'Search…',
  value,
  onChange,
  'aria-label': ariaLabel = 'Search',
}: TitanSidebarSearchProps) {
  const { collapsed } = useContext(SidebarContext)
  if (collapsed) return null

  return (
    <div className="titan-sidebar-search">
      <TitanInputField
        aria-label={ariaLabel}
        placeholder={placeholder}
        {...(value !== undefined ? { value } : {})}
        leadingIcon={renderIconNode('search')}
        onChange={onChange}
        className="titan-sidebar-search-field field-root"
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  TitanSidebarTree — file-tree / nested nav container                */
/* ------------------------------------------------------------------ */

export interface TitanSidebarTreeProps {
  children: ReactNode
}

export function TitanSidebarTree({ children }: TitanSidebarTreeProps) {
  return <div className="titan-sidebar-tree">{children}</div>
}

/* ------------------------------------------------------------------ */
/*  TitanSidebarTreeItem — nav row with depth indent                   */
/* ------------------------------------------------------------------ */

export interface TitanSidebarTreeItemProps {
  id: string
  icon?: ComponentType<{ className?: string }> | string
  /** Nesting level (0 = align with top-level items). */
  depth?: number
  onPress?: () => void
  children: ReactNode
}

export function TitanSidebarTreeItem({
  id,
  icon,
  onPress,
  children,
}: TitanSidebarTreeItemProps) {
  const { collapsed, activeId, setActiveId } = useContext(SidebarContext)
  const isActive = activeId === id

  return (
    <Button
      className="titan-sidebar-item titan-sidebar-tree-item"
      data-active={isActive ? 'true' : undefined}
      aria-current={isActive ? 'page' : undefined}
      aria-label={collapsed && typeof children === 'string' ? children : undefined}
      onPress={() => {
        setActiveId(id)
        onPress?.()
      }}
    >
      {icon ? renderIconNode(icon) : renderIconNode('file-text')}
      <span className="titan-sidebar-item-label">{children}</span>
    </Button>
  )
}

/* ------------------------------------------------------------------ */
/*  TitanSidebarFolder — expandable folder (chevron + folder icon)     */
/* ------------------------------------------------------------------ */

export interface TitanSidebarFolderProps {
  id: string
  label: ReactNode
  defaultExpanded?: boolean
  expanded?: boolean
  onExpandedChange?: (open: boolean) => void
  /** Nesting level for row indent (0 = root). */
  depth?: number
  children?: ReactNode
}

export function TitanSidebarFolder({
  id,
  label,
  defaultExpanded = false,
  expanded: controlledExpanded,
  onExpandedChange,
  children,
}: TitanSidebarFolderProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultExpanded)
  const isControlled = controlledExpanded !== undefined
  const open = isControlled ? controlledExpanded : uncontrolledOpen
  const setOpen = (next: boolean) => {
    if (!isControlled) setUncontrolledOpen(next)
    onExpandedChange?.(next)
  }

  return (
    <div
      className="titan-sidebar-folder"
      data-folder-id={id}
      {...(open ? { 'data-open': 'true' } : {})}
    >
      <Button
        className="titan-sidebar-folder-row"
        aria-expanded={open}
        aria-controls={`${id}-folder-children`}
        onPress={() => setOpen(!open)}
      >
        <span className="titan-sidebar-folder-toggle" aria-hidden>
          <span className="titan-sidebar-folder-chevron" aria-hidden>
            {renderIconNode('chevron-right')}
          </span>
        </span>
        <span className="titan-sidebar-folder-icon" aria-hidden>
          {renderIconNode(open ? 'folder-open' : 'folder')}
        </span>
        <span className="titan-sidebar-folder-label">{label}</span>
      </Button>
      {children ? (
        <div
          id={`${id}-folder-children`}
          className="titan-sidebar-folder-content"
          role="group"
          aria-hidden={!open}
          aria-label={typeof label === 'string' ? label : 'Folder contents'}
          {...(open ? { 'data-open': 'true' } : {})}
        >
          <div className="titan-sidebar-folder-children">{children}</div>
        </div>
      ) : null}
    </div>
  )
}
