import React from "react";
import { Vector, Arrow } from "../assets";

const Home = () => (
  <>
    <div className="homecontainer">
      <img src={Vector} className="vector" />
      <div className="Title">
        <h1>Growing Businesses through Digital Transformation.</h1>
      </div>
      <div className="Text">
        <p>
          QualTech has been established with the vision of providing a software
          platform to the business, societal sections lacking the benefits of
          technology. We are a trusted partner in digital engineering and
          enterprise modernization, and our services provide distinct
          competitive advantage to our customers.
        </p>
      </div>
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
  </>
);

export default Home;
