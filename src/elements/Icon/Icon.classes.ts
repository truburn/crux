import { css } from "@emotion/css";
import { theme } from "@/theme";

export function useIconClasses() {
  const root = css({
    color: theme.colors.primary.main,
  });

  return { root };
}
