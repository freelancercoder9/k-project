import React from "react";
import "../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function HeadComp() {
  return (
    <nav class="navbar navbar-light ">
      <div class="container-fluid">
        <a class="navbar-brand">Image</a>
        <div class="d-flex ">
          <div className="head-search">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <input
            class="form-control me-2 "
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
      </div>
    </nav>
  );
}

export default HeadComp;
