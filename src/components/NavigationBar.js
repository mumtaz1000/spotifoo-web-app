/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styles from "../styles/Styles.module.css"

export default function NavigationBar() {
  return (
    <nav className={styles.Navbar}>
      <img src={require("../assets/logo.png")}
      className = {styles.NavbarLogo}
      />
      
    </nav>
  );
}
