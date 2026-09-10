import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

import { useContext } from "react";
import AuthContext from "./context/AuthContext.jsx";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  console.log("User in Navbar:", user);


  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MyApp</div>

      <div className={styles.links}>
        <NavLink to="/" className={styles.link}>
          HOME
        </NavLink>

        <NavLink to="/signup" className={styles.link}>
          Sign Up
        </NavLink>

        <NavLink to="/signin" className={styles.link}>
          Sign In
        </NavLink>

        <NavLink to="/users" className={styles.link}>
          GetUsers
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;