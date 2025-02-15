import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetMenu, handleGetTotalPrice } from "../../../Redux/counterSlide";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import { handleSelectService } from "../../../Redux/counterSlide";

import "./BookingMenuOption.scss";
const BookingMenuOption = () => {
  // get data from redux
  const { allMenu, clientSelectService, clientTotalPrice } = useSelector(
    (state) => state.counter
  );
  const dispatch = useDispatch();
  const [activeTitle, setActiveTitle] = useState(null);

  // display service
  const displayService = (Id) => {
    setActiveTitle((prevId) => (prevId === Id ? null : Id));
  };

  useEffect(() => {
    dispatch(fetMenu());
  }, [dispatch]);
  useEffect(() => {
    dispatch(handleGetTotalPrice());
  }, [dispatch, clientSelectService]);

  return (
    <div className="BookingMenuOption">
      <div className="left-side">
        {allMenu &&
          allMenu.map((item, index) => {
            return (
              <div className="item" key={index}>
                <div
                  className="item-title"
                  onClick={() => displayService(item.id)}
                >
                  {item.title}{" "}
                  <span className="icon">
                    {activeTitle === item.id ? (
                      <CiCircleMinus />
                    ) : (
                      <CiCirclePlus />
                    )}
                  </span>
                </div>

                {activeTitle === item.id
                  ? item.serviceOptionDtos.map((item, index) => {
                      return (
                        <div key={index} className="services">
                          <div className="service-main">
                            <div
                              className="service-title"
                              onClick={() =>
                                dispatch(handleSelectService(item))
                              }
                            >
                              <input
                                type="checkbox"
                                checked={clientSelectService.includes(item)}
                              />
                              <span className="title">{item.name}</span>
                            </div>
                            <div className="service-price">${item.price}</div>
                          </div>
                          <div className="service-mins">
                            {item.duration} mins
                          </div>
                        </div>
                      );
                    })
                  : ""}
              </div>
            );
          })}
      </div>
      <div className="right-side">
        <div className="message">
          Please make one booking per person. If there's more than one person,
          make separate bookings for everyone in your group, or give us a call
          or message. If you need your nails removed at your appointment, please
          select this as a service.
        </div>
        <div className="location">
          <span>
            <SlLocationPin />
          </span>
          1234 yen cute mong mo
        </div>
        <div className="line"></div>
        <div>
          {clientSelectService.length > 0
            ? clientSelectService.map((item, index) => {
                return (
                  <div className="client-Service" key={index}>
                    <div className="client-title">+ {item.name}</div>
                  </div>
                );
              })
            : ""}
        </div>
        <div className="line"></div>
        <div className="client-Service">
          <span className="total-price">Total Price:</span> ${clientTotalPrice}
        </div>
        <div className="button">
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default BookingMenuOption;
