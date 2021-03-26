import React from "react";
import "./index.css";
import paintIcon from "../../assets/union.png";
import penIcon from "../../assets/pen.png";
import settingsIcon from "../../assets/settings.png";
import testIcon from "../../assets/test.png";
import uxIcon from "../../assets/ux.png";
import webIcon from "../../assets/web.png";

const services = [
  {
    icon: paintIcon,
    heading: "web design",
    tagline: "modern web design services with new trends and direction.",
  },
  {
    icon: penIcon,
    heading: "Branding",
    tagline: "highly professional branding and logo design work.",
  },
  {
    icon: settingsIcon,
    heading: "Motion graphics",
    tagline: "modern motion graphics and animation for businesses.",
  },
  {
    icon: uxIcon,
    heading: "ui/ux design",
    tagline: "Standard screen generation and design for all devices.",
  },
  {
    icon: webIcon,
    heading: "Web Development",
    tagline: "website development is something we are best in.",
  },
  {
    icon: testIcon,
    heading: "App testing",
    tagline: "website development is something we are best in.",
  },
];

const Showcase = () => {
  return (
    <div className="showcase">
      <div className="portfolio container">
        <div className="showcaseText">
          <div>services</div>
          <div>&amp;portfolio</div>
        </div>
        <div className="services">
          {services.map((service, index) => (
            <div className="service" key={index}>
              <img src={service.icon} alt="" className="icon" />
              <div className="serviceText">
                <h4>{service.heading}</h4>
                <div className="tagline">{service.tagline}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Showcase;
