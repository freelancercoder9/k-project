import React from "react";
import "../style.css";
import phoneSec1 from "../Ecommerce/redmi-phone.png";
import laptopSec1 from "../Ecommerce/ideapad-slim-5-thin-and-light-laptop-.png";
import television from "../Ecommerce/television.png";
import HomeSpeakers from "../Ecommerce/HomeSpeakers.png";
import shoes from "../Ecommerce/shoes.png";
import Section1 from "./Section1";
function TestSec1() {
  return (
    <div className="d-flex">
      <Section1
        img1={phoneSec1}
        text1={"Mobile Phones"}
        text2={"Great Offer"}
        text3={"Explore Now!"}
      ></Section1>
      <Section1
        img1={laptopSec1}
        text1={"Mobile Phones"}
        text2={"Great Offer"}
        text3={"Explore Now!"}
      ></Section1>
      <Section1
        img1={television}
        text1={"Televisions"}
        text2={"Min 20% Off"}
        text3={"Grab Now!"}
      ></Section1>
      <Section1
        img1={HomeSpeakers}
        text1={"Home Audio Speakers"}
        text2={"Min 40% Off"}
        text3={"Discover Now!"}
      ></Section1>
      <Section1
        img1={shoes}
        text1={"Sneaker"}
        text2={"Great Offer"}
        text3={"Explore Now!"}
      ></Section1>
    </div>
  );
}

export default TestSec1;
