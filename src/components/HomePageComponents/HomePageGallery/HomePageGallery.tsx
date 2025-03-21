import React from "react";
import { galleryImages } from "../../CustomerFeedBack";
import "./HomePageGallery.scss";

const HomePageGallery = () => {
  return (
    <div className="gallery-section">
      <h2 className="gallery-title">Photo Library</h2>
      <div className="gallery">
        {galleryImages.map((image) => (
          <div key={image.id} className="gallery__item">
            <img src={image.src} alt={image.alt} className="gallery__image" />
            <div className="gallery__overlay">
              <span className="gallery__text">See More</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageGallery;
