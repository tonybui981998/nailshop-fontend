import React from "react";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import "./GalleryPage.scss";
import Guarantee from "../../GalleryConent/Guarantee/Guarantee";
import NailService from "../../GalleryConent/OurNailService/NailService";
import OurLastBrown from "../../GalleryConent/OurLashBrown/OurLastBrown";

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
