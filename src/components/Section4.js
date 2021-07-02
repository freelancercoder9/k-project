import React from "react";
import "../style.css";
import bag from "../Ecommerce/bag.png";
import body from "../Ecommerce/body.png";
import humor from "../Ecommerce/humor.png";
import woodlandsShoes from "../Ecommerce/woodlandsShoes.png";
import scarf from "../Ecommerce/scarf.png";
function Section4() {
  return (
    <div className="">
      <div className="sec1-heading">Extra Savings</div>
      <div className="images-sec4 d-flex">
        <div className="div-left check">
          <div className="img1">
            <img src={bag} className="w-100" />
          </div>
          <div className="img2">
            <img src={woodlandsShoes} className="w-100" />
          </div>
        </div>
        <div className="div-middle check">
          <div>
            <img src={humor} className="w-100" />
          </div>
          <div className="fs-1 fw-bold text-center">Get Now!</div>
          <div className="div-btn">
            <button type="button" class="btn-img3 ">
              Shop Now
            </button>
          </div>
        </div>
        <div className="div-right check">
          <div className="img4"></div>
          <div className="img5"></div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
