import { useEffect } from "react";
import { cx } from "@emotion/css";
import { useContainerClasses, ContainerProps } from "@/elements/Container";

/**
 * Simple container element
 */
export function Container(props: ContainerProps) {
  const { children, className, as: Element = "div", id } = props;
  const classes = useContainerClasses();

  useEffect(() => {
    console.log("Container.props", props);
  }, [props]);

  return (
    <Element id={id} className={cx(classes.root, className)}>
      {children}
    </Element>
  );
}
