import { addons } from "@storybook/manager-api";
import theme from "./theme";

addons.setConfig({
  sidebar: {
    collapsedRoots: [
      "components",
      "elements",
      "form",
      "pages",
      "template",
      "theme",
      "typography",
      "utils",
    ],
  },
  theme: theme,
});
