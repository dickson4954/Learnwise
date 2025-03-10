import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import LoginPage from "./admin/loginpage";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./Navbar.css";

function Navbar() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img
            src="https://i.pinimg.com/736x/77/e6/7d/77e67d6ffd4bc3c591663abfbd8329d5.jpg"
            alt="Learnwise"
            className="logo"
          />
        </Link>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
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

     {/* Right Section: Order Button + Login Icon */}
<div className="navbar-right">
  {/* Order Now Button */}
  <Link to="/inquiry" className="order-button m-3 p-4">Order Now →</Link>
  <div className="login-button" onClick={toggleLoginForm}>
    <i className="fas fa-user"></i>
  </div>  
</div>



        {/* Login Form Overlay */}
        {showLoginForm && (
          <div className="login-form-overlay">
            <LoginPage />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
