import type { Preview } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../src/theme";

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
    withRouter,
    withThemeFromJSXProvider({
      themes: { theme },
      defaultTheme: "theme",
      Provider: ThemeProvider,
    }),
  ],
};

export default preview;
