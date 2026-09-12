import { defineConfig } from "astro/config";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  site: "https://chalmery.github.io",
  base: isGitHubPages ? "/astro-theme-sumi" : "/",
});
