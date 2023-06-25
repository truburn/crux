import { css } from "@emotion/css";
import { theme } from "@/theme";

export function useHeadingClasses() {
  const root = css({
    ...theme.fonts.heading,
    margin: "1.125rem 0",
    padding: "0 0.5rem",
    color: theme.colors.text.main,
    "&:first-of-type": {
      marginTop: 0,
    },
  });

  const title = css({});

  const subtitle = css({});

  return {
    root,
    title,
    subtitle,
  };
}
