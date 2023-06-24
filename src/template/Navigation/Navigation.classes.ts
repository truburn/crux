import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";

export function useNavigationClasses() {
  const theme = useTheme();

  const root = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "0.125rem 0.25rem",
    borderStyle: "solid",
    borderWidth: 0,
    borderRightWidth: theme.separator.width,
    borderColor: theme.separator.color,
  });

  const link = css({
    margin: "0.5rem 0",
    opacity: 0.5,
    "&:hover": {
      textDecoration: "none",
      opacity: 1,
    },
  });

  const icon = css({
    fontSize: "2rem",
  });

  return { root, link, icon };
}
