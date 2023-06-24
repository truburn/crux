import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";

export function useFooterClasses() {
  const theme = useTheme();

  const root = css({
    maxWidth: "100%",
    borderStyle: "solid",
    borderWidth: 0,
    borderTopWidth: 1,
    borderColor: theme.separator.color,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    padding: "0.25rem",
    fontWeight: 300,
    fontSize: "0.875rem",
    "& p": {
      margin: 0,
      padding: 0,
    },
  });

  return { root };
}
