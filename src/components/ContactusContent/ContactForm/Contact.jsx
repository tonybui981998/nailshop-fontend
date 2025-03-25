import React, { useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { HiOutlinePhone } from "react-icons/hi";
import "./Contact.scss";
import { toast } from "react-toastify";
import { getCustomerRequired } from "../../Services/ServiceApi";

import HashLoader from "react-spinners/HashLoader";

const Contact = () => {
  const override = {
    display: "block",
    margin: "0 auto",
  };
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    content: "",
  });
  const checkValidation = () => {
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.content
    ) {
      toast.warn("Please complete the form");
      return false;
    } else {
      return true;
    }
  };
  const submitRequired = async () => {
    const check = checkValidation();
    if (check === true) {
      setLoading(true);
      setTimeout(async () => {
        setLoading(false);
        const data = {
          FullName: formData.fullName,
          Email: formData.email,
          Phone: formData.phone,
          Content: formData.content,
        };
        const respond = await getCustomerRequired(data);
        if (respond.status === "success") {
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            content: "",
          });

          return toast.success(respond.message);
        } else {
          return toast.error(respond.message);
        }
      }, 3000);
    }
  };
  return (
    <div className="contact">
      {loading && (
        <div className="overlay">
          <HashLoader
            color="#4f6edb"
            loading={true}
            size={80}
            cssOverride={override}
          />
        </div>
      )}
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
            <input
              value={formData.fullName}
              onChange={(event) =>
                setFormData({ ...formData, fullName: event.target.value })
              }
              type="text"
              placeholder="FullName"
            />
          </div>
          <div className="main-form">
            <input
              value={formData.email}
              onChange={(event) =>
                setFormData({ ...formData, email: event.target.value })
              }
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="main-form">
            <input
              value={formData.phone}
              onChange={(event) =>
                setFormData({ ...formData, phone: event.target.value })
              }
              type="text"
              placeholder="Phone"
            />
          </div>
          <div className="main-form">
            <input
              value={formData.content}
              onChange={(event) =>
                setFormData({ ...formData, content: event.target.value })
              }
              type="text"
              placeholder="Content"
            />
          </div>
          <button onClick={() => submitRequired()}>Submiit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
