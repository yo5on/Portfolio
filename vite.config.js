import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // The 3D stage (three + R3F + drei) is a lazily loaded chunk of its own.
    chunkSizeWarningLimit: 1400,
  },
})
