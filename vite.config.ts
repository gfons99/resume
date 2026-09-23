import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Redirect /resume to /resume/ in dev server, matching GitHub Pages production behavior
const trailingSlashRedirect = (): Plugin => ({
  name: 'trailing-slash-redirect',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url === '/resume' || req.url === '/resume?*') {
        const query = req.url.includes('?') ? req.url.slice(req.url.indexOf('?')) : ''
        res.writeHead(301, { Location: `/resume/${query}` })
        res.end()
        return
      }
      next()
    })
  },
})

// https://vite.dev/config/
export default defineConfig({
  base: '/resume/',
  plugins: [react(), tailwindcss(), trailingSlashRedirect()],
})
