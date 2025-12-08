import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ghPages } from 'vite-plugin-gh-pages'

// Укажите имя вашего репозитория (в нижнем регистре)
// Это нужно для правильной настройки базового пути на GitHub Pages
const repoName = '/gaze-sochi-beauty'

export default defineConfig({
  plugins: [
    react(),
    // Добавляем плагин для деплоя на GitHub Pages
    ghPages({
      // Этот параметр указывает, что публиковать нужно содержимое папки 'dist'
      // (которая генерируется командой 'npm run build')
      // и коммитить в ветку 'gh-pages'
      // Также он автоматически настраивает base path в index.html
      // на основе вашего package.json или параметра base, указанного ниже.
    }),
  ],
  // Базовый путь для GitHub Pages.
  // Он должен начинаться с '/' и совпадать с именем вашего репозиторя.
  // Например, если ваш сайт будет доступен по адресу
  // https://milowqo.github.io/gaze-sochi-beauty/,
  // то base должен быть '/gaze-sochi-beauty'.
  base: repoName,
})
