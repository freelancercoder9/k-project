import React from "react";
import { NavLink, Link } from "react-router-dom";

function HomeScreen() {
  return (
    <div>
      <div>HomeScreen</div>
      <NavLink to="/section3" className="btn btn-primary">
        Section3
      </NavLink>
    </div>
  );
}

export default HomeScreen;
