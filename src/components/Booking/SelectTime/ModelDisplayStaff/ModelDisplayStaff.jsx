import React, { useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import "./ModelDisplayStaff.scss";
import { FaUser } from "react-icons/fa";

const ModelDisplayStaff = ({
  staffSchedules,
  openModel,
  handleChangeStaff,
  clientSelectDate,
  futureStaff,
}) => {
  // select staff and close model
  const selectStaffandCLosemodel = (staff) => {
    handleChangeStaff(staff);
    openModel();
  };
  useEffect(() => {
    futureStaff(clientSelectDate);
  }, [clientSelectDate]);
  console.log("check date", clientSelectDate);
  return (
    <div className="ModelDisplayStaff">
      <div className="model-display">
        <div className="top">
          <div></div>
          <div onClick={() => openModel()}>
            <IoCloseSharp />
          </div>
        </div>
        <div className="line"></div>
        <div className="bottom">
          {staffSchedules &&
            staffSchedules.map((staff, index) => {
              return (
                <div
                  onClick={() => selectStaffandCLosemodel(staff)}
                  className="staff-display"
                  key={index}
                >
                  <div className="staff-icon">
                    <FaUser size={50} />
                  </div>
                  <div className="name">{staff.fullName}</div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ModelDisplayStaff;
