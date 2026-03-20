import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, extname } from 'node:path'

const root = new URL('../src/', import.meta.url)
const allowedLucideFile = 'icons/lucideRegistry.ts'
const sourceExt = new Set(['.ts', '.tsx', '.md', '.json'])
const forbiddenPrivateBaselinePatterns = [
  /@audienseco\/titan-[\w-]+/i,
  /from\s+['"]titan-(?!compositions\b|aria\b|runtime\b)[\w-]+['"]/i,
  /require\(\s*['"]titan-(?!compositions\b|aria\b|runtime\b)[\w-]+['"]\s*\)/i,
]

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const abs = join(dir, entry)
    const st = statSync(abs)
    if (st.isDirectory()) {
      walk(abs, out)
    } else if (sourceExt.has(extname(abs))) {
      out.push(abs)
    }
  }
  return out
}

const files = walk(root.pathname)
const violations = []

for (const abs of files) {
  const rel = abs.split('/src/')[1] ?? abs
  const text = readFileSync(abs, 'utf8')

  if (forbiddenPrivateBaselinePatterns.some((pattern) => pattern.test(text))) {
    violations.push(`[forbidden private baseline package reference] ${rel}`)
  }

  if (
    /from\s+['"]lucide-react['"]/.test(text) &&
    rel !== allowedLucideFile
  ) {
    violations.push(`[forbidden direct lucide import] ${rel}`)
  }
}

if (violations.length > 0) {
  console.error('Phase policy check failed:\n' + violations.map((v) => `- ${v}`).join('\n'))
  process.exit(1)
}

console.log('Phase policy check passed.')
