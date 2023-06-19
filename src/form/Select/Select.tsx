import { useEffect } from "react";
import { useSelectClasses, SelectProps } from "@/form/Select";

/**
 * Dropdown select
 */
export function Select(props: SelectProps) {
  const classes = useSelectClasses();

  useEffect(() => {
    console.log("Select.props", props);
  }, [props]);

  return <div className={classes.root}>Select Dropdown</div>;
}
