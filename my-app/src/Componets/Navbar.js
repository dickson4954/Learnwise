import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS file

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        {/* Logo on the Left */}
        <Link to="/" className="navbar-brand">
          <img
            src="https://i.pinimg.com/736x/77/e6/7d/77e67d6ffd4bc3c591663abfbd8329d5.jpg"
            alt="Learnwise"
            className="logo"
          />
        </Link>

       

        {/* Center Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Our Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/inquiry">Inquiry</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Order Button on the Right */}
        <Link to="/order-now" className="order-button">Order Now →</Link>
      </div>
    </nav>
  );
}

export default Navbar;
