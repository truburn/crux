import { useEffect } from "react";
import { useFormGroupClasses, FormGroupProps } from "@/form/FormGroup";

/**
 * Container for grouping form elements to replace `<fieldset />`
 */
export function FormGroup(props: FormGroupProps) {
  const classes = useFormGroupClasses();

  useEffect(() => {
    console.log(".props", props);
  }, [props]);

  return <div className={classes.root}>Form Group</div>;
}
