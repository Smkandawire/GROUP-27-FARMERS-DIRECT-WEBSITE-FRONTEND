import React, { useState } from "react";

function OrderManagement() {
  // Sample data for demonstration
  const [orderData] = useState({
    products: [
      {
        id: 1,
        name: "Tomatoes",
        totalPurchased: 500,
        totalSold: 300,
        totalStock: 200,
      },
      {
        id: 2,
        name: "Potatoes",
        totalPurchased: 800,
        totalSold: 500,
        totalStock: 300,
      },
      {
        id: 3,
        name: "Cabbages",
        totalPurchased: 400,
        totalSold: 100,
        totalStock: 300,
      },
    ],
  });

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="bg-green-600 text-white p-4 rounded-lg mb-6">
        <h1 className="text-2xl font-semibold">Order Management Dashboard</h1>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orderData.products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-300"
          >
            {/* Product Name */}
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{product.name}</h2>

            {/* Total Purchased */}
            <div className="mb-4">
              <p className="text-sm text-gray-600">Total Purchased</p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold text-green-600">{product.totalPurchased} kg</p>
                <div className="w-20 bg-green-100 rounded-full py-1 text-center text-xs text-green-600">
                  Purchased
                </div>
              </div>
            </div>

            {/* Total Sold */}
            <div className="mb-4">
              <p className="text-sm text-gray-600">Total Sold</p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold text-orange-600">{product.totalSold} kg</p>
                <div className="w-20 bg-orange-100 rounded-full py-1 text-center text-xs text-orange-600">
                  Sold
                </div>
              </div>
            </div>

            {/* Total Stock */}
            <div className="mb-4">
              <p className="text-sm text-gray-600">Current Stock</p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold text-blue-600">{product.totalStock} kg</p>
                <div className="w-20 bg-blue-100 rounded-full py-1 text-center text-xs text-blue-600">
                  In Stock
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-4">
              <p className="text-sm text-gray-600">Sales Progress</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-green-600 h-2.5 rounded-full"
                  style={{
                    width: `${(product.totalSold / product.totalPurchased) * 100}%`,
                  }}
                ></div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-sm text-gray-600">{product.totalSold} sold</span>
                <span className="text-sm text-gray-600">
                  {Math.round((product.totalSold / product.totalPurchased) * 100)}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderManagement;
