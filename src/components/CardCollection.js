import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Styles.module.css";
import Card from "./Card";

export default function () {
  const [data, setData] = useState(null);
  let [pageNo, setPageNo] = useState(1);

  const fetchRequiredData = () => {
    axios
      .get(`http://localhost:8080/music/?page=${pageNo}`)
      .then((respones) => {
        setData(respones.data);
        console.log(data);
      });
  };

  function handleChange() {
    setPageNo((prevCount) => prevCount + 1);
    fetchRequiredData();
  }

  function goBack() {
    setPageNo((prevCount) => prevCount - 1);
    fetchRequiredData();
  }

  useEffect(() => handleChange(), []);
  return (
    <div className={styles.CardCollection}>
      <button type="submit" onClick={goBack}>
        <span>&#8810;</span>
      </button>
      <button type="submit" onClick={handleChange}>
        <span>&#8811;</span>
      </button>
    </div>
  );
}
