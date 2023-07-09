import type { StorybookConfig } from "@storybook/react-vite";

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
  staticDirs: ["../public"],
  typescript: {
    reactDocgen: "react-docgen",
    skipBabel: true,
    check: false,
  },
};
export default config;
