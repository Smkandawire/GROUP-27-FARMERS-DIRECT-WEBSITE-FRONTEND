import React, { useState, useEffect } from 'react';
import productImage from './productImage1.jpeg';

const Checkout = () => {
  // Initialize the cart from localStorage if available
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // State to manage quantity and unit for each product
  const [quantities, setQuantities] = useState(() => {
    return cart.map((product) => ({
      id: product.id,
      quantity: product.quantity || 1,
      unit: product.isCountable ? 'count' : 'kilograms', // Use 'count' for countable products, 'kilograms' for others
    }));
  });

  // Handle change in quantity for each product
  const handleQuantityChange = (id, value) => {
    setQuantities(
      quantities.map((item) =>
        item.id === id
          ? { ...item, quantity: parseFloat(value) > 0 ? parseFloat(value) : 1 }
          : item
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

  // Handle removing a product from the cart
  const handleRemoveProduct = (id) => {
    const updatedCart = cart.filter(product => product.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage after removing the product
  };

  // Format the price to always show in MWK
  const formatPriceInMWK = (price) => {
    if (!price.includes('MWK')) {
      return `MWK${price}`;
    }
    return price;
  };

  // Calculate the total price in MWK
  const calculateTotalPrice = () => {
    return cart.reduce((total, product, index) => {
      const quantity = quantities[index]?.quantity || 1;
      const productPrice = parseFloat(formatPriceInMWK(product.price).replace('MWK', ''));
      return total + productPrice * quantity;
    }, 0);
  };

  // Sync cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <div className="w-full h-1 bg-gray-300 mb-4"></div>

      {/* Cart Items List */}
      {cart.length > 0 ? (
        <div className="space-y-4" style={{ backgroundImage: `url(${productImage})` }}>
          {cart.map((product, index) => (
            <div key={product.id} className="flex justify-between items-center p-4 border rounded-md shadow-sm bg-black bg-opacity-50 text-2xl">
              
              <div>
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-lg"/>
               </div>

              <div className="flex-1 mx-4">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-500 font-bold" style={{ color: 'rgb(255, 215, 0)' }}>{formatPriceInMWK(product.price).replace('MWK', 'MWK')}</p>
              </div>

              {/* Quantity Input */}
              <div className="flex items-center space-x-2">
                <input
                  type={product.isCountable ? 'number' : 'text'} // 'number' for countable, 'text' for others to allow decimals
                  step={product.isCountable ? '1' : '0.01'} // Step of 1 for countable products, 0.01 for non-countable
                  min="1"
                  value={quantities[index]?.quantity || 1}
                  onChange={(e) =>
                    handleQuantityChange(product.id, e.target.value)
                  }
                  className="border p-2 rounded-md w-20"/>

                {/* Optional Unit Select for non-countable products */}
                {!product.isCountable && (
                  <select
                    value={quantities[index]?.unit || 'kilograms'}
                    onChange={(e) =>
                      handleUnitChange(product.id, e.target.value)
                    }
                    className="border p-2 rounded-md"
                  >
                    <option value="kilograms">Kilograms</option>
                    <option value="grams">Grams</option>
                  </select>
                )}
              </div>

              {/* Remove Product Button */}
              <button
                onClick={() => handleRemoveProduct(product.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total Price */}
          <div className="text-right text-2xl font-bold mt-6" style={{ color: 'rgb(255, 215, 0)' }}>
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
