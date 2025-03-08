import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import LoginPage from "./admin/loginpage";
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            {/* Scroll to About Us */}
            <li className="nav-item">
              <ScrollLink
                className="nav-link"
                to="about"
                smooth={true}
                duration={800}
              >
                About Us
              </ScrollLink>
            </li>

            {/* Scroll to Our Services */}
            <li className="nav-item">
              <ScrollLink
                className="nav-link"
                to="services"
                smooth={true}
                duration={800}
              >
                Our Services
              </ScrollLink>
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
            {/* <li className="nav-item">
              <Link className="nav-link" to="/admin">Admin</Link>
            </li> */}
          </ul>
        </div>

        {/* Order Button */}
        <Link to="/inquiry" className="order-button">Order Now →</Link>

        {/* Login Icon */}
        <div className="login-icon" onClick={toggleLoginForm}>
          <i className="fas fa-user"></i> {/* Font Awesome user icon */}
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