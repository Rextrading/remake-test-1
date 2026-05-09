import React, { useState } from "react";
import "./Contacts.scss";
import Contact from "../contact/Contact";
import { contactInfo } from "../../assets";

const Contacts = () => {
  return (
    <div className="contacts">
      {contactInfo.map((item) => (
        <Contact key={item.id} contactInfo={item} />
      ))}
    </div>
  );
};

export default Contacts;
