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
    <div className={cx(classes.root, propClasses?.root)}>
      <Element className={cx(classes.title, propClasses?.title)}>
        {title}
      </Element>
      {subtitle && (
        <div className={cx(classes.subtitle, propClasses?.subtitle)}>
          {subtitle}
        </div>
      )}
    </div>
  );
}
