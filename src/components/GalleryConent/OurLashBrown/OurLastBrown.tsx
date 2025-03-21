import React, { useState } from "react";
import { lashBrowMenu } from "../../CustomerFeedBack";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";

const OurLastBrown = () => {
  const [openMenu, SetOpenMenu] = useState(null);
  const toggle = (index) => {
    SetOpenMenu(openMenu === index ? null : index);
  };
  return (
    <div className="nailService">
      <div className="line"></div>
      <div className="title">Our lashBrown Service</div>
      <div className="menu">
        {lashBrowMenu.categories.map((item, index) => (
          <div key={index} className="category">
            <div className="category-title" onClick={() => toggle(index)}>
              <span>{item.name}</span>
              {openMenu === index ? (
                <FiMinus className="icon" />
              ) : (
                <FaPlus className="icon" />
              )}
            </div>
            {openMenu === index && (
              <ul className="service-list">
                {item.services.map((service, idx) => (
                  <li key={idx} className="service-item">
                    <span>{service.name}</span>
                    <span className="price">{service.price}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurLastBrown;
