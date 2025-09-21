import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Adicione esta linha

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Nexus_deploy/',
  resolve: { // Adicione esta seção inteira
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
