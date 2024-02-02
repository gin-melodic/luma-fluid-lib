import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import dts from 'vite-plugin-dts'
import { fileURLToPath } from "node:url";

const filesNeedToExclude = [
  "src/demo/App.css",
  "src/demo/App.tsx",
  "src/demo/main.tsx",
  "src/demo/bg.jpg",
  "src/demo/words.png",
];

const filesPathToExclude = filesNeedToExclude.map((src) => {
  return fileURLToPath(new URL(src, import.meta.url));
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      exclude: ['**/demo/*']
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
      external: ['react', 'react-dom', ...filesPathToExclude],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        }
      }
    }
  },
  assetsInclude: ['**/*.png', '**/*.svg', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.mp4', '**/*.webm', '**/*.ogg', '**/*.mp3', '**/*.wav', '**/*.flac', '**/*.aac', '**/*.woff', '**/*.woff2', '**/*.eot', '**/*.ttf', '**/*.otf']
})
