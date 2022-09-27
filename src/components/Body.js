import React from "react";
import styles from "../styles/Styles.module.css";
import CardCollection from "./CardCollection";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";

export default function Body() {
  return (
    <main className={styles.Body}>
      <NavigationBar />
      <CardCollection />
      <Footer />
    </main>
  );
}
