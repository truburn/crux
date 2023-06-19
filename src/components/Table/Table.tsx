import { useEffect } from "react";
import { useTableClasses, TableProps } from "@/components/Table";

/**
 * Table element
 */
export function Table(props: TableProps) {
  const classes = useTableClasses();

  useEffect(() => {
    console.log("Table.props", props);
  }, [props]);

  return <div className={classes.root}>Table</div>;
}
