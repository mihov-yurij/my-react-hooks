
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 1. Импортируй это

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 2. Добавь это в список плагинов
  ]
})
