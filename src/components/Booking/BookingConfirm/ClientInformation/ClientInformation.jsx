import React, { useState } from "react";
import "./ClientInformation.scss";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createBooking } from "../../../Services/ServiceApi";

const ClientInformation = () => {
  // get data from redux
  const {
    clientSelectService,
    clientTotalPrice,
    clientSelectStaff,
    clientSelectDate,
    clientTotalTimeService,
    clientPickingStartTime,
    serviceEndTime,
  } = useSelector((state) => state.counter);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
  });
  const BookingInfor = {
    bookingServices: clientSelectService.map((service) => ({
      selectedService: service.name,
    })),
    totalPrice: clientTotalPrice,
    staffId: clientSelectStaff.id,
    bookingDate: clientSelectDate,
    startTime: clientPickingStartTime
      ? clientPickingStartTime + ":00"
      : "00:00:00",
    endTime: serviceEndTime ? serviceEndTime + ":00" : "00:00:00",
    customerName: formData.fullName,
    customerPhone: formData.phone,
    email: formData.email,
  };
  const validation = () => {
    if (!formData.fullName || !formData.phone || !formData.email) {
      toast.warn("please enter all information");

      return false;
    }
    return true;
  };
  const submit = () => {
    if (!validation()) return;
    console.log("all infor", BookingInfor);

    createBooking(BookingInfor);
  };

  return (
    <div className="client-information">
      <div className="booking-header">Booking Information</div>
      <div className="booking-content">
        <div className="infor infor1">
          <label>Full Name:</label>
          <br />
          <input
            onChange={(event) =>
              setFormData({
                ...formData,
                fullName: event.target.value,
              })
            }
            value={formData.fullName}
            type="text"
          />
        </div>
        <div className="infor">
          <label>Phone:</label>
          <br />
          <input
            onChange={(event) =>
              setFormData({ ...formData, phone: event.target.value })
            }
            value={formData.phone}
            type="text"
          />
        </div>
        <div className="infor ">
          <label>Email:</label>
          <br />
          <input
            value={formData.email}
            type="email"
            onChange={(event) =>
              setFormData({ ...formData, email: event.target.value })
            }
          />
        </div>
        <div className="button">
          {" "}
          <button onClick={() => submit()}>Booking</button>
        </div>
      </div>
    </div>
  );
};

export default ClientInformation;
