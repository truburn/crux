import { useEffect } from "react";
import { useImageClasses, ImageProps } from "@/elements/Image";

/**
 * Image element
 */
export function Image(props: ImageProps) {
  const classes = useImageClasses();

  useEffect(() => {
    console.log("Image.props", props);
  }, [props]);

  return <div className={classes.root}>Image Element</div>;
}
