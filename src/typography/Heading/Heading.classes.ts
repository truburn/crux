import { css } from "@emotion/css";
import { theme } from "@/theme";

export function useHeadingClasses() {
  const root = css({
    margin: "1.125rem 0",
    padding: "0 0.5rem",
    color: theme.colors.text.main,
    "&:first-of-type": {
      marginTop: 0,
    },
  });

  const title = css({
    ...theme.fonts.heading,
  });

  const subtitle = css({
    fontFamily: theme.fonts.heading.fontFamily,
    fontWeight: theme.fontFamilies.heading.weights.light,
  });

  return {
    root,
    title,
    subtitle,
  };
}
