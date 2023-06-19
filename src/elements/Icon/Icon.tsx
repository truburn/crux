import { useEffect } from "react";
import { useIconClasses, IconProps } from "@/elements/Icon";

/**
 * Icon element
 */
export function Icon(props: IconProps) {
  const classes = useIconClasses();

  useEffect(() => {
    console.log("Icon.props", props);
  }, [props]);

  return <div className={classes.root}>Icon element</div>;
}
