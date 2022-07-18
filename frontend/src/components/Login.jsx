import axios from "axios";
import React, { useState } from "react";
import "./../sass/sections/_login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (email !== "" && password !== "") {
      try {
        await axios
          .post("http://localhost:4000/api/users/", {
            email,
            password,
          })
          .then((res) => {
            console.log(res.data);
            // window.location = "/payment";
          })
          .catch(({ response }) => {
            console.log(response.data, `status: ${response.status}`);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="login">
      <div className="sub-main">
        <h2>Admin Login</h2>
        <div className="input">
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="input">
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            id=""
            placeholder="Password"
          />
        </div>
        <button onClick={handleSubmit}>Login</button>
        <div className="note">
          <p>
            <span>NOTE:</span>
            <br />
            You must be an admin before you will be able to access the list of
            people that paid
          </p>
        </div>
      </div>
      <div className="ellipse-container">
        <div className="ellipse pink"></div>
        <div className="ellipse orange"></div>
      </div>
    </div>
  );
};

export default Login;
