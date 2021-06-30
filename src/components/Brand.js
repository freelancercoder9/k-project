import React from "react";
import "../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";

function Brand() {
  return (
    <div className="main-brand">
      <div className=" brand fw-bold fs-5 p-2">
        Enjoy free shipping on all orders with code FREESHIP.See terms
        <FontAwesomeIcon icon={faArrowRight} className="ms-2"></FontAwesomeIcon>
      </div>
      <div className="menu-bar">
        <div>Electronics</div>
        <div>Fashions</div>
        <div>Home</div>
        <div>Appliances</div>
        <div>Grocery</div>
        <div>Beauty</div>
        <div>Books</div>
      </div>
    </div>
  );
}

export default Brand;
