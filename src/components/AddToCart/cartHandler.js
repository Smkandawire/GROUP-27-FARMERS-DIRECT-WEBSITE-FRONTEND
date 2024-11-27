import { useState } from 'react';
import vegetables from "./vegtables.jpg";
import tractor from "./truck.jpg";
import watapump from "./waterpump.jpg";
import chickens from "./chickens.jpg";
import maizes from "./maizemill.jpg";
import milk from "./milky.jpg";
import pest from "./pestcide.jpg";
import cow from "./cow.jpg";
import ureas from "./urea.jpg";
import flowers from "./flower.jpg";
import tobbacco from "./tobba.jpg";
import rices from "./rice.jpg";


const productsData = [

    { id: 1, name: 'vegetables', price: 2000, image: vegetables, description: 'fresh and clean vetables. MWK 2000 per killogram' },
    { id: 2, name: 'tractor', price: 500000.00, image: tractor, description: 'durable and versatile tructor. MWK 200000 each' },
   // { id: 3, name: 'Water pump', price: 200000.99, image: wpump, description: 'Duracbles water pump.' },
  //  { id: 4, name: 'Water pump', price: 200000.99, image: wpump, description: 'Duracbles water pump.' },
  //  { id: 5, name: 'Water pump', price: 200000.99, image: wpump, description: 'Duracbles water pump.' },
    { id: 6, name: 'tractor', price: 5000000.00, image: tractor, description: 'durable and versatile tructor. MWK 200000 each' },
    { id: 7, name: 'tractor', price: 5000000.00, image: tractor, description: 'durable and versatile tructor. MWK 200000 each' },
    { id: 8, name: 'tractor', price: 5000000.00, image: tractor, description: 'durable and versatile tructor. MWK 200000 each' },
    { id: 9, name: 'tractor', price: 5000000.00, image: tractor, description: 'durable and versatile tructor. MWK 200000 each' },
    { id: 10, name: 'vegetables', price: 2000, image: vegetables, description: 'fresh and clean vetables. MWK 2000 per killogram' },
    { id: 11, name: 'vegetables', price: 2000, image: vegetables, description: 'fresh and clean vetables. MWK 2000 per killogram' },
    { id: 12, name: 'vegetables', price: 2000, image: vegetables, description: 'fresh and clean vetables. MWK 2000 per killogram' },
    { id: 13, name: 'vegetables', price: 2000, image: vegetables, description: 'fresh and clean vetables. MWK 2000 per killogram' },

    { id: 1, name: 'vegetables', price: 2000, image: vegetables, description: 'Pure and Fresh: Farm-to-Table Goodness in Every Bite(Mangoes, Tomatoes, Cabbage, Spinach). MWK 2000 per killogram' },
    { id: 2, name: 'Rice(Mpunga)', price: 65000.00, image: rices, description: 'Tasteful Rice , Kilombero. MWK 2000 per Kg' },
    { id: 3, name: 'Water Pump', price: 350000.99, image: watapump, description: 'Duracbles water pump.' },
    { id: 4, name: 'Chicken(Nkhuku)', price: 20000.99, image: chickens, description: 'Buy Broiler or Layer of Various age and breed.' },
    { id: 5, name: 'Maize', price: 200000.99, image: maizes, description: 'Maize of Best quality.' },
    { id: 6, name: 'Daily Products', price: 5000.00, image: milk, description: 'Milk of best Taste and Better Prices. MWK 5000 per litre' },
    { id: 7, name: 'Pestcides & Herbicides', price: 4500.00, image: pest, description: 'Chemicals That Boost Fertility and Remove unwanted Pests. MWK 4500 each' },
    { id: 8, name: 'Tractors', price: 2000000.00, image: tractor, description: 'durable and versatile tractor with 4yrs Warrant. MWK 2000000 each' },
    { id: 9, name: 'Cattle', price: 350000.00, image: cow, description: 'Farm-Raised, Flavor-Packed The Best Meat From Best Breeds . MWK 350000 each' },
    { id: 10, name: 'Fertilizer', price: 85000.00, image: ureas, description: 'Top Quality Fertilizer Various Types: Urea, Ammonium Sulphate & Njovu.' },
    { id: 11, name: 'Tobbacco', price: 200000.99, image: tobbacco, description: 'High quality tobbacco leaves with Natural moisture.' },
    { id: 12, name: 'Plants and Flowers', price: 2400.50, image: flowers, description: 'From Farm to Vase: The Freshest Flowers Around(Roses,Orchids).MWK 2400 Only' },
    
    


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
