import { NavLink } from "react-router-dom";
import { ReactComponent as MainLogo } from "../assets/img/logo.svg"


function Logo({ color }) {
  return (
    <NavLink to="/">
      <MainLogo fill={color} />
    </NavLink>
  );
}

export default Logo;