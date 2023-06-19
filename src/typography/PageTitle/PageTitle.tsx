import { useEffect } from "react";
import { usePageTitleClasses, PageTitleProps } from "@/typography/PageTitle";

/**
 * Standardized Page Title Heading
 */
export function PageTitle(props: PageTitleProps) {
  const classes = usePageTitleClasses();

  useEffect(() => {
    console.log(".props", props);
  }, [props]);

  return <div className={classes.root}>Page Title</div>;
}
