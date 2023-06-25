import { css } from "@emotion/css";
import { theme } from "@/theme/themeStyles";

export function useColorSampleClasses() {
  const root = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  });

  const item = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    padding: "1rem 0.5rem",
    "&:first-of-type": {
      paddingTop: 0,
    },
  });

  const itemHeading = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    borderStyle: "solid",
    borderColor: theme.separator.color,
    borderWidth: 0,
    borderBottomWidth: theme.separator.width,
  });

  const title = css({
    textTransform: "capitalize",
    fontSize: "20px !important",
    border: "none !important",
  });

  const subtitle = css({
    textTransform: "uppercase",
    fontSize: "16px !important",
    fontWeight: "normal",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  });

  const subtitleColorBlock = css({
    width: 16,
    height: 16,
    borderStyle: "solid",
    borderColor: theme.separator.color,
    borderWidth: theme.separator.width,
    margin: "0 0.5rem !important",
  });

  const colorBlocks = css({
    margin: "1rem 0 !important",
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-evenly",
  });

  const block = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
    margin: "0 1rem",
    borderStyle: "solid",
    borderColor: theme.separator.color,
    borderWidth: theme.separator.width,
    borderRadius: "0.25rem",
    overflow: "hidden",
    minWidth: 100,
  });

  const blockColor = css({
    width: "100%",
    height: 75,
  });

  const blockInfo = css({
    padding: "0.25rem 1rem !important",
    background: "white",

    "& > span": {
      display: "block",
      "&:last-of-type": {
        textTransform: "uppercase",
        fontSize: "0.75em !important",
        marginTop: "0.125rem !important",
      },
    },
  });

  const table = css({});

  const tableHeader = css({});

  const tableColumnGroup = css({});

  const tableRowGroup = css({});

  const tableCell = css({});

  const info = css({});

  return {
    root,
    item,
    itemHeading,
    title,
    subtitle,
    subtitleColorBlock,
    colorBlocks,
    block,
    blockColor,
    blockInfo,
    table,
    tableHeader,
    tableColumnGroup,
    tableRowGroup,
    tableCell,
    info,
  };
}
