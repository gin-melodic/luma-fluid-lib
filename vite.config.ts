import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: "LumaFluidLib",
      formats: ['es', 'umd'],
      fileName: (format) => `fluid.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
        }
      }
    }
  },
  assetsInclude: ['**/*.png', '**/*.svg', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.mp4', '**/*.webm', '**/*.ogg', '**/*.mp3', '**/*.wav', '**/*.flac', '**/*.aac', '**/*.woff', '**/*.woff2', '**/*.eot', '**/*.ttf', '**/*.otf']
})
