import React from "react";
import "./CustomerFeedBack.scss";

const CustomerFeedBack = () => {
  return (
    <div className="feedback">
      <h2 className="feedback-title">We value your feedback</h2>
      <p className="feedback-subtitle">
        Your thoughts help us improve and provide the best experience for you.
      </p>

      <form className="feedback-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Share your experience..." required></textarea>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default CustomerFeedBack;
