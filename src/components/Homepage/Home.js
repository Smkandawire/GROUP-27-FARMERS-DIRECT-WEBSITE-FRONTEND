import React from 'react';
import { Link ,useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
      navigate('/Service'); 
  };
  return (
    <div className="min-h-screen p-6">
      {/* Banner */}
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src= ''
          alt="Farmer Banner"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl font-bold text-orange-500 uppercase mb-4">
            Welcome to Farmers Direct
          </h1>
          <p className="text-lg text-black font-bold">Your Partner in Farming Excellence</p>
        </div>
      </div>

      {/* Featured Deals Section */}
      <div className="mt-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Featured Deals</h2>
          <a href="#" className="text-orange-500 hover:underline">view all</a>
        </div>
        <div className="grid grid-cols-5 gap-4">
        <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <img
              src="https://via.placeholder.com/200" // Replace with your product image URL
              alt="Machinery"
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-orange-600 font-bold mt-2">Machinery</h3>
          </div>
        <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <img
              src="https://via.placeholder.com/200" // Replace with your product image URL
              alt="Machinery"
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-orange-600 font-bold mt-2">Machinery</h3>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <img
              src="https://via.placeholder.com/200" // Replace with your product image URL
              alt="Machinery"
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-orange-600 font-bold mt-2">Machinery</h3>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <img
              src="https://via.placeholder.com/200" // Replace with your product image URL
              alt="Agri-chemicals"
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-orange-600 font-bold mt-2">Agri-chemicals</h3>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <img
              src="https://via.placeholder.com/200" // Replace with your product image URL
              alt="Live Stock"
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-orange-600 font-bold mt-2">Live Stock</h3>
          </div>
        </div>
      </div>

      {/* In Stock Section */}
      <div className="mt-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">In Stock</h2>
          <a href="#" className="text-orange-500 hover:underline">view all</a>
        </div>
        <div className="flex justify-center  space-x-10">
        <div className="text-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Chickens"
              className="w-40 h-40 object-cover rounded-full"
            />
            <button onclick={handleClick} className="justify-center bg-orange-500 text-white py-3 px-4 rounded-full mt-2 hover:bg-orange-600">
              Buy Now
            </button>
          </div>
        <div className="text-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Chickens"
              className="w-40 h-40 object-cover rounded-full"
            />
            <button onclick={handleClick} className="bg-orange-500 text-white py-3 px-4 rounded-full mt-2 hover:bg-orange-600">
              Buy Now
            </button>
          </div>
        <div className="text-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Chickens"
              className="w-40 h-40 object-cover rounded-full"
            />
            <button onclick={handleClick} className="bg-orange-500 text-white py-3 px-4 rounded-full mt-2 hover:bg-orange-600">
              Buy Now
            </button>
          </div>
            <div className="text-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Chickens"
              className="w-40 h-40 object-cover rounded-full"
            />
            <button onclick={handleClick} className="bg-orange-500 text-white py-3 px-4 rounded-full mt-2 hover:bg-orange-600">
              Buy Now
            </button>
          </div>
        <div className="text-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Chickens"
              className="w-40 h-40 object-cover  rounded-full"
            />
            <button onclick={handleClick} className="bg-orange-500 text-white py-3 px-4 rounded-full mt-2 hover:bg-orange-600">
              Buy Now
            </button>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Chickens"
              className="w-40 h-40 object-cover rounded-full"
            />
            <button onclick={handleClick} className="bg-orange-500 text-white py-3 px-4 rounded-full mt-2 hover:bg-orange-600">
              Buy Now
            </button>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Milk Products"
              className="w-40 h-40 object-cover rounded-full"
            />
            <button className="bg-orange-500 text-white py-3 px-4 rounded-full mt-2 hover:bg-orange-600">
              Buy Now
            </button>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Vegetables"
              className="w-40 h-40 object-cover rounded-full"
            />
            <button className="bg-orange-500 text-white py-3 px-4 rounded-full mt-2 hover:bg-orange-600">
              Buy Now
            </button>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Eggs"
              className="w-40 h-40 object-cover rounded-full"
            />
            <button className="bg-orange-500 text-white py-3 px-4 rounded-full mt-2 hover:bg-orange-600">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  };
export default Home;
