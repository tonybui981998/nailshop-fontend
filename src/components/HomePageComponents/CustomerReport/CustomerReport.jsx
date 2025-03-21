import React from "react";
import bgreview from "../../../assets/bg_review.png";
import { customerFeedbacks } from "../../CustomerFeedBack";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CustomerReport.scss";
const CustomerReport = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="customerReport">
      <div className="report-main">
        <h2 className="customerReport__title">Customer Feedback</h2>

        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          showDots
          arrows
          swipeable
          draggable
          className="customerReport__carousel"
          containerClass="carousel-container"
          itemClass="carousel-item"
        >
          {customerFeedbacks.map((item) => (
            <div key={item.id} className="report">
              <div className="report__name">{item.name}</div>
              <div className="report__comment">"{item.comment}"</div>
              <div className="report__avatar">
                <img src={item.avatar} alt={item.name} />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CustomerReport;
