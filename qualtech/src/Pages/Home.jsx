import React from "react";
import { Vector, Arrow } from "../assets";
import arr5 from "../assets/Default.svg";
import whatsup from "../assets/hhh.gif";

const Home = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="homecontainer">
        <img src={Vector} className="vector" />
        <div className="Titles">
          <h1>Growing Businesses through Digital Transformation.</h1>
        </div>
        <div className="Texts">
          <p>
            QualTech has been established with the vision of providing a
            software platform to the business, societal sections lacking the
            benefits of technology. We are a trusted partner in digital
            engineering and enterprise modernization, and our services provide
            distinct competitive advantage to our customers.
          </p>
        </div>
        <div className="contbtn">
          <button className="button">
            <p>Contact Us Now</p>
          </button>
          <button className="dservice">
            <p>
              Discover Our Services
              <img src={Arrow} className="arrow" />
            </p>
          </button>
        </div>
        <div className="qt-extra">
          <div className="whatsup">
            <img src={whatsup} />
          </div>
          <div className="default" onClick={handleClick}>
            <img src={arr5} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
