/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

import "./header.css";
const Header = () => {
  return (
    <React.Fragment>
      <section className="header" id="header">
        <h1 className="animate__animated animate__fadeInDown">
          Hello I'm Suad
        </h1>
        <h3 className="animate__animated animate__fadeInDown">
          I'm front-end web developer.
        </h3>
        <img
          className="animate__animated animate__fadeInUp"
          src="/assets/img/foto.png"
        ></img>
        <div className="social-link">
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-github"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Header;
