import React from "react";
import logo from "../../assets/logo.jpg";
import { FcHome } from "react-icons/fc";
import { FcSmartphoneTablet } from "react-icons/fc";
import { FcVoicemail } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { GrCaretNext } from "react-icons/gr";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <img src={logo} />
        <div className="intro">
          Step into a world of relaxation and beauty at Aivy Beauty. We are
          dedicated to enhancing your natural beauty with high-quality
          treatments and expert care.
        </div>
      </div>
      <div className="middle">
        <div className="contact-us">Contact-Us</div>
        <div className="main-content">
          <div className="address">
            <FcHome />:<span>1234 Auckland steet , auckland</span>
          </div>
          <div className="address">
            <FcSmartphoneTablet />: <span>190001787</span>
          </div>
          <div className="address">
            <FcVoicemail />: <span>Yenmongmo@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="follow-us">Follow-Us</div>
        <div className="sosial">
          <div className="icon">
            <FaFacebook />
          </div>
          <div className="icon">
            <FaInstagramSquare />
          </div>
          <div className="icon">
            <FaTiktok />
          </div>
        </div>
        <div className="sign-up">
          <div className="title">Sign up for news & offers</div>
          <div className="input">
            <div className="input-type">
              {" "}
              <input type="text" />
            </div>
            <div className="icon">
              <GrCaretNext />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
