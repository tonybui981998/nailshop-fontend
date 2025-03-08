import React from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const BookingConfirmHeader = () => {
  return (
    <div className="BookingMenuHeader">
      <div className="main">
        <Link to={"/5-start-nail-booking-menu/select-staff/select-time"}>
          <div className="icon">
            <IoChevronBackSharp />
          </div>
        </Link>

        <div className="message">Client Information</div>
        <div></div>
      </div>
    </div>
  );
};

export default BookingConfirmHeader;
