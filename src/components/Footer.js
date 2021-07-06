import React from "react";
import "../style.css";

function Footer() {
  return (
    <div className="main-footer d-flex justify-content-between">
      <div className="left-pane">
        <div className="left-pane-text p-4 ms-4">
          <h3>Secured Payment Methods</h3>
        </div>
        <div className="pane-img d-flex justify-content-evenly">
          <img src="https://cdn.animaapp.com/projects/60cf4b253c6cf939e36c5620/releases/60dda6116858d2bb134e0207/img/icon-payment-visa@1x.png" />
          <img src="https://cdn.animaapp.com/projects/60cf4b253c6cf939e36c5620/releases/60dda6116858d2bb134e0207/img/icon-simple-mastercard@1x.png" />
          <img src="https://cdn.animaapp.com/projects/60cf4b253c6cf939e36c5620/releases/60dda6116858d2bb134e0207/img/icon-simple-paypal@1x.png" />
          <img src="https://cdn.animaapp.com/projects/60cf4b253c6cf939e36c5620/releases/60dda6116858d2bb134e0207/img/icon-payment-apple-pay@1x.png" />
          <img src="https://cdn.animaapp.com/projects/60cf4b253c6cf939e36c5620/releases/60dda6116858d2bb134e0207/img/icon-payment-jcb@1x.png" />
        </div>
      </div>
      <div className="right-pane">
        <div className="right-pane-text p-4 ms-5">
          <h3>Our Courier Partners</h3>
        </div>
        <div className="pane-img d-flex justify-content-evenly">
          <img src="https://cdn.animaapp.com/projects/60cf4b253c6cf939e36c5620/releases/60dda6116858d2bb134e0207/img/icon-awesome-fedex@1x.png" />
          <img src="https://cdn.animaapp.com/projects/60cf4b253c6cf939e36c5620/releases/60dda6116858d2bb134e0207/img/icon-awesome-dhl@1x.png" />
          <img src="https://cdn.animaapp.com/projects/60cf4b253c6cf939e36c5620/releases/60dda6116858d2bb134e0207/img/icon-awesome-ups@1x.png" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
