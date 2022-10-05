import React, { useState } from "react";
import styles from "../styles/Styles.module.css";

export default function CardCollection({ data }) {
  const [audioFile, setAudioFile] = useState(null);

  const playAudio = (path) => {
    const audio = new Audio(path)
    audio.play();
  };


  return (
    <ul className={styles.cardCollection}>
      {Object.entries(data).map(([key, value]) => (
        <li key={key} className={styles.card}>
          <img
            src={value.pathToAlbum}
            className={styles.albumImage}
            onClick={()=>{
              playAudio(value.pathToMusic)
            }}
          />
          <h3 className={styles.cardTitle}>{value.title} </h3>
          <audio controls>
            <source src={value.pathToMusic} 
            type="audio/mpeg"></source>
            </audio>
        </li>
        
      ))}
    </ul>
  );
}
