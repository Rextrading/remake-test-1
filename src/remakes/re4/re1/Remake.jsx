import React from "react";
import "./style.scss";
// import { Link } from "react-router-dom";
import { AiOutlineLeft, AiOutlinePlus } from "react-icons/ai";
import { BsFunnel } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import Contacts from "./components/contacts/Contacts";

const Remake = () => {
  return (
    <div className="clans-page">
      <div className="back-btn">
        <AiOutlineLeft />
      </div>
      <div className="title-container">
        <div className="top-section">
          <h1>People</h1>
          <div className="add-btn">
            <AiOutlinePlus />
            <h5>Add</h5>
          </div>
        </div>
        <div className="contact-group">
          <button className="active">Contact</button>
          <button>Group</button>
        </div>
      </div>
      <div className="search-container">
        <div className="search-bar">
          <CiSearch className="icon" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="filter-btn">
          <BsFunnel className="icon" />
          <h5>Filter</h5>
        </div>
      </div>
      <div className="main-container">
        <Contacts />
      </div>
    </div>
  );
};

export default Remake;
