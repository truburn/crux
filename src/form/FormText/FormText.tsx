import { useEffect } from "react";
import { useFormTextClasses, FormTextProps } from "@/form/FormText";

/**
 * Element for rendering specific styles for form text
 */
export function FormText(props: FormTextProps) {
  const classes = useFormTextClasses();

  useEffect(() => {
    console.log(".props", props);
  }, [props]);

  return <div className={classes.root}>Form Text</div>;
}
