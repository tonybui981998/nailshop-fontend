import React from "react";
import { lashImages } from "../../CustomerFeedBack";

const LashDisplay = () => {
  return (
    <div className="nails-display">
      <h2 className="title">Lash Designs</h2>
      <div className="nails-grid">
        {lashImages.map((item, index) => (
          <div className="nail-card" key={index}>
            <img src={item.url} alt={item.title} />
            <div className="caption">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LashDisplay;
