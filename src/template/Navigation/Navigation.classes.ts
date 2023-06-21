import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";

export function useNavigationClasses() {
  const theme = useTheme();

  const root = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "1rem 0.25rem",
    borderStyle: "solid",
    borderWidth: 0,
    borderRightWidth: theme.seperator.width,
    borderColor: theme.seperator.color,
  });

  const link = css({
    margin: "0.5rem 0",
  });

  return { root, link };
}
