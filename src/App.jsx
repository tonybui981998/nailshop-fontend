import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingOption from "./components/Booking/BookingOption/BookingOption";
import BookingMenuPage from "./components/pages/BookinPage/BookingMenuPage";
import "./App.css";

import { ToastContainer } from "react-toastify";
import BookingSelectStaff from "./components/pages/BookinPage/BookingSelectStaff";
import SelectTimePage from "./components/pages/BookinPage/SelectTimePage";
import BookingConfirmation from "./components/pages/BookinPage/BookingConfirmation";
import HomePage from "./components/pages/HomePage/HomePage";
import AboutUs from "./components/pages/AboutUsPage/AboutUs";
import ContacUs from "./components/pages/Contact-US/ContacUs";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContacUs />} />
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
          <Route path="/Booking-confirm" element={<BookingConfirmation />} />
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
