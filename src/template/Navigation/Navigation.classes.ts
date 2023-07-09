import { css } from "@emotion/css";
import { theme } from "@/theme";

export function useNavigationClasses() {
  const root = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "0.125rem 0.25rem",
    borderStyle: "solid",
    borderWidth: 0,
    borderRightWidth: theme.seperator.width,
    borderColor: theme.seperator.color,
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
