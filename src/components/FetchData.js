/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import axios from "axios";


export default function FetchData() {
  const [data, setData] = useState(null);
  const fetchRequiredData = () => {
    axios.get(`http://localhost:8080/music/?page=2`).then((respones) => {
      setData(respones.data);
    });
  };
  useEffect(() => fetchRequiredData(), []);
  return {data};
}
