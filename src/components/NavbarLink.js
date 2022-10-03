/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styles from "../styles/Styles.module.css";
import HomeLogo from "../assets/icons/home.svg";
import SearchLogo from "../assets/icons/search.svg"
import { Link } from "react-router-dom";

export default function NavbarLink() {
  return (
    <nav>
      <Link to="/" className={styles.link}>
        <span className={styles.subheading}>
          <img src={HomeLogo} className={styles.homeLogo} />
          Home
        </span>
      </Link>

      <Link to="/search" className={styles.link}>
        <span className={styles.subheading}>
          <img src={SearchLogo} className={styles.homeLogo} />
          Search
        </span>
      </Link>
    </nav>
  );
}
