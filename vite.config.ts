import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


async function getPlugins() {
  const chunkSplitPlugin = await import('vite-plugin-chunk-split');
  return [chunkSplitPlugin.chunkSplitPlugin()];
}
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), getPlugins()],
})
