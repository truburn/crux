import path from "path";
import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const resolvedPath = (dirPath) => path.resolve(__dirname, `../src/${dirPath}`);

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-coverage",
    "storybook-addon-react-router-v6",
    "@storybook/addon-styling",
    "storybook-addon-mock",
  ],
  framework: {
    name: "@storybook/react-vite",
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
