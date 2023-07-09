import { css } from "@emotion/css";
import { theme } from "@/theme";

export function useDashboardClasses() {
  const root = css({
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: theme.colors.primary.main,
  });

  return { root };
}
