
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: './',
  plugins: [react({
    include: [/\.jsx?$/, /\.tsx?$/], // 处理所有js/jsx文件
    babel: {
      presets: ['@babel/preset-react'],
      plugins: [
        ['@babel/plugin-transform-react-jsx', { 
          runtime: 'automatic' 
        }]
      ]
    }
  })],
  build: {
    outDir: 'public',
    assetsDir: 'assets'
  }
})
