import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";

export function useLayoutClasses() {
  const theme = useTheme();

  const root = css({
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: theme.color,
  });

  const content = css({
    flex: 1,
  });

  return { root, content };
}
