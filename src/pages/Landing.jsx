import React from "react";

import Menu from "../components/Menu";
import PeopleSay from "../components/PeopleSay";
import OurNew from "../components/OurNew";

const Home = () => {
  return (
    <>
      {/* home-banner Start  */}
      <section className="home-banner">
        <div className="bg-homee-banner"></div>
        <div className="home-banner-cont">
          <h1>Only Quality Food</h1>
          <p>
            Sed ut perspiatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architectoeaque ipsa quae
            ab illo inventore.
          </p>
          <div>
            <button>VIEW MENU</button>
            <button id="res-button">RESERVATION</button>
          </div>
          <i className="ri-arrow-down-line arrow-icon"></i>
        </div>
      </section>
      {/* home-banner end  */}

      {/* our-story Start  */}
      <section className="our-srtory">
        <div className="our-srtory-left">
          <h5>OUR STORY</h5>
          <h2>Welcome To Royal</h2>
          <p>
            <span>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit. doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit.
            </span>
            <span>
              Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto.
            </span>
          </p>
        </div>
        <div className="our-srtory-right">
          <img
            src="https://images.unsplash.com/photo-1572357243457-fc153742e7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHZlZ2l0YWJsZXN8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
      </section>
      {/* our-story end  */}

      {/* our-story Start  */}
      <section className="the-best">
        <h5>ONLY THE BEST</h5>
        <h2>Fresh Ingredient, Tasty Meals</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          quod adipisci quas? Distinctio alias deleniti ex eveniet, consequatur,
          natus et hic, at aliquid ipsum corrupti culpa vel ipsam earum nobis?
        </p>
        <button>VIEW ITEMS</button>
      </section>
      {/* our-story end  */}

      {/* menu start  */}
      <Menu />
      {/* menu end  */}

      {/* people-say start  */}
      <PeopleSay />
      {/* people-say end  */}

      {/* our-new start  */}
      <OurNew />
      {/* our-new end  */}
    </>
  );
};

export default Home;
