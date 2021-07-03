import React from "react";
import "../style.css";
import phoneSec1 from "../Ecommerce/redmi-phone.png";
import laptopSec1 from "../Ecommerce/ideapad-slim-5-thin-and-light-laptop-.png";
import television from "../Ecommerce/television.png";
import HomeSpeakers from "../Ecommerce/HomeSpeakers.png";
import shoes from "../Ecommerce/shoes.png";
import Section1 from "./Section1";
import ScrollMenu from "react-horizontal-scrolling-menu";

const productList = [
  {
    imageName: phoneSec1,
    productName: "Mobile Phones",
    offerType: "Great Offer",
    actionType: "Explore Now!",
  },
  {
    imageName: laptopSec1,
    productName: "Mobile Phones",
    offerType: "Great Offer",
    actionType: "Explore Now!",
  },
  {
    imageName: television,
    productName: "Mobile Phones",
    offerType: "Televisions",
    actionType: "Explore Now!",
  },
  {
    imageName: HomeSpeakers,
    productName: "Mobile Phones",
    offerType: "Min 20% Off",
    actionType: "Discover Now!",
  },
  {
    imageName: shoes,
    productName: "Mobile Phones",
    offerType: "Great Offer",
    actionType: "Explore Now!",
  },
  {
    imageName: phoneSec1,
    productName: "Mobile Phones",
    offerType: "Great Offer",
    actionType: "Explore Now!",
  },
  {
    imageName: laptopSec1,
    productName: "Mobile Phones",
    offerType: "Great Offer",
    actionType: "Explore Now!",
  },
  {
    imageName: television,
    productName: "Mobile Phones",
    offerType: "Televisions",
    actionType: "Explore Now!",
  },
  {
    imageName: HomeSpeakers,
    productName: "Mobile Phones",
    offerType: "Min 20% Off",
    actionType: "Discover Now!",
  },
  {
    imageName: shoes,
    productName: "Mobile Phones",
    offerType: "Great Offer",
    actionType: "Explore Now!",
  },
];
function TestSec1() {
  return (
    <div>
      <div className="sec1-heading">Top Selections</div>
      <ScrollMenu
        arrowLeft={<div style={{ fontSize: "30px" }}>{" < "}</div>}
        arrowRight={<div style={{ fontSize: "30px" }}>{" > "}</div>}
        data={productList.map((item, index) => (
          <Section1 img1={item.imageName} text1={item.productName} text2={item.offerType} text3={item.actionType}></Section1>
        ))}
      />
    </div>
  );
}

export default TestSec1;
