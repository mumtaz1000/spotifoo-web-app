import React from "react";
import styles from "../styles/Styles.module.css";
import Card from "../components/Card";

export default function CardCollection() {
  return (
    <section className={styles.CardCollection}>
      <section className={styles.CardContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </section>
  );
}
