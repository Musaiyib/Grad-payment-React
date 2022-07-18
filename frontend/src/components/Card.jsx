import React from "react";
import "../sass/sections/_card.scss";
const Card = ({ card }) => {
  const { icon, title, totalAmount, totalPP, price } = card;
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-icon">{icon}</div>
        <div className="card-title">{title}</div>
        <hr />
        <div className="card-amount">
          <span>Total amount paid: </span> <br /> ₦ {totalAmount}
        </div>
        <hr />
        <div className="price">
          <span>{title} price: </span>
          <br />₦ {price}
        </div>
        <hr />
        <div className="card-people-paid">
          <span>Total people paid: </span>
          <br />
          {totalPP}
        </div>
      </div>
    </div>
  );
};

export default Card;
