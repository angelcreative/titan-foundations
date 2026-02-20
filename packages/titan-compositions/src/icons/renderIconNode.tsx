import { createElement, isValidElement, type ReactNode, type ComponentType } from 'react'
import { resolveIcon } from './resolveIcon'

export interface RenderIconProps {
  className?: string
}

/** Component-like: function or object with $$typeof (e.g. forwardRef, memo). */
function isComponentType(value: unknown): value is ComponentType<RenderIconProps> {
  return typeof value === 'function' || (typeof value === 'object' && value !== null && '$$typeof' in value)
}

/**
 * Render icon from either a string name (resolved via Lucide then fallback)
 * or a component / ReactNode. Used internally by components that accept icon prop.
 * Does not change behavior when icon is already a component or node.
 */
export function renderIconNode(
  icon: ReactNode | ComponentType<RenderIconProps> | string | undefined,
  props?: RenderIconProps
): ReactNode {
  if (icon == null) return null
  if (typeof icon === 'string') {
    const Resolved = resolveIcon(icon)
    if (Resolved) return createElement(Resolved, props ?? {})
    return null
  }
  if (isValidElement(icon)) return icon
  if (isComponentType(icon)) return createElement(icon, props ?? {})
  return icon
}
