import type { Preview } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../src/theme/themeStyles";
import { GlobalStyles } from "../src/theme/GlobalStyles";
import { withReactQuery } from "./decorators/withReactQuery";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
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
