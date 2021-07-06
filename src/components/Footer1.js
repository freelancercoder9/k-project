import React from "react";
import "../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

function Footer1() {
  return (
    <div className="main-footer1 row">
      <div className="pane1 col-md-4">
        <img src="https://cdn.animaapp.com/projects/60cf4b253c6cf939e36c5620/releases/60dda6116858d2bb134e0207/img/1e2977ca1225981e307ad8d2c26a9040-1@1x.png" />
        <h4 className="ms-4">E-commerce project design</h4>
      </div>
      <div className="pane2 col-md-2 text-center">
        <h4 className="fw-bold mb-4 pt-5">Company</h4>
        <h5>About</h5>
        <h5>Products</h5>
        <h5>Stores</h5>
        <h5>FAQ</h5>
      </div>
      <div className="pane3 col-md-3 text-center">
        <h4 className="fw-bold mb-4 pt-5">Services</h4>
        <h5>Delivery</h5>
        <h5>Payment</h5>
        <h5>Contacts</h5>
        <h5>Careers</h5>
      </div>
      <div className="pane4 col-md-3 ">
        <h4 className="fw-bold mb-4 pt-5">Follow US</h4>
        <img src="https://cdn.animaapp.com/projects/60cf4b253c6cf939e36c5620/releases/60dda6116858d2bb134e0207/img/icon-awesome-instagram@1x.png" />
        <img src="https://cdn.animaapp.com/projects/60cf4b253c6cf939e36c5620/releases/60dda6116858d2bb134e0207/img/icon-awesome-facebook@1x.png" />
        <img src="https://cdn.animaapp.com/projects/60cf4b253c6cf939e36c5620/releases/60dda6116858d2bb134e0207/img/icon-awesome-twitter@1x.png" />
        <img src="https://cdn.animaapp.com/projects/60cf4b253c6cf939e36c5620/releases/60dda6116858d2bb134e0207/img/icon-awesome-pinterest@1x.png" />
        <img src="https://cdn.animaapp.com/projects/60cf4b253c6cf939e36c5620/releases/60dda6116858d2bb134e0207/img/icon-awesome-youtube@1x.png" />
        <h4 className="fw-bold mb-4 pt-5">Get our Newsletters:</h4>
        <div className=" pane4-input d-flex">
          <div className="pane4-text">Your Email</div>
          <img
            src="https://cdn.animaapp.com/projects/60cf4b253c6cf939e36c5620/releases/60dda6116858d2bb134e0207/img/check@1x.png"
            className=""
          />
        </div>
      </div>
      <div className=" terms-cond row my-5">
        <h5 className="col-md-6">2020 shopp.my.All rights Reserved</h5>
        <h5 className="col-md-4 ">Terms & Conditions</h5>
        <h5 className="col-md-2">Privacy Policy</h5>
      </div>
    </div>
  );
}

export default Footer1;
