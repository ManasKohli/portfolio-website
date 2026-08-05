import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {} from '@tailwindcss/vite'
import patrh from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': patrh.resolve(__dirname, './src'),
    },
  },
})
