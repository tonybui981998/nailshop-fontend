import React from "react";
import "./ClientInformation.scss";

const ClientInformation = () => {
  return (
    <div className="client-information">
      <div className="booking-header">Booking Information</div>
      <div className="booking-content">
        <div className="infor infor1">
          <label>Full Name:</label>
          <br />
          <input type="text" />
        </div>
        <div className="infor">
          <label>Phone:</label>
          <br />
          <input type="text" />
        </div>
        <div className="infor ">
          <label>Email:</label>
          <br />
          <input type="email" />
        </div>
        <div className="button">
          {" "}
          <button>Booking</button>
        </div>
      </div>
    </div>
  );
};

export default ClientInformation;
