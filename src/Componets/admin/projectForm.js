import React, { useState, useRef } from 'react';
import Swal from 'sweetalert2';
import './projectForm.css';

function ProjectForm({ addProject }) {
  const [projectName, setProjectName] = useState('');
  const [projectType, setProjectType] = useState('writing_assistance');
  const [inputType, setInputType] = useState('link');
  const [link, setLink] = useState('');
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);
  
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!addProject) {
      console.error('addProject is not available in ProjectForm!');
      Swal.fire({ icon: 'error', title: 'Error', text: 'addProject function is missing!' });
      return;
    }
  
    const newErrors = {};
    if (!projectName) newErrors.projectName = 'Project name is required';
    if (inputType === 'link' && !link) newErrors.link = 'Link is required';
    if (inputType === 'file' && !file) newErrors.file = 'File is required';
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
  
    const formData = new FormData();
    formData.append("project_name", projectName);
    formData.append("project_type", projectType); // ✅ project_type is included
  
    if (inputType === "link") {
      formData.append("link_url", link);
    } else if (inputType === "file" && file) {
      formData.append("file", file);
    }
  
    addProject(formData); // Pass FormData to backend
  
    Swal.fire({ icon: 'success', title: 'Success!', text: 'Project submitted successfully.' });
  
    setProjectName('');
    setLink('');
    setFile(null);
    setErrors({});
  
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="formContainer">
      <h2 className="h2">Add Project</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => {
            setProjectName(e.target.value);
            setErrors((prev) => ({ ...prev, projectName: '' }));
          }}
          className="inputField"
        />
        {errors.projectName && <p className="error">{errors.projectName}</p>}

        <select
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
          className="selectField"
        >
          <option value="writing_assistance">Writing Assistance</option>
          <option value="editing_proofreading">Editing & Proofreading</option>
          <option value="programming_assistance">Programming Assistance</option>
          <option value="project_handling">Project Handling</option>
          <option value="data_science_support">Data Science Support</option>
        </select>

        <select
          value={inputType}
          onChange={(e) => {
            setInputType(e.target.value);
            setErrors((prev) => ({ ...prev, link: '', file: '' }));
          }}
          className="selectField"
        >
          <option value="link">Link</option>
          <option value="file">File</option>
        </select>

        {inputType === 'link' ? (
          <>
            <input
              type="text"
              placeholder="Paste Link"
              value={link}
              onChange={(e) => {
                setLink(e.target.value);
                setErrors((prev) => ({ ...prev, link: '' }));
              }}
              className="inputField"
            />
            {errors.link && <p className="error">{errors.link}</p>}
          </>
        ) : (
          <>
            <input
              ref={fileInputRef}
              type="file"
              onChange={(e) => {
                setFile(e.target.files[0]);
                setErrors((prev) => ({ ...prev, file: '' }));
              }}
              className="fileInput"
            />
            {errors.file && <p className="error">{errors.file}</p>}
          </>
        )}

        <button type="submit" className="submitButton">Submit</button>
      </form>
    </div>
  );
}

export default ProjectForm;