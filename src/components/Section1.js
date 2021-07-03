import React from "react";
import "../style.css";
function Section1(props) {
  return (
    <div className="main-sec1 border border-dark  ms-3">
      <div className="img-sec1 p-3 ">
        <img src={props.img1} className="" />
      </div>
      <div className="text-center">
        <h5>{props.text1}</h5>
        <p className="text-success my-1">{props.text2}</p>
        <p className="text-muted">{props.text3}</p>
      </div>
    </div>
  );
}

export default Section1;
