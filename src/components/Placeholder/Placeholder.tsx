import { useEffect } from "react";
import {
  usePlaceholderClasses,
  PlaceholderProps,
} from "@/components/Placeholder";

/**
 * Placeholder element
 */
export function Placeholder(props: PlaceholderProps) {
  const classes = usePlaceholderClasses();

  useEffect(() => {
    console.log("Placeholder.props", props);
  }, [props]);

  return <div className={classes.root}>Placeholder element</div>;
}
