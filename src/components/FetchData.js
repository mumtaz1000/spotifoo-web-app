import React, { useEffect, useState } from "react";
import CardCollection from "./CardCollection";
import styles from "../styles/Styles.module.css"

export default function FetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/music/?page=1`)
      .then((response) => {
        return response.json();
      })
      .then((data) => setData(data));
  }, []);
  return <div className={styles.cardContainer}>{data && <CardCollection data={data} />}</div>;
}
