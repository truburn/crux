import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";

export function menuClasses() {
  const theme = useTheme();
  console.log(theme);

  const root = css({
    border: `solid 1px ${theme.color}`,
  });

  return {
    root,
  };
}
