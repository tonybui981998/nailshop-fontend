import React, { useState, CSSProperties } from "react";
import "./CustomerFeedBack.scss";
import { getCustomerFeedBack } from "../../Services/ServiceApi";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";

const CustomerFeedBack = () => {
  let [loading, setLoading] = useState(false);

  const override = {
    display: "block",
    margin: "0 auto",
  };
  const [formData, setFormData] = useState({
    fullName: "",
    Email: "",
    Message: "",
  });
  const checkValidation = () => {
    if (!formData.fullName || !formData.Email || !formData.Message) {
      toast.warn("Please all the form");
      return false;
    } else {
      return true;
    }
  };

  const submit = async () => {
    const check = checkValidation();
    if (check === true) {
      setLoading(true);
      setTimeout(async () => {
        setLoading(false);
        const data = {
          FullName: formData.fullName,
          Email: formData.Email,
          Message: formData.Message,
        };
        const checkRespond = await getCustomerFeedBack(data);
        if (checkRespond.status === "success") {
          setFormData({
            fullName: "",
            Email: "",
            Message: "",
          });
          toast.success("Thank you for your FeedBack");
        } else {
          toast.error(checkRespond.Message);
        }
      }, 3000);
    } else {
      return false;
    }
  };
  return (
    <div className="feedback">
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
