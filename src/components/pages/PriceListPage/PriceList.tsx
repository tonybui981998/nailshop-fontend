import React from "react";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import "./GalleryPage.scss";
import Guarantee from "../../PriceListConent/Guarantee/Guarantee";
import OurLastBrown from "../../PriceListConent/OurLashBrown/OurLastBrown";
import NailService from "../../PriceListConent/OurNailService/NailService";

const PriceList = () => {
  return (
    <div className="galleryPageMainContent">
      <NavBar />
      <Guarantee />
      <NailService />
      <OurLastBrown />
      <Footer />
    </div>
  );
};

export default PriceList;
