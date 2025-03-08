import React from 'react';
import './pricingPage.css';
import { Link } from 'react-router-dom';

const prices = [
  { title: "Writing - Assistance.", prices: "prices range from $ 20 to $50" },
  { title: "Editing and Proofreading.", prices: "prices range from $ 20 to $50" },
  { title: "Exam Preparations.", prices: "prices range from $ 20 to $50" },
  { title: "Project Handling.", prices: "prices range from $ 20 to $50" },
  { title: "Programming Assistance.", prices: "prices range from $ 20 to $50" },
  { title: "Data Science Support.", prices: "prices range from $ 20 to $50" },
  { title: "Online Classes & Tutoring.", prices: "prices range from $ 20 to $50" },
  { title: "Presentation Preparation.", prices: "prices range from $ 20 to $50" }
];

function PricingPage() {
  return (
    <div>
      {/* Image Section */}
      <div className="image-section"></div>
      <Link to="/">
      <button className="back-button">
        Back
      </button>
      </Link>

      {/* Price Range Section */}
      <section className="price-range">
        <h2 className="title">Price Range</h2>
        <p className="subtitle">Below is a brief description of how our prices range....</p>
        <div className="prices-list">
          {prices.map((price, index) => (
            <div key={index} className="price-card">
              <h3>{price.title}</h3>
              <p>{price.prices}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default PricingPage;