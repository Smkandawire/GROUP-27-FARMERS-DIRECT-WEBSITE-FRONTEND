import React from 'react';

const UserProfile = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6">User Profile</h2>
        <div className="flex items-center mb-6">
          <img
            src="https://via.placeholder.com/80"
            alt="Profile"
            className="w-20 h-20 rounded-full mr-4"
          />
          <div>
            <p className="text-lg font-semibold">Shadreck</p>
            <p className="text-gray-500">Shadreck@example.com</p>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">General Information</h3>
          <div className="mb-4">
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              value="John"
              className="w-full p-2 border rounded"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Last Name</label>
            <input
              type="text"
              value="Doe"
              className="w-full p-2 border rounded"
              readOnly
            />
          </div>
          <button className="w-full bg-blue-500 text-white p-2 rounded">Update</button>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Security</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value="johndoe@example.com"
              className="w-full p-2 border rounded"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value="********"
              className="w-full p-2 border rounded"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              value="+123456789"
              className="w-full p-2 border rounded"
              readOnly
            />
          </div>
          <div className="flex space-x-4">
            <button className="w-full bg-blue-500 text-white p-2 rounded">Change Password</button>
            <button className="w-full bg-blue-500 text-white p-2 rounded">Change Phone Number</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
