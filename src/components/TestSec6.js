import React from "react";
import Section6 from "./Section6";
import "../style.css";
import whiteWatch from "../Ecommerce/whiteWatch.png";
import appleWatch from "../Ecommerce/appleWatch.png";
import earPhones from "../Ecommerce/earPhones.png";
import fastrack from "../Ecommerce/fastrack.png";

function TestSec6() {
  const data = [
    {
      image: whiteWatch,
      text1: "White Watches",
      text2: "A classic in every sense of the world",
      text3: "+ Explore",
    },
    {
      image: appleWatch,
      text1: "Apple Watches",
      text2: "Explore the new devices",
      text3: "+ Explore",
    },
    {
      image: earPhones,
      text1: "Earphones",
      text2: "Enhance your sound world",
      text3: "+ Explore",
    },
    {
      image: fastrack,
      text1: "Fastrack",
      text2: "A new world where sports meet sass",
      text3: "+ Explore",
    },
    {
      image: earPhones,
      text1: "Earphones",
      text2: "Enhance your sound world",
      text3: "+ Explore",
    },
    {
      image: fastrack,
      text1: "Fastrack",
      text2: "A new world where sports meet sass",
      text3: "+ Explore",
    },
    {
      image: whiteWatch,
      text1: "White Watches",
      text2: "A classic in every sense of the world",
      text3: "+ Explore",
    },
    {
      image: appleWatch,
      text1: "Apple Watches",
      text2: "Explore the new devices",
      text3: "+ Explore",
    },
  ];
  return (
    <div>
      <div className="sec1-heading">TRENDING IN ACCESORIES</div>
      <div className="container-main-sec6">
        {data.map((item, index) => {
          return (
            <Section6
              image={item.image}
              text1={item.text1}
              text2={item.text2}
              text3={item.text3}
            ></Section6>
          );
        })}
      </div>
    </div>
  );
}

export default TestSec6;
