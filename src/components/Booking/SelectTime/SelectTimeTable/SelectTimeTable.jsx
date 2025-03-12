import React, { useEffect } from "react";
import "./SelectTimeTable.scss";
import DisPlayTimeOption from "../DisplayTimeOption/DisPlayTimeOption";
import DisPlayService from "../DisplayService/DisPlayService";
import { useDispatch, useSelector } from "react-redux";
import {
  handleClientSelectDate,
  handleClientSelectDayStaff,
  handleClientSelectStaff,
  handleGenerateTimeSlot,
  handleClientPickingTime,
  fetBookingTime,
} from "../../../Redux/counterSlide";

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
