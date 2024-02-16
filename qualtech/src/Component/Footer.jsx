import React from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import FooterData from "../Data/FooterData.json";
import {
  qualtechlogo,
  facebook,
  linkedin,
  location,
  contact,
  messagebox,
  csvg,
} from "../assets";

const Footer = () => (
  <>
    <div className="qt-footer">
      <MDBRow className="qt_f">
        <MDBCol className="qt_i">
          <img src={qualtechlogo} className={FooterData.logo} />
          <p>Follow Us on</p>
          <img src={facebook} className={FooterData.socialMedia.facebook} />
          <img src={linkedin} className={FooterData.socialMedia.linkedin} />
        </MDBCol>
        <MDBCol className="qt_services">
          <h6>Services</h6>
          {FooterData.services.map((service, index) => (
            <p key={index}>
              <a className={service.className}>{service.name}</a>
            </p>
          ))}
        </MDBCol>
        <MDBCol md="3" lg="2" xl="2" className="qt_links">
          <h6>Quick Links</h6>
          {FooterData.quickLinks.map((link, index) => (
            <p key={index}>
              <a className={link.className}>{link.name}</a>
            </p>
          ))}
        </MDBCol>
        <MDBCol md="4" lg="3" xl="3" className="qt_contact">
          <h6>Contact</h6>
          <div className="qt-add">
            <img src={location} className="qt_location" />
            <p>{FooterData.contact.address}</p>
          </div>
          <div className="qt-num">
            <img src={contact} className="qt_con" />
            <p>{FooterData.contact.phone}</p>
          </div>
          <div className="qt-email">
            <img src={messagebox} className="qt_msg" />
            <p>{FooterData.contact.email}</p>
          </div>
        </MDBCol>
      </MDBRow>
    </div>
    <div className="qt_sw">
      <img src={csvg} className="qt_csvg" />
      <p>{FooterData.footerText}</p>
    </div>
  </>
);

export default Footer;
