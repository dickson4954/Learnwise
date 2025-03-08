import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './projectForm.css'; // Import CSS Module

function ProjectForm () {
  const [projectName, setProjectName] = useState('');
  const [inputType, setInputType] = useState('link'); // 'link' or 'file'
  const [link, setLink] = useState('');
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!projectName) newErrors.projectName = 'Project name is required';
    if (inputType === 'link' && !link) newErrors.link = 'Link is required';
    if (inputType === 'file' && !file) newErrors.file = 'File is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Prepare payload based on input type
    const payload = {
      projectName,
      [inputType === 'link' ? 'link' : 'file']: inputType === 'link' ? link : file,
    };

    try {
      // Simulate API call
      console.log('Submitting:', payload);
      Swal.fire({ icon: 'success', title: 'Success!', text: 'Project submitted successfully.' });
    } catch (error) {
      console.error('Submission error:', error);
      Swal.fire({ icon: 'error', title: 'Error', text: 'Failed to submit project.' });
    }
  };

  return (
    <div className="formContainer">
      <h2 className='h2'>Add Project</h2>
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
};

export default ProjectForm;