import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true  // ✅ Fix for React Router refresh issue
  },
  preview: {
    historyApiFallback: true  // ✅ Also works for "vite preview"
  }
})
