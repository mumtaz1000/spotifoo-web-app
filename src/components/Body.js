import React from "react";
import styles from "../styles/Styles.module.css";
import NavigationBar from "./NavigationBar";

export default function Body() {
  return (
    <body className={styles.Body}>
      <NavigationBar />
    </body>
  );
}
