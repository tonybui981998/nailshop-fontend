import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingOption from "./components/Booking/BookingOption/BookingOption";
import BookingMenuPage from "./components/pages/BookinPage/BookingMenuPage";
import "./App.css";

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
