/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styles from "../styles/Styles.module.css";
import NavbarLink from "./NavbarLink";

export default function NavigationBar() {
  return (
    <nav className={styles.Navbar}>
      <img src={require("../assets/logo.png")} className={styles.NavbarLogo} />
      <div className={styles.NavbarLink}>
        <NavbarLink />
        <h3 className={styles.Subheading}>Search</h3>
      </div>
    </nav>
  );
}
