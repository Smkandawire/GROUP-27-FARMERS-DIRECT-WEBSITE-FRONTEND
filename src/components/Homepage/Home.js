import React from 'react';
import farmersdirect from './farmersdirect.jpeg'
import Agrichemicals from './Agrichemicals.jpg'
import chicken from './chicken.jpg'
import organics from './organics.jpg'

const Home= () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
    {/* Banner */}
    <div className="relative bg-white rounded-lg  overflow-hidden">
      <img src= {farmersdirect}  alt="Farmer Banner"  class="w-full h-[50vh] object-fit" />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold text-orange-500 uppercase mb-4">
          Welcome to Farmers Direct
        </h1>
        <p className="text-lg text-black font-bold">Your Partner in Farming Excellence</p>
      </div>
    </div>

    {/* Featured Deals Section */}
    <div className="flex flex-col">
      <div className="flex justify-between items-center m-4">
        <h2 className="flex justify-center text-2xl font-bold text-gray-800">Featured Deals</h2>
        <a href="#" className="text-orange-500 hover:underline">view all</a>
      </div>
      <div className="flex flex-cols gap-5 p-5">
      <div className="bg-white text-center">
          <img
            src={Agrichemicals}// Replace with your product image URL
            alt="Machinery"
            className="w-full h-40 object-fit rounded"
          />
          <h3 className="text-orange-600 font-bold mt-2">Machinery</h3>
          <h4 className='text-green-300'>GET YOUR FARMING MACHINERIES AT FAMERS-DIRECT</h4>
        </div>
        <div className="bg-white text-center">
          <img
            src={Agrichemicals}// Replace with your product image URL
            alt="Machinery"
            className="w-full h-40 object-fit rounded"
          />
          <h3 className="text-orange-600 font-bold mt-2">Machinery</h3>
          <h4 className='text-green-300'>GET YOUR FARMING MACHINERIES AT FAMERS-DIRECT</h4>
        </div>
        <div className="bg-white text-center
        ">
          <img
            src={organics}// Replace with your product image URL
            alt="Agri-chemicals"
            className="w-full h-40 object-fit rounded"
          />
          <h3 className="text-orange-600 font-bold mt-2">Agri-chemicals</h3>
          <h4 className='text-green-300'>GET YOUR FARMING MACHINERIES AT FAMERS-DIRECT</h4>
          <h4></h4>
        </div>
        <div className="bg-white text-center">
          <img
          src={chicken} // Replace with your product image URL
            alt="Live Stock"
            className="w-full h-40 object-fit rounded"
          />
          <h3 className="text-orange-600 font-bold mt-2">Live Stock</h3>
          <h4 className='text-green-300'>GET YOUR FARMING MACHINERIES AT FAMERS-DIRECT</h4>
        </div>
      </div>
    </div>

    {/* In Stock Section */}
    <div className="mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">In Stock</h2>
        <a href="#" className="text-orange-500 hover:underline">view all</a>
      </div>
      <div className="flex justify-center space-x-6">
        <div className="text-center">
          <img
            src="https://via.placeholder.com/100"
            alt="Chickens"
            className="w-24 h-24 object-cover rounded-full"
          />
          <button className="bg-orange-500 text-white py-1 px-3 rounded-full mt-2 hover:bg-orange-600">
            Buy Now
          </button>
        </div>
        <div className="text-center">
          <img
            src="https://via.placeholder.com/100"
            alt="Milk Products"
            className="w-24 h-24 object-cover rounded-full"
          />
          <button className="bg-orange-500 text-white py-1 px-3 rounded-full mt-2 hover:bg-orange-600">
            Buy Now
          </button>
        </div>
        <div className="text-center">
          <img
            src="https://via.placeholder.com/100"
            alt="Vegetables"
            className="w-24 h-24 object-cover rounded-full"
          />
          <button className="bg-orange-500 text-white py-1 px-3 rounded-full mt-2 hover:bg-orange-600">
            Buy Now
          </button>
        </div>
        <div className="text-center">
          <img
            src="https://via.placeholder.com/100"
            alt="Eggs"
            className="w-24 h-24 object-cover rounded-full"
          />
          <button className="bg-orange-500 text-white py-1 px-3 rounded-full mt-2 hover:bg-orange-600">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </div>
);
};

export default Home;
