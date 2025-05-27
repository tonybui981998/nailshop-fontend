import React, { useState } from "react";
import "./VoucherBody.scss";
import { toast } from "react-toastify";
import { getCustomerbuyVoucher } from "../../Services/ServiceApi";
import HashLoader from "react-spinners/HashLoader";
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const VoucherBody = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setformData] = useState({
    userName: "",
    email: "",
    purchaseValue: "",
  });
  // validate
  const validate = () => {
    if (!formData.userName || !formData.email || !formData.purchaseValue) {
      toast.warn("please double check information");
      return false;
    }
    return true;
  };
  const submitRequired = async () => {
    const check = validate();
    if (check) {
      const data = {
        userName: formData.userName,
        email: formData.email,
        totalAmount: formData.purchaseValue,
        remainingAmount: formData.purchaseValue,
      };
      setLoading(true);
      const respond = await getCustomerbuyVoucher(data);
      if (respond) {
        setLoading(false);
        if (respond.status === "success") {
          toast.success("Thank you for purchased");
        } else {
          setLoading(false);
          toast.error("please try again");
        }
      }
    }
  };
  return (
    <div className="voucher">
      <div className="title">Enjoy a Special Offer Just for You</div>
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
      <div className="voucher-content">
        <div className="voucher-input">
          {" "}
          <label>User Name:</label>
          <br />
          <input
            value={formData.userName}
            onChange={(e) =>
              setformData({ ...formData, userName: e.target.value })
            }
            type="text"
            placeholder="enter your name"
          />
        </div>
        <div className="voucher-input">
          {" "}
          <label>Email:</label>
          <br />
          <input
            value={formData.email}
            onChange={(e) =>
              setformData({ ...formData, email: e.target.value })
            }
            type="email"
            placeholder="enter your email"
          />
        </div>
        <div className="voucher-input">
          {" "}
          <label>Purchase Value:</label>
          <br />
          <input
            value={formData.purchaseValue}
            onChange={(e) =>
              setformData({ ...formData, purchaseValue: e.target.value })
            }
            type="text"
            placeholder="enter value"
          />
        </div>
      </div>
      <div className="button" onClick={() => submitRequired()}>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default VoucherBody;
