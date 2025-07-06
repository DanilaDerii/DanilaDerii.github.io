import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Vat/' // ← THIS LINE fixes GitHub Pages path issues
})
