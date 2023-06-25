import { cx } from "@emotion/css";
import { useHeadingClasses, HeadingProps } from "@/typography/Heading";

/**
 * Heading element for sections within a page
 */
export function Heading(props: HeadingProps) {
  const {
    title = "Heading Title",
    subtitle,
    classes: propClasses,
    as: Element = "h2",
  } = props;
  const classes = useHeadingClasses();

  return (
    <Element className={cx(classes.root, propClasses?.root)}>
      <span className={cx(classes.title, propClasses?.title)}>{title}</span>
      {subtitle && (
        <small className={cx(classes.subtitle, propClasses?.subtitle)}>
          {subtitle}
        </small>
      )}
    </Element>
  );
}
