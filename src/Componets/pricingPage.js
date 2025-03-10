import React, { useState, useEffect } from 'react';
import './pricingPage.css';
import { Link } from 'react-router-dom';

const defaultPrices = [
  { title: "Writing - Assistance.", prices: "Prices range from $20 to $50" },
  { title: "Editing and Proofreading.", prices: "Prices range from $20 to $50" },
  { title: "Exam Preparations.", prices: "Prices range from $20 to $50" },
  { title: "Project Handling.", prices: "Prices range from $20 to $50" },
  { title: "Programming Assistance.", prices: "Prices range from $20 to $50" },
  { title: "Data Science Support.", prices: "Prices range from $20 to $50" },
  { title: "Online Classes & Tutoring.", prices: "Prices range from $20 to $50" },
  { title: "Presentation Preparation.", prices: "Prices range from $20 to $50" }
];

function PricingPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects from Flask API
    fetch('http://127.0.0.1:5000/projects')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched projects:', data); // Debugging line
        setProjects(data);  // Update state with projects from backend
      })
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div>
      {/* Image Section */}
      <div className="image-section"></div>
      <Link to="/">
        <button className="back-button">Back</button>
      </Link>

      {/* Price Range Section */}
      <section className="price-range">
        <h2 className="title">Price Range</h2>
        <p className="subtitle">Below is a brief description of how our prices range....</p>
        <div className="prices-list">
          {defaultPrices.map((price, index) => (
            <div key={index} className="price-card">
              <h3>{price.title}</h3>
              <p>{price.prices}</p>
            </div>
          ))}
        </div>

        {/* Display dynamically added projects */}
        {projects.length > 0 && (
          <div className="projects-list">
            <h2 className="title">Added Projects</h2>
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.name}</h3> {/* ✅ Ensure correct field name */}
                {project.type === 'link' ? (
                  <p>📎 <a href={project.content} target="_blank" rel="noopener noreferrer">{project.content}</a></p>
                ) : (
                  <p>📁 {project.content}</p>  // Show filename if it's a file
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default PricingPage;
