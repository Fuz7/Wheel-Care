import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@images': '/src/assets/images', // Create an alias for your images directory
      '@fonts': '/src/assets/fonts', // Create an alias for your fonts directory
    },
  },
})
