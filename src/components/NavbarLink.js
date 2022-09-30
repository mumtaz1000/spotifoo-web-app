/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styles from "../styles/Styles.module.css";
import HomeLogo from "../assets/icons/home.svg";

export default function NavbarLink() {
  return (
    <nav>
      <img src={HomeLogo} className={styles.homeLogo} />
      <h3 className={styles.subheading}>Home</h3>
    </nav>
  );
}
