import React, { useState } from 'react';
import './inquiry.css'; 
import { Link } from 'react-router-dom';
import imageBackground from '../images/smart.jpg'

function Inquiry() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectName: '',
    projectDescription: '',
    file: null,
    expectedDuration: '',
    budget: '',
    currency: 'USD' // Default currency
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Form Data Submitted: ', data);

      setFormData({
        name: '',
        email: '',
        phone: '',
        projectName: '',
        projectDescription: '',
        file: null,
        expectedDuration: '',
        budget: '',
        currency: 'USD' // Reset to default currency
      });
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div
      className="inquiry-page"
      style={{
        backgroundImage: `url(${imageBackground})`,
      }}
    >
      <Link to="/">
        <button className="back-button">Back</button>
      </Link>
      <form onSubmit={handleSubmit}>
        <h1 className="text-3xl font-semibold mb-6 text-center">PLACE AN ORDER</h1>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="projectName">Project Name:</label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="projectDescription">Project Description:</label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="file">Upload File:</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
          />
        </div>
        <div>
          <label htmlFor="expectedDuration">Expected Duration:</label>
          <input
            type="text"
            id="expectedDuration"
            name="expectedDuration"
            value={formData.expectedDuration}
            onChange={handleChange}
            required
          />
        </div>
        <div className="budget-input-container">
          <label htmlFor="budget">Budget:</label>
          <div className="budget-wrapper">
            <select
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              className="currency-dropdown"
            >
              <option value="USD">USD</option>
              <option value="EUR">GBP</option>
              <option value="GBP">EUR</option>
              
            </select>
            <input
              type="text"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              className="budget-input"
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Inquiry;