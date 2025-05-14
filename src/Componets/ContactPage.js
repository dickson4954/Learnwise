import React, { useState } from "react";
import "./ContactPage.css";
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp, faSnapchat } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";



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
      console.log("Sending form data:", formData);
      const response = await axios.post('http://learnwisee.com/backend/send_email', formData);
      alert(response.data.message);
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        message: ''
      })
    } catch (error) {
      console.error("Error sending email:", error);
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
          We have multiple channels you can use to reach our support team as shown below;
        </p>
      </div>

      {/* Contact Box */}
      <div className="contact-container">
        <div className="contact-details">
          {/* Email */}
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} size="2x" style={{ color: "#D44638" }} />
            <h3 className="contact-item-title">Email Address</h3>
            <p className="contact-item-text">info@Learnwise.com</p>
          </div>

          {/* Phone */}
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} size="2x" style={{ color: "#25D366" }} />
            <h3 className="contact-item-title">Phone Number</h3>
            <p className="contact-item-text">+1 (646) 624 - 7498</p>
          </div>

          {/* Social Media */}
          <div className="contact-item">
            <FontAwesomeIcon icon={faSnapchat} size="2x" style={{ color: "#FFFC00" }} />
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

            {/* WhatsApp Chat Button */}
<h3>Through WhatsApp</h3>
<a href="https://chat.whatsapp.com/GchSyD9ygFfGCcC57Jfuhz" target="_blank" rel="noopener noreferrer">
  <button className="whatsapp-button">WHATSAPP CHAT</button>
</a>


            <div className="divider"></div>
            {/* Social Media Icons */}
            <div className="d-flex flex-column bg-orange py-4">
              <h5 className="text-center mb-3">Follow us on</h5>
              <div className="d-flex justify-content-center">
              <a href="https://www.facebook.com/share/15HwhGMWhA/" className="me-3" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: "#1877F2", margin: "0 10px" }} />
              </a>
<a href="https://www.instagram.com/terry_writers1?igsh=MTdocHhzaDJ3d29leA==" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: "#E4405F", margin: "0 10px" }} />
</a>
<a href="https://www.snapchat.com/add/terrywrights?share_id=qvQWg1OKG48&locale=en-KE" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faSnapchat} size="2x" style={{ color: "#FFFC00", margin: "0 10px" }} />
    </a>
<a href="https://chat.whatsapp.com/GchSyD9ygFfGCcC57Jfuhz" className="ms-3" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: "#25D366", margin: "0 10px" }} />
</a>

              </div>
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

      {/* Order Button */}
      <div className="make-order-section">
        <Link to="/inquiry" className="order-button">MAKE YOUR ORDER</Link>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;
