import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import preact from "@preact/preset-vite";
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
})
