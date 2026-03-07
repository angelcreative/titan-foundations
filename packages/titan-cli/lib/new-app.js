import fs from 'fs/promises'
import path from 'path'

const APP_INDEX_HTML = `<!DOCTYPE html>
<html lang="en" data-theme="insights">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Titan app</title>
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

const APP_MAIN_JSX = `import React from 'react'
import ReactDOM from 'react-dom/client'
import 'titan-compositions/styles'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
`

const APP_APP_JSX = `import React from 'react'

export default function App() {
  return <div style={{ padding: '2rem', fontFamily: 'var(--font-audiense), sans-serif' }}>Titan app</div>
}
`

const APP_VITE_CONFIG = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
`

export async function newApp(cwd, name) {
  if (!name || !/^[a-z0-9-]+$/i.test(name)) {
    throw new Error('Usage: titan new <name> (name: letters, numbers, hyphens only)')
  }

  const rootPkgPath = path.join(cwd, 'package.json')
  const workspacePath = path.join(cwd, 'pnpm-workspace.yaml')
  let isTitanRoot = false
  try {
    const pkg = JSON.parse(await fs.readFile(rootPkgPath, 'utf8'))
    const hasWorkspaces = pkg.workspaces && Array.isArray(pkg.workspaces)
    const hasTitan = pkg.dependencies && (pkg.dependencies['titan-compositions'] != null)
    isTitanRoot = hasWorkspaces && hasTitan
  } catch {
    // no package.json or invalid
  }
  if (!isTitanRoot) {
    try {
      await fs.access(workspacePath)
      const pkg = JSON.parse(await fs.readFile(rootPkgPath, 'utf8'))
      if (pkg.dependencies && pkg.dependencies['titan-compositions']) isTitanRoot = true
    } catch {}
  }
  if (!isTitanRoot) {
    throw new Error('Run titan new from inside titan-main (after titan init).')
  }

  const appsPath = path.join(cwd, 'apps')
  await fs.mkdir(appsPath, { recursive: true })
  const appPath = path.join(appsPath, name)
  try {
    await fs.mkdir(appPath, { recursive: false })
  } catch (e) {
    if (e.code === 'EEXIST') throw new Error(`apps/${name} already exists.`)
    throw e
  }
  await fs.mkdir(path.join(appPath, 'src'), { recursive: true })

  const packageJson = {
    name: `@titan/${name}`,
    private: true,
    type: 'module',
    scripts: { dev: 'vite' },
  }
  await fs.writeFile(path.join(appPath, 'package.json'), JSON.stringify(packageJson, null, 2))
  await fs.writeFile(path.join(appPath, 'index.html'), APP_INDEX_HTML)
  await fs.writeFile(path.join(appPath, 'vite.config.js'), APP_VITE_CONFIG)
  await fs.writeFile(path.join(appPath, 'src', 'main.jsx'), APP_MAIN_JSX)
  await fs.writeFile(path.join(appPath, 'src', 'App.jsx'), APP_APP_JSX)

  console.log(`Created apps/${name}. No install needed — use deps from root. Run: cd apps/${name} && pnpm dev`)
}
