/**
 * Preprocess Titan foundation JSON files for Style Dictionary.
 * Converts flat keys (color-black-100) to nested structure and normalizes references.
 */
import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const FOUNDATIONS_DIR = join(__dirname, '../foundations')

const FILES = [
  'colors-opacity.json',
  'colors-solid.json',
  'spacing.json',
  'typography.json',
  'borders.json',
  'elevation.json',
]

/**
 * Convert flat key to Style Dictionary path.
 * color-black-100 -> ['color','black','100']
 * $color-white-10 -> ['color','white','10']
 */
function keyToPath(key) {
  const clean = key.replace(/^\$/, '')
  return clean.split('-')
}

/**
 * Convert reference string to SD format.
 * {$color-steel-10} -> {color.steel.10}
 * {font-audiense} -> {font.audiense}
 * {box-shadow-0} -> {box-shadow.0}
 */
function refToPath(ref) {
  const m = ref.match(/^\{\$?(.+)\}$/)
  if (!m) return ref
  const inner = m[1]
  return `{${inner.replace(/-/g, '.')}}`
}

/**
 * Recursively transform references in a value.
 */
function transformRefs(obj, seen = new Set()) {
  if (seen.has(obj)) return obj
  if (typeof obj === 'string') {
    return obj.replace(/\{\$?([^}]+)\}/g, (_, inner) => `{${inner.replace(/-/g, '.')}}`)
  }
  if (Array.isArray(obj)) {
    return obj.map((v) => transformRefs(v, seen))
  }
  if (obj && typeof obj === 'object') {
    seen.add(obj)
    const out = {}
    for (const [k, v] of Object.entries(obj)) {
      out[k] = transformRefs(v, seen)
    }
    return out
  }
  return obj
}

/**
 * Set a value at path in nested object.
 */
function setByPath(obj, path, value) {
  let cur = obj
  for (let i = 0; i < path.length - 1; i++) {
    const p = path[i]
    if (!(p in cur)) cur[p] = {}
    cur = cur[p]
  }
  cur[path[path.length - 1]] = value
}

/**
 * Merge flat token object into nested structure.
 */
function flatToNested(flat) {
  const nested = {}
  for (const [key, token] of Object.entries(flat)) {
    const path = keyToPath(key)
    const value = transformRefs(JSON.parse(JSON.stringify(token)))
    setByPath(nested, path, value)
  }
  return nested
}

/**
 * Deep merge objects. Tokens have {value, type}; nested groups don't.
 */
function deepMerge(target, source) {
  for (const key of Object.keys(source)) {
    const val = source[key]
    const isToken = val && typeof val === 'object' && 'value' in val
    if (val && typeof val === 'object' && !Array.isArray(val) && !isToken) {
      if (!target[key]) target[key] = {}
      deepMerge(target[key], val)
    } else {
      target[key] = val
    }
  }
  return target
}

/**
 * Load and merge all foundation files.
 */
export function preprocessFoundations() {
  let merged = {}
  for (const file of FILES) {
    const path = join(FOUNDATIONS_DIR, file)
    const content = readFileSync(path, 'utf-8')
    const data = JSON.parse(content)
    const nested = flatToNested(data)
    deepMerge(merged, nested)
  }
  return merged
}
