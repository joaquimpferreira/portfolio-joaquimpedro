import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/portfolio-joaquimpedro/",
  resolve: {
    alias: {
      crypto: 'crypto-browserify'
    }
  },
  define: {
    global: 'window'  // Isso pode ser necessário para lidar com objetos globais do navegador
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name][extname]", // Remove o hash dos nomes dos arquivos
      },
    },
  },
})

