import { useEffect } from "react";
import { useCheckboxClasses, CheckboxProps } from "@/form/Checkbox";

/**
 * Form checkbox element
 */
export function Checkbox(props: CheckboxProps) {
  const classes = useCheckboxClasses();

  useEffect(() => {
    console.log(".props", props);
  }, [props]);

  return <div className={classes.root}>Checkbox element</div>;
}
