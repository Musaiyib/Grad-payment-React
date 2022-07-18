import React from "react";
import Card from "./Card";
import {
  FaUserGraduate,
  FaTshirt,
  FaCamera,
  FaCertificate,
  FaAward,
  FaFlask,
} from "react-icons/fa";

export default function Free() {
  const data = [
    {
      title: "gawn",
      totalAmount: 2019384,
      totalPP: 129,
      icon: <FaUserGraduate className="icon" />,
      price: 10000,
    },
    {
      title: "t-shirt",
      totalAmount: 2019384,
      totalPP: 129,
      icon: <FaTshirt className="icon" />,
      price: 10000,
    },
    {
      title: "walima",
      totalAmount: 2019384,
      totalPP: 129,
      icon: <FaFlask className="icon" />,
      price: 10000,
    },
    {
      title: "award",
      totalAmount: 2019384,
      totalPP: 129,
      icon: <FaAward className="icon" />,
      price: 10000,
    },
    {
      title: "certificate",
      totalAmount: 2019384,
      totalPP: 129,
      icon: <FaCertificate className="icon" />,
      price: 10000,
    },
    {
      title: "photo album",
      totalAmount: 2019384,
      totalPP: 129,
      icon: <FaCamera className="icon" />,
      price: 10000,
    },
  ];
  return (
    <div className="free">
      <div className="container">
        <div className="background">
          <div className="ellipse pink"></div>
          <div className="ellipse green"></div>
        </div>
        <div className="content">
          <div className="highlight">
            <h4>Highlights</h4>
            <div className="cards">
              {data.map((card, index) => (
                <Card key={index} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
