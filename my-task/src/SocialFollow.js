import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
    <h3>Social Follow</h3>
    <a href="https://www.instagram.com/sarahrambe__/"
      className="youtube social">
      <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a>
    <a href="https://www.instagram.com/sarahrambe__/"
      className="youtube social">
      <FontAwesomeIcon icon={faLinkedin} size="2x" />
    </a>
</div>
  );
}