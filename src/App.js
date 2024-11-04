import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./components/Homepage/Home";
import AboutUs from "./components/AboutUsPage/AboutUs";
import Services from "./components/Services/Services";
import ContactUs from "./components/ContactUs/ContactUs";
import SignUp from "./components/SignUp/SignUp";
import Footer from "./components/Footer/Footer";
import LoginPage from "./components/LoginPage/LoginPage";
import Checkout from "./components/AddToCart/Checkout";
import ProductDetails from './components/AddToCart/ProdDetails';
import useCartHandler from './components/AddToCart/cartHandler';

function App() {
  const { cart,addToCart, updateQuantity, removeFromCart } = useCartHandler();

  return (

   <div>
    <Router>
         <Header/> 
    <div>
      <Routes>
         <Route path ="/"element={<Home/>}/>
         <Route path ="AboutUs"element={<AboutUs/>}/>
         <Route path="/Services" element={<Services products={cart.products} addToCart={addToCart} cartItemCount={cart.items.length} />} />
         <Route path ="ContactUs"element={<ContactUs/>}/>
         <Route path ="LoginPage"element={<LoginPage/>}/>
         <Route path="/Checkout" element={<Checkout cart={cart.items} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
         <Route path ="SignUp"element={<SignUp/>}/>
         <Route path="/product/:productId" element={<ProductDetails products={cart.products} />} />
      </Routes>
    </div>
      <Footer/>
    </Router>  
   </div>
  );
}

export default App;
