import fs from 'fs/promises'
import path from 'path'
import { spawn } from 'child_process'

export async function update(cwd) {
  const pkgPath = path.join(cwd, 'package.json')
  let pkg
  try {
    pkg = JSON.parse(await fs.readFile(pkgPath, 'utf8'))
  } catch {
    throw new Error('No package.json here. Run titan update from titan-main root.')
  }
  const hasTitan = pkg.dependencies && pkg.dependencies['titan-compositions'] != null
  if (!hasTitan || !pkg.workspaces) {
    throw new Error('Not a Titan monorepo root. Run from titan-main.')
  }

  pkg.dependencies['titan-compositions'] = 'latest'
  await fs.writeFile(pkgPath, JSON.stringify(pkg, null, 2))

  const usePnpm = await hasPnpm()
  const installCmd = usePnpm ? 'pnpm' : 'npm'
  console.log(`Updated titan-compositions to latest. Running ${installCmd} install...`)
  await run(installCmd, ['install'], { cwd })
  console.log('Done.')
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
