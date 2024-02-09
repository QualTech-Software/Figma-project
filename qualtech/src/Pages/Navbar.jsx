import React from "react";
import { qualtech, Group } from "../assets";

const Navbar = () => {
  return (
    <>
      <div className="containers">
        <img src={qualtech} className="logo-img" />
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-home" href="#">
              Home{" "}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-about" href="#">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-service" href="#">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-portfolio" href="#">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-career" href="#">
              Career
            </a>
          </li>
          <button className="nav-button">
            <a className="nav-btn" href="#">
              {" "}
              <img src={Group} className="rocket" />
              Contact Us
            </a>
          </button>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
