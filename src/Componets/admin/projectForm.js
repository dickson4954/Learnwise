import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './projectForm.css'; // Import the CSS file for styling

function ProjectForm({ addProject }) {
  const [projectName, setProjectName] = useState('');
  const [projectType, setProjectType] = useState('');
  const [inputType, setInputType] = useState('file'); // 'file' or 'link'
  const [file, setFile] = useState(null);
  const [linkUrl, setLinkUrl] = useState('');
  const [error, setError] = useState('');

  // Dropdown options for project type
  const projectTypes = [
    "Writing Assistance",
    "Editing & Proofreading",
    "Programming Assistance",
    "Project Handling",
    "Data Science Support",
  ];

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const validFileTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']; // Add other MIME types as needed

    if (selectedFile && !validFileTypes.includes(selectedFile.type)) {
      setError('Please upload a valid file (PDF or DOCX).');
      setFile(null); // Clear the file state
    } else {
      setFile(selectedFile);
      setError(''); // Clear any previous error
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!projectName || !projectType) {
      setError('Project name and type are required.');
      return;
    }

    if (inputType === 'file' && !file) {
      setError('Please upload a file.');
      return;
    }

    if (inputType === 'link' && !linkUrl) {
      setError('Please provide a link.');
      return;
    }

    const formData = new FormData();
    formData.append('project_name', projectName);
    formData.append('project_type', projectType);

    if (inputType === 'file' && file) {
      formData.append('file', file);
    } else if (inputType === 'link' && linkUrl) {
      formData.append('link_url', linkUrl);
    }

    addProject(formData);
    setError(''); // Clear error on successful submission
  };

  return (
    <div className="formContainer">
      <h2 className="h2">Add New Project</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Project Name:</label>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="inputField"
            required
          />
        </div>
        <div>
          <label>Project Type:</label>
          <select
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className="selectField"
            required
          >
            <option value="" disabled>Select a project type</option>
            {projectTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Input Type:</label>
          <div className="radioGroup">
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
              Provide Link
            </label>
          </div>
        </div>
        {inputType === 'file' ? (
          <div>
            <label>Upload File:</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="fileInput"
              required
            />
          </div>
        ) : (
          <div>
            <label>Link URL:</label>
            <input
              type="url"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              className="inputField"
              required
            />
          </div>
        )}
        <button type="submit" className="submitButton">Add Project</button>
      </form>
    </div>
  );
}

export default ProjectForm;