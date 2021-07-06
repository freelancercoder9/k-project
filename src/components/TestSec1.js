import React from "react";
import "../style.css";
import phoneSec1 from "../Ecommerce/redmi-phone.png";
import laptopSec1 from "../Ecommerce/ideapad-slim-5-thin-and-light-laptop-.png";
import television from "../Ecommerce/television.png";
import HomeSpeakers from "../Ecommerce/HomeSpeakers.png";
import shoes from "../Ecommerce/shoes.png";
import Section1 from "./Section1";
import ScrollMenu from "react-horizontal-scrolling-menu";

function TestSec1() {
  var productList = [
    {
      itemImage: phoneSec1,
      productName: "Mobile Phones",
      offerType: "Great Offer",
      actionType: "Mobile Phones",
    },
    {
      itemImage: laptopSec1,
      productName: "Mobile Phones",
      offerType: "Great Offer",
      actionType: "Mobile Phones",
    },
    {
      itemImage: television,
      productName: "Televisions",
      offerType: "Min 20% Off",
      actionType: "Discover Now!",
    },
    {
      itemImage: HomeSpeakers,
      productName: "Home Audio Speakers",
      offerType: "Min 20% Off",
      actionType: "Discover Now!",
    },
    {
      itemImage: shoes,
      productName: "Sneaker",
      offerType: "Great Offer",
      actionType: "Mobile Phones",
    },
    {
      itemImage: television,
      productName: "Televisions",
      offerType: "Min 20% Off",
      actionType: "Discover Now!",
    },
    {
      itemImage: HomeSpeakers,
      productName: "Home Audio Speakers",
      offerType: "Min 20% Off",
      actionType: "Discover Now!",
    },
    {
      itemImage: shoes,
      productName: "Sneaker",
      offerType: "Great Offer",
      actionType: "Mobile Phones",
    },
  ];

  return (
    <div>
      <div className="sec1-heading">TOP SELECTIONS</div>
      <ScrollMenu
        arrowLeft={<div style={{ fontSize: "30px" }}>{" < "}</div>}
        arrowRight={<div style={{ fontSize: "30px" }}>{" > "}</div>}
        data={productList.map((item, index) => {
          return (
            <Section1
              img1={item.itemImage}
              text1={item.productName}
              text2={item.offerType}
              text3={item.actionType}
            ></Section1>
          );
        })}
      ></ScrollMenu>
    </div>
  );
}

export default TestSec1;
