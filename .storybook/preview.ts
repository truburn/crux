import type { Preview } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { ThemeProvider } from "@emotion/react";
import { theme, GlobalStyles } from "../src/theme";
import { withReactQuery } from "./decorators/withReactQuery";
import docsComponents from "./docsComponents";
import sbTheme from "./theme";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      expanded: true,
      hideNoControlsWarning: true,
      sort: "requiredFirst",
    },
    docs: {
      components: docsComponents,
      theme: sbTheme,
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: { theme },
      defaultTheme: "theme",
      Provider: ThemeProvider,
      GlobalStyles,
    }),
    withRouter,
    withReactQuery,
  ],
};

export default preview;
