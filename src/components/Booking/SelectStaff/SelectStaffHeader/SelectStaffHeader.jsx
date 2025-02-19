import React from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const SelectStaffHeader = () => {
  return (
    <div className="BookingMenuHeader">
      <div className="main">
        <Link to={"/5-start-nail-booking-menu"}>
          <div className="icon">
            <IoChevronBackSharp />
          </div>
        </Link>

        <div className="message">Select Select professional</div>
        <div></div>
      </div>
    </div>
  );
};

export default SelectStaffHeader;
