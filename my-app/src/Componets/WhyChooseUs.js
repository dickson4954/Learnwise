import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2>Why Choose Us</h2>
      <div className="underline"></div> {/* Small line under heading */}
      <div className="features-container">
        <div className="feature-box">
          <h3>Experience</h3>
          <p>Our team consists of qualified professionals with extensive academic backgrounds.</p>
        </div>

        <div className="feature-box">
          <h3>Customized Solutions</h3>
          <p>Every project is tailored to your specific needs and requirements. We also offer 3 revisions.</p>
        </div>

        <div className="feature-box">
          <h3>Confidentiality</h3>
          <p>We prioritize your privacy and confidentiality in all our interactions and tasks taken through orders.</p>
        </div>

        <div className="feature-box">
          <h3>24/7 Support</h3>
          <p>Our customer support team is available around the clock to assist you with any questions or concerns.</p>
        </div>
      </div>

      <button className="order-button">MAKE YOUR ORDER</button>
    </section>
  );
};

export default WhyChooseUs;
