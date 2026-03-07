#!/usr/bin/env node

import { init } from './lib/init.js'
import { newApp } from './lib/new-app.js'
import { update } from './lib/update.js'

const [,, cmd, ...args] = process.argv

const commands = {
  init: () => init(process.cwd()),
  new: () => newApp(process.cwd(), args[0]),
  update: () => update(process.cwd()),
}

if (!cmd || !commands[cmd]) {
  console.log(`
Titan CLI — One install, many projects (Cursor / Claude)

Usage:
  titan init              Create titan-main/ with dependencies and apps/demo
  titan new <name>        Create a new app in apps/<name> (run from titan-main)
  titan update            Update Titan deps in root (run from titan-main)

After titan init, open the titan-main folder in Cursor and connect the Titan MCP.
`)
  process.exit(cmd ? 1 : 0)
}

const fn = commands[cmd]
fn().catch((err) => {
  console.error(err.message || err)
  process.exit(1)
})
