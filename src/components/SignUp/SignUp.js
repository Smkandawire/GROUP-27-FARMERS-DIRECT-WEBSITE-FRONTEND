import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(''); // Reset error message

    // Password confirmation check
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/user/signup', {
        email: email,
        username: username,
        password: password,
      });

      console.log('User signed up successfully:', response.data);
      alert('Signup successful!');
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message || 'Signup failed. Please try again.');
      } else {
        setErrorMessage('An error occurred during signup. Please try again later.');
      }
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Sign up for Farmers Direct</h2>

        {/* Error Message */}
        {errorMessage && (
          <div
            className="bg-red-500 text-white text-center p-2 rounded mb-4"
            role="alert"
          >
            {errorMessage}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Create password"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <p className="text-sm text-black text-center">
            Use 8 or more characters with a mix of letters, numbers, and symbols.
          </p>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
          >
            Create Account
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm">
            Already have an account?{' '}
            <Link to="/loginPage" className="text-orange-500 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
