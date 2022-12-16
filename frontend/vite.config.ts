import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import type { VitePWAOptions } from 'vite-plugin-pwa'

const pwaOptions: Partial<VitePWAOptions> = {
  base: '/',
  includeAssets: ['favicon.svg'],
  injectRegister: 'auto',
  registerType: 'autoUpdate',
  manifest: {
    name: 'Frontend',
    short_name: 'Frontend',
    theme_color: '#000000',
    // icons: [
    //   {
    //     src: 'pwa-192x192.png',
    //     sizes: '192x192',
    //     type: 'image/png',
    //   },
    // ],
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: process.env.SOURCE_MAP === 'true',
  },
  server: {
    port: 5000,
  },
  plugins: [react(), VitePWA(pwaOptions)],
})
