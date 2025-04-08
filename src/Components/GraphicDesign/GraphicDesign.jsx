import React, { useEffect, useState } from "react";
import GraphicDesigns from "./GraphicDesigns";


function GraphicDesign() {
  const [graphicdesign, setGraphicDesign] = useState([]);

  useEffect(() => {
    fetch("graphic_design.json")
      .then((res) => res.json())
      .then((data) => {
        setGraphicDesign(data);
        console.log(data)
      });
  }, []);

  return (
    <div className="container mx-auto grid grid-cols-3 gap-4 px-2 py-6  ">
      {graphicdesign.map((data, idx) => (
      <GraphicDesigns key={idx} data={data}></GraphicDesigns>
        
      ))}
    </div>
  );
}

export default GraphicDesign;

