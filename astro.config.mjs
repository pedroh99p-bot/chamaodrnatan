import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://chamaodrnatan.com.br",
  output: "static",
  integrations: [sitemap()],
});
