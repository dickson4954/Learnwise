import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import LoginPage from "./admin/loginpage";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Navbar.css";

function Navbar() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo on the Left */}
        <Link to="/" className="navbar-brand">
          <img
            src="https://i.pinimg.com/736x/07/c4/17/07c41708e5bec327e1bce797ff3b6faf.jpg"
            alt="Learnwise"
            className="logo"
          />
        </Link>

        {/* Navigation Links (Centered) */}
        <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="about" smooth={true} duration={800}>About Us</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="services" smooth={true} duration={800}>Our Services</ScrollLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/inquiry">Order</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Right Section: Order Button + Login + Menu Toggle */}
        <div className="navbar-right">
          <Link to="/inquiry" className="order-button">Order Now →</Link>

          <div className="login-button" onClick={toggleLoginForm}>
            <i className="fas fa-user"></i>
          </div>

          {/* Menu Toggle for Mobile */}
          <button className="menu-toggle" onClick={toggleMenu}>
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>
      </div>

      {/* Login Form Overlay */}
      {showLoginForm && (
        <div className="login-form-overlay">
          <LoginPage />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
