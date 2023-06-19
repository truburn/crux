import { useEffect } from "react";
import { useButtonClasses, ButtonProps } from "@/elements/Button";

/**
 * Standardized button element
 */
export function Button(props: ButtonProps) {
  const classes = useButtonClasses();

  useEffect(() => {
    console.log("Button.props", props);
  }, [props]);

  return <div className={classes.root}>Button Element</div>;
}
