import React from "react";
import styles from "../styles/Styles.module.css";

export default function CardCollection({ data }) {
  console.log(data);
  return (
      <ul className={styles.cardCollection}>
        {Object.entries(data).map(([key, value]) => (
          <li key={key} className={styles.card}>
            <img src={value.pathToAlbum} className={styles.albumImage} />
            <h3 className={styles.cardTitle}>{value.title} </h3>
          </li>
        ))}
      </ul>
  );
}
