import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import farmersdirect1 from './farmersdirect1.jpg';
import farmersdirect2 from './farmersdirect2.jpg';
import farmersdirect3 from './farmersdirect3.jpg';
import Agrichemicals from './Agrichemicals.jpg';
import Agrichemicals1 from './Agrichemicals1.jpg'
import chicken from './chicken.jpg';


const bannerImages = [farmersdirect1, farmersdirect2, farmersdirect3,Agrichemicals];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 4000); // Change every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Banner */}
      <div className="relative bg-white rounded-lg overflow-hidden">
        <img
          src={bannerImages[currentImageIndex]}
          alt="Farmer Banner"
          className="w-full h-[50vh] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl font-bold text-orange-500 uppercase mb-4">
            Welcome to <i className='text-white'>Farmers Direct</i> 
          </h1>
          <p className="text-lg text-green-600 font-bold">Your Partner in Farming Excellence</p>
        </div>
      </div>

      {/* Featured Deals Section */}
      <div className="flex flex-col items-center border p-4 m-8">
        <div className="m-8">
          <h2 className="text-orange-500 text-4xl">FEATURED DEALS </h2>
          <p className='text-green-700 text-xl'>We offer nothing but the best value</p>
        </div>
        <div className="flex flex-wrap gap-2 p-4">
          <div className="bg-white text-center rounded shadow">
            <img
              src={Agrichemicals}
              alt="Machinery"
              className="w-full h-52 object-cover rounded transition-transform transform hover:scale-110"
            />
            <h3 className="text-lg font-semibold text-green-600 ">Machinery</h3>
            <h4 className='m-3 p-3 text-black font-bold'>High-quality farming machineries at unbeatable prices</h4>
          </div>
          <div className="bg-white text-center rounded shadow">
            <img
              src={farmersdirect2}
              alt="Farm products"
              className="w-full h-52 object-cover rounded transition-transform transform hover:scale-110"
            />
            <h3 className="text-green-600 font-bold mt-2">Farm Products</h3>
            <h4 className='m-3 p-3 text-black font-bold'>Buy quality farm produce at affordable rates</h4>
          </div>
          <div className="bg-white text-center rounded shadow">
            <img
              src={Agrichemicals1}
              alt="Agri-chemicals"
              className="w-full h-52 object-cover rounded transition-transform transform hover:scale-110"
            />
            <h3 className="text-green-600 font-bold mt-2">Agri-chemicals</h3>
            <h4 className='m-3 p-3 text-black font-bold'>Protect your crops and livestocks with quantity</h4>
          </div>
          <div className="bg-white text-center rounded shadow">
            <img
              src={chicken}
              alt="Live Stock"
              className="w-full h-52 object-cover rounded transition-transform transform hover:scale-110"
            />
            <h3 className="text-green-600 font-bold mt-2">Live Stock</h3>
           
            <h4 className='p-3 m-3 font-bold text-black'>Offers all breeds of Poultry and Livestocks for raising </h4>
          </div>
        </div>
        <button className='bg-green-500 text-white p-3 m-5 rounded mt-2 hover:bg-orange-600'><Link to='/DescriptionPage'>See More</Link></button>
      </div>

      {/* In Stock Section */}
      <div className="flex flex-col items-center border p-10 m-10">
        <div className="">
          <h2 className="text-orange-500 text-3xl">IN STOCK</h2>
          <p className='text-green-700 text-xl'>Buy and sell with farmers Direct</p>
        </div>
        <div className="flex flex-wrap space-x-5 p-10"> 
          <div className="text-center p-4 border p-8 m-3">
            <img
              src="https://via.placeholder.com/100"
              alt="Vegetables"
              className="w-40 h-40 object-cover rounded-full"/>
              <h1>VEGETABLES</h1>
            <button className="bg-orange-500 text-white p-3 m-5 rounded mt-2 hover:bg-orange-600">
              Buy Now
            </button>
          </div>
        <div className="text-center p-4 border p-8 m-3">
            <img
              src="https://via.placeholder.com/100"
              alt="Plough"
              className="w-40 h-40 object-cover rounded-full"
            />
            <h1>HOES</h1>
            <button className="bg-orange-500 text-white p-3 m-5 rounded mt-2 hover:bg-orange-600">
              Buy Now
            </button>
          </div>
        <div className="text-center p-4 border p-8 m-3">
            <img
              src="https://via.placeholder.com/100"
              alt="Tomatoes"
              className="w-40 h-40 object-cover rounded-full"
            />
            <h1>TOMATOES</h1>
            <button className="bg-orange-500 text-white p-3 m-5 rounded mt-2 hover:bg-orange-600">
              Buy Now
            </button>
          </div>
          <div className="text-center p-4 border p-8 m-3">
            <img
              src="https://via.placeholder.com/100"
              alt="Chickens"
              className="w-40 h-40 object-cover rounded-full"
            />
            <h1>CHICKENS</h1>
            <button className="bg-orange-500 text-white p-3 m-5 rounded mt-2 hover:bg-orange-600">
              Buy Now
            </button>
          </div>
          <div className="text-center p-4 border p-8 m-3">
            <img
              src="https://via.placeholder.com/100"
              alt="Milk Products"
              className="w-40 h-40 object-cover rounded-full"
            />
            <h1>MILK PRODUCTS</h1>
            <button className="bg-orange-500 text-white p-3 m-5 rounded mt-2 hover:bg-orange-600">
              Buy Now
            </button>
          </div>
          <div className="text-center p-4 border p-8 m-3">
            <img
              src="https://via.placeholder.com/100"
              alt="Vegetables"
              className="w-40 h-40 object-cover rounded-full"
            />
            <h1>AGRI-CHEMICALS</h1>
            <button className="bg-orange-500 text-white p-3 m-5 rounded mt-2 hover:bg-orange-600">
              Buy Now
            </button>
          </div>
        </div>
        <button className='bg-green-500 text-white p-3 m-5 rounded mt-2 hover:bg-orange-600'><Link to='/Services'>See More</Link></button>
      </div>
    </div>
  );
};

export default Home;
