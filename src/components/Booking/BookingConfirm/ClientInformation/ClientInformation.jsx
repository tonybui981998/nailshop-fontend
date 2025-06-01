import React, { useState } from "react";
import "./ClientInformation.scss";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createBooking } from "../../../Services/ServiceApi";
import dayjs from "dayjs";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { useNavigate } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import { handleResetBookiingInfor } from "../../../Redux/counterSlide";

const ClientInformation = () => {
  let [loading, setLoading] = useState(false);

  const override = {
    display: "block",
    margin: "0 auto",
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      duration: service.duration,
      price: service.price,
    })),

    totalPrice: clientTotalPrice,
    staffId: clientSelectStaff.id,
    bookingDate: dayjs(clientSelectDate).format("YYYY-MM-DD"),

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
  const submit = async () => {
    if (!validation()) return;
    setLoading(true);
    const respond = await createBooking(BookingInfor);

    if (respond.data === "Create success") {
      setLoading(false);
      dispatch(handleResetBookiingInfor());
      toast.success(
        "🎉 Booking successful! We’ve sent a confirmation to your email."
      );
      setFormData({
        fullName: "",
        phone: "",
        email: "",
      });

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      setLoading(false);
      dispatch(handleResetBookiingInfor());
      toast.error("Sorry something wrong ,please try again later");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
    const connection = new HubConnectionBuilder()
      .withUrl("http://localhost:5215/bookingHub")
      .withAutomaticReconnect()
      .build();

    connection.start().then(() => {
      connection.invoke("SendNewBooking", BookingInfor);
      console.log("🚀 SignalR Connected from Booking app");
    });
  };

  return (
    <div className="client-information">
      <div className="booking-header">Booking Information</div>
      {loading && (
        <div className="overlay">
          <HashLoader
            color="#4f6edb"
            loading={true}
            size={80}
            cssOverride={override}
          />
        </div>
      )}
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
