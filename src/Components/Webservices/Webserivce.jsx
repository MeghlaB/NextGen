import React from "react";

function Webserivce({ data }) {
  console.log(data.agency);
  console.log("this is form webservice")
  return (
    <div>
      <div className="card w-96 bg-base-100 card-xs shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Xsmall Card</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Webserivce;
