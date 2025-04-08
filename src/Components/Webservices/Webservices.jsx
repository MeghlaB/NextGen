import React, { useEffect, useState } from "react";
import Webserivce from "./Webserivce";

function Webservices() {
  const [webservice, setWebServices] = useState([]);

  useEffect(() => {
    fetch("singapore_web_design.json")
      .then((res) => res.json())
      .then((data) => {
        setWebServices(data);
      });
  }, []);

  return (
    <div className="container mx-auto grid grid-cols-3 gap-4 px-2 py-6  ">
      {webservice.map((data, idx) => (
        <Webserivce key={idx} data={data} />
      ))}
    </div>
  );
}

export default Webservices;
