import path from "path";
import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: [
    "../docs/*.mdx",
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
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
            find: "@",
            replacement: path.resolve(__dirname, "../src"),
          },
        ],
      },
    };

    return mergeConfig(config, tmpConfig);
  },
  staticDirs: ["../public"],
};
export default config;
