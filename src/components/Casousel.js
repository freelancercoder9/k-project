import React from "react";
import img1 from "../Ecommerce/img1.png";
import img2 from "../Ecommerce/img2.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Casousel() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        interval={3000}
        showThumbs={false}
        infiniteLoop={true}
      >
        <div>
          <img src={img1} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={img2} />
          <p className="legend">Legend 2</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Casousel;
