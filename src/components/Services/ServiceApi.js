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

export { getMenu, getAllStaff, createBooking, getBookingTime };
