import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ products, addToCart, cartItemCount }) => {
    const navigate = useNavigate();

    return (
        <>
        
            <div onClick={() => navigate('/checkout')}
                className="flex justify-end cursor-pointer bg-green-100 text-blue-500 font-bold hover:underline hover:text-blue-800 px-4">
                Checkout your cart List ({cartItemCount})
            </div>
           <div className="relative">

            <div className="flex grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 items-center bg-green-100">
                {products.map((product) => (
                    <div key={product.id} className="m-4 border border-gray-300 min-h-[10rem] shadow-lg rounded-lg shadow-md p-1 bg-white" >
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover " />
                        <h3 className="mt-2 text-lg font-bold">{product.name}</h3>
                        <p className="text-[rgb(225,215,0)] font-bold">MWK{product.price}</p>
                        
                        <div className="flex justify-between mt-20">

                            {/* Add to cart button */}
                            <button
                                onClick={() => addToCart(product)}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                Add to Cart
                            </button>

                            {/* Detail button */}
                            <button
                                onClick={() => navigate(`/product/${product.id}`)}
                                className="bg-green-500 text-white px-4 rounded hover:bg-green-600">
                                Details
                            </button>
                        </div>
                        <div className="mt-2"></div>

                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default Service;
