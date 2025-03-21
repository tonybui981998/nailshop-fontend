import React, { useState } from "react";
import NavBar from "../../NavBar/NavBar";
import "./HomePage.scss";
import Header from "../../HomePageComponents/HomePageHeader/Header";
import PopularService from "../../HomePageComponents/PopularService/PopularService";
import Footer from "../../Footer/Footer";
import CustomerReport from "../../HomePageComponents/CustomerReport/CustomerReport";
import HomePageGallery from "../../HomePageComponents/HomePageGallery/HomePageGallery";

const HomePage = () => {
  return (
    <div
      className="HomePage"
      style={{ backgroundColor: "background-color: #f9f9f9;" }}
    >
      <NavBar />
      <Header />
      <PopularService />
      <HomePageGallery />
      <CustomerReport />
      <Footer />
    </div>
  );
};

export default HomePage;
