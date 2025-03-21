import React, { useState } from "react";
import { nailMenu } from "../../CustomerFeedBack";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import "./NailService.scss";

const NailService = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };
  return (
    <div className="nailService">
      <div className="line"></div>
      <div className="title">Our Nails Service</div>
      <div className="menu">
        {nailMenu.categories.map((category, index) => (
          <div key={index} className="category">
            <div
              className="category-title"
              onClick={() => toggleCategory(index)}
            >
              <span>{category.name}</span>
              {openCategory === index ? (
                <FiMinus className="icon" />
              ) : (
                <FaPlus className="icon" />
              )}
            </div>
            {openCategory === index && (
              <ul className="service-list">
                {category.services.map((service, idx) => (
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

export default NailService;
