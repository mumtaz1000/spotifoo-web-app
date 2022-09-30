import React, { useEffect, useState } from "react";
import CardCollection from "./CardCollection"

export default function FetchData() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch(`http://localhost:8080/music/?page=1`)
    .then((response) =>  {return response.json()})
    .then(data => setData(data))
    },[]);
  return (
    <div >
    {data && <CardCollection data = {data}/>}
    </div>
  )
}
