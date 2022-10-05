import React, { useEffect, useState } from "react";
import CardCollection from "./CardCollection";
import styles from "../styles/Styles.module.css";

export default function FetchData() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:8080/music/?page=1`)
      .then((response) => {
        return response.json();
      })
      .then((data) => setData(data))
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  return (
    <div className={styles.cardContainer}>
    <h1 className={styles.subTitle}>Artist</h1>
      {data && <CardCollection data={data} />}
    </div>
  );
}
