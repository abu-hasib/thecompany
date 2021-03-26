import React from "react";
import "./index.css";
import logo from "../../assets/logo.png";
import Button from "../Button";

const AppBar = () => {
  return (
    <nav className="navbar container">
      <div className="logo">
        <img src={logo} alt="" srcSet={logo} />
      </div>
      <ul className="nav">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Services</a>
        </li>
        <li>
          <a href="/">Project</a>
        </li>
        <li>
          <a href="/">about us</a>
        </li>

        <li>
          <a href="/">contact</a>
        </li>
        <li>
          <Button className="btn-primary">My Project</Button>
        </li>
      </ul>
    </nav>
  );
};

export default AppBar;
