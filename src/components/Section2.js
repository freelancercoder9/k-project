import React from "react";
import "../style.css";
import pocoX3 from "../Ecommerce/poco-X3.png";
import shoeSec2 from "../Ecommerce/shoeSec2.png";
import watch from "../Ecommerce/watch.png";
import headphones from "../Ecommerce/headphones.png";
function section2() {
  return (
    <div className="outerPane">
      <div className="pane">
        <img className="w-100" src={pocoX3} />
      </div>
      <div className="pane d-flex flex-column justify-content-evenly align-self-center">
        <div className="w-100 mb-3">
          <img className="w-100" src={shoeSec2} />
        </div>
        <div className="sampleStyle">
          <div className="paneSmall">
            <img src={headphones} className="w-100" />
          </div>
          <div className="paneSmall">
            <img src={watch} className="w-100" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default section2;
