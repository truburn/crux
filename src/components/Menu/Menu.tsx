import { useEffect } from "react";
import { useMenuClasses, MenuProps } from "@/components/Menu";

/**
 * Dropdown menu component
 */
export function Menu(props: MenuProps) {
  const classes = useMenuClasses();

  useEffect(() => {
    console.log("Menu.props", props);
  }, [props]);

  return <div className={classes.root}>Dropdown Menu component</div>;
}
