import { useEffect } from "react";
import { useLabelClasses, LabelProps } from "@/form/Label";

/**
 * Form Label element
 */
export function Label(props: LabelProps) {
  const classes = useLabelClasses();

  useEffect(() => {
    console.log("Label.props", props);
  }, [props]);

  return <div className={classes.root}>Form label element</div>;
}
