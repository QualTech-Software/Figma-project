import React from "react";
import ClientRec from "../assets/ClientRec.svg";
import "../Styles/Client.css";
import { healthcare, farms, dome, market } from "../assets";

const Client = () => {
  return (
    <>
      <div className="client">
        <img src={ClientRec} />
        <div className="contenttag">
          <p>Our Happy Clients</p>
        </div>
        <div className="clientimage">
          <div className="healthcare">
            <img src={healthcare} />
          </div>
          <div className="farms">
            <img src={farms} />
          </div>
          <div className="market">
            <img src={market} />
          </div>
          <div className="dome">
            <img src={dome} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Client;
