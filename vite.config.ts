import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true"

export default defineConfig({
  base: isGitHubPagesBuild ? '/RMQ/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
