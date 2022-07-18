import { Link } from "react-router-dom";
import React from "react";
import nacossLogo from "../assets/nacosslogo.png";
export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <p className="sub-title">Launching Soon</p>
          <h1 className="title">
            First Nacos Payment Website <br />
            Al-Qalam Chapter
          </h1>
          <p className="description">
            Don't miss out on the release of our new <b>NACOS</b> payment
            website.
          </p>
          <Link to="/admin/payment" className="pageBtn">
            Pay Now
          </Link>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={nacossLogo} alt="Nacoss Logo" width={350} height={350} />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
