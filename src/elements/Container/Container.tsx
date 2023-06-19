import { useEffect } from "react";
import { useContainerClasses, ContainerProps } from "@/elements/Container";

/**
 * Simple container element
 */
export function Container(props: ContainerProps) {
  const classes = useContainerClasses();

  useEffect(() => {
    console.log("Container.props", props);
  }, [props]);

  return <div className={classes.root}>Container Element</div>;
}
