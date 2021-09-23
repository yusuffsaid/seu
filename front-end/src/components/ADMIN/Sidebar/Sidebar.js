import React, { useEffect } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
const Sidebar = ({ moreArea }) => {
  useEffect(() => {
    let nav = document.querySelector("nav");
    nav.style.display = "none";
    return () => {
      nav.style.display = "flex";
    };
  }, []);

  const toogleHandler = (e) => {
    const navbar = document.querySelector("#navbar");
    e.target.classList.toggle("rotate");
    navbar.classList.toggle("show");
    moreArea();
  };

  return (
    <div className="l-navbar" id="navbar">
      <div className="nav">
        <a href="#" className="nav-logo-container"></a>
        <div
          className="nav-toggle"
          id="nav-toggle"
          onClick={(e) => toogleHandler(e)}
        >
          <i className="fas fa-angle-right"></i>
        </div>
        <ul className="nav-list">
          <Link to="/admin/questions" className="nav-link ">
          <i className="fas fa-question"></i>
            <span className="link-text">Soru Ekle</span>
          </Link>

          <Link to="/admin/categories" className="nav-link ">
            <i className="fab fa-accusoft"></i>
            <span className="link-text">Kategori Ekle</span>
          </Link>

          <Link to="/admin/request" className="nav-link">
            <i className="fas fa-reply"></i>
            <span className="link-text">Gelen İstekler</span>
          </Link>

          <Link to="/admin/user" className="nav-link">
          <i className="fas fa-users"></i>
            <span className="link-text">Kullanıcılar</span>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
