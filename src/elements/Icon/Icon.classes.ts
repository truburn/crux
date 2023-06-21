import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";

export function useIconClasses() {
  const theme = useTheme();

  const root = css({
    color: theme.color,
  });

  return { root };
}
