import { useEffect } from "react";
import { useListClasses, ListProps } from "@/typography/List";

/**
 * List element
 */
export function List(props: ListProps) {
  const classes = useListClasses();

  useEffect(() => {
    console.log(".props", props);
  }, [props]);

  return <div className={classes.root}>List</div>;
}
