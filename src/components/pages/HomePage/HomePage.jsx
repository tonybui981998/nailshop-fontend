import React, { useState } from "react";
import NavBar from "../../NavBar/NavBar";
import "./HomePage.scss";
import Header from "../../HomePageComponents/HomePageHeader/Header";
import PopularService from "../../HomePageComponents/PopularService/PopularService";
import Footer from "../../Footer/Footer";
import CustomerReport from "../../HomePageComponents/CustomerReport/CustomerReport";

const HomePage = () => {
  return (
    <div className="HomePage">
      <NavBar />
      <Header />
      <PopularService />
      <CustomerReport />
      <Footer />
    </div>
  );
};

export default HomePage;
