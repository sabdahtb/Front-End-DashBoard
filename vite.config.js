import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import jsconfigPaths from 'vite-jsconfig-paths'
import 'dotenv/config'

// https://vitejs.dev/config/
export default defineConfig({
  // To access env vars here use process.env
  plugins: [react(), jsconfigPaths()],
  server: {
    port: 3000,
  },
  define: {
    'process.env': process.env,
  },
})
