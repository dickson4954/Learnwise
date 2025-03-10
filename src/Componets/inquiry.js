import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2
import './inquiry.css'; 
import { Link } from 'react-router-dom';
import imageBackground from '../images/smart.jpg';

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
  
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('project_name', formData.projectName);
    formDataToSend.append('project_description', formData.projectDescription);
    formDataToSend.append('expected_duration', formData.expectedDuration);
    formDataToSend.append('project_budget', formData.budget); // Only the number
    formDataToSend.append('currency', formData.currency); // Send currency separately
  
    if (formData.file) {
      formDataToSend.append('file', formData.file);
    }
  
    try {
      const response = await fetch('http://127.0.0.1:5000/orders', {
        method: 'POST',
        body: formDataToSend,
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit order');
      }
  
      const data = await response.json();
      console.log('Order submitted:', data);
  
      Swal.fire({
        title: 'Order Submitted!',
        text: 'Your order has been placed successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
  
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectName: '',
        projectDescription: '',
        file: null,
        expectedDuration: '',
        budget: '',
        currency: 'USD'
      });
  
    } catch (error) {
      console.error('Error submitting order:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to submit order. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
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
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <h1 className="text-3xl font-semibold mb-6 text-center">PLACE AN ORDER</h1>
        
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>

        <div>
          <label htmlFor="projectName">Project Name:</label>
          <input type="text" id="projectName" name="projectName" value={formData.projectName} onChange={handleChange} required />
        </div>

        <div>
          <label htmlFor="projectDescription">Project Description:</label>
          <textarea id="projectDescription" name="projectDescription" value={formData.projectDescription} onChange={handleChange} required />
        </div>

        <div>
          <label htmlFor="file">Upload File:</label>
          <input type="file" id="file" name="file" onChange={handleFileChange} />
        </div>

        <div>
          <label htmlFor="expectedDuration">Expected Duration:</label>
          <input type="text" id="expectedDuration" name="expectedDuration" value={formData.expectedDuration} onChange={handleChange} required />
        </div>

        <div className="budget-input-container">
          <label htmlFor="budget">Budget:</label>
          <div className="budget-wrapper">
            <select name="currency" value={formData.currency} onChange={handleChange} className="currency-dropdown">
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
              <option value="EUR">EUR</option>
            </select>
            <input type="text" id="budget" name="budget" value={formData.budget} onChange={handleChange} required className="budget-input" />
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Inquiry;
