import { useEffect } from "react";
import { useLayoutClasses, LayoutProps } from "@/template/Layout";

/**
 * Site Layout Wrapper
 */
export function Layout(props: LayoutProps) {
  const classes = useLayoutClasses();

  useEffect(() => {
    console.log("Layout.props", props);
  }, [props]);

  return <div className={classes.root}>Site Layout Wrapper</div>;
}
