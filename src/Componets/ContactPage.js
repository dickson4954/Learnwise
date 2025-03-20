import React, { useState } from "react";
import "./ContactPage.css";
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';


const ContactPage = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    message: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Sending form data:", formData); // Log form data
      const response = await axios.post('http://127.0.0.1:5000/send_email', formData);
      alert(response.data.message);
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        message: ''
      })
    } catch (error) {
      console.error("Error sending email:", error); // Log the error
      alert('Failed to send email. Please try again later.');
    }
  };


  return (
    <>
      <header className="landing-header">
        <Navbar />
      </header>
      {/* Top Section */}
      <div className="contact-top">
        <h4 className="contact-header">Our Contact Details</h4>
        <h2 className="contact-title">Get In-Touch for Any Enquiries</h2>
        <p className="contact-subtitle">
          We have multiple channels you can use to have your message reach our support team as shown below;
        </p>
      </div>


      {/* Contact Box Positioned Between Sections */}
      <div className="contact-container">
        <div className="contact-details">
          <div className="contact-item">
            <span className="contact-icon">📬</span>
            <h3 className="contact-item-title">Email Address</h3>
            <p className="contact-item-text">info@tracyscripts.com</p>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <h3 className="contact-item-title">Phone Number</h3>
            <p className="contact-item-text">+1 (985) 328 - 2671</p>
          </div>
          <div className="contact-item">
            <span className="contact-icon">🔗</span>
            <h3 className="contact-item-title">Social Media</h3>
            <p className="contact-item-text">Instagram || Snapchat</p>
          </div>
        </div>
      </div>


      {/* Let's Talk Section */}
      <div className="lets-talk">
        <div className="container">
          {/* Left Side - WhatsApp & Socials */}
          <div className="left">
            <div className="divider"></div>
            <h2>Let's talk</h2>
            <div className="divider"></div>
            <h3>Through WhatsApp</h3>
            <button className="whatsapp-button">WHATSAPP CHAT</button>
            <div className="divider"></div>
            <h3>Follow us</h3>
            <div className="social-icons">
              <span className="icon">📷</span>
              <img
                src="https://i.pinimg.com/736x/4e/95/26/4e95267bcf1cc4ce078755e85e388add.jpg"
                alt="Instagram Logo"
                className="instagram-logo"
                style={{ height: '70px', width: '70px' }}
              />
              <span className="icon">🔗</span>
            </div>
          </div>


          {/* Right Side - Contact Form */}
          <div className="right">
            <h4>Send us an e-mail and we will get back to you as soon as possible</h4>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  className="input-half"
                  placeholder="First name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="input-half"
                  placeholder="Last name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="email"
                className="input-full"
                placeholder="Enter email address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                className="input-full"
                placeholder="Enter your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="send-button">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </div>
      <div className="make-order-section">
        <Link to="/inquiry" className="order-button">MAKE YOUR ORDER</Link>
      </div>
      <Footer />
    </>
  );
};


export default ContactPage;
