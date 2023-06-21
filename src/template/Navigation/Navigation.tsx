import { NavLink } from "react-router-dom";
import { useNavigationClasses } from "@/template/Navigation";

/**
 * Site Navigation
 */
export function Navigation() {
  const classes = useNavigationClasses();

  return (
    <nav className={classes.root}>
      <NavLink className={classes.link} to="/" title="Home Page">
        Home
      </NavLink>
      <NavLink className={classes.link} to="/login" title="Login">
        Login
      </NavLink>
      <NavLink className={classes.link} to="/dashboard" title="Dashboard">
        Dashboard
      </NavLink>
    </nav>
  );
}
