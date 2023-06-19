import { Global, useTheme, css } from "@emotion/react";

function useGlobalStyles() {
  const theme = useTheme();

  return css({
    "html, body": {
      width: "100vw",
      height: "100vh",
      margin: 0,
      padding: 0,
      overflow: "hidden",
    },
    "body > #root, body > #storybook-root": {
      width: "100vw",
      height: "100vh",
      margin: 0,
      padding: 0,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      justifyContent: "space-between",
      borderStyle: "dotted",
      borderWidth: 1,
      borderColor: theme.color,
    },
  });
}

export function GlobalStyles() {
  const globalCSS = useGlobalStyles();

  return <Global styles={globalCSS} />;
}
