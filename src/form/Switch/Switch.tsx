import { useEffect } from "react";
import { useSwitchClasses, SwitchProps } from "@/form/Switch";

/**
 * Form Switch Element
 */
export function Switch(props: SwitchProps) {
  const classes = useSwitchClasses();

  useEffect(() => {
    console.log("Switch.props", props);
  }, [props]);

  return <div className={classes.root}>Form Switch Element</div>;
}
