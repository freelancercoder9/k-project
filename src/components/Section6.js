import React from "react";
import whiteWatch from "../Ecommerce/whiteWatch.png";

function Section6(props) {
  return (
    <div>
      <div className="main-sec6 ">
        <div className="sec6-img">
          <img src={props.image} alt="" />
        </div>
        <div>
          <h3>{props.text1}</h3>
          <p>{props.text2}</p>
          <p>{props.text3}</p>
        </div>
      </div>
    </div>
  );
}

export default Section6;
