import { useEffect } from "react";
import { useHeaderClasses, HeaderProps } from "@/template/Header";

/**
 * Site Header
 */
export function Header(props: HeaderProps) {
  const classes = useHeaderClasses();

  useEffect(() => {
    console.log("Header.props", props);
  }, [props]);

  return <div className={classes.root}>Site Header</div>;
}
