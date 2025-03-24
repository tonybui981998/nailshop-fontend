import React from "react";
import { browImages } from "../../CustomerFeedBack";

const BrownDisplay = () => {
  return (
    <div className="nails-display">
      <h2 className="title">Brown Designs</h2>
      <div className="nails-grid">
        {browImages.map((item, index) => (
          <div className="nail-card" key={index}>
            <img src={item.url} alt={item.title} />
            <div className="caption">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrownDisplay;
