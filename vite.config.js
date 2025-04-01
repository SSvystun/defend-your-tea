import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.', // явно вказуємо, що корінь проєкту — поточна тека
  build: {
    outDir: 'dist',
  }
})
