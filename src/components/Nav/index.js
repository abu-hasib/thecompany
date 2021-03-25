import React from "react";
import "./index.css";
import logo from "../../assets/logo.png";

const AppBar = () => {
  return (
    <nav className="navbar container">
      <div className="logo">
        <img src={logo} alt="" srcSet={logo} />
      </div>
      <ul className="nav">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Careers</a>
        </li>
        <li>
          <a href="">Events</a>
        </li>
        <li>
          <a href="">Products</a>
        </li>
        <li>
          <a href="">Support</a>
        </li>
      </ul>
    </nav>
  );
};

export default AppBar;
