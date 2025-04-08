import React, { useEffect, useState } from "react";
import Webserivce from "./Webserivce";



function Webservices() {
    const [webservic , setWebServices] =useState([])
  useEffect(() => {
    fetch("/public/singapore_web_design.json")
      .then((res) => res.json())
      .then((data) => {
        setWebServices(data)
        // console.log(data.length)
    
      });
  }, []);
 
  return <div className="gird grid-cols-4 gap-2">
    {
        webservic.map((data,idx)=>{
            {/* console.log(data) */}
        <Webserivce key={idx} data={data}></Webserivce>
        })
    }
  </div>;
}

export default Webservices;
