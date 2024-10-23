import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import img1 from './productImage1.jpeg';
import img2 from './tructor.jpeg';
import img3 from './water pump.jpeg';

// products data
const products = [
  {
    id: 1,
    name: 'vegiz',
    description: 'very good looking fruits.',
    price: 'MWK20.00',
    img: img1, 
  },
  {
    id: 2,
    name: 'tractor',
    description: 'very durable, high quality tractor.',
    price: 'MWK30.00',
    img: img2,
  },

  {
    id: 2,
    name: 'water pump',
    description:'very durable',
    price: 'MWK30000.00',
    img: img3, //  image path
  },
];

const ProductDetailsPage = () => {
  const { id } = useParams(); // Get product id from URL params
  //const navigate = useNavigate();

  // Example API call using fetch
  const [cart, setCart] = useState(() => {
    // Initialize the cart from localStorage if available
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Find the product that matches the id from the URL
  const product = products.find((p) => p.id === parseInt(id));

  const handleAddToCart = (product) => {
    // Add to cart functionality 
    console.log('Product added to cart', product);
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      // Update quantity if the product is already in the cart
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );

    } else {
      // Add new product to the cart
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    // Save cart to localStorage for persistence
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
             {/* Checkout Button */}
      <div className="flex justify-end font-bold mt-4">
        <Link to="/Checkout" className="text-blue-600 py-2 px-4 rounded hover:bg-green-600">
        Checkout your orders
        </Link>
      </div>

      {/* <button className="text-blue-500 hover:underline mb-4" onClick={() => navigate(-1)}>
        ← Back to Cart
      </button> */}

      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <img src={product.img} alt={product.name} className="w-full h-auto border-2 md:border-2 lg:border-2 border-black-500 rounded-lg object-cover" />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2">
          <div className="text-4xl font-bold mb-4">Details</div>

          {/* Responsive Line after "Details" */}
          <div className="w-full h-1 bg-gray-300 mb-4"></div>

          <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl font-semibold mb-4" style={{ color: 'rgb(255, 215, 0)' }}>{product.price}</p>
          <p className="text-gray-600 mb-4">
            <strong className="text-2xl font-bold">Description:</strong>
            {product.description}
          </p>

          {/* Add to Cart button */}
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            onClick={() => handleAddToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
