import React from "react";
import "./index.css";
import AppBar from "../Nav";
import heroImg from "../../assets/Image 1@1X.jpeg";
import play from "../../assets/play.png";

const Hero = () => {
  return (
    <main className="main whitten">
      <AppBar className="navBar"></AppBar>
      <div className="hero">
        <div className="heroText container">
          <h1 className="creative">creative agency</h1>
          <div className="video">
            <img src={play} alt={play}   />
            <span>watch a video intro</span>
          </div>
        </div>
        <img src={heroImg} alt={heroImg} className="heroImg" />
      </div>
    </main>
  );
};

export default Hero;
