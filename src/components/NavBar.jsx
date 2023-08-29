import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  // Routes
  const navLinks = [
    {
      text: "Landing",
      to: "/",
    },
    {
      text: "Home",
      to: "/Home",
    },
    {
      text: "Gallery",
      to: "/Gallery",
    },
    {
      text: "Shop",
      to: "/Shop",
    },
    {
      text: "Blog",
      to: "/Blog",
    },
    {
      text: "About",
      to: "/About",
    },
    {
      text: "Team",
      to: "/Team",
    },
    {
      text: "Contect",
      to: "/Contect",
    },
  ];

  return (
    <nav>
      <h2>Restaurant Landing Page</h2>
      <ul>
        {navLinks.map((item, index) => (
          <li key={index}>
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
        <li>
          <a href="">
            <i className="ri-shopping-cart-fill"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
