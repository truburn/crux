import { useEffect } from "react";
import { useModalClasses, ModalProps } from "@/components/Modal";

/**
 * Modal Component
 */
export function Modal(props: ModalProps) {
  const classes = useModalClasses();

  useEffect(() => {
    console.log("Modal.props", props);
  }, [props]);

  return <div className={classes.root}>Modal Component</div>;
}
