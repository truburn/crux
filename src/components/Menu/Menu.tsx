import { useEffect } from "react";
import { menuClasses } from "@/components/Menu";

/**
 * Dropdown menu component
 */
export function Menu() {
  const classes = menuClasses();

  useEffect(() => {
    console.log(classes);
  }, [classes]);

  return <div className={classes.root}>Dropdown Menu component</div>;
}
