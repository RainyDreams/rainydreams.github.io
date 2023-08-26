import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:"RainyDreams",
  build: {
    target: 'esnext' //browsers can handle the latest ES features
  }
})
