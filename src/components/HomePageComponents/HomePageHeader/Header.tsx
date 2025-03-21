import React from "react";
import logo from "../../../assets/logo.jpg";
import "./Header.scss";
import { Link } from "react-router-dom";
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
        <Link style={{ textDecoration: "none" }} to={"/5-start-nail-booking"}>
          <div className="button">Book Online </div>
        </Link>
      </div>
      <div className="right">
        <img src={logo} />
      </div>
    </div>
  );
};

export default Header;
