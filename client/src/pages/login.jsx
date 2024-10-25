import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from "../helpers/axios/axiosInstance";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard"); // Redirect to home if already logged in
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous error messages
  
    try {
      const response = await axiosInstance.post("http://localhost:6969/api/auth/login", {
        email: email,
        password: password,
      });
  
      console.log("Response:", response);
      if (response.data.success) {
        // Store user_id and role in localStorage
        localStorage.setItem("user_id", response.data.data.user_id);
        localStorage.setItem("role", response.data.data.role);
        localStorage.setItem("token", response.data.token); // If you're using a token
  
        navigate("/dashboard");
      } else {
        setError("Login failed. Please check your credentials.");
      }
      
    } catch (error) {
      console.error("Login error:", error);
      setError(error.response?.data?.message || "An error occurred. Please try again.");
    }
  };
  
  
   
  

  return (
    <div className=''>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" >Login</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
