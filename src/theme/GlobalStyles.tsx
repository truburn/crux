import { Global, useTheme, css } from "@emotion/react";
import { injectGlobal } from "@emotion/css";

injectGlobal`@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;700&family=IBM+Plex+Mono:wght@200;400;700&family=Quicksand:wght@300;400;500;600;700&display=swap');`;

function useGlobalStyles() {
  const theme = useTheme();

  return css({
    "html, body": {
      width: "100vw",
      height: "100vh",
      margin: 0,
      padding: 0,
      overflow: "hidden",
      ...theme.fonts?.body,
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
    },
    "*": {
      ...theme.fonts?.body,
    },
    a: {
      fontWeight: "bold",
      textDecoration: "none",
      transition: "ease all 0.5s",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  });
}

export function GlobalStyles() {
  const globalCSS = useGlobalStyles();

  return <Global styles={globalCSS} />;
}
