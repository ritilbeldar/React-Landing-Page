import React, { useState } from "react";

const PeopleSay = () => {
  const peoplesya = [
    {
      id: "1",
      stars: (
        <>
          <i className="ri-star-fill"></i>
          <i className="ri-star-fill"></i>
          <i className="ri-star-fill"></i>
          <i className="ri-star-fill"></i>
          <i className="ri-star-fill"></i>
        </>
      ),
      hedging: "A Great Find",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto blanditiis perspiciatis quod debitis dicta aut, aspernatur ipsum.",
      name: "Divi",
    },
    {
      id: "2",
      stars: (
        <>
          <i className="ri-star-fill"></i>
          <i className="ri-star-fill"></i>
          <i className="ri-star-fill"></i>
          <i className="ri-star-fill"></i>
          <i className="ri-star-half-fill"></i>
        </>
      ),
      hedging: "Fabulous food flawless service",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto blanditiis perspiciatis quod debitis dicta aut, aspernatur ipsum.",
      name: "Bloom",
    },
    {
      id: "3",
      stars: (
        <>
          <i className="ri-star-fill"></i>
          <i className="ri-star-fill"></i>
          <i className="ri-star-fill"></i>
          <i className="ri-star-fill"></i>
          <i className="ri-star-line"></i>
        </>
      ),
      hedging: "Another successfull experience",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto blanditiis perspiciatis quod debitis dicta aut, aspernatur ipsum adipisicing elit. Iusto blanditiis.",
      name: "Extra",
    },
    {
      id: "4",
      stars: (
        <>
          <i className="ri-star-fill"></i>
          <i className="ri-star-fill"></i>
          <i className="ri-star-fill"></i>
          <i className="ri-star-half-fill"></i>
          <i className="ri-star-line"></i>
        </>
      ),
      hedging: "Speechless",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto blanditiis perspiciatis quod debitis dicta aut.",
      name: "Monarch",
    },
  ];

  return (
    <>
      <section className="People-say">
        <div className="People-say-top">
          <h5>TESTIMONIALS</h5>
          <h2>What People are Saying</h2>
        </div>
        <div className="People-say-bottom">
          {peoplesya.map((item, index) => (
            <div className="people-card" key={item.id}>
              <div>
                <span>{item.stars}</span>
                <h4>"{item.hedging}"</h4>
              </div>
              <div>
                <p>"{item.paragraph}"</p>
                <h5>{item.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PeopleSay;
