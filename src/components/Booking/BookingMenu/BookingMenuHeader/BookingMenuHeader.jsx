import React from "react";
import "./BookingMenuHeader.scss";
import { IoChevronBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const BookingMenuHeader = () => {
  return (
    <div className="BookingMenuHeader">
      <div className="main">
        <Link to={"/5-start-nail-booking"}>
          <div className="icon">
            <IoChevronBackSharp />
          </div>
        </Link>

        <div className="message">Select your service</div>
        <div></div>
      </div>
    </div>
  );
};

export default BookingMenuHeader;
