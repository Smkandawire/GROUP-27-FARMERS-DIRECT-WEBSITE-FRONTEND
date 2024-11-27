// src/components/Login.js

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../Header/logo.png";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Login successful!');
        localStorage.setItem('token', data.accessToken); // Store token in localStorage
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="flex bg-green-100 min-h-screen items-center justify-center">
      <div
        className="container"
        style={{
          maxWidth: '400px',
          margin: '50px auto',
          backgroundColor: '#FFF',
          padding: '20px',
          borderRadius: '5px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-center mb-4">
            <div className="border rounded-full w-[110px] h-[110px] border-black">
              <img src={logo} alt="Logo" className="h-auto w-auto rounded-full" />
            </div>
          </div>
          <h3 className="text-center font-extrabold text-black">WELCOME TO FARMERS DIRECT</h3>
          <br />
          <div className="input-group mb-4">
            <label htmlFor="email" className="font-bold block mb-1">
              Email
            </label>
            <input
              className="bg-gray-200 w-full p-2 border rounded-md"
              type="email"
              id="email"
              placeholder="Email or Phone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group mb-4">
            <label htmlFor="password" className="font-bold block mb-1">
              Password
            </label>
            <input
              className="bg-gray-200 w-full p-2 border rounded-md"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition mb-4"
          >
            <Link to= "/Advertise">LOGIN</Link>
          </button>
        </form>

        <div className="flex justify-end font-bold" style={{ backgroundColor: 'transparent', marginTop: '10px' }}>
          <button
            style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: 'black' }}
            onClick={() => alert('Forgot Password functionality is not yet implemented')}
          >
            Forgot password?
          </button>
        </div>
        <div className="font-bold text-black mt-4 text-center">
          Don't have an account?{' '}
          <Link to="/SignUp" className="text-orange-500 cursor-pointer hover:underline">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
