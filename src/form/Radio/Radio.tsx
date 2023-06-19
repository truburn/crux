import { useEffect } from "react";
import { useRadioClasses, RadioProps } from "@/form/Radio";

/**
 * Form Radio Element
 */
export function Radio(props: RadioProps) {
  const classes = useRadioClasses();

  useEffect(() => {
    console.log("Radio.props", props);
  }, [props]);

  return <div className={classes.root}>Form Radio Element</div>;
}
