import type { ComponentType } from 'react'
import { normalizeIconName, resolveIconAlias } from './normalizeIconName'
import { LUCIDE_REGISTRY } from './lucideRegistry'
import type { IconComponent } from './lucideRegistry'

/** Fallback registry (e.g. Tabler): name -> component. Checked after Lucide. */
const fallbackRegistry: Record<string, ComponentType<{ className?: string }>> = {}

/**
 * Register fallback icons (e.g. from @tabler/icons-react) for names not in Lucide.
 * Call once at app init if you want Tabler fallback:
 *   import { registerFallbackIcons } from 'titan-compositions'
 *   import { IconBrandThreads } from '@tabler/icons-react'
 *   registerFallbackIcons({ threads: IconBrandThreads })
 */
export function registerFallbackIcons(
  map: Record<string, ComponentType<{ className?: string }>>
): void {
  for (const [key, component] of Object.entries(map)) {
    const normalized = normalizeIconName(key)
    if (normalized) fallbackRegistry[normalized] = component
  }
}

/**
 * Resolve icon by name: Lucide first, then fallback (e.g. Tabler).
 * Returns the component or null if not found.
 * Names are normalized to kebab-case; aliases (e.g. "empty-box" -> "box") are applied.
 */
export function resolveIcon(name: string): IconComponent | ComponentType<{ className?: string }> | null {
  const normalized = normalizeIconName(name)
  if (!normalized) return null
  const canonical = resolveIconAlias(normalized)

  const fromLucide = LUCIDE_REGISTRY[canonical]
  if (fromLucide) return fromLucide

  const fromFallback = fallbackRegistry[canonical] ?? fallbackRegistry[normalized]
  if (fromFallback) return fromFallback

  return null
}
