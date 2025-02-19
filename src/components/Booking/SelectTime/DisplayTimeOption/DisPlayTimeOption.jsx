import React, { useEffect, useState } from "react";
import { GiBodySwapping } from "react-icons/gi";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "./DisPlayTimeOption.scss";

const DisPlayTimeOption = ({
  clientSelectStaff,
  handleDatePicker,
  clientSelectDate,
}) => {
  console.log("check date picker", clientSelectDate);
  return (
    <div className="timeOption">
      <div className="option-left">
        <div className="left-image">
          <img src={clientSelectStaff.image} />
        </div>
        <div className="fullname">{clientSelectStaff.fullName}</div>
        <div className="icon">
          <GiBodySwapping />
        </div>
      </div>
      <div className="option-right">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker onChange={(date) => handleDatePicker(date)} />
          </DemoContainer>
        </LocalizationProvider>
      </div>
    </div>
  );
};

export default DisPlayTimeOption;
