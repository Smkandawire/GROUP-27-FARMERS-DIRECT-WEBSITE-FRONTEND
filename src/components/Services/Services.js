import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ products, addToCart, cartItemCount }) => {
    const navigate = useNavigate();

    return (
        <>
        
            <div onClick={() => navigate('/checkout')}
                className="flex justify-end text-blue-600 px-4">
                Checkout your cart List ({cartItemCount})
            </div>
           <div className="relative p-4">


            <div className="flex flex-centerjustify-start ">
                {products.map((product) => (
                    <div key={product.id} className="w-64 m-4 p-4 border border-gray-200 rounded-lg shadow-md">
                        <img src={product.image} alt={product.name} className="w-full h-32 object-cover" />
                        <h3 className="mt-2 text-lg font-bold">{product.name}</h3>
                        <p className="text-gray-700">MWK{product.price}</p>
                        
                        <div className="flex justify-between mt-4">

                            {/* Add to cart button */}
                            <button
                                onClick={() => addToCart(product)}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                Add to Cart
                            </button>

                            {/* Detail button */}
                            <button
                                onClick={() => navigate(`/product/${product.id}`)}
                                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                                Details
                            </button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default Service;
