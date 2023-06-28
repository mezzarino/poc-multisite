import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["src/**/*.tsx"],
  format: ["cjs"],
  dts: true,
  minify: true,
  external: ["react"],
  esbuildOptions(options) {
    options.banner = {
      js: "'use client'",
    }
  },
  ...options,
}));
