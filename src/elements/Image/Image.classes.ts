import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";

export function useImageClasses() {
  const theme = useTheme();

  const root = css({
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: theme.color,
  });

  return { root };
}
