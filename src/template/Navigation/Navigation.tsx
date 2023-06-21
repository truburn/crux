import { NavLink } from "react-router-dom";
import { useNavigationClasses } from "@/template/Navigation";
import { Icon } from "@/elements/Icon";
import {
  faHouseChimney,
  faGaugeHigh,
  faArrowRightToArc,
} from "@fortawesome/pro-duotone-svg-icons";

/**
 * Site Navigation
 */
export function Navigation() {
  const classes = useNavigationClasses();

  return (
    <nav className={classes.root}>
      <NavLink className={classes.link} to="/" title="Home Page">
        <Icon className={classes.icon} icon={faHouseChimney} title="Home" />
      </NavLink>
      <NavLink className={classes.link} to="/login" title="Login">
        <Icon className={classes.icon} icon={faGaugeHigh} title="Login" />
      </NavLink>
      <NavLink className={classes.link} to="/dashboard" title="Dashboard">
        <Icon
          className={classes.icon}
          icon={faArrowRightToArc}
          title="Dashboard"
        />
      </NavLink>
    </nav>
  );
}
