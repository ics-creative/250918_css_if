import { defineConfig } from "vite";
import "dotenv/config";
import { globSync } from "glob";
import { relative, extname } from "path";
import { fileURLToPath } from "node:url";

const basePath = process.env.BASE_PATH || "/";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    minify: false,
    rollupOptions: {
      input: {
        ...Object.fromEntries(
          globSync("src/**/*.html").map((file) => [
            relative("src", file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
        ),
      },
      output: {
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name][extname]",
      },
    },
    target: "esnext",
    assetsInlineLimit: 0,
  },
  base: basePath,
  server: {
    port: 3456,
  },
});
