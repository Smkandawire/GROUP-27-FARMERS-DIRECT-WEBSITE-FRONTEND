import { useState } from 'react';
import vegetables from "./vegtables.jpg";
import tractor from "./truck.jpg";
import watapump from "./waterpump.jpg";
import chickens from "./chickens.jpg";
import maizes from "./maizemill.jpg";
import milk from "./milky.jpg";
import pest from "./pestcide.jpg";
import cow from "./cow.jpg";

const productsData = [
    { id: 1, name: 'vegetables', price: 2000, image: vegetables, description: 'fresh and clean vetables. MWK 2000 per killogram' },
    { id: 2, name: 'tractor', price: 500000.00, image: tractor, description: 'durable and versatile tructor. MWK 200000 each' },
    { id: 3, name: 'Water Pump', price: 350000.99, image: watapump, description: 'Duracbles water pump.' },
    { id: 4, name: 'Chicken', price: 20000.99, image: chickens, description: 'Duracbles water pump.' },
    { id: 5, name: 'Maize', price: 200000.99, image: maizes, description: 'Maize of Best quality.' },
    { id: 6, name: 'Daily Products', price: 5000.00, image: milk, description: 'Milk of best Taste and Better Prices. MWK 5000 each' },
    { id: 7, name: 'Pestcides & Herbicides', price: 4500.00, image: pest, description: 'Chemicals That Boost Fertility and Cutivation. MWK 4500 each' },
    { id: 8, name: 'Tractors', price: 2000000.00, image: tractor, description: 'durable and versatile tractor with 4yrs Warrant. MWK 2000000 each' },
    { id: 9, name: 'Cattle', price: 350000.00, image: cow, description: 'Healthy Cattle Multiple Breeds, Sex & Age . MWK 200000 each' },
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

    return {
        cart: { products: productsData, items: cartItems },
        addToCart,
        updateQuantity,
        removeFromCart,
    };
};

export default useCartHandler;
