import React, { useState } from "react";
import { Link } from "react-router-dom";

function Advertise() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadedGoods, setUploadedGoods] = useState([]);
  const [paymentDetails, setPaymentDetails] = useState({
    amount: "",
    location: "",
    description: "",
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user] = useState({
    name: "Shadreck", // Mocked user data; in a real app, this would come from a backend or auth context
  });

  // Handle file selection
  const handleFileChange = (e) => {
    setSelectedFiles([...e.target.files]);
  };

  // Handle input changes for amount, location, and description
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle goods upload
  const handleGoodsUpload = () => {
    const newGoods = {
      amount: paymentDetails.amount,
      location: paymentDetails.location,
      description: paymentDetails.description,
      files: selectedFiles,
    };
    setUploadedGoods((prevGoods) => [...prevGoods, newGoods]);

    // Clear state after upload
    setSelectedFiles([]);
    setPaymentDetails({ amount: "", location: "", description: "" });
  };

  // Toggle Dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header with User Info */}
      <div className="flex justify-between items-center bg-green-600 text-white p-4 rounded-lg mb-6">
        <h1 className="text-2xl font-semibold">{`Welcome, ${user.name}`}</h1>

        {/* Dropdown for Account and other options */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 focus:outline-none"
          >
            Menu
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-48 py-2">
              <Link
                to="/OrderManagement"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Order Management
              </Link>
              <Link
                to="/sale-analysis"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Sale Analysis
              </Link>
              <Link
                to="/account"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Account
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Main Dashboard */}
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Upload Goods</h2>

        {/* Payment Details Section */}
        <div className="grid grid-cols-1 gap-6 mb-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">Amount</label>
            <input
              type="number"
              name="amount"
              value={paymentDetails.amount}
              onChange={handleInputChange}
              placeholder="Enter the amount"
              className="mt-2 block w-full text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={paymentDetails.location}
              onChange={handleInputChange}
              placeholder="Enter the location"
              className="mt-2 block w-full text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={paymentDetails.description}
              onChange={handleInputChange}
              placeholder="Enter a brief description of the goods"
              className="mt-2 block w-full text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 h-24"
            />
          </div>
        </div>

        {/* File Upload Section */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700">Select Goods (Files) to Upload</label>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="mt-2 block w-full text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Upload Button */}
        <div className="flex justify-end">
          <button
            onClick={handleGoodsUpload}
            className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Upload Goods
          </button>
        </div>

        {/* Display Uploaded Goods */}
        {uploadedGoods.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Uploaded Goods</h3>
            <ul className="space-y-4">
              {uploadedGoods.map((goods, index) => (
                <li key={index} className="bg-gray-50 p-4 rounded-md shadow-md">
                  <p className="font-semibold text-gray-700">Amount: ${goods.amount}</p>
                  <p className="text-gray-600">Location: {goods.location}</p>
                  <p className="text-gray-600">Description: {goods.description}</p>
                  <div className="mt-2">
                    <h4 className="text-gray-700 font-medium">Files:</h4>
                    <ul className="list-disc pl-5">
                      {goods.files.map((file, idx) => (
                        <li key={idx} className="text-gray-600">{file.name}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Display Selected Files */}
        {selectedFiles.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Selected Files</h3>
            <ul className="list-disc pl-5 text-gray-600">
              {selectedFiles.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Advertise;
