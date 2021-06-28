import React from "react";
import "../style.css";
import truck from "../Ecommerce/truck.png";
import personalGuarantee from "../Ecommerce/personal-guarantee.png";
import creditCard from "../Ecommerce/credit-card.png";
import Section3 from "./Section3";
function TestSec3() {
  return (
    <div className=" main-TestSec3 bg-light">
      <Section3
        img1={truck}
        text1={"Free Shipping"}
        text2={"Free Shipping all orders"}
      ></Section3>
      <Section3
        img1={personalGuarantee}
        text1={"100% Money Guarantee"}
        text2={"30 days money back"}
      ></Section3>
      <Section3
        img1={creditCard}
        text1={"Payment Method"}
        text2={"Secure Payment "}
      ></Section3>
    </div>
  );
}

export default TestSec3;
