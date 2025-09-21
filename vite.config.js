import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- Adicione esta linha
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- Adicione esta linha
  ],
  base: '/Nexus_deploy/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
