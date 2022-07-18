import React from "react";
import nacoss from "../assets/nacosslogo.png";
import auk from "../assets/auk.png";
// import clients3 from "../assets/clients3.png";
// import clients4 from "../assets/clients4.png";
// import clients5 from "../assets/clients5.png";

export default function Clients() {
  const data = [
    nacoss,
    auk,
    // clients3,
    // clients4,
    // clients5
  ];
  return (
    <div className="clients">
      <div className="container">
        <div className="clients-container">
          {data.map((client, index) => (
            <div className="client" key={index}>
              <img src={client} alt="client" width={100} height="auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
