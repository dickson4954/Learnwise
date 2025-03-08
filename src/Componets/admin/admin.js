import React, { useState } from 'react';
import './admin.css';
import { Navigate } from 'react-router-dom';
import ProjectForm from './projectForm';

function Admin (){
  const [showForm, setShowForm] = useState()
  const [orders, setOrders] = useState([
    { id: 1, name: 'John Doe', phone: '123-456-7890', projectName: 'Website Redesign', projectDescription: 'Redesign of the company website' },
    { id: 2, name: 'Jane Smith', phone: '987-654-3210', projectName: 'E-commerce Platform', projectDescription: 'Development of an e-commerce platform' },
    // Add more orders as needed
  ]);

  const toggleForm = () => {
    setShowForm((prev) =>!prev)
  }

  const handleLogout = () => {
   
  };

  return (
    <div className="admin-dashboard">
      <div className="header-container">
        <div className="dashboard-header" style={{ backgroundImage: `url('https://i.pinimg.com/736x/53/8c/1d/538c1d9a8e7b3e9c10550d119b33e133.jpg')` }}>
          <div className="header-content">
            <h1>Hello Mr. Smith!</h1>
            <p>Today you have 9 new applications.</p>
            <p>Also you need to hire ROR Developer, React JS Developer.</p>
          </div>
        </div>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
      <button className="add-project-button" onClick={toggleForm}>{showForm ? 'Close Form' : 'Add Project'}</button>
      {showForm && <ProjectForm/>}
      <div className="customer-orders">
        <h2>Customer Orders</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Project Name</th>
              <th>Project Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.name}</td>
                <td>{order.phone}</td>
                <td>{order.projectName}</td>
                <td>{order.projectDescription}</td>
                <td><button className="view-button">View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;