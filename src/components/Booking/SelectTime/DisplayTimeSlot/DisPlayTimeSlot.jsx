import React from "react";
import "./DisPlayTimeSlot.scss";
import { MdCancelPresentation } from "react-icons/md";

const DisPlayTimeSlot = ({
  StaffTimeSlot,
  clientPickTime,
  clientPickingStartTime,
  serviceEndTime,
}) => {
  console.log("check in time slot", clientPickingStartTime, serviceEndTime);
  return (
    <div className="displayTimeShot">
      <div className="make">
        {StaffTimeSlot.length > 0 ? (
          StaffTimeSlot.map((time, index) => {
            const isSelected =
              time === clientPickingStartTime || time === serviceEndTime;
            return (
              <div
                className={`displaytime ${isSelected ? "background" : ""}`}
                key={index}
                onClick={() => clientPickTime(time)}
              >
                <div className="time-display">{time}</div>
              </div>
            );
          })
        ) : (
          <>
            <div className="message">
              Sorry staff maybe unvailable in this day
            </div>
            <div className="icon">
              <MdCancelPresentation />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DisPlayTimeSlot;
