import React from "react";
import NavBar from "../../NavBar/NavBar";
import "./GalleryMainPage.scss";
import GalleryContentHeader from "../../GalleryContent/GalleryContentHeader/GalleryContentHeader";
import Footer from "../../Footer/Footer";

const GalleryMainPage = () => {
  return (
    <div className="galleryMainPage">
      <NavBar />
      <GalleryContentHeader />
      <Footer />
    </div>
  );
};

export default GalleryMainPage;
