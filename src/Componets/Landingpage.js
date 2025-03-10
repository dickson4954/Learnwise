import React from 'react';
import './LandingPage.css';
import backgroundImage from '../images/black.jpg';  
import Navbar from './Navbar'; 
import AboutUs from './AboutUs'; 
import StatsCounter from './StatsCounter'; 
import WhyChooseUs from './WhyChooseUs'; 
import HowItWorks from './HowItWorks'; 
import OurServices from './OurServices'; 
import FAQSection from './FAQSection';
import CustomerTestimonials from './CustomerTestimonials';
import Footer from './Footer';
import WritersTestimonials from './WritersTestimonials';
// import ChatButton from './ChatButton';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="landing-header">
        <Navbar />
      </header>

      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url('https://i.pinimg.com/736x/8b/ab/56/8bab56bde7fbb26b940d783dc89254d2.jpg')` }}>
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Welcome to Learnwise</h1>
          <p className='text-white'>Your gateway to flexible freelance writing opportunities</p>
        </div>
      </section>

      {/* About Us Section (Add an id for scrolling) */}
      <section id="about">
        <AboutUs />
      </section>

      {/* Stats Counter Section */}
      <section id="stats">
        <StatsCounter />
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* How It Works Section */}
      <HowItWorks /> 

      {/* Our Services Section (Add an id for scrolling) */}
      <section id="services">
        <OurServices />
      </section>

      {/* Other Sections */}
      <FAQSection /> 
      <WritersTestimonials /> 
      <CustomerTestimonials /> 
      <Footer /> 
      {/* <ChatButton /> */}
    </div>
  );
};

export default LandingPage;
