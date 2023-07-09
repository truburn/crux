import { css } from "@emotion/css";
// import { theme } from "@/theme";

export function useHeaderClasses() {
  //   const root = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    maxHeight: "3rem",
    overflow: "hidden",
    borderBottom: "solid 1px rgba(0,0,0,0.25)",
  });

  const titleImage = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: "0.25rem 0.5rem",
    height: "100%",
    fontSize: "1.5rem",
    lineHeight: 1,
  });

  const logo = css({
    maxHeight: "100%",
    width: "auto",
    marginRight: "1rem",
  });

  return { root, titleImage, logo };
}
