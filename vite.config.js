import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs/dev/config/
export default defineConfig({
  plugins: [
    react()
    // Não precisa do plugin do tailwind aqui se você usar postcss.config.js
  ],
  base: '/Nexus_deploy/', // Mantido conforme seu original
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
