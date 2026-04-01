
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@vitejs/plugin-react' // 1. Импортируй это

export default defineConfig({
  plugins: [
    react(),
   
  ]
})
