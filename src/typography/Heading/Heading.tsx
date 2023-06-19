import { useEffect } from "react";
import { useHeadingClasses, HeadingProps } from "@/typography/Heading";

/**
 * Heading element for sections within a page
 */
export function Heading(props: HeadingProps) {
  const classes = useHeadingClasses();

  useEffect(() => {
    console.log(".props", props);
  }, [props]);

  return <div className={classes.root}>Heading</div>;
}
