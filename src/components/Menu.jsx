import React, { useState } from "react";

const Menu = () => {
  const manudata = [
    {
      id: "1",
      price: "$25.95",
      hedging: "Grilled Fillet",
      paragraph:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptate maccusantium doloremque laudantium, totam rem aperiam, eaque ipsaquae ab illo inventore veritatis et quasi architecto beataevitaedicta sunt",
    },
    {
      id: "2",
      image:
        "https://images.unsplash.com/photo-1670398564097-0762e1b30b3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fEdyaWxsZWQlMjBGaWxsZXR8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "3",
      price: "$53.3",
      hedging: "Chicken Breast",
      paragraph:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptate maccusantium doloremque laudantium, totam rem aperiam, eaque ipsaquae ab illo inventore veritatis et quasi architecto beataevitaedicta sunt",
    },
    {
      id: "4",
      image:
        "https://images.unsplash.com/photo-1599498844007-bc3419bf24a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2060&q=80",
    },
    {
      id: "5",
      price: "$40.5",
      hedging: "King Carb",
      paragraph:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptate maccusantium doloremque laudantium, totam rem aperiam, eaque ipsaquae ab illo inventore veritatis et quasi architecto beataevitaedicta sunt",
    },
    {
      id: "6",
      image:
        "https://images.unsplash.com/photo-1558679582-7fe9071024c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2FybGljJTIwdG9hc3R8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "7",
      price: "$40.5",
      hedging: "Sea Trout",
      paragraph:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptate maccusantium doloremque laudantium, totam rem aperiam, eaque ipsaquae ab illo inventore veritatis et quasi architecto beataevitaedicta sunt",
    },
    {
      id: "8",
      image:
        "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: "9",
      price: "$22.3",
      hedging: "Roasted Bakra",
      paragraph:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptate maccusantium doloremque laudantium, totam rem aperiam, eaque ipsaquae ab illo inventore veritatis et quasi architecto beataevitaedicta sunt",
    },
    {
      id: "10",
      image:
        "https://images.unsplash.com/photo-1580476262843-d5e9b687d4d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: "11",
      price: "$22.3",
      hedging: "Roasted Fish",
      paragraph:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptate maccusantium doloremque laudantium, totam rem aperiam, eaque ipsaquae ab illo inventore veritatis et quasi architecto beataevitaedicta sunt",
    },
    {
      id: "12",
      image:
        "https://images.unsplash.com/photo-1673436977947-0787164a9abc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  return (
    <>
      <section className="manu">
        {manudata.map((item, index) => (
          <div className="card card-1" key={item.id}>
            <span>
              <h5>{item.price}</h5>
              <h4>{item.hedging}</h4>
              <p>{item.paragraph}</p>
            </span>
            <div>
              <img src={item.image} alt="" />
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Menu;
