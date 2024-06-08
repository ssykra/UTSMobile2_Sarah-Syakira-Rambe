import React from "react";
import profilePic from "../assets/img/sarah.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../styles/Sidebar.css";

const Sidebar = ({ profileName }) => {
  return (
    <div className="sidebar">
      <div className="profile">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h4 className="profile-name">Sarah Syakira Rambe</h4>
        <h5 className="profile-id">2130511073</h5>
      </div>
      <div className="social-links">
        <a href="https://www.instagram.com/sarahrambe__/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://bit.ly/sarahrambe" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
