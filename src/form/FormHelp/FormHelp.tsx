import { useEffect } from "react";
import { useFormHelpClasses, FormHelpProps } from "@/form/FormHelp";

/**
 * Formatted text for form input help text
 */
export function FormHelp(props: FormHelpProps) {
  const classes = useFormHelpClasses();

  useEffect(() => {
    console.log(".props", props);
  }, [props]);

  return <div className={classes.root}>Form Help</div>;
}
