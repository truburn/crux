import { useEffect } from "react";
import { usePanelClasses, PanelProps } from "@/components/Panel";

/**
 * Formatted Panel Component
 */
export function Panel(props: PanelProps) {
  const classes = usePanelClasses();

  useEffect(() => {
    console.log("Panel.props", props);
  }, [props]);

  return <div className={classes.root}>Panel Component</div>;
}
