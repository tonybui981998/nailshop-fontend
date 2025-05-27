import React from "react";
import { Link } from "react-router-dom";
import { IoChevronBackSharp } from "react-icons/io5";

const VoucherHeader = () => {
  return (
    <div className="BookingMenuHeader">
      <div className="main">
        <Link to={"/5-start-nail-booking"}>
          <div className="icon">
            <IoChevronBackSharp />
          </div>
        </Link>
        <div className="message">Gift-Voucher</div>
        <div></div>
      </div>
    </div>
  );
};

export default VoucherHeader;
