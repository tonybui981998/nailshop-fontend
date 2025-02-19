import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingOption from "./components/Booking/BookingOption/BookingOption";
import BookingMenuPage from "./components/pages/BookinPage/BookingMenuPage";
import "./App.css";

import { ToastContainer } from "react-toastify";
import BookingSelectStaff from "./components/pages/BookinPage/BookingSelectStaff";
import SelectTimePage from "./components/pages/BookinPage/SelectTimePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/5-start-nail-booking" element={<BookingOption />} />
          <Route
            path="/5-start-nail-booking-menu"
            element={<BookingMenuPage />}
          />
          <Route
            path="/5-start-nail-booking-menu/select-staff"
            element={<BookingSelectStaff />}
          />
          <Route
            path="/5-start-nail-booking-menu/select-staff/select-time"
            element={<SelectTimePage />}
          />
        </Routes>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        // transition={Bounce}
      />
    </>
  );
}

export default App;
