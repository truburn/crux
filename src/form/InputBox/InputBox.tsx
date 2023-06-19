import { useEffect } from "react";
import { useInputBoxClasses, InputBoxProps } from "@/form/InputBox";

/**
 * Form Input Box element
 */
export function InputBox(props: InputBoxProps) {
  const classes = useInputBoxClasses();

  useEffect(() => {
    console.log("InputBox.props", props);
  }, [props]);

  return <div className={classes.root}>Form Input Box Element</div>;
}
