import { useEffect } from "react";
import { useDashboardClasses, DashboardProps } from "@/pages/Dashboard";

/**
 * Dashboard Page
 */
export function Dashboard(props: DashboardProps) {
  const classes = useDashboardClasses();

  useEffect(() => {
    console.log("Dashboard.props", props);
  }, [props]);

  return <div className={classes.root}>Dashboard</div>;
}
