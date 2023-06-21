import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cx } from "@emotion/css";
import { useIconClasses, IconProps } from "@/elements/Icon";

/**
 * Icon element
 */
export function Icon(props: IconProps) {
  const { className, ...iconProps } = props;
  const classes = useIconClasses();

  return (
    <FontAwesomeIcon className={cx(classes.root, className)} {...iconProps} />
  );
}
