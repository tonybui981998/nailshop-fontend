import React from "react";
import "./SelectTimeTable.scss";
import DisPlayTimeOption from "../DisplayTimeOption/DisPlayTimeOption";
import DisPlayService from "../DisplayService/DisPlayService";
import { useDispatch, useSelector } from "react-redux";
import { handleClientSelectDate } from "../../../Redux/counterSlide";

const SelectTimeTable = () => {
  // get staff
  const { clientSelectStaff, clientSelectDate } = useSelector(
    (state) => state.counter
  );
  const dispatch = useDispatch();
  const handleDatePicker = (date) => {
    dispatch(handleClientSelectDate(date));
  };
  return (
    <div className="SelectTimeTable">
      <DisPlayTimeOption
        clientSelectStaff={clientSelectStaff}
        handleDatePicker={handleDatePicker}
        clientSelectDate={clientSelectDate}
      />
      <DisPlayService />
    </div>
  );
};

export default SelectTimeTable;
