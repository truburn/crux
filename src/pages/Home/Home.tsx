import { useEffect } from "react";
import { useHomeClasses, HomeProps } from "@/pages/Home";

/**
 * Home Page
 */
export function Home(props: HomeProps) {
  const classes = useHomeClasses();

  useEffect(() => {
    console.log("Home.props", props);
  }, [props]);

  return <div className={classes.root}>Home Page</div>;
}
