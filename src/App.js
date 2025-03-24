import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';  // ❌ No need for BrowserRouter here
import './App.css';
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
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/inquiry" element={<Inquiry />} />
      <Route path="/pricing" element={<PricingPage projects={projects} />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/form" element={<ProjectForm addProject={addProject} />} /> 
    </Routes>
  );
}

export default App;
