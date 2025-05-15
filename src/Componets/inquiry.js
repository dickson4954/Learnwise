import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2
import './inquiry.css'; // Your provided CSS
import { Link } from 'react-router-dom';
import imageBackground from '../images/smart.jpg'; // Ensure you have this image in your project

function Inquiry() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectName: '',
    projectDescription: '',
    file: null,
    linkUrl: '', // New field for link URL
    expectedDuration: '',
    project_budget: '',
    currency: 'USD', // Default currency
  });

  const [inputType, setInputType] = useState('file'); // 'file' or 'link'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
  
    if (!selectedFile) return;
  
    const validFileExtensions = ['pdf', 'doc', 'docx'];
    const fileExtension = selectedFile.name.split('.').pop().toLowerCase();
  
    if (!validFileExtensions.includes(fileExtension)) {
      Swal.fire({
        title: 'Invalid File Type!',
        text: 'Only PDF and DOCX files are allowed.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      setFormData({ ...formData, file: null });
      return;
    }
  
    if (selectedFile.size > 5 * 1024 * 1024) {
      Swal.fire({
        title: 'File Too Large!',
        text: 'File size should be under 5MB.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      setFormData({ ...formData, file: null });
      return;
    }
  
    setFormData({ ...formData, file: selectedFile });
  };
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate that either a file or a link is provided
    if (inputType === 'file' && !formData.file) {
      Swal.fire({
        title: 'Error!',
        text: 'Please upload a file.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }
  
    if (inputType === 'link' && !formData.linkUrl) {
      Swal.fire({
        title: 'Error!',
        text: 'Please provide a link.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }
  
    // Creating FormData to send
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('project_name', formData.projectName);
    formDataToSend.append('project_description', formData.projectDescription);
    formDataToSend.append('link_url', formData.linkUrl);
    formDataToSend.append('expected_duration', formData.expectedDuration);
    formDataToSend.append('currency', formData.currency);
    formDataToSend.append('project_budget', formData.project_budget); 
  
    // If a file is selected, append it
    if (inputType === 'file' && formData.file) {
      formDataToSend.append('file', formData.file);
    }
  
    // ✅ **Debugging: Log FormData Entries**
    console.log("🚀 FormData being sent:");
    for (let [key, value] of formDataToSend.entries()) {
      if (key === "file") {
        console.log(`${key}:`, value ? value.name : "No file attached");
      } else {
        console.log(`${key}:`, value);
      }
    }
  
    try {
    const response = await fetch('http://learnwisee.com/backend/orders', {
  method: 'POST',
  body: formDataToSend, // FormData auto-sets content-type
});


  
      if (!response.ok) {
        const errorText = await response.text(); // Get error message from backend
        throw new Error(errorText || 'Failed to submit order');
      }
  
      const data = await response.json();
      console.log('✅ Order submitted:', data);
  
      Swal.fire({
        title: 'Order Submitted!',
        text: 'Your order has been placed successfully.',
        icon: 'success',
        confirmButtonText: 'OK',
      });
  
      // Reset the form
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectName: '',
        projectDescription: '',
        file: null,
        linkUrl: '',
        expectedDuration: '',
        project_budget: '',
        currency: 'USD',
      });
  
    } catch (error) {
      console.error('❌ Error submitting order:', error.message);
      Swal.fire({
        title: 'Error!',
        text: error.message || 'Failed to submit order. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
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
        <h1>PLACE AN ORDER</h1>

        {/* Name Field */}
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

        {/* Email Field */}
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

        {/* Phone Field */}
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

        {/* Project Name Field */}
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

        {/* Project Description Field */}
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

        {/* Input Type Toggle (File or Link) */}
        <div>
          <label>Input Type:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="file"
                checked={inputType === 'file'}
                onChange={() => setInputType('file')}
              />
              Upload File
            </label>
            <label>
              <input
                type="radio"
                value="link"
                checked={inputType === 'link'}
                onChange={() => setInputType('link')}
              />
              Paste Link
            </label>
          </div>
        </div>

        {/* File Upload or Link Input */}
        {inputType === 'file' ? (
          <div>
            <label htmlFor="file">Upload File (PDF or DOCX):</label>
            <input
              type="file"
              id="file"
              name="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required={inputType === 'file'}
            />
          </div>
        ) : (
          <div>
            <label htmlFor="linkUrl">Link URL:</label>
            <input
              type="url"
              id="linkUrl"
              name="linkUrl"
              value={formData.linkUrl}
              onChange={handleChange}
              required={inputType === 'link'}
            />
          </div>
        )}

        {/* Expected Duration Field */}
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

        {/* Budget Field */}
        <div className="budget-input-container">
          <label htmlFor="budget">Budget:</label>
          <div className="budget-wrapper">
          <select
  name="currency"
  value={formData.currency || "USD"}  // Default to USD if empty
  onChange={handleChange}
  className="currency-dropdown"
>
  <option value="USD">USD</option>
  <option value="GBP">GBP</option>
  <option value="EUR">EUR</option>
</select>

<input
  type="number"
  id="project_budget"
  name="project_budget"
  value={formData.project_budget}
  onChange={handleChange}
  required
  className="budget-input"
  min="1" // Ensures budget is at least 1
/>


          </div>
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Inquiry;