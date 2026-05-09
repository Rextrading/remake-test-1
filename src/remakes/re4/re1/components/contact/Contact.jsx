import React from "react";
import "./Contact.scss";
import { BsClock } from "react-icons/bs";
import { TfiMoreAlt } from "react-icons/tfi";

const Contact = ({ contactInfo, id }) => {
  return (
    <div className="contact" key={id}>
      <div className="top-section">
        <div className="user-details">
          <div className="user-img">
            <img src={contactInfo.image} alt="" />
          </div>
          <div className="name-email">
            <h4 className="name">{contactInfo.name}</h4>
            <p className="email">{contactInfo.email}</p>
          </div>
        </div>
        <div className="more-actions">
          <TfiMoreAlt />
        </div>
      </div>
      <hr />
      <div className="bottom-section">
        <div className="activity">
          <BsClock className="icon" />
          <span>Last Activity</span>
        </div>
        <h5 className="info">{contactInfo.info}</h5>
        <h5 className="date">{contactInfo.date}</h5>
      </div>
    </div>
  );
};

export default Contact;
