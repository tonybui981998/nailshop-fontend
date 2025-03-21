import React from "react";
import NavBar from "../../NavBar/NavBar";
import AboutPolicy from "../../aboutUsContent/AboutPolicy";
import Footer from "../../Footer/Footer";
import "./AboutUsPage.scss";

const AboutUs = () => {
  return (
    <div className="about-us">
      <NavBar />
      <AboutPolicy />
      <Footer />
    </div>
  );
};

export default AboutUs;
