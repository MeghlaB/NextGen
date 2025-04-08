import React, { useEffect, useState } from "react";

import Marketings from "./Marketings";


function Marketing() {
  const [marketing, setMarketing] = useState([]);

  useEffect(() => {
    fetch("marketing.json")
      .then((res) => res.json())
      .then((data) => {
        setMarketing(data);
        console.log(data)
      });
  }, []);

  return (
    <div className="container mx-auto grid grid-cols-3 gap-4 px-2 py-6 ">
      {marketing.map((data, idx) => (
      <Marketings key={idx} data={data}></Marketings>
        
      ))}
    </div>
  );
}

export default Marketing;

