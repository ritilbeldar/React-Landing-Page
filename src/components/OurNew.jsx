import React, { useState } from "react";

const OurNew = () => {
  const ournew = [
    {
      id: "1",
      img: "https://images.unsplash.com/photo-1612700722193-f0410adb8949?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      hedging: "Nunc Valutpat Venenatuis",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consequatur, totam inventore maxime amet doloribus facere fugit incidunt aperiam suscipit expedita praesentium officia id tenetur, eius odit optio voluptatibus adipisci!",
      name: "Divi",
    },
    {
      id: "2",
      img: "https://images.unsplash.com/photo-1531877025030-f7696a50770f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      hedging: "Vestibulum Nisi Felis",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consequatur, totam inventore maxime amet doloribus facere fugit incidunt aperiam suscipit expedit.",
      name: "Divi",
    },
    {
      id: "3",
      img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      hedging: "Proin Eu Augue Efficitur",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consequatur, totam inventore maxime amet doloribus facere fugit incidunt aperiam suscipit expedit.",
      name: "Divi",
    },
  ];

  return (
    <>
      <section className="our-new">
        <div className="our-new-top">
          <h5>ONLY THE BEST</h5>
          <h2>Fresh Ingredient, Tasty Meals</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            quod adipisci quas? Distinctio alias deleniti ex eveniet,
            consequatur, natus et hic, at aliquid ipsum corrupti.
          </p>
        </div>
        <div className="our-new-bottom">
          {ournew.map((item, index) => (
            <div className="our-new-card" key={item.id}>
              <img src={item.img} alt="" />
              <span>
                <h3>{item.hedging}</h3>
                <h5>CATEGORY</h5>
                <p>{item.paragraph}</p>
              </span>
            </div>
          ))}
        </div>
        <button>READ MORE</button>
      </section>
    </>
  );
};

export default OurNew;
