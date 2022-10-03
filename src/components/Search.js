import React from "react";
import styles from "../styles/Styles.module.css";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";
import FetchSearchQuery from "./FetchSearchQuery"

export default function Search() {
  return (
    <main className={styles.body}>
      <NavigationBar />
      <FetchSearchQuery />
      <Footer />
    </main>
  );
}
