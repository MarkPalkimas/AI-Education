import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/AI-Education/', // must match repo name
  build: {
    outDir: 'docs', // 👈 GitHub Pages will serve this folder
  },
})
