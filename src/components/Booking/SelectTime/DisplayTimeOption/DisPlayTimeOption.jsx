import React, { useEffect, useState } from "react";
import { GiBodySwapping } from "react-icons/gi";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "./DisPlayTimeOption.scss";
import ModelDisplayStaff from "../ModelDisplayStaff/ModelDisplayStaff";
import DisPlayTimeSlot from "../DisplayTimeSlot/DisPlayTimeSlot";
import dayjs from "dayjs";

const DisPlayTimeOption = ({
  clientSelectStaff,
  handleDatePicker,
  clientSelectDate,
  staffSchedules,
  handleChangeStaff,
  futureStaff,
  StaffTimeSlot,
  clientPickTime,
  clientPickingStartTime,
  serviceEndTime,
  allBookingTime,
}) => {
  const formattedDate = clientSelectDate ? dayjs(clientSelectDate) : dayjs();
  // display model
  const [activeModel, setActiveModel] = useState(false);
  const [selectedDate, setSelectedDate] = useState(formattedDate);
  const openModel = () => {
    setActiveModel(!activeModel);
  };
  useEffect(() => {
    if (!clientSelectDate) {
      handleDatePicker(dayjs());
    } else {
      setSelectedDate(dayjs(clientSelectDate));
    }
  }, [clientSelectDate, handleDatePicker]);
  const handleDateChange = (date) => {
    setSelectedDate(dayjs(date));
    handleDatePicker(dayjs(date));
  };

  return (
    <>
      <div className="main-option">
        <div className="timeOption">
          <div className="option-left" onClick={() => openModel()}>
            <div className="left-image">
              <img src={clientSelectStaff.image} />
            </div>
            <div className="fullname">{clientSelectStaff.fullName}</div>
            <div className="icon">
              <GiBodySwapping />
            </div>
          </div>
          {activeModel === true ? (
            <ModelDisplayStaff
              staffSchedules={staffSchedules}
              openModel={openModel}
              handleChangeStaff={handleChangeStaff}
              clientSelectDate={clientSelectDate}
              futureStaff={futureStaff}
            />
          ) : (
            ""
          )}
          <div className="option-right">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker onChange={handleDateChange} value={selectedDate} />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>
        <div>
          {" "}
          <DisPlayTimeSlot
            StaffTimeSlot={StaffTimeSlot}
            clientPickTime={clientPickTime}
            clientPickingStartTime={clientPickingStartTime}
            serviceEndTime={serviceEndTime}
            allBookingTime={allBookingTime}
            clientSelectStaff={clientSelectStaff}
            clientSelectDate={clientSelectDate}
          />
        </div>
      </div>
    </>
  );
};

export default DisPlayTimeOption;
