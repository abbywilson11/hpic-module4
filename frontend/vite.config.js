import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Redirect API calls during dev to backend (port 5000)
      '/api': 'http://localhost:5000'
    }
  }
})
