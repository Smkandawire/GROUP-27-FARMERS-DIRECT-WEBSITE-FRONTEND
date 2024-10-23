import React from 'react';
import { useParams,useNavigate,Link} from 'react-router-dom';
import { useState } from 'react';
import productImage from './productImage1.jpeg';
import img2 from './tructor.jpeg';
import img3  from './water pump.jpeg'

const CartPage = () => {
  const navigate = useNavigate();

  // products dummy data 
  const products = [
    {
      id: 1,
      name: 'vegz',
      price: 'MWK20.00',
      img: productImage, // image path
    },
    {
      id: 2,
      name: 'tractor',
      price: 'MWK30.00',
      img: img2, //  image path
    },

    {
      id: 3,
      name: 'water pump',
      price: 'MWK30.00',
      img: img3, //  image path
    },
  ];

  // Function to handle product click and navigate to product details
  const handleProductClick = (id) => {
    navigate(`/product/${id}`); // Navigate to Product Details page with product ID
  };

  
    const { id } = useParams(); // Get product id from URL params

  const [cart, setCart] = useState(() => {
    // Initialize the cart from localStorage if available
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Find the product that matches the id from the URL
  const product = products.find((p) => p.id === parseInt(id));

  const handleAddToCart = (product) => {
    // Add to cart functionality here
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

  return (
    <div className="container mx-auto p-4">

             {/* Checkout Button */}
      <li className="flex justify-end mt-4">
        <Link to="/Checkout" className="text-blue-600 font-bold py-2 px-4 rounded hover:underline">
          Checkout out your orders
        </Link>
      </li>

      <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${productImage})` }}>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
          {products.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded-md shadow-md hover:shadow-lg transition cursor-pointer"
              onClick={() => handleProductClick(product.id)} // Navigate to details on click
            >
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-32 object-cover mb-2"
              />
              <p className="text-gray-500" style={{ color: 'rgb(255,215, 0,5)', fontSize:'150%' }}>{product.price}</p>

              <div className="flex justify-between items-center mt-2">
                {/* Product Details link */}
                <button
                  className="text-blue-600 font-bold hover:underline"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent parent div click
                    handleProductClick(product.id);
                  }}
                >
                  Details
                </button>

                {/* Add to Cart button */}
                <button
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            onClick={() => handleAddToCart(product)}>
            Add to Cart
          </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
