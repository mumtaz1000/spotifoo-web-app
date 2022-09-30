import React from "react";
import styles from "../styles/Styles.module.css";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";
import FetchData from "./FetchData";

export default function Body() {
  return (
    <main className={styles.Body}>
      <NavigationBar />
      <FetchData />
      <Footer />
    </main>
  );
}
