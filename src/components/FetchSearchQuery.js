import React, { useEffect, useState } from "react";
import CardCollection from "./CardCollection";
import styles from "../styles/Styles.module.css";

export default function FetchSearchQuery() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const search = () => {
    setLoading(true);
    fetch(`http://localhost:8080/music/?search=${searchQuery}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => setData(data))
      .then(() => setLoading(false))
      .catch(setError);
  };
  if (loading) return <h1>Searching ...</h1>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  return (
    <div className={styles.cardContainer}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={search}>Search</button>
      {data && <CardCollection data={data} />}
      <br />
    </div>
  );
}
