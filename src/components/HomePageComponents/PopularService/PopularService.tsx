import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import service from "../../../assets/service_2.webp";
import "./PopularService.scss";

const PopularService = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 818, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="popular-service">
      <div className="popular-title">Most Popular Service</div>
      <div className="popular">
        <Carousel responsive={responsive}>
          <div className="service">
            <div className="img">
              <img src={service} />
            </div>
            <div className="title">Builder Gel </div>
            <div className="content">
              A strengthening gel overlay designed to add durability to natural
              nails while keeping them flexible and lightweight, perfect for
              those who want long-lasting, healthy nails
            </div>
            <div className="get-more">Get more information</div>
          </div>
          <div className="service">
            <div className="img">
              <img src={service} />
            </div>
            <div className="title">GelX Extensions </div>
            <div className="content">
              A modern, non-damaging soft gel extension system that provides a
              natural, lightweight feel with flawless length and shape, ideal
              for effortless, long-lasting beauty
            </div>
            <div className="get-more">Get more information</div>
          </div>
          <div className="service">
            <div className="img">
              <img src={service} />
            </div>
            <div className="title">Basic Gel Manicure </div>
            <div className="content">
              A classic gel polish manicure that delivers a glossy,
              chip-resistant finish, ensuring beautiful, salon-perfect nails
              that last for weeks
            </div>
            <div className="get-more">Get more information</div>
          </div>
          <div className="service">
            <div className="img">
              <img src={service} />
            </div>
            <div className="title">Spa Pedicure </div>
            <div className="content">
              A luxurious foot care treatment that includes exfoliation,
              hydration, and a relaxing massage, leaving your feet soft,
              refreshed, and perfectly polished
            </div>
            <div className="get-more">Get more information</div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default PopularService;
