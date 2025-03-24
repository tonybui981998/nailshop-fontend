import React, { useState } from "react";
import "./GalleryContentHeader.scss";
import NailsDisplay from "../NailsDisplay/NailsDisplay";
import LashDisplay from "../LashDisplay/LashDisplay";
import BrownDisplay from "../BrownDisplay/BrownDisplay";

const GalleryContentHeader = () => {
  const [activeDisplay, setActiveDisplay] = useState("nails");
  return (
    <div className="GalleryContentHeader">
      <div className="main-content">
        <div className="title">
          <div className="tittle-header">
            Discover the Artistry at Aivy Beauty
          </div>
          <p>
            {" "}
            Our gallery showcases the passion and precision behind every nail
            design, lash extension, and brow treatment. Explore our latest
            creations and get inspired for
          </p>
        </div>
        <div className="button-Display">
          <div
            className={`button ${activeDisplay === "nails" ? "active" : ""}`}
            onClick={() => setActiveDisplay("nails")}
          >
            Nails
          </div>
          <div
            className={`button ${activeDisplay === "lash" ? "active" : ""}`}
            onClick={() => setActiveDisplay("lash")}
          >
            Lash
          </div>
          <div
            className={`button ${activeDisplay === "brown" ? "active" : ""}`}
            onClick={() => setActiveDisplay("brown")}
          >
            Brown
          </div>
        </div>
        <div className="Image-display">
          <div>{activeDisplay === "nails" ? <NailsDisplay /> : ""}</div>
          <div>{activeDisplay === "lash" ? <LashDisplay /> : ""}</div>
          <div>{activeDisplay === "brown" ? <BrownDisplay /> : ""}</div>
        </div>
      </div>
    </div>
  );
};

export default GalleryContentHeader;
