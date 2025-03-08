import React, { useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import "./ModelDisplayStaff.scss";

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
                  <img src={staff.image} />
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
