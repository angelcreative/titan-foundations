import { useState, type ReactNode } from 'react'
import { renderIconNode } from './icons'

export interface TitanCollapsibleProps {
  children: ReactNode
  title?: ReactNode
  isCollapsed?: boolean
  onChange?: (isCollapsed: boolean) => void
  'aria-label'?: string
}

export function TitanCollapsible({
  children,
  title,
  isCollapsed: controlledCollapsed,
  onChange,
  'aria-label': ariaLabel,
}: TitanCollapsibleProps) {
  const [internalCollapsed, setInternalCollapsed] = useState(controlledCollapsed ?? false)
  const isControlled = controlledCollapsed !== undefined
  const collapsed = isControlled ? controlledCollapsed : internalCollapsed

  function handleToggle() {
    const next = !collapsed
    if (!isControlled) setInternalCollapsed(next)
    onChange?.(next)
  }

  return (
    <div className="titan-collapsible">
      <button
        type="button"
        className="titan-collapsible-header"
        aria-label={ariaLabel}
        aria-expanded={!collapsed}
        onClick={handleToggle}
      >
        {title != null && <span className="titan-collapsible-title">{title}</span>}
        <span className="titan-collapsible-chevron" aria-hidden="true">
          {collapsed ? renderIconNode('chevron-down') : renderIconNode('chevron-up')}
        </span>
      </button>
      {!collapsed && <div className="titan-collapsible-content">{children}</div>}
    </div>
  )
}
