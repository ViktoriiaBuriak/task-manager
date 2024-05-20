import { NavLink } from "react-router-dom"
import css from "./AuthMenu.module.css"


const AuthMenu = () => {
  return (
    <div className={css.authMenu}>
      <NavLink to="/register">Registration Page</NavLink>
      <NavLink to="/login">Login Page</NavLink>
    </div>
  );
}

export default AuthMenu