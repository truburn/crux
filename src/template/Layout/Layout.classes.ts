import { css } from "@emotion/css";
// import { useTheme } from "@emotion/react";

export function useLayoutClasses() {
  // const theme = useTheme();

  const content = css({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
    overflow: "hidden",
  });

  const wrapper = css({
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    overflow: "hidden",
  });

  return { content, wrapper };
}
