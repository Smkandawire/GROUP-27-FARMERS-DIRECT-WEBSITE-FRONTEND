import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
    <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold text-center mb-4">Sign up for Farmers Direct</h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Email or Phone"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="password"
          placeholder="Create password"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <p className="text-sm text-black text-center">
          Use 8 or more characters with a mix of letters, numbers, and symbols
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
          Already have an account?{" "}
          <Link to="/LoginPage" className="text-orange-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  </div>

  );
};

export default SignUp;
