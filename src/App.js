import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
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
import Payment from "./components/Payment/Payment";
import DescriptionPage from "./components/Homepage/DescriptionPage";
import Advertise from "./components/Userdashboard/Advertise";
import UserProfile from "./components/Userdashboard/UserProfile";
import OrderManagement from "./components/Userdashboard/ordermanagement";

function App() {
  const { cart, addToCart, updateQuantity, removeFromCart } = useCartHandler();
  const location = useLocation();

  // Define the paths where the header and footer should not be shown
  const noHeaderPaths = ['/LoginPage', '/SignUp', '/payment','/Advertise'];
  const noFooterPaths = ['/Checkout'];

  return (
    <div>
      {/* Conditionally render the header based on the current path */}
      {!noHeaderPaths.includes(location.pathname) && <Header />}
      
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Services" element={<Services products={cart.products} addToCart={addToCart} cartItemCount={cart.items.length} />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/Checkout" element={<Checkout cart={cart.items} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/product/:productId" element={<ProductDetails products={cart.products} />} />
          <Route path="/DescriptionPage" element={<DescriptionPage />} />
          <Route path="/Advertise" element={<Advertise />} />
          <Route path="/OrderManagement" element={<OrderManagement />} />
          <Route path="/UserProfile" element={<UserProfile />} />
        </Routes>
      </div>
      
      {/* Conditionally render the footer based on the current path */}
      {!noFooterPaths.includes(location.pathname) && <Footer />}
    </div>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
