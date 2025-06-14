import React, { useEffect } from "react";
import "./SelectTimeTable.scss";
import DisPlayTimeOption from "../DisplayTimeOption/DisPlayTimeOption";
import DisPlayService from "../DisplayService/DisPlayService";
import { useDispatch, useSelector } from "react-redux";
import { HubConnectionBuilder } from "@microsoft/signalr";
import {
  handleClientSelectDate,
  handleClientSelectDayStaff,
  handleClientSelectStaff,
  handleGenerateTimeSlot,
  handleClientPickingTime,
  fetBookingTime,
  fetStaff,
  handleResetTimeSlot,
} from "../../../Redux/counterSlide";
import { toast } from "react-toastify";

//import DisPlayTimeSlot from "../DisplayTimeSlot/DisPlayTimeSlot";

const SelectTimeTable = () => {
  // get staff
  const {
    clientSelectStaff,
    clientSelectDate,
    staffSchedules,
    clientTotalTimeService,
    StaffTimeSlot,
    clientSelectService,
    clientTotalPrice,
    clientPickingStartTime,
    serviceEndTime,
    allBookingTime,
  } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  // select date
  const handleDatePicker = (date) => {
    dispatch(handleClientSelectDate(date));
  };
  // select staff
  const handleChangeStaff = (staff) => {
    dispatch(handleClientSelectStaff(staff));
  };
  // client see future staff
  const futureStaff = (date) => {
    dispatch(handleClientSelectDayStaff(date));
  };
  // client pickimg time
  const clientPickTime = (time) => {
    dispatch(handleClientPickingTime(time));
  };
  // get time slot
  useEffect(() => {
    dispatch(handleGenerateTimeSlot());
  }, [dispatch, clientSelectDate, clientSelectStaff]);
  useEffect(() => {
    dispatch(fetBookingTime());
  }, []);
  useEffect(() => {
    const connection = new HubConnectionBuilder()
      .withUrl("http://localhost:5215/bookingHub")
      .withAutomaticReconnect()
      .build();

    const startConnection = async () => {
      try {
        await connection.start();

        connection.on("Receivenewstaffinfor", async (bookingData) => {
          dispatch(fetStaff());
          futureStaff();
          dispatch(handleChangeStaff(""));
          dispatch(handleResetTimeSlot());
        });
      } catch (error) {
        console.error("❌ SignalR connection failed:", error);
      }
    };

    startConnection();

    return () => {
      connection.stop();
    };
  }, []);

  return (
    <div className="SelectTimeTable">
      <DisPlayTimeOption
        clientSelectStaff={clientSelectStaff}
        handleDatePicker={handleDatePicker}
        clientSelectDate={clientSelectDate}
        staffSchedules={staffSchedules}
        handleChangeStaff={handleChangeStaff}
        StaffTimeSlot={StaffTimeSlot}
        clientTotalTimeService={clientTotalTimeService}
        futureStaff={futureStaff}
        clientPickTime={clientPickTime}
        clientPickingStartTime={clientPickingStartTime}
        serviceEndTime={serviceEndTime}
        allBookingTime={allBookingTime}
      />
      <DisPlayService
        clientSelectStaff={clientSelectStaff}
        clientSelectDate={clientSelectDate}
        clientTotalTimeService={clientTotalTimeService}
        clientSelectService={clientSelectService}
        clientTotalPrice={clientTotalPrice}
        clientPickingStartTime={clientPickingStartTime}
        serviceEndTime={serviceEndTime}
      />
    </div>
  );
};

export default SelectTimeTable;
