import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {FaStar} from "react-icons/fa"

const Service = ({ products, addToCart, cartItemCount }) => {
    const navigate = useNavigate();
    const [ratings, setRatings] = useState({});
    const [hoverRating, setHoverRating] = useState(null);

    const handleRating = (productId, rating) => {
        setRatings((prevRatings) => ({
          ...prevRatings,
          [productId]: rating,
        }));
      };
    return (

        <>

               <div onClick={() => navigate('/checkout')}
                className="flex justify-end text-blue-600 px-4">
                Checkout your cart List ({cartItemCount})
            </div>

           <div className="relative">

            <div className="flex grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 items-center bg-green-100">
                {products.map((product) => (
                    <div key={product.id} className=" m-4 border border-gray-300 rounded-lg shadow-md p-1 bg-white min-h-[10rem] shadow-lg" >
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />

                        <div className="flex items-center gap-2">
                              <span className="px-3 py-1 rounded-full text-xs bg-gray-100 ">stock ready</span>
                              <span className="px-3 py-1 rounded-full text-xs bg-gray-100 ">farmers direct</span>
                        </div>


                        <h3 className="mt-2 text-lg font-bold">{product.name}</h3>
                        <p className="text-[rgb(225,215,0)] font-bold">MWK{product.price}</p>

                       
                       {/* Rating */}
                       <div className="flex items-center space-x-1 mt-1">
                                {[...Array(5)].map((_, index) => {
                                         const currentRate = index + 1;
                                     return (
                                           <label key={index} className="cursor-pointer">
                                               <input
                                                    type="radio"
                                                    name={`rating-${product.id}`}
                                                    value={currentRate}
                                                    onClick={() => handleRating(product.id, currentRate)}
                                                    style={{ display: 'none' }}
                                               />

                                               <FaStar
                                                      size={20}
                                                      color={
                                                            currentRate <= (hoverRating?.[product.id] || ratings[product.id] || 0)
                                                             ? 'yellow'
                                                             : 'gray'
                                                      }
                                                      onMouseEnter={() =>
                                                             setHoverRating((prevHover) => ({
                                                                      ...prevHover,
                                                                      [product.id]: currentRate,
                                                              }))
                                                      }
                                                      onMouseLeave={() => 
                                                              setHoverRating((prevHover) => ({
                                                                       ...prevHover,
                                                                     [product.id]: null,
                                                              }))
                                                       }
                                                />
                                   <span  className="absolute right-0 top-full mt-1 text-sm text-[rgb(225,215,0)] transition-opacity duration-200 group-hover:opacity-100">
                                      Rate product quality
                                   </span>
                                          </label>
                                       );
                                })}
                      </div>     


                       <div className="flex justify-between mt-5">
                            {/* Add to cart button */}
                            <button
                                onClick={() => addToCart(product)}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                Add to Cart
                            </button>

                            {/* Detail button */}
                            <button
                                onClick={() => navigate(`/product/${product.id}`)}
                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
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
