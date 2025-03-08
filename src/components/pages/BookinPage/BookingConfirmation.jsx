import React from "react";
import BookingConfirmHeader from "../../Booking/BookingConfirm/BookingConfirmHeader/BookingConfirmHeader";
import ClientInformation from "../../Booking/BookingConfirm/ClientInformation/ClientInformation";

const BookingConfirmation = () => {
  return (
    <div>
      <BookingConfirmHeader />
      <ClientInformation />
    </div>
  );
};

export default BookingConfirmation;
