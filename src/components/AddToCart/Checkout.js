import React, { useState, useEffect } from 'react';

const Checkout = () => {
  // Initialize the cart from localStorage if available
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // State to manage unit type and quantity for each product
  const [quantities, setQuantities] = useState(() => {
    return cart.map((product) => ({
      id: product.id,
      quantity: product.quantity || 1,
      unit: 'kilograms', // default unit
    }));
  });

  // Handle change in quantity or unit for each product
  const handleQuantityChange = (id, value) => {
    setQuantities(
      quantities.map((item) =>
        item.id === id ? { ...item, quantity: parseFloat(value) } : item
      )
    );
  };

  const handleUnitChange = (id, unit) => {
    setQuantities(
      quantities.map((item) =>
        item.id === id ? { ...item, unit } : item
      )
    );
  };

  // Calculate the total price
  const calculateTotalPrice = () => {
    return cart.reduce((total, product, index) => {
      const quantity = quantities[index]?.quantity || 1;
      return total + parseFloat(product.price.replace('MWK', '')) * quantity;
    }, 0);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <div className="w-full h-1 bg-gray-300 mb-4"></div>

      {/* Cart Items List */}
      {cart.length > 0 ? (
        <div className="space-y-4">
          {cart.map((product, index) => (
            <div key={product.id} className="flex justify-between items-center p-4 border rounded-md shadow-sm">
              <div>
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
              </div>
              <div className="flex-1 mx-4">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-500">{product.price}</p>
              </div>

              {/* Quantity Input */}
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  min="1"
                  value={quantities[index]?.quantity || 1}
                  onChange={(e) =>
                    handleQuantityChange(product.id, e.target.value)
                  }
                  className="border p-2 rounded-md w-20"
                />
                <select
                  value={quantities[index]?.unit || 'kilograms'}
                  onChange={(e) =>
                    handleUnitChange(product.id, e.target.value)
                  }
                  className="border p-2 rounded-md"
                >
                  <option value="kilograms">Kilograms</option>
                  <option value="long tons">Long Tons</option>
                  <option value="grams">Grams</option>
                  <option value="pounds">Pounds</option>
                </select>
              </div>
            </div>
          ))}

          {/* Total Price */}
          <div className="text-right text-2xl font-bold mt-6">
            Total Price: MWK {calculateTotalPrice().toFixed(2)}
          </div>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Checkout;
