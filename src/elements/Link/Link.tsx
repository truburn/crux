import { cx } from "@emotion/css";
import { faUpRightFromSquare } from "@fortawesome/pro-solid-svg-icons";
import { useLinkClasses, LinkProps } from "@/elements/Link";
import { Icon } from "@/elements/Icon";

/**
 * Link element
 */
export function Link(props: LinkProps) {
  const { to, children, external, classes: propClasses } = props;
  const classes = useLinkClasses();

  return (
    <a
      href={to}
      target={external ? "_blank" : "_self"}
      rel={external ? "noreferrer" : ""}
      className={cx(classes.root, propClasses?.root)}
    >
      {children}
      {external && (
        <Icon
          icon={faUpRightFromSquare}
          className={cx(classes.externalIcon, propClasses?.externalIcon)}
        />
      )}
    </a>
  );
}
