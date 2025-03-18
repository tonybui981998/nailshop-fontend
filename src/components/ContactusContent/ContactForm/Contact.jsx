import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { HiOutlinePhone } from "react-icons/hi";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-main">
        <div className="title">Avi Beauty</div>
        <div className="title-1">Get in touch with us</div>
        <div className="title-3">
          Reach out to us today and enjoy exciting special offers tailored for
          you!
        </div>
        <div className="address">
          <SlLocationPin />: <span>1234 yeb cu te dethuong</span>
        </div>
        <div className="address">
          <TfiEmail />:<span>Yencute@gmail.com</span>
        </div>
        <div className="address">
          <HiOutlinePhone />:<span>12312412412</span>
        </div>
        <div className="form">
          <div className="main-form">
            <input type="text" placeholder="FullName" />
          </div>
          <div className="main-form">
            <input type="text" placeholder="Email" />
          </div>
          <div className="main-form">
            <input type="text" placeholder="Phone" />
          </div>
          <div className="main-form">
            <input type="text" placeholder="Content" />
          </div>
          <button>Submiit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
