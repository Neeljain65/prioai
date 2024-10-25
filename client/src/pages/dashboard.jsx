import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axiosInstance from '../helpers/axios/axiosInstance';
import AdminDash from './AdminDash';

function Dashboard() {
  // Retrieve user role from localStorage
  const role = localStorage.getItem("role");
  if(!role) {   
    return <Navigate to="/login" />;
}

  return (
    <div>
      <h1>Dashboard</h1>
      {role === "Owner" ? (
        <AdminDash/>
      ) : role === "User" ? (
        <div>
          <h2>Welcome, User!</h2>
          <p>Here you can view your scheduled interviews.</p>
          {/* Add User-specific content here */}
        </div>
      ) : (
        <div>
          <h2>Welcome!</h2>
          <p>Please log in to see your dashboard content.</p>
          
        </div>
      )}
    </div>
  );
}

export default Dashboard;
