#!/usr/bin/env node
/**
 * Build Titan tokens: run Style Dictionary and concatenate with semantic CSS.
 */
import StyleDictionary from 'style-dictionary'
import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '../..')
const CSS_DIR = join(ROOT, 'tokens/css')
const GENERATED = join(CSS_DIR, 'titan-foundations.generated.css')
const SEMANTIC = join(CSS_DIR, 'titan-semantic.css')
const TITAN_CSS = join(CSS_DIR, 'titan.css')

async function main() {
  // 1. Run Style Dictionary (loads config which runs preprocess)
  const config = (await import('./config.js')).default
  const sd = new StyleDictionary(config)
  await sd.buildAllPlatforms()

  // 2. Read generated foundations and semantic parts
  const foundations = readFileSync(GENERATED, 'utf-8')
  const semantic = readFileSync(SEMANTIC, 'utf-8')

  // 3. Concatenate with header
  const header = `/**
 * Titan base — foundations (generated from tokens/foundations/*.json)
 * and semantic/component tokens. No themes; load a theme from tokens/themes/
 * (e.g. _neutral.css, _demand.css) and set html[data-theme="…"].
 */
`
  const output = header + foundations + '\n' + semantic
  writeFileSync(TITAN_CSS, output)

  console.log('✓ tokens/css/titan.css built successfully')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
