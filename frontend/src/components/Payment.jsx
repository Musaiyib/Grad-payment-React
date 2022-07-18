import React, { useState } from "react";
import nacoslogo from "../assets/nacosslogo.png";
import { useDispatch, useSelector } from "react-redux";

import { addPayment, getPayments } from "../Slices/paymentSlice";

const Payment = () => {
  // const amount = 1000000; // Remember, set in kobo!
  const [name, setName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();

  // const payment = useSelector((state) => state.paymentSlice.payment);
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(getPayments());
    dispatch(addPayment({ name, regNo, phone, amount: 20000 }));
  };

  return (
    <div className="payment" style={{ height: "100%" }}>
      <div className="container">
        <div className="content">
          <form>
            <h1 className="title">Full package</h1>
            <p className="sub-title">Graduation fee ₦20,000</p>
            <p className="description">
              Gawn, T-Shirt/P-Cap, Photo Album, Walima, etc.
            </p>
            <div className="formInput">
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
              <input
                type="text"
                onChange={(e) => setRegNo(e.target.value)}
                placeholder="Registration Number"
              />
              <input
                type="text"
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
              />

              <button onClick={handleSubmit}>Pay</button>
            </div>
          </form>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={nacoslogo} alt="home images" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Payment;
