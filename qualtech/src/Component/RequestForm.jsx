import React, { useState } from "react";
import query from "../assets/Query.png";
import "../Styles/Request.css";
import reqarr from "../assets/Reqarrow.png";
const RequestForm = () => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [msg, setMsg] = useState();
  return (
    <>
      <div className="qt-request">
        <img src={query} />
        <div className="sentReq">
          <div className="message">
            <h3>Tell Us About Your Project And Get Free Consultation</h3>
            <p>Expect a call back from us within 12 hours.</p>
          </div>
          <div className="form">
            <div className="datafield">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="number"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="emailfield">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="describe">
              <input
                type="text"
                placeholder="Please Describe your Query"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              />
            </div>
            <div className="reqbtn">
              <button type="button">
                Send Request
                <img src={reqarr} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RequestForm;
