import dayjs from "dayjs";
import React from "react";
import { SlCalender } from "react-icons/sl";
import "./DisPlayService.scss";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const DisPlayService = ({
  clientSelectDate,
  clientSelectService,
  clientTotalTimeService,
  clientTotalPrice,
  clientPickingStartTime,
  serviceEndTime,
}) => {
  const navigate = useNavigate();
  const convertDate = dayjs(clientSelectDate).format("dddd, DD MMM");
  const validation = () => {
    if (!clientSelectDate) {
      toast.warn("please slect the date");
      return false;
    }
    if (!clientPickingStartTime) {
      toast.warn("please slect the start time");
      return false;
    }
    if (!serviceEndTime) {
      toast.warn("please check the start time");
      return false;
    }
    return true;
  };
  const bookingInfor = () => {
    const check = validation();
    if (check) {
      navigate("/Booking-confirm");
    }
  };

  return (
    <div className="displayService">
      <div className="display-message">
        Please call or message us if you can’t find a suitable time. If you are
        more than 5 minutes late, we may need to reschedule your appointment.
        Kindly double-check your location before booking. You can also{" "}
        <span> join the waitlist </span> if no slots are available.
      </div>
      <div className="line"></div>
      <div className="display-date">
        <SlCalender /> : {convertDate}
      </div>
      <div className="display-date"></div>
      <div className="line"></div>
      {clientSelectService &&
        clientSelectService.map((service, index) => {
          return (
            <div className="display-service" key={index}>
              <div className="service">+ {service.name}</div>
            </div>
          );
        })}
      <div className="line"></div>
      <div className="total-Time">
        Total Time : {clientTotalTimeService} mins
      </div>
      <div className="total-Time">
        Start from: {clientPickingStartTime} mins
      </div>
      <div className="total-Time">Finish : {serviceEndTime} mins</div>
      <div className="total-Time">Total Price : ${clientTotalPrice} </div>
      <div className="button" onClick={() => bookingInfor()}>
        <button>Book</button>
      </div>
    </div>
  );
};

export default DisPlayService;
