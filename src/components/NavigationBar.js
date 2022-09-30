/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styles from "../styles/Styles.module.css";
import NavbarLink from "./NavbarLink";

export default function NavigationBar() {
  return (
    <nav className={styles.navbar}>
      <img src={require("../assets/logo.png")} className={styles.navbarLogo} />
      <div className={styles.navbarLink}>
        <NavbarLink />
        <h3 className={styles.subheading}>Search</h3>
      </div>
    </nav>
  );
}
