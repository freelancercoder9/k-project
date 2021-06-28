import React from "react";
import "../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUserCircle } from "@fortawesome/free-regular-svg-icons";
import shoppingCart from "../Ecommerce/shopping-cart.png";
import MediaQuery from "react-responsive";

const NavbarHeader = () => (
  <nav class="navbar navbar-light">
    <div class="container-fluid">
      <div>Logo-Image</div>
      <div className="search-header">
        <MediaQuery minWidth={800}>
          <div className="search-div">
            <FontAwesomeIcon
              icon={faSearch}
              className="head-icon fs-5 ms-2"
            ></FontAwesomeIcon>
            <input
              type="text"
              placeholder="Search"
              className="search bg-light border border-light"
            />
          </div>
        </MediaQuery>
        <FontAwesomeIcon icon={faUserCircle} className="fs-3"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faHeart} className="fs-3"></FontAwesomeIcon>
        <img src={shoppingCart} />
        <FontAwesomeIcon icon={faBars} className="fs-3"></FontAwesomeIcon>
      </div>
    </div>
  </nav>
);

export default NavbarHeader;
