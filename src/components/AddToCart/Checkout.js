import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = ({ cart, updateQuantity, removeFromCart }) => {
    // Calculate total price
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="p-6">
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    {cart.map((item) => (
                        // cart product details
                        <div key={item.id} className="flex items-center justify-between p-3 mb-4 border border-gray-200 rounded-lg" style={{backgroundColor:'rgb(0,0,0,0.3)'}}>
                            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                            <div className="ml-4">
                                <h2 className="text-lg font-bold text-black-600">{item.name}</h2>
                                <p className=" text-2xl text-[rgb(255,215,0)] font-bold ">MWK{item.price}</p>
                            </div>
                               
                               {/* Quantity handler */}
                            <div className='border-black bg-white p-1 rounded-md w-18'>
                              <input
                                type="number"
                                value={item.quantity}
                                min="1"
                                onChange={(e) => updateQuantity(item.id, e.target.value)}
                                className="w-16 p-2 border border-gray-300 rounded-md text-center"/>
                            </div>

                              {/* Remove from cart button */}
                            <button onClick={() => removeFromCart(item.id)} className="ml-2 text-red-500 relative group" >
                                   <span  className="absolute right-0 top-full mt-1 text-sm text-red-500 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                                      Remove
                                   </span>
                                🗑️  
                            </button>

                        </div>
                    ))}

                    {/* Total price */}
                    <div className="flex justify-end items-center mt-4">
                        <p className="text-xl font-bold">Total Price: <span className="text-[rgb(255,215,0)]">MWK{totalPrice.toFixed(2)}</span> </p>
                    </div>

                    {/* Payment button */}
                    <div className="flex justify-end mt-4">
                        <button oncl className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-800" >
                        <Link to="Payment"> Make payment</Link>    
                        </button>
                    </div>
                
                </>
            )}
        </div>
    );
};

export default Checkout;
