import React from "react";
import "../style.css";

function Section3(props) {
  return (
    <div className="main-sec3 d-flex ">
      <div className="truck-sec3">
        <img src={props.img1} alt="truck" />
      </div>
      <div className="text-truck  p-3 my-5">
        <h4>{props.text1}</h4>
        <p>{props.text2}</p>
      </div>
    </div>
  );
}

export default Section3;
