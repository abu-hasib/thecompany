import React from "react";
import "./index.css";
import jam from "../../assets/jam.png";
import mike from "../../assets/mike.png";
import ema from "../../assets/ema.png";
import fbook from "../../assets/fbook.png";
import twit from "../../assets/twit.png";
import drib from "../../assets/drib.png";
import lk from "../../assets/lk.png";
import Button from "../Button";

const Team = () => {
  return (
    <div className="team teamContainer">
      <div className="teamText">
        <h2>Meet The Team</h2>
        <h3>great outcome always relay on the great foundation</h3>
      </div>
      <div className="members">
        <div className="member">
          <img src={jam} alt="" id="jam" />
          <div className="details">
            <h5 className="name">jam potrick</h5>
            <div className="role">
              Standard screen generation and design for all devices.
            </div>
            <div className="contact">
              <img src={fbook} alt="" />
              <img src={twit} alt="" />
              <img src={drib} alt="" />
              <img src={lk} alt="" />
            </div>
          </div>
        </div>
        <div className="member">
          <img src={ema} alt="" id="ema" />
          <div className="details">
            <h5 className="name">ema jonas</h5>
            <div className="role">
              Standard screen generation and design for all devices.
            </div>
            <div className="contact">
              <img src={fbook} alt="" />
              <img src={twit} alt="" />
              <img src={drib} alt="" />
              <img src={lk} alt="" />
            </div>
          </div>
        </div>
        <div className="member">
          <img src={mike} alt="" id="mike" />
          <div className="details">
            <h5 className="name">mike pens</h5>
            <div className="role">
              Standard screen generation and design for all devices.
            </div>
            <div className="contact">
              <img src={fbook} alt="" />
              <img src={twit} alt="" />
              <img src={drib} alt="" />
              <img src={lk} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Button className="btn-primary">Let's catch all</Button>
      <div className="contactus">contact us</div>
      <h3>Have an awesome idea in your mind? we would love to hear</h3>
      <form>
        <input type="text" placeholder="enter your email" />
        <Button className="btn-primary start-btn">start</Button>
      </form>
    </div>
  );
};

export default Team;
