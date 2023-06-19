import { useEffect } from "react";
import { useBlockquoteClasses, BlockquoteProps } from "@/elements/Blockquote";

/**
 * Blockquote element
 */
export function Blockquote(props: BlockquoteProps) {
  const classes = useBlockquoteClasses();

  useEffect(() => {
    console.log("Blockquote.props", props);
  }, [props]);

  return <div className={classes.root}>Blockquote Element</div>;
}
