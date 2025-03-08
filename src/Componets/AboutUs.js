import React from 'react';
import "./AboutUs.css"; 
import aboutImage from '../images/grad.jpg'; // Make sure to replace with the correct image

const AboutUs = () => {
  return (
    <section className="about-us">
      {/* Left Side - Text Content */}
      <div className="about-content">
        <h2>About Us</h2>
        <h3>Academics Strategic Partner</h3>
        <p>
          At Learnwise, we believe in the transformative power of education and the importance of clear, compelling academic writing.
          Founded by a team of experienced educators and professional writers, our agency is dedicated to providing exceptional academic writing services to students, researchers, and professionals worldwide.
        </p>
        
        <div className="mission-vision">
          <div className="mission">
            <h4>Our Mission</h4>
            <p>
              Our mission is to empower individuals to achieve their academic and professional goals through high-quality, tailored writing solutions.
            </p>
          </div>
          <div className="vision">
            <h4>Our Vision</h4>
            <p>
              We envision a world where every student and researcher has access to the tools and support they need to excel.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Image with Gold Frame */}
      <div className="about-image-container">
        <div className="gold-frame"></div>
        <img src={aboutImage} alt="Team Discussion" className="about-image" />
      </div>
    </section>
  );
};

export default AboutUs;
