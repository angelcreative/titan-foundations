import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  base: '/titan-foundations/',
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom', 'react-aria-components', 'lucide-react'],
  },
  publicDir: fileURLToPath(new URL('../../public', import.meta.url)),
  server: {
    port: 5179,
    strictPort: false,
    fs: {
      allow: [fileURLToPath(new URL('../..', import.meta.url))],
    },
  },
})
