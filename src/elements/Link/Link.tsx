import { useEffect } from "react";
import { useLinkClasses, LinkProps } from "@/elements/Link";

/**
 * Link element
 */
export function Link(props: LinkProps) {
  const classes = useLinkClasses();

  useEffect(() => {
    console.log("Link.props", props);
  }, [props]);

  return <div className={classes.root}>Link element</div>;
}
