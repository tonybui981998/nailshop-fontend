import React from "react";
import "./BookingOption.scss";
import { Link } from "react-router-dom";

const BookingOption = () => {
  return (
    <div className="bookingoption">
      <div className="option-menu">Choose an option</div>
      <div className="options">
        <div className="option1">
          <div className="title">Book</div>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={"/5-start-nail-booking-menu"}
          >
            <div className="option-main">
              <div className="card-title">Booking an appointment</div>
              <div className="card-message">Schedule service for yourself</div>
            </div>
          </Link>
        </div>

        <div className="option1">
          <div className="title">Buy</div>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={"/Get-Voucher"}
          >
            <div className="option-main">
              <div className="card-title">Gift Card</div>
              <div className="card-message">
                Treat yourself or a friend future visit
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingOption;
