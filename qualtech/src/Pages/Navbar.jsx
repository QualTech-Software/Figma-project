import React from "react";
import { qualtech, Group } from "../assets";
import NavData from "../Data/NavData.json";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="containerz">
        <img src={qualtech} className="logo-img" />
        {/* TODO:: We need to convert this into the compound component */}
        <ul className="navbar-nav">
          {NavData.navItems.map((item) => (
            <li
              key={item.id}
              className={`nav-item ${item.isActive ? "active" : ""}`}
            >
              <Link className={item.className} to={item.to}>
                {item.name}
              </Link>
            </li>
          ))}
          <button className="nav-button">
            <Link className="nav-btn" to="/contact">
              <img src={Group} className="rocket" />
              Contact Us
            </Link>
          </button>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
