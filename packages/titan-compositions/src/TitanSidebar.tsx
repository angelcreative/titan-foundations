import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
  type ComponentType,
} from 'react'
import { Button } from 'react-aria-components'
import { ChevronLeft, ChevronRight } from 'lucide-react'
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
        {onToggle && (
          <Button
            className="titan-sidebar-toggle"
            onPress={onToggle}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? <ChevronRight /> : <ChevronLeft />}
          </Button>
        )}
        {children}
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

export function TitanSidebarHeader({ children }: TitanSidebarHeaderProps) {
  return <div className="titan-sidebar-header">{children}</div>
}

/* ------------------------------------------------------------------ */
/*  TitanSidebarItem                                                   */
/* ------------------------------------------------------------------ */

export interface TitanSidebarItemProps {
  id: string
  /** Icon: component (e.g. from lucide-react) or string name (resolved Lucide first, then fallback if registered). */
  icon?: ComponentType<{ className?: string }> | string
  onPress?: () => void
  children: ReactNode
}

export function TitanSidebarItem({
  id,
  icon,
  onPress,
  children,
}: TitanSidebarItemProps) {
  const { collapsed, activeId, setActiveId } = useContext(SidebarContext)
  const isActive = activeId === id

  return (
    <Button
      className="titan-sidebar-item"
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
