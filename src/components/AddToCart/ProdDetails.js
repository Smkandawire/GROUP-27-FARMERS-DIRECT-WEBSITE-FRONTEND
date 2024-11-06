import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useCartHandler from './cartHandler';

const ProductDetails = () => {
  const { productId } = useParams();
  const { cart} = useCartHandler();
  const [product, setProduct] = useState(null);

  // Find the product that matches the id from the URL
  useEffect(() => {
    const foundProduct = cart.products.find((p) => p.id === parseInt(productId));
    setProduct(foundProduct);
  }, [productId, cart.products]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      
      {/* Checkout list Button */}
      <div className="flex justify-end font-bold mt-4">
        <Link to="/checkout" className="text-blue-600 py-2 px-4 hover:underline">
          Checkout your cart list
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mt-6">
        {/* Product Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img src={product.image} alt={product.name}  className="w-full h-auto max-w-md border-2 border-gray-300 rounded-lg object-cover" />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2">
          <h1 className='text-4xl font-bold mb-2'>Details</h1>
          <div className="w-full h-0.5 bg-black mb-4"></div>

          <div className="text-2xl font-bold mb-2">MWK{product.name}</div>
          <p className="text-2xl font-semibold mb-4 text-yellow-500">
            {product.price}
          </p>
          <p className="text-gray-700 mb-4">{product.description}</p>

          {/* payment button */}
            <div className="flex justify-end mt-4 bottom-4">
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-800">
                  <Link to="Payment"> Make payment</Link>    
                </button>
              </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;