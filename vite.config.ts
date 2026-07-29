import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// This is a single-page app, so index.html is the only real document. Static
// hosts (GitHub Pages included) serve 404.html for paths they don't recognise,
// so shipping a copy of index.html under that name lets deep links like
// /events/past and page refreshes boot the app instead of erroring.
// enforce: 'post' so this runs after Vite's html plugin has emitted index.html.
function spaFallback(): Plugin {
  return {
    name: 'spa-404-fallback',
    apply: 'build',
    enforce: 'post',
    generateBundle(_options, bundle) {
      const index = bundle['index.html']
      if (index && index.type === 'asset') {
        this.emitFile({
          type: 'asset',
          fileName: '404.html',
          source: index.source,
        })
      }
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    spaFallback(),
  ],
})