import path from "path";
import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const resolvedPath = (dirPath) => path.resolve(__dirname, `../src/${dirPath}`);

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    path.dirname(
      require.resolve(path.join("@storybook/addon-links", "package.json"))
    ),
    path.dirname(
      require.resolve(path.join("@storybook/addon-essentials", "package.json"))
    ),
    path.dirname(
      require.resolve(
        path.join("@storybook/addon-interactions", "package.json")
      )
    ),
    path.dirname(
      require.resolve(path.join("@storybook/addon-a11y", "package.json"))
    ),
    path.dirname(
      require.resolve(path.join("@storybook/addon-coverage", "package.json"))
    ),
  ],
  framework: {
    name: path.dirname(
      require.resolve(path.join("@storybook/react-vite", "package.json"))
    ),
    options: {},
  },
  docs: {
    autodocs: "tag",
    defaultName: "Overview",
  },
  viteFinal: async (config) => {
    const tmpConfig = {
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
            replacement: resolvedPath("theme"),
          },
        ],
      },
    };

    return mergeConfig(config, tmpConfig);
  },
};
export default config;
