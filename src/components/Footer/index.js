import React from "react";
import "./index.css";
import logo from "../../assets/logo.png";
import fbook from "../../assets/fbook.png";
import twit from "../../assets/twit.png";
import drib from "../../assets/drib.png";
import lk from "../../assets/lk.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerRow container footerContainer">
        <div className="footerColumn">
          <img src={logo} alt={logo} className="footerLogo" />
          <h5>
            A design agency shaping ideas into products. We help startups and
            enterprises invent, build and launch their next project.
          </h5>
        </div>
        <div className="footerColumn">
          <h4>Services</h4>
          <ul>
            <li>Web Design</li>
            <li>App Design</li>
            <li>Photography</li>
            <li>Videography</li>
          </ul>
        </div>
        <div className="footerColumn">
          <h4>Support</h4>
          <ul>
            <li>Get Support</li>
            <li>Contact</li>
            <li>My Blog</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footerColumn">
          <h4>social</h4>
          <div className="contact">
            <img src={fbook} alt="" />
            <img src={twit} alt="" />
            <img src={drib} alt="" />
            <img src={lk} alt="" />
          </div>
        </div>
      </div>
      <div className="copyright">
        <span>&copy;</span>
        <span> frontendtest | All rights reserved 2020</span>
      </div>
    </div>
  );
};

export default Footer;
