import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const resolvedPath = (dirPath) => path.resolve(__dirname, `src/${dirPath}`);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@library",
        replacement: resolvedPath("library"),
      },
      {
        find: "@components",
        replacement: resolvedPath("library/components"),
      },
      {
        find: "@elements",
        replacement: resolvedPath("library/elements"),
      },
      {
        find: "@form",
        replacement: resolvedPath("library/form"),
      },
      {
        find: "@typography",
        replacement: resolvedPath("library/typography"),
      },
      {
        find: "@pages",
        replacement: resolvedPath("pages"),
      },
      {
        find: "@template",
        replacement: resolvedPath("template"),
      },
      {
        find: "@utils",
        replacement: resolvedPath("utils"),
      },
      {
        find: "@theme",
        replacement: resolvedPath("utils/theme"),
      },
    ],
  },
});
