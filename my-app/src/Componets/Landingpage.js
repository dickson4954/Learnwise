import React from 'react';
import './LandingPage.css';
import backgroundImage from '../images/black.jpg';  
import Navbar from './Navbar'; 
import AboutUs from './AboutUs'; 
import StatsCounter from './StatsCounter'; 
import WhyChooseUs from './WhyChooseUs'; 
import HowItWorks from './HowItWorks'; 
import OurServices from './OurServices'; // Import OurServices
import FAQSection from './FAQSection';
import CustomerTestimonials from './CustomerTestimonials';
import Footer from './Footer';
import WritersTestimonials from './WritersTestimonials';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="landing-header">
        <Navbar />
      </header>

      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Welcome to Learnwise</h1>
          <p>Your gateway to flexible freelance writing opportunities</p>
          <a href="#signup" className="cta-button">Get Started</a>
        </div>
      </section>

      {/* About Us Section */}
      <AboutUs />

      {/* Stats Counter Section */}
      <section id="stats">
        <StatsCounter />
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* How It Works Section */}
      <HowItWorks /> 

      {/* Our Services Section (Now Below How It Works) */}
      <OurServices /> 
      {/* Our Services Section (Now Below How It Works) */}
      <FAQSection /> 
      {/* Our Services Section (Now Below How It Works) */}
      <WritersTestimonials /> 
       {/* Our Services Section (Now Below How It Works) */}
       <CustomerTestimonials /> 
        {/* Our Services Section (Now Below How It Works) */}
        <Footer /> 
      
      
      
      
    </div>
  );
};

export default LandingPage;
