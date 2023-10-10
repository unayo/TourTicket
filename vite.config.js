import { fileURLToPath, URL } from 'node:url'

import { viteMockServe } from 'vite-plugin-mock'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      supportTs:false,
      logger: false,
      mockPath: "./mock/"
    })
  ],
  base: '/vite-tourism/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
