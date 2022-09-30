import React from "react";
import styles from "../styles/Styles.module.css";

export default function CardCollection({ data }) {
  console.log(data);
  return (
    <div className={styles.CardCollection}>
    <ul className={styles.CardContainer}>
      {Object.entries(data).map(([key, value]) => (
        <li key={key} className={styles.Card}>
          <img src={value.pathToAlbum} className={styles.AlbumImage} />
          <h3 style={{ marginLeft: "15px" }}>{value.title} </h3>
        </li>
      ))}
    </ul>
    </div>
  );
}
