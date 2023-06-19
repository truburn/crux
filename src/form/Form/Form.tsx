import { useEffect } from "react";
import { useFormClasses, FormProps } from "@/form/Form";

/**
 * Form element
 */
export function Form(props: FormProps) {
  const classes = useFormClasses();

  useEffect(() => {
    console.log(".props", props);
  }, [props]);

  return <div className={classes.root}>Form element</div>;
}
