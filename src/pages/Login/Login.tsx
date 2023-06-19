import { useEffect } from "react";
import { useLoginClasses, LoginProps } from "@/pages/Login";

/**
 * Login Page
 */
export function Login(props: LoginProps) {
  const classes = useLoginClasses();

  useEffect(() => {
    console.log("Login.props", props);
  }, [props]);

  return <div className={classes.root}>Login Page</div>;
}
