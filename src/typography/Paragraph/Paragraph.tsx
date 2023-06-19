import { useEffect } from "react";
import { useParagraphClasses, ParagraphProps } from "@/typography/Paragraph";

/**
 * Standardized paragraph element
 */
export function Paragraph(props: ParagraphProps) {
  const classes = useParagraphClasses();

  useEffect(() => {
    console.log(".props", props);
  }, [props]);

  return <div className={classes.root}>Standardized Paragraph Element</div>;
}
