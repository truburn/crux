import { useEffect } from "react";
import { useFormStatusClasses, FormStatusProps } from "@/form/FormStatus";

/**
 * Element for displaying form status
 */
export function FormStatus(props: FormStatusProps) {
  const classes = useFormStatusClasses();

  useEffect(() => {
    console.log(".props", props);
  }, [props]);

  return <div className={classes.root}>Form Status</div>;
}
