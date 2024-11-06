import React from 'react';
import NationalBank from "../Payment/NB.jpg";
import AirtelMoney from "../Payment/AirtelMoney.png";
import TNMMpamba from "../Payment/TNM.jpg";

const Payment = () => {
  return (
    <div className="flex flex-col items-center bg-green-100 p-8 space-y-6">
      <h2 className="text-lg font-medium mb-4">Choose your payment method</h2>

     
      <div className="grid grid-cols-2 gap-6 w-full max-w-2xl">

        <div className="flex items-start bg-white p-6 rounded-lg shadow-md w-full">
          <div className="mr-6">
            <img 
              src={AirtelMoney} 
              alt="Airtel Money" 
              className="w-32 h-20 object-contain"
            />
          </div>
          <div className="flex flex-col w-full">
            <form className="w-full space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Phone Number</label>
                <input 
                  type="text" 
                  placeholder="Enter phone number" 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Amount</label>
                <input 
                  placeholder="Enter amount" 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600 mt-4"
              >
                Confirm 
              </button>
            </form>
          </div>
        </div>

       
        <div className="flex items-start bg-white p-6 rounded-lg shadow-md w-full">
          <div className="mr-6">
            <img 
              src={TNMMpamba} 
              alt="TNM Mpamba" 
              className="w-32 h-20 object-contain"
            />
          </div>
          <div className="flex flex-col w-full">
            <form className="w-full space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold size-4 mb-1">Phone Number</label>
                <input 
                  type="text" 
                  placeholder="Enter phone number" 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Amount</label>
                <input 
                  placeholder="Enter amount" 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600 mt-4"
              >
                Confirm 
              </button>
            </form>
          </div>
        </div>

      
        <div className="col-span-2 flex items-start bg-white p-6 rounded-lg shadow-md w-full">
          <div className="mr-6">
            <img 
              src={NationalBank} 
              alt="National Bank" 
              className="w-32 h-20 object-contain"
            />
          </div>
          <div className="flex flex-col w-full">
            <form className="w-full space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Account</label>
                <input 
                  type="text" 
                  placeholder="Enter account number" 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Reference</label>
                <input 
                  type="text" 
                  placeholder="Enter reference" 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Amount</label>
                <input 
                  placeholder="Enter amount" 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600 mt-4"
              >
                Confirm 
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
