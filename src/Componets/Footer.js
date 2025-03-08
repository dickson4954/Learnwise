import React from 'react';
import './Footer.css';

import logo from '../images/logo.png';
import cashApp from '../images/cashapp.png';
import paypal from '../images/paypal.png';
import westernUnion from '../images/westernunion.png';
import remitly from '../images/remitly.png';
import zelle from '../images/zelle.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Learnwise Logo" />
        </div>
        <div className="footer-section working-hours">
          <h4 className="section-title">WORKING HOURS</h4>
          <p>Monday - Friday 24/7 Services</p>
          <p>Saturday - Sunday 24/7 Services + Consulting</p>
        </div>
        <div className="footer-section quick-links">
          <h4 className="section-title">QUICK LINKS</h4>
          <ul>
            <li><a href="#" className="text-dark">Privacy Policy</a></li>
            <li><a href="#" className="text-dark">Terms of Service</a></li>
            <li><a href="#" className="text-dark">Blog</a></li>
            <li><a href="#"className="text-dark">Samples</a></li>
          </ul>
        </div>
        <div className="footer-section newsletter">
          <h4 className="section-title">NEWSLETTER</h4>
          <p>Stay up to date with our latest news, receive exclusive deals, and more.</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter Your Email Address" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="payment-methods">
          <div className="payment-item">
            <img src={cashApp} alt="Cash App" />
            <p>Cash App</p>
          </div>
          <div className="payment-item">
            <img src={paypal} alt="PayPal" />
            <p>PayPal</p>
          </div>
          <div className="payment-item">
            <img src={westernUnion} alt="Western Union" />
            <p>Western Union</p>
          </div>
          <div className="payment-item">
            <img src={remitly} alt="Remitly" />
            <p>Remitly</p>
          </div>
          <div className="payment-item">
            <img src={zelle} alt="Zelle" />
            <p>Zelle</p>
          </div>
        </div>
        <p className="copyright">&copy; Learnwise 2025 - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
