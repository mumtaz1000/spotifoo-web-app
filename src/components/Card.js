import React from "react";
import styles from "../styles/Styles.module.css";

export default function Card(props) {
  const data = props.data;
  console.log("Data from card " + data);
  return (
    <ul className={styles.CardContainer}>
      {data.map(([key, value]) => (
        <li key={key} className={styles.Card}>
          <img src={value.pathToAlbum} className={styles.AlbumImage} />
          <h3 style={{ marginLeft: "15px" }}>{value.title} </h3>
        </li>
      ))}
    </ul>
  );
}
