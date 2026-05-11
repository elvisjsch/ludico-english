import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './index.html',
        verbos: './src/pages/verbos.html',
        familia: './src/pages/familia.html',
        lugares: './src/pages/lugares.html',
        comida: './src/pages/comida.html',
        ocupaciones: './src/pages/ocupaciones.html',
        ropa: './src/pages/ropa.html',
        adverbs: './src/pages/adverbs.html',
        commonWords: './src/pages/commonWords.html',
        juego2: './src/pages/juego2.html'
      }
    }
  },
  server: {
    port: 3000,
    open: false,
  },
});
