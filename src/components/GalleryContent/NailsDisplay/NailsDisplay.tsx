import React from "react";
import "./NailsDisplay.scss";
import { nailImages } from "../../CustomerFeedBack";

const NailsDisplay = () => {
  return (
    <div className="nails-display">
      <h2 className="title">Nail Designs</h2>
      <div className="nails-grid">
        {nailImages.map((item, index) => (
          <div className="nail-card" key={index}>
            <img src={item.url} alt={item.title} />
            <div className="caption">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NailsDisplay;
