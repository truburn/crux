import { useEffect } from "react";
import { useLoadingClasses, LoadingProps } from "@/elements/Loading";

/**
 * Loading animation element
 */
export function Loading(props: LoadingProps) {
  const classes = useLoadingClasses();

  useEffect(() => {
    console.log("Loading.props", props);
  }, [props]);

  return <div className={classes.root}>Loading element</div>;
}
