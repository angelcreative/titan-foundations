import fs from 'fs/promises'
import path from 'path'
import { spawn } from 'child_process'

const ROOT = 'titan-main'
const DEMO_APP_NAME = 'demo'

const ROOT_PACKAGE_JSON = {
  name: 'titan-main',
  private: true,
  type: 'module',
  workspaces: ['apps/*'],
  description: 'Titan monorepo — one install, many projects. Open this folder in Cursor and connect the Titan MCP.',
  dependencies: {
    'react': '^18.2.0',
    'react-dom': '^18.2.0',
    'react-aria-components': '^1.4.0',
    'titan-compositions': 'latest',
    'lucide-react': '^0.460.0',
    '@tabler/icons-react': '^3.0.0',
    '@internationalized/date': '^3.0.0',
  },
  devDependencies: {
    'vite': '^5.4.0',
    '@vitejs/plugin-react': '^4.3.0',
  },
}

const PNPM_WORKSPACE = `packages:
  - 'apps/*'
`

const DEMO_INDEX_HTML = `<!DOCTYPE html>
<html lang="en" data-theme="insights">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Titan demo</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/angelcreative/titan-foundations@main/tokens/css/titan.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/angelcreative/titan-foundations@main/tokens/themes/_insights.css" />
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>
`

const DEMO_MAIN_JSX = `import React from 'react'
import ReactDOM from 'react-dom/client'
import 'titan-compositions/styles'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
`

const DEMO_APP_JSX = `import React from 'react'

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'var(--font-audiense), sans-serif',
      color: 'var(--color-neutral-900, #1a1a1a)',
      maxWidth: '42rem',
      margin: '0 auto',
      lineHeight: 1.6,
    }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Titan demo app</h1>
      <p><strong>Next steps:</strong></p>
      <ol style={{ marginLeft: '1.25rem', marginBottom: '1.5rem' }}>
        <li>Open this folder (<code>titan-main</code>) in Cursor (or Claude). Connect the Titan MCP — or if you've already connected it, you're ready to go.</li>
        <li>Ask the assistant to build something (e.g. “Create an onboarding flow with Titan” or “Add a form”). It will use Titan components and tokens.</li>
        <li>Run this app with <code>pnpm dev</code> or <code>npm run dev</code> from <code>apps/demo</code> or from the root.</li>
      </ol>
      <p style={{ color: 'var(--color-neutral-600, #666)' }}>
        You can delete this placeholder and replace it with your own content whenever you're ready.
      </p>
    </div>
  )
}
`

const DEMO_VITE_CONFIG = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
`

const DEMO_PACKAGE_JSON = {
  name: '@titan/demo',
  private: true,
  type: 'module',
  scripts: { dev: 'vite' },
}

const README = `# Titan monorepo

One install, many projects. Open this folder in **Cursor** (or Claude) and connect the **Titan MCP**. If you've already connected it, you're ready to go.

## First time

- \`titan init\` was already run: this folder and \`apps/demo\` are ready.
- Open \`titan-main\` in Cursor and try: “Create an onboarding with Titan” or “Add a form” in \`apps/demo\`.

## New project

From this folder (titan-main):

\`\`\`
titan new my-project
\`\`\`

Then open \`apps/my-project\` in the same Cursor window (or work from root). No extra \`npm install\`.

## Run demo

\`\`\`
cd apps/demo && pnpm dev
\`\`\`

## Update Titan

\`\`\`
titan update
\`\`\`
`

export async function init(cwd) {
  const rootPath = path.join(cwd, ROOT)
  await fs.mkdir(rootPath, { recursive: true })

  await fs.writeFile(
    path.join(rootPath, 'package.json'),
    JSON.stringify(ROOT_PACKAGE_JSON, null, 2)
  )
  await fs.writeFile(path.join(rootPath, 'pnpm-workspace.yaml'), PNPM_WORKSPACE)
  await fs.writeFile(path.join(rootPath, 'README.md'), README)

  const appsPath = path.join(rootPath, 'apps')
  await fs.mkdir(appsPath, { recursive: true })

  const demoPath = path.join(appsPath, DEMO_APP_NAME)
  await fs.mkdir(demoPath, { recursive: true })
  await fs.mkdir(path.join(demoPath, 'src'), { recursive: true })

  await fs.writeFile(path.join(demoPath, 'package.json'), JSON.stringify(DEMO_PACKAGE_JSON, null, 2))
  await fs.writeFile(path.join(demoPath, 'index.html'), DEMO_INDEX_HTML)
  await fs.writeFile(path.join(demoPath, 'vite.config.js'), DEMO_VITE_CONFIG)
  await fs.writeFile(path.join(demoPath, 'src', 'main.jsx'), DEMO_MAIN_JSX)
  await fs.writeFile(path.join(demoPath, 'src', 'App.jsx'), DEMO_APP_JSX)

  const usePnpm = await hasPnpm()
  const installCmd = usePnpm ? 'pnpm' : 'npm'
  console.log(`Created ${ROOT}/ with apps/demo. Running ${installCmd} install...`)
  await run(installCmd, ['install'], { cwd: rootPath })
  console.log(`Done. Open ${ROOT} in Cursor and connect the Titan MCP (or start building).`)
}

async function hasPnpm() {
  try {
    const { execSync } = await import('child_process')
    execSync('pnpm --version', { stdio: 'ignore' })
    return true
  } catch {
    return false
  }
}

function run(cmd, args, opts) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, { stdio: 'inherit', shell: true, ...opts })
    child.on('error', reject)
    child.on('close', (code) => (code === 0 ? resolve() : reject(new Error(`${cmd} exited with ${code}`))))
  })
}
