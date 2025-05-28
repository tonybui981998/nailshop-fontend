import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetStaff,
  handleGetStaffWorkingDay,
  handleClientSelectStaff,
} from "../../../Redux/counterSlide";
import { HashLoader } from "react-spinners";
import "./ReferStaff.scss";
import { SlLocationPin } from "react-icons/sl";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ReferStaff = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    allStaffs,
    staffSchedules,
    clientSelectService,
    clientTotalPrice,
    clientSelectStaff,
    clientTotalTimeService,
  } = useSelector((state) => state.counter);

  useEffect(() => {
    dispatch(fetStaff());
  }, [dispatch]);
  useEffect(() => {
    dispatch(handleGetStaffWorkingDay());
  }, [dispatch, allStaffs]);
  useEffect(() => {}, [dispatch, clientSelectStaff]);
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  // validatiom
  const validation = () => {
    if (clientSelectStaff.length === 0) {
      toast.warn("Please select staff to continue");
    } else {
      navigate("/5-start-nail-booking-menu/select-staff/select-time");
    }
  };
  return (
    <>
      {staffSchedules.length === 0 ? (
        <div>
          {" "}
          <HashLoader
            color="#36d7b7"
            size={80}
            cssOverride={override}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="referStaff">
          <div className="left-side">
            {staffSchedules &&
              staffSchedules.map((staff, index) => {
                const isSelected =
                  clientSelectStaff.fullName === staff.fullName;
                return (
                  <div
                    onClick={() => dispatch(handleClientSelectStaff(staff))}
                    key={index}
                    className={`refer-main ${
                      isSelected ? "addbackground" : ""
                    }`}
                  >
                    <div className="staff-name">{staff.fullName}</div>
                  </div>
                );
              })}
          </div>

          <div className="right-side">
            <div className="message">
              Choose Your Professional. Our skilled and experienced team is
              dedicated to providing you with exceptional care.
            </div>
            <div className="location">
              <span>
                <SlLocationPin />
              </span>
              1234 yen cute mong mo
            </div>
            <div className="line" style={{ display: "block" }}></div>
            <div>
              {clientSelectService.length > 0
                ? clientSelectService.map((item, index) => {
                    return (
                      <div className="client-Service" key={index}>
                        <div className="client-title">+ {item.name} </div>
                      </div>
                    );
                  })
                : ""}
            </div>
            <div className="line" style={{ display: "block" }}></div>

            <div className="client-Service">
              {clientSelectStaff.length === 0 ? (
                ""
              ) : (
                <div className="chooseStaff">
                  Staff Picked: {clientSelectStaff.fullName}
                </div>
              )}
              <div className="total-price" style={{ marginBottom: "10px" }}>
                Total Time: {clientTotalTimeService} mins
              </div>
              <span className="total-price">Total Price:</span> $
              {clientTotalPrice}
            </div>
            <div onClick={() => validation()} className="button">
              <button>Continue</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReferStaff;
