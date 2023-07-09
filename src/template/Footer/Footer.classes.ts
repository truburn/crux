import { css } from "@emotion/css";
import { theme } from "@/theme";

export function useFooterClasses() {
  const root = css({
    maxWidth: "100%",
    borderStyle: "solid",
    borderWidth: 0,
    borderTopWidth: 1,
    borderColor: theme.seperator.color,
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
