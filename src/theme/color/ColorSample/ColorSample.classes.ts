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

  const variable = css({
    fontFamily: "monospace !important",
    fontSize: "1.125rem !important",
    margin: "1rem",
    padding: "0.5rem 1rem",
    color: "lime !important",
    background: "#34282c",
    borderRadius: "0.25rem",
    alignSelf: "flex-start",
  });

  const colorBlocks = css({
    margin: "1rem 0 !important",
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  });

  const block = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
    margin: "0.5rem !important",
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

  const tableHeader = css({
    textTransform: "capitalize",
  });

  const tableRowHeader = css({
    maxWidth: 20,
    verticalAlign: "middle",
    paddingTop: "4ch !important",
    "& > div": {
      transform: "rotate(-90deg)",
      whiteSpace: "nowrap",
    },
  });

  const tableColumnGroup = css({});

  const tableRowGroup = css({
    maxWidth: 20,
    verticalAlign: "middle",
    paddingTop: "12ch !important",
    "& > div": {
      transform: "rotate(-90deg)",
      whiteSpace: "nowrap",
    },
  });

  const tableCell = css({});

  const info = css({
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: "0.5rem",
    padding: "0.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textTransform: "capitalize",
  });

  return {
    root,
    item,
    itemHeading,
    title,
    subtitle,
    subtitleColorBlock,
    variable,
    colorBlocks,
    block,
    blockColor,
    blockInfo,
    table,
    tableHeader,
    tableRowHeader,
    tableColumnGroup,
    tableRowGroup,
    tableCell,
    info,
  };
}
