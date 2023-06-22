import { useEffect } from "react";
import {
  useErrorBoundaryClasses,
  ErrorBoundaryProps,
} from "@/pages/ErrorBoundary";

/**
 * ErrorBoundary Page
 */
export function ErrorBoundary(props: ErrorBoundaryProps) {
  const classes = useErrorBoundaryClasses();

  useEffect(() => {
    console.log("ErrorBoundary.props", props);
  }, [props]);

  return <div className={classes.root}>ErrorBoundary</div>;
}
