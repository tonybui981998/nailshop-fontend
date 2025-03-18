import React from "react";
import logo from "../../../assets/logo.jpg";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <div className="text">
          {" "}
          Aivy Beauty is a specialist nail salon dedicated to providing a
          relaxing and elegant experience. We focus on delivering high-quality
          nail care in a welcoming and serene environment, ensuring every visit
          leaves you feeling pampered and refreshed. Our skilled professionals
          are
        </div>
        <div className="button">Book Onlie </div>
      </div>
      <div className="right">
        <img src={logo} />
      </div>
    </div>
  );
};

export default Header;
