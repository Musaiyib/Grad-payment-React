import React from "react";
import eth1 from "../assets/eth1.png";
import eth2 from "../assets/eth2.png";

const Reason = () => {
  const data = [
    {
      img: eth1,
      title: "Why is it important to pay",
      desc1:
        "Don't miss out on the release of our new NFT. Sign up below to recieve updates when we go live on 11/22",
      desc2:
        "Don't miss out on the release of our new NFT. Sign up below to recieve updates when we go live on 11/22",
    },
    {
      img: eth2,
      title: "Why am i paying through this website",
      desc1:
        "Don't miss out on the release of our new NFT. Sign up below to recieve updates when we go live on 11/22",
      desc2:
        "Don't miss out on the release of our new NFT. Sign up below to recieve updates when we go live on 11/22",
    },
  ];
  return (
    <div className="reason">
      <div className="container">
        {data.map((item, index) => {
          return (
            <div className="content" key={index}>
              <div className="image">
                <img src={item.img} alt="eth1" />
              </div>
              <h2 className="title">{item.title}</h2>
              <p className="description">{item.desc1}</p>
              <p className="description">{item.desc2}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Reason;
