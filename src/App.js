import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './Componets/Landingpage';
import Inquiry from './Componets/inquiry';
import PricingPage from './Componets/pricingPage';
import ContactPage from './Componets/ContactPage';
import Admin from './Componets/admin/admin';
import ProjectForm from './Componets/admin/projectForm';

function App() {
  const [projects, setProjects] = useState([]);

  // Function to add a new project
  const addProject = (newProject) => {
    setProjects((prevProjects) => [...prevProjects, newProject]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/pricing" element={<PricingPage projects={projects} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/form" element={<ProjectForm addProject={addProject} />} /> 
        {/* 👆 Ensure this line is present! */}
      </Routes>
    </Router>
  );
}

export default App;
