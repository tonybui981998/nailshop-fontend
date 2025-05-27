import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;

// get all menu from Db
const getMenu = async () => {
  const apiMenu = import.meta.env.VITE_API_MENU;
  try {
    const respond = await axios.get(`${apiKey}${apiMenu}`);
    console.log(respond.data);
    return respond.data;
  } catch (e) {
    console.log(e);
  }
};
// get all staff from db
const getAllStaff = async () => {
  const apiStaff = import.meta.env.VITE_API_STAFFS;
  try {
    const respond = await axios.get(`${apiKey}${apiStaff}`);
    return respond.data;
  } catch (e) {
    console.log(e);
  }
};
// client make booking
const createBooking = async (booking) => {
  const apiBooking = import.meta.env.VITE_API_BOOKING;
  const url = `${apiKey}${apiBooking}`;

  try {
    const respond = await axios.post(url, booking, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return respond;
  } catch (e) {
    console.log(e);
  }
};
/// get booking for display time slot
const getBookingTime = async () => {
  const apiTime = import.meta.env.VITE_API_BOOKINGTIME;
  try {
    const respond = await axios.get(`${apiKey}${apiTime}`);
    return respond.data;
  } catch (e) {
    console.log(e);
  }
};
// send customerFeedBack
const getCustomerFeedBack = async (data) => {
  const apiFeedBack = import.meta.env.VITE_API_CUSTOMERFEEDBACK;
  try {
    const respond = await axios.post(`${apiKey}${apiFeedBack}`, data);
    return respond.data;
  } catch (e) {
    console.log(e);
  }
};
// create customer required
const getCustomerRequired = async (data) => {
  const apiRequired = import.meta.env.VITE_API_CUSTOMERREQUIRED;
  try {
    const respond = await axios.post(`${apiKey}${apiRequired}`, data);
    return respond.data;
  } catch (e) {
    console.log(e);
  }
};
// buying voucher
const getCustomerbuyVoucher = async (data) => {
  const apibuiVoucher = import.meta.env.VITE_API_BUYINGVOUCHER;
  try {
    const respond = await axios.post(`${apiKey}${apibuiVoucher}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return respond.data;
  } catch (e) {
    console.log(e);
  }
};
export {
  getMenu,
  getAllStaff,
  createBooking,
  getBookingTime,
  getCustomerFeedBack,
  getCustomerRequired,
  getCustomerbuyVoucher,
};
