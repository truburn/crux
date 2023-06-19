import { useEffect } from "react";
import { useFooterClasses, FooterProps } from "@/template/Footer";

/**
 * Site Footer
 */
export function Footer(props: FooterProps) {
  const classes = useFooterClasses();

  useEffect(() => {
    console.log("Footer.props", props);
  }, [props]);

  return <div className={classes.root}>Site Footer</div>;
}
