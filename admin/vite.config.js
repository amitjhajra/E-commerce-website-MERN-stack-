import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5174,
    watch: {
      usePolling: true,
    },
    hmr: {
      clientPort: 5174,
      port: 5174
    }
  }
})