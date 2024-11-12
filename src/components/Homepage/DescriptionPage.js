import React from 'react';

import farmersdirect3 from './farmersdirect3.jpg';
import Agrichemicals1 from './Agrichemicals1.jpg';
import farmersdirect2 from './farmersdirect2.jpg';
import chicken from './chicken.jpg';


const DescriptionPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="flex justify-center text-3xl text-black mb-8">Detailed Description</h2>
      <div className="space-y-6">
        {/* Machinery Section */}
        <div className="bg-white p-6 rounded shadow flex items-center space-x-6">
          <img
            src={farmersdirect3 }
            alt="Machinery"
            className="w-1/2 object-cover rounded-md"
          />
          <div>
            <h3 className="text-2xl font-bold text-orange-600">Machinery</h3>
            <p className="text-green-700 mt-2">
              Farmers Direct offers a range of high-quality farming machinery at unbeatable prices. Whether you're
              looking for tractors, harvesters, or other farming tools, we have everything you need to boost your
              farm's productivity.
            </p>
          </div>
        </div>

        {/* Agri-Chemicals Section */}
        <div className="bg-white p-6 rounded shadow flex items-center space-x-6">
          <img
            src={Agrichemicals1}
            alt="Agri-Chemicals"
            className="w-1/2 object-cover rounded-md"
          />
          <div>
            <h3 className="text-2xl font-bold text-orange-600">Agri-Chemicals</h3>
            <p className="text-green-700 mt-2">
              Our selection of agri-chemicals helps protect crops from pests, weeds, and diseases, ensuring that your
              harvest is bountiful and of the highest quality. Trust Farmers Direct for all your crop protection needs.
            </p>
          </div>
        </div>

        {/* Live Stock Section */}
        <div className="bg-white p-6 rounded shadow flex items-center space-x-6">
          <img
            src={chicken}
            alt="Live Stock"
            className="w-1/2 object-cover rounded-md"
          />
          <div>
            <h3 className="text-2xl font-bold text-orange-600">Live Stock</h3>
            <p className="text-green-700 mt-2">
              Farmers Direct also offers live stock products, providing you with high-quality animals and birds for
              your farm. From chickens to cows, we ensure that our live stock is healthy and ready to thrive in your
              farming environment.
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded shadow flex items-center space-x-6">
          <img
            src={farmersdirect2}
            alt="Live Stock"
            className="w-1/2 object-cover rounded-md"
          />
          <div>
            <h3 className="text-2xl font-bold text-orange-600">Farm Products</h3>
            <p className="text-green-700 mt-2">
              Farmers Direct also offers live stock products, providing you with high-quality animals and birds for
              your farm. From chickens to cows, we ensure that our live stock is healthy and ready to thrive in your
              farming environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionPage;
