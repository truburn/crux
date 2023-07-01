import { css } from "@emotion/css";
import { theme } from "@/theme";

export function useLinkClasses() {
  const root = css({
    color: theme.colors.primary.main,
    "&:hover": {
      color: theme.colors.primary.dark,
    },
  });

  const externalIcon = css({
    fontSize: "0.75em",
    marginLeft: "1ch",
    opacity: 0.75,
    color: "inherit",
  });

  return { root, externalIcon };
}
