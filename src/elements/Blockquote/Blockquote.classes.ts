import { css } from "@emotion/css";
import { theme } from "@/theme";

export function useBlockquoteClasses() {
  const root = css({
    borderStyle: "solid",
    borderWdith: 1,
    borderColor: theme.colors.primary.main,
  });

  return { root };
}
