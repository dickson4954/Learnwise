import React, { useState, useEffect } from 'react';
import './admin.css';
import { useNavigate } from 'react-router-dom';
import ProjectForm from './projectForm';

function Admin() {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  useEffect(() => {
    fetchOrders();
  }, []);

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

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('isAdmin');
    navigate('/');
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
      <button className="add-project-button" onClick={toggleForm}>{showForm ? 'Close Form' : 'Add Project'}</button>
      {showForm && <ProjectForm />}
      <div className="customer-orders">
        <h2>Customer Orders</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>email</th>
              <th>phone-number</th>
              
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.phone}</td>
                <td><button className="view-button">View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;