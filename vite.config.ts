import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      outDir: 'dist',
      include: ['src'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist',
  },
})
