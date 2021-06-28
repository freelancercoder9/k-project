import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
function Section5(props) {
  return (
    <div className="main-sec5 p-3">
      <div className="sec5 ">
        <div className="sec5-img  bg-light">
          <img src={props.imgSec5} />
        </div>
        <div className="d-flex justify-content-between p-1 fs-3 fw-bold">
          <div>{props.pName}</div>
          <div>
            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
          </div>
        </div>
        <div className="p-1 fw-bold">
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar} className="ms-1"></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar} className="ms-1"></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStarHalf} className="ms-1"></FontAwesomeIcon>
        </div>
        <div className="p-1 fs-4 fw-bold">{props.price}</div>
      </div>
    </div>
  );
}

export default Section5;
