import { useEffect } from "react";
import { useCodeClasses, CodeProps } from "@/elements/Code";

/**
 * Code block element. Can be displayed in-line or as a block
 */
export function Code(props: CodeProps) {
  const classes = useCodeClasses();

  useEffect(() => {
    console.log("Code.props", props);
  }, [props]);

  return <div className={classes.root}>Code Element</div>;
}
