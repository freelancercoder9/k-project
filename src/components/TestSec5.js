import React from "react";
import Section5 from "./Section5";
import chocolate from "../Ecommerce/chocolate-spread-hersheys.png";
import foggBottle from "../Ecommerce/fogg-bottle.png";
import speaker from "../Ecommerce/speaker.png";
import redmiPhone from "../Ecommerce/redmi-phone.png";
function TestSec5() {
  const images = [
    {
      imageName: redmiPhone,
      productName: "redmiPhone",
      price: "$00",
      rating: 4.5,
    },
    {
      imageName: speaker,
      productName: "speaker",
      price: "$00",
      rating: 4.5,
    },
    {
      imageName: foggBottle,
      productName: "foggBottle",
      price: "$00",
      rating: 4.5,
    },
    {
      imageName: chocolate,
      productName: "chocolate",
      price: "$00",
      rating: 4.5,
    },
  ];
  return (
    <div>
      <div className="container-main ">
        {images.map((item, index) => {
          return (
            <Section5
              imgSec5={item.imageName}
              pName={item.productName}
              rating={item.rating}
              price={item.price}
              key={index}
            ></Section5>
          );
        })}
      </div>
    </div>
  );
}

export default TestSec5;
