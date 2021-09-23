import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div>
      <h1 className="cv">DOWLOAND CV</h1>
      <footer className="home-footer">
        <div className="contact-area">
          <div className="adress item">
            <i className="fas fa-map-marker-alt"></i>
            <p>Düsseldorf</p>
          </div>
          <div className="tel item">
            <i className="fas fa-phone-alt"></i>
            <p>+49 123 456 78 89</p>
          </div>
          <div className="email item">
            <i className="fas fa-envelope-open"></i>
            <p> suadeumar@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
