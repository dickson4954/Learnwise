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

const projectTypes = [
  "Writing Assistance",
  "Editing & Proofreading",
  "Programming Assistance",
  "Project Handling",
  "Data Science Support"
];

function PricingPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/projects')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched projects:', data);
        setProjects(data);
      })
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  const groupProjectsByType = (projects) => {
    return projects.reduce((acc, project) => {
      const type = projectTypes.includes(project.project_type) ? project.project_type : 'Other';
      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push(project);
      return acc;
    }, {});
  };

  const groupedProjects = groupProjectsByType(projects);

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const groupedTypes = chunkArray(Object.keys(groupedProjects), 2);

  const handleDownload = (url, filename) => {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
        URL.revokeObjectURL(link.href);
      })
      .catch(console.error);
  };

  return (
    <div>
      <div className="image-section"></div>
      <Link to="/">
        <button className="back-button">Back</button>
      </Link>

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

        {groupedTypes.map((types, index) => (
          <div key={index} className="projects-row">
            {types.map((type) => (
              <div key={type} className="projects-list">
                <h2 className="title">{type.replace(/_/g, ' ').toUpperCase()}</h2>
                {groupedProjects[type].map((project, index) => (
                  <div key={index} className="project-card">
                    <h3>{project.project_name}</h3>
                    {project.link_url ? (
                      <p>📎 <a href={project.link_url} target="_blank" rel="noopener noreferrer">{project.link_url}</a></p>
                    ) : (
                      <p>📁 <button onClick={() => handleDownload(project.file_url, project.file_url.split('/').pop())}>
                        Download {project.file_url.split('/').pop()}
                      </button></p>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
}

export default PricingPage;