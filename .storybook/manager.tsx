import React from "react";
import { addons } from "@storybook/manager-api";
import theme from "./theme";

addons.setConfig({
  sidebar: {
    showRoots: false,
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
    renderLabel: (item) => {
      if (item.type === "group") {
        return <>@{item.name}</>;
      }

      return <>{item.name}</>;
    },
  },
  theme: theme,
});
