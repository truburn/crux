import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";

export function useBlockquoteClasses() {
  const theme = useTheme();

  const root = css({
    borderStyle: "solid",
    borderWdith: 1,
    borderColor: theme.color,
  });

  return { root };
}
