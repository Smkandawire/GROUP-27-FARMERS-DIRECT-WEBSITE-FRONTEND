import { useState } from 'react';
import vegetables from "./productImage1.jpeg";
import tractor from "./tructor.jpeg";
import wpump from "./water pump.jpeg";

const productsData = [
    { id: 1, name: 'vegetables', price: 2000, image: vegetables, description: 'fresh and clean vetables. MWK 2000 per killogram' },
    { id: 2, name: 'tractor', price: 500000.00, image: tractor, description: 'durable and versatile tructor. MWK 200000 each' },
    { id: 3, name: 'Water pump', price: 200000.99, image: wpump, description: 'Duracbles water pump.' },
    { id: 4, name: 'Water pump', price: 200000.99, image: wpump, description: 'Duracbles water pump.' },
    { id: 5, name: 'Water pump', price: 200000.99, image: wpump, description: 'Duracbles water pump.' },
    { id: 6, name: 'tractor', price: 5000000.00, image: tractor, description: 'durable and versatile tructor. MWK 200000 each' },
    { id: 7, name: 'tractor', price: 5000000.00, image: tractor, description: 'durable and versatile tructor. MWK 200000 each' },
    { id: 8, name: 'tractor', price: 5000000.00, image: tractor, description: 'durable and versatile tructor. MWK 200000 each' },
    { id: 9, name: 'tractor', price: 5000000.00, image: tractor, description: 'durable and versatile tructor. MWK 200000 each' },
    { id: 10, name: 'vegetables', price: 2000, image: vegetables, description: 'fresh and clean vetables. MWK 2000 per killogram' },
    { id: 11, name: 'vegetables', price: 2000, image: vegetables, description: 'fresh and clean vetables. MWK 2000 per killogram' },
    { id: 12, name: 'vegetables', price: 2000, image: vegetables, description: 'fresh and clean vetables. MWK 2000 per killogram' },
    { id: 13, name: 'vegetables', price: 2000, image: vegetables, description: 'fresh and clean vetables. MWK 2000 per killogram' },

];

const useCartHandler = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const updateQuantity = (id, quantity) => {
        setCartItems((prevCart) =>
            prevCart.map((item) => (item.id === id ? { ...item, quantity: parseInt(quantity) } : item))
        );
    };

    const removeFromCart = (id) => {
        setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
    };
     
    const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

    return {
        cart: { products: productsData, items: cartItems },
        addToCart,
        updateQuantity,
        removeFromCart,
        cartItemCount,
    };
};

export default useCartHandler;
