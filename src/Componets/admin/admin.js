import React, { useState, useEffect } from 'react';
import './admin.css';
import { useNavigate } from 'react-router-dom';
import ProjectForm from './projectForm';

function Admin() {
  const [showForm, setShowForm] = useState(false);
  const [orders, setOrders] = useState([]);
  const [projects, setProjects] = useState([]); // Store projects from backend
  const [selectedOrder, setSelectedOrder] = useState(null);
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  useEffect(() => {
    fetchOrders();
    fetchProjects(); // Fetch projects when component mounts
  }, []);

  // Fetch orders
  const fetchOrders = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/orders', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        setOrders(data);
      } else {
        console.error('Failed to fetch orders');
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  // Fetch projects from backend
  const fetchProjects = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/projects', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      } else {
        console.error('Failed to fetch projects');
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('isAdmin');
    navigate('/');
  };

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
  };

  const closeOrderModal = () => {
    setSelectedOrder(null);
  };

  const addProject = async (newProject) => {
    try {
      const formData = new FormData();
      formData.append("project_name", newProject.project_name);
      
      if (newProject.link_url) {
        formData.append("link_url", newProject.link_url);
      }
      
      if (newProject.file) {
        formData.append("file", newProject.file);
      }
  
      const response = await fetch('http://127.0.0.1:5000/projects', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: formData  // ✅ Use FormData (no need for Content-Type)
      });
  
      if (response.ok) {
        console.log("Project added successfully!");
        fetchProjects();  // ✅ Refresh project list after adding
      } else {
        const errorData = await response.json();
        console.error("Failed to add project:", errorData.error);
      }
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };
  
  return (
    <div className="admin-dashboard">
      <div className="header-container">
        <div className="dashboard-header" style={{ backgroundImage: `url('https://i.pinimg.com/736x/53/8c/1d/538c1d9a8e7b3e9c10550d119b33e133.jpg')` }}>
          <div className="header-content">
            <h1>Hello {user ? user.username : 'Admin'}!</h1>
            <p>Today you have {orders.length} new orders.</p>
          </div>
        </div>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>

      <button className="add-project-button" onClick={toggleForm}>
        {showForm ? 'Close Form' : 'Add Project'}
      </button>
      {showForm && <ProjectForm addProject={addProject} />}  {/* ✅ FIXED */}

      {/* Display added projects */}
     {/* Display added projects */}
<div className="projects-list">
  <h2>Added Projects</h2>
  {projects.length > 0 ? (
    projects.map((project, index) => (
      <div key={index} className="project-card">
        <h3>{project.project_name}</h3> {/* Show the project name */}

        {project.file ? (  // Check if a file exists
          <p>📁 {project.file.split('/').pop()}</p>  // Extract the filename
        ) : (
          <p>📎 No file uploaded</p>  // If no file, show a placeholder
        )}
      </div>
    ))
  ) : (
    <p>No projects added yet.</p>
  )}
</div>


      <div className="customer-orders">
        <h2>Customer Orders</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Project Name</th>
              <th>Budget</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.phone}</td>
                <td>{order.project_name}</td>
                <td>{order.project_budget}</td>
                <td>
                  <button className="view-button" onClick={() => handleViewOrder(order)}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedOrder && (
        <div className="order-modal">
          <div className="order-modal-content">
            <h2>Order Details</h2>
            <p><strong>Name:</strong> {selectedOrder.name}</p>
            <p><strong>Email:</strong> {selectedOrder.email}</p>
            <p><strong>Phone:</strong> {selectedOrder.phone}</p>
            <p><strong>Project Name:</strong> {selectedOrder.project_name}</p>
            <p><strong>Description:</strong> {selectedOrder.project_description}</p>
            <p><strong>Expected Duration:</strong> {selectedOrder.expected_duration}</p>
            <p><strong>Budget:</strong> {selectedOrder.project_budget}</p>

            {selectedOrder.file_url && (
              <p>
                <strong>File:</strong>{' '}
                <a 
                  href={selectedOrder.file_url.startsWith('http') ? selectedOrder.file_url : `http://127.0.0.1:5000/${selectedOrder.file_url}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Download File
                </a>
              </p>
            )}

            <button onClick={closeOrderModal} className="close-modal-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;
