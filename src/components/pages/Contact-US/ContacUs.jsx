import React from "react";
import NavBar from "../../NavBar/NavBar";
import Contact from "../../ContactusContent/ContactForm/Contact";
import CustomerFeedBack from "../../ContactusContent/CustomerFeedback/CustomerFeedBack";
import Footer from "../../Footer/Footer";

const ContacUs = () => {
  return (
    <div>
      <NavBar />
      <Contact />
      <CustomerFeedBack />
      <Footer />
    </div>
  );
};

export default ContacUs;
