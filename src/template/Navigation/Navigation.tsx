import { useEffect } from "react";
import { useNavigationClasses, NavigationProps } from "@/template/Navigation";

/**
 * Site Navigation
 */
export function Navigation(props: NavigationProps) {
  const classes = useNavigationClasses();

  useEffect(() => {
    console.log("Navigation.props", props);
  }, [props]);

  return <div className={classes.root}>Site Navigation</div>;
}
