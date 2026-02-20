/**
 * Normalize icon name to kebab-case for registry lookup.
 * "VoidBox" -> "void-box", "empty box" -> "empty-box"
 */
export function normalizeIconName(name: string): string {
  const trimmed = name.trim()
  if (!trimmed) return ''
  return trimmed
    .replace(/\s+/g, '-')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '')
}

const ALIASES: Record<string, string> = {
  'empty-box': 'box',
  'emptybox': 'box',
  'caja-vacia': 'box',
  'inbox': 'inbox',
  'threads': 'threads',
}

/**
 * Resolve alias to canonical registry key (after normalizing).
 */
export function resolveIconAlias(normalized: string): string {
  return ALIASES[normalized] ?? normalized
}
