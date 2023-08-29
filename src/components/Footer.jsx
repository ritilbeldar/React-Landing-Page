import React from "react";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="bg-footer"></div>
        <div>
          <div className="footer-card">
            <h3>Hours of Operation</h3>
            <span>
              <div>
                <h6>MON - FRI </h6>
                <p>10:00am - 1:00pm</p>
                <p>4:00pm - 10:30pm</p>
              </div>
              <hr />
              <div>
                <h6>SAT</h6>
                <p>3:00pm - 10:30pm</p>
              </div>
              <hr />
              <div>
                <h6>SUN</h6>
                <p>We are closed</p>
              </div>
              <button>MAKE A RESERAVATION</button>
            </span>
          </div>
          <form className="footer-card footer-card-last">
            <span className="footer-card-last-new">
              <h3>Drop Us a Line</h3>
              <p>Don't be shy. Let us know if you have any questions!</p>
              <button>CONTACT US</button>
            </span>

            <span>
              <div>
                <h3>Our Newsletter</h3>
                <p>Lorem ipsum dolor sit amet. Lorem</p>
              </div>
              <div className="input">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="email" placeholder="Email" />
                <button>CONTACT US</button>
              </div>
            </span>
          </form>
        </div>
      </section>
    </>
  );
};

export default Footer;
