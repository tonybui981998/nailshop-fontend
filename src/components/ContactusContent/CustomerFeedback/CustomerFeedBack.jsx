import React, { useState } from "react";
import "./CustomerFeedBack.scss";
import { getCustomerFeedBack } from "../../Services/ServiceApi";
import { toast } from "react-toastify";

const CustomerFeedBack = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    Email: "",
    Message: "",
  });

  const submit = async () => {
    const data = {
      FullName: formData.fullName,
      Email: formData.Email,
      Message: formData.Message,
    };
    const checkRespond = await getCustomerFeedBack(data);
    console.log(checkRespond);
    if (checkRespond.status === "success") {
      setFormData({
        fullName: "",
        Email: "",
        Message: "",
      });
      toast.success("Thank you for your feedBack");
    } else {
      toast.error(checkRespond.Message);
    }
  };
  return (
    <div className="feedback">
      <h2 className="feedback-title">We value your feedback</h2>
      <p className="feedback-subtitle">
        Your thoughts help us improve and provide the best experience for you.
      </p>

      <div className="feedback-form">
        <input
          type="text"
          onChange={(event) =>
            setFormData({ ...formData, fullName: event.target.value })
          }
          placeholder="Your Name"
          value={formData.fullName}
          required
        />
        <input
          type="email"
          onChange={(event) =>
            setFormData({ ...formData, Email: event.target.value })
          }
          placeholder="Your Email"
          value={formData.Email}
          required
        />
        <textarea
          onChange={(event) =>
            setFormData({ ...formData, Message: event.target.value })
          }
          placeholder="Share your experience..."
          required
          value={formData.Message}
        ></textarea>
        <button type="button" onClick={submit}>
          Submit Feedback
        </button>
      </div>
    </div>
  );
};

export default CustomerFeedBack;
