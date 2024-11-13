import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCheckCircle, faBox } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import farmersdirect1 from './farmersdirect1.jpg';
import farmersdirect2 from './farmersdirect2.jpg';
import farmersdirect3 from './farmersdirect3.jpg';
import Agrichemicals from './Agrichemicals.jpg';
import Agrichemicals1 from './Agrichemicals1.jpg';
import chicken from './chicken.jpg';
import vegetables from './vegetables.jpg';
import blackbleed from './blackbleed.jpg';
import cow from './cow.jpg'
import milk from './milk.jpg';
import pumpkins from './pumpkins.jpg';
import rabbit from './rabbit.jpg';
import tomatoes from './tomatoes.jpg';
import fertilizer from './fertilizer.jpg';
import hoes from './hoes.jpg';
import turkey from './turkey.jpg';

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
            <h3 className="text-green-600 font-bold">Farm Products</h3>
            <h4 className='m-3 p-3 text-black font-bold'>Buy quality farm produce at affordable rates</h4>
          </div>
          <div className="bg-white text-center rounded shadow">
            <img
              src={Agrichemicals1}
              alt="Agri-chemicals"
              className="w-full h-52 object-cover rounded transition-transform transform hover:scale-110"
            />
            <h3 className="text-green-600 font-bold">Agri-chemicals</h3>
            <h4 className='m-3 p-3 text-black font-bold'>Protect your crops and livestocks with quantity</h4>
          </div>
          <div className="bg-white text-center rounded shadow">
            <img
              src={chicken}
              alt="Live Stock"
              className="w-full h-52 object-cover rounded transition-transform transform hover:scale-110"
            />
            <h3 className="text-green-600 font-bold">Live Stock</h3>
           
            <h4 className='p-3 m-3 font-bold text-black'>Offers all breeds of Poultry and Livestocks for raising </h4>
          </div>
        </div>
        <button className='bg-green-500 text-white p-3 m-5 rounded hover:bg-orange-600'><Link to='/DescriptionPage'>See More</Link></button>
      </div>

      {/* In Stock Section */}
      <div className="flex flex-col items-center border p-10 m-10">
        <div>
          <h2 className="text-orange-500 text-3xl">IN STOCK</h2>
          <p className='text-green-700 text-xl'>Buy and sell with farmers Direct</p>
        </div>
        <div className="flex flex-wrap space-x-2 p-10"> 
          <div className="text-center p-4 border p-8 m-3 hover:scale-105 active:scale-100">
            <img
              src={vegetables}
              alt="Vegetables"
              className="h-60 w-60 object-cover rounded-full"/>
              <h1 className='text-bold text-green-600 p-4'>VEGETABLES</h1>
              <div className="flex items-center justify-start text-gray-800 space-x-2">
       <FontAwesomeIcon icon={faMapMarkerAlt} className="text-black" />
       <span>Location: Chikanda</span>
       </div>

       <div className="flex items-center justify-start text-gray-800 space-x-2">
       <FontAwesomeIcon icon={faBox} className="text-blue-300" />
       <span>Quantity: 25</span>
       </div>
       <div className="flex items-center justify-start text-gray-800 space-x-2">
       <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" />
       <span>Available Now</span>
        </div>
            <button className="bg-orange-500 text-white p-3 m-5 rounded hover:bg-orange-600">
              Buy Now
            </button>
          </div>
        <div className="text-center p-4 border p-8 m-3 hover:scale-105 active:scale-100">
            <img
              src={hoes}
              alt="Plough"
              className="h-60 w-60 object-cover rounded-full"
            />
            <h1 className='text-bold text-green-600 p-4'>HOES</h1>
            <div className="flex items-center justify-start text-gray-800 space-x-2">
       <FontAwesomeIcon icon={faMapMarkerAlt} className="text-black" />
       <span>Location: Zomba, Sadzi</span>
       </div>

       <div className="flex items-center justify-start text-gray-800 space-x-2">
       <FontAwesomeIcon icon={faBox} className="text-blue-300" />
       <span>Quantity: 100</span>
       </div>
       <div className="flex items-center justify-start text-gray-800 space-x-2">
       <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" />
       <span>Available Now</span>
        </div>
            <button className="bg-orange-500 text-white p-3 m-5 rounded hover:bg-orange-600">
              Buy Now
            </button>
          </div>
        <div className="text-center p-4 border p-8 m-3 hover:scale-105 active:scale-100">
            <img
              src={tomatoes}
              alt="Tomatoes"
              className="h-60 w-60 object-cover rounded-full"
            />
            <h1 className='text-bold text-green-600 p-4'>TOMATOES</h1>
            <div className="flex items-center justify-start text-gray-800 space-x-2">
       <FontAwesomeIcon icon={faMapMarkerAlt} className="text-black" />
       <span>Location: Lilongwe</span>
       </div>

       <div className="flex items-center justify-start text-gray-800 space-x-2">
       <FontAwesomeIcon icon={faBox} className="text-blue-300" />
       <span>Quantity: Available in kgs</span>
       </div>
       <div className="flex items-center justify-start text-gray-800 space-x-2">
       <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" />
       <span>Available Now</span>
        </div>
            <button className="bg-orange-500 text-white p-3 m-5 rounded hover:bg-orange-600">
              Buy Now
            </button>
          </div> 
          <div className="text-center p-4 border p-8 m-3 hover:scale-105 active:scale-100">
            <img
              src={blackbleed}
              alt="Chickens"
              className="h-60 w-60 object-cover rounded-full"
            />
            <h1 className='text-bold text-green-600 p-4'>CHICKENS</h1>
            <div className="flex items-center justify-start text-gray-800 space-x-2">
       <FontAwesomeIcon icon={faMapMarkerAlt} className="text-black" />
       <span>Location: Zomba, Town</span>
       </div>

       <div className="flex items-center justify-start text-gray-800 space-x-2">
       <FontAwesomeIcon icon={faBox} className="text-blue-300" />
       <span>Quantity: 250</span>
       </div>
       <div className="flex items-center justify-start text-gray-800 space-x-2">
       <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" />
       <span>Available Now</span>
        </div>
            <button className="bg-orange-500 text-white p-3 m-5 rounded hover:bg-orange-600">
              Buy Now
            </button>
          </div>
          <div className="text-center p-4 border p-8 m-3 hover:scale-105 active:scale-100">
            <img
              src={milk}
              alt="Milk Products"
              className="h-60 w-60 object-cover rounded-full"
            />
            <h1 className='text-bold text-green-600 p-4'>MILK PRODUCTS</h1>
            <div className="flex items-center justify-start text-gray-800 space-x-2">
       <FontAwesomeIcon icon={faMapMarkerAlt} className="text-black" />
       <span>Location:  Blantyre</span>
       </div>

       <div className="flex items-center justify-start text-gray-800 space-x-2">
       <FontAwesomeIcon icon={faBox} className="text-blue-300" />
       <span>Quantity: in Litres</span>
       </div>
       <div className="flex items-center justify-start text-gray-800 space-x-2">
       <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" />
       <span>Available Now</span>
        </div>
            <button className="bg-orange-500 text-white p-3 m-5 rounded hover:bg-orange-600">
              Buy Now
            </button>
          </div>
          <div className="text-center p-4 border p-8 m-3 hover:scale-105 active:scale-100">
            <img
              src={fertilizer}
              alt="agrichemicals"
              className="h-60 w-60 object-cover rounded-full"
            />
            <h1 className='text-bold text-green-600 p-4'>FERTILIZER</h1>
            <div className="flex items-center justify-start text-gray-800 space-x-2">
       <FontAwesomeIcon icon={faMapMarkerAlt} className="text-black" />
       <span>Location: Neno</span>
       </div>

       <div className="flex items-center justify-start text-gray-800 space-x-2">
       <FontAwesomeIcon icon={faBox} className="text-blue-300" />
       <span>Quantity: 30 bags</span>
       </div>
       <div className="flex items-center justify-start text-gray-800 space-x-2">
       <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" />
       <span>Available Now</span>
        </div>
            <button className="bg-orange-500 text-white p-3 m-5 rounded hover:bg-orange-600">
              Buy Now
            </button>
          </div>
          <div className="text-center p-4 border p-8 m-3 hover:scale-105 active:scale-100">
            <img
              src={rabbit}
              alt="rabbit"
              className="h-60 w-60 object-cover rounded-full"
            />
            <h1 className='text-bold text-green-600 p-4'>RABBITS</h1>
            <div className="flex items-center justify-start text-gray-800 space-x-2">
       <FontAwesomeIcon icon={faMapMarkerAlt} className="text-black" />
       <span>Location: Lilongwe</span>
       </div>

       <div className="flex items-center justify-start text-gray-800 space-x-2">
       <FontAwesomeIcon icon={faBox} className="text-blue-300" />
       <span>Quantity: 100</span>
       </div>
       <div className="flex items-center justify-start text-gray-800 space-x-2">
       <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" />
       <span>Available Now</span>
        </div>
            <button className="bg-orange-500 text-white p-3 m-5 rounded hover:bg-orange-600">
              Buy Now
            </button>
          </div>
          <div className="text-center p-4 border p-8 m-3 hover:scale-105 active:scale-100">
            <img
              src={pumpkins}
              alt="pumpkin"
              className="h-60 w-60 object-cover rounded-full"
            />
            <h1 className='text-bold text-green-600 p-4'>PUMPKINS</h1>
            <div className="flex items-center justify-start text-gray-800 space-x-2">
       <FontAwesomeIcon icon={faMapMarkerAlt} className="text-black" />
       <span>Location: Nsanje</span>
       </div>

       <div className="flex items-center justify-start text-gray-800 space-x-2">
       <FontAwesomeIcon icon={faBox} className="text-blue-300" />
       <span>Quantity: Ambiri</span>
       </div>
       <div className="flex items-center justify-start text-gray-800 space-x-2">
       <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" />
       <span>Available Now</span>
        </div>
            <button className="bg-orange-500 text-white p-3 m-5 rounded hover:bg-orange-600">
              Buy Now
            </button>
          </div>
          <div className="text-center p-4 border p-8 m-3 hover:scale-105 active:scale-100">
            <img
              src={cow}
              alt="cow"
              className="h-60 w-60 object-cover rounded-full"
            />
            <h1 className='text-bold text-green-600 p-4'>COW</h1>
            <div className="flex items-center justify-start text-gray-800 space-x-2">
       <FontAwesomeIcon icon={faMapMarkerAlt} className="text-black" />
       <span>Location: Nsanje</span>
       </div>

       <div className="flex items-center justify-start text-gray-800 space-x-2">
       <FontAwesomeIcon icon={faBox} className="text-blue-300" />
       <span>Quantity: 250</span>
       </div>
       <div className="flex items-center justify-start text-gray-800 space-x-2">
       <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" />
       <span>Available Now</span>
        </div>
            <button className="bg-orange-500 text-white p-3 m-5 rounded hover:bg-orange-600">
              Buy Now
            </button>
          </div>
          <div className="text-center p-4 border p-8 m-3 hover:scale-105 active:scale-100">
            <img
              src={turkey}
              alt="turkey"
              className="h-60 w-60 object-cover rounded-full"
            />
            <h1 className='text-bold text-green-600 p-4'>TURKEY</h1>
       <div className="flex items-center justify-start text-gray-800 space-x-2">
       <FontAwesomeIcon icon={faMapMarkerAlt} className="text-black" />
       <span>Location: Zimba</span>
       </div>

       <div className="flex items-center justify-start text-gray-800 space-x-2">
       <FontAwesomeIcon icon={faBox} className="text-blue-300" />
       <span>Quantity: 250</span>
       </div>
       <div className="flex items-center justify-start text-gray-800 space-x-2">
       <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" />
       <span>Available Now</span>
        </div>
<button className="bg-orange-500 text-white p-3 m-5 rounded hover:bg-orange-600">
              Buy Now
            </button>
          </div>
        </div>
        <button className='bg-green-500 text-white p-3 m-5 rounded hover:bg-orange-600'><Link to='/Services'>See More</Link></button>
      </div>
    </div>
  );
};

export default Home;
