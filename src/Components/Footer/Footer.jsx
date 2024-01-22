import React from "react";
import "./Footer.css";
import icon from "../Assets/9289805.jpg";
import insta from "../Assets/instagram_icon.png";
import pinterest from "../Assets/pintester_icon.png";
import whatsapp from "../Assets/whatsapp_icon.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={icon} alt="" />
        <p>LAST BUD</p>
      </div>

      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="footer-social">
        <div className="footer-social-container">
          <img src={insta} alt="" />
        </div>
        <div className="footer-social-container">
          <img src={pinterest} alt="" />
        </div>
        <div className="footer-social-container">
          {" "}
          <img src={whatsapp} alt="" />
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved.</p>
      </div>
    </div>
  );
};
