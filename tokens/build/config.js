/**
 * Style Dictionary config for Titan foundations.
 * Generates CSS variables from preprocessed JSON.
 */
import StyleDictionary from 'style-dictionary'
import { preprocessFoundations } from './preprocess.js'
import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const TOKENS_DIR = join(__dirname, '..')
const TMP_FILE = join(TOKENS_DIR, '.sd-input.json')

// Preprocess and write temp file for Style Dictionary
const nested = preprocessFoundations()
mkdirSync(TOKENS_DIR, { recursive: true })
writeFileSync(TMP_FILE, JSON.stringify(nested, null, 0))

export default {
  source: [TMP_FILE],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: join(__dirname, '../css/'),
      files: [
        {
          format: 'css/variables',
          destination: 'titan-foundations.generated.css',
          options: {
            outputReferences: true,
            selector: ':root',
          },
        },
      ],
    },
  },
}
