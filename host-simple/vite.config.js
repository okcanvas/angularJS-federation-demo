import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue2'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      //name: 'remote-simple',
      //filename: 'remoteEntry.js',
      remotes: {
        'remote-simple': {
          external: 'http://localhost:5001/assets/remoteEntry.js',
          from: "vite",
          format: 'esm'
        },
        angularApp: {
          external: 'http://localhost:5001/remoteEntry.js',
          from: 'vite',
          format: 'var'
        },
        /*
        'angularApp': {
          external: 'http://localhost:5001/remoteEntry.js',
          from:'webpack',
          format: 'var'
        }
        */
      },
      shared: {
        vue: { singleton: true },
      },
    })
  ],
  server: {force: true},
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: true,
    rollupOptions: {
      // sharedPlugin need input required
      // input:{},
      output: {
        minifyInternalExports: false
      }
    }
  }
})
