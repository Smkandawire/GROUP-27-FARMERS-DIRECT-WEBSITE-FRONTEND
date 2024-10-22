import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./components/Homepage/Home";
import AboutUs from "./components/AboutUsPage/AboutUs";
import Services from "./components/Services/Services";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import LoginPage from "./components/LoginPage/LoginPage";
import AddToCart from "./components/AddToCart/AddToCart";
import SignUp from "./components/SignUp/SignUp";
import Payment from "./components/Payment/Payment";

function App() {
  return (
   <div>
    <Router>
         <Header/>
    <div>
      <Routes>
         <Route path ="/"element={<Home/>}/>
         <Route path ="AboutUs"element={<AboutUs/>}/>
         <Route path ="Services"element={<Services/>}/>
         <Route path ="ContactUs"element={<ContactUs/>}/>
         <Route path ="LoginPage"element={<LoginPage/>}/>
         <Route path ="AddToCart"element={<AddToCart/>}/>
         <Route path ="SignUp"element={<SignUp/>}/>
         <Route path ="Payment"element={<Payment/>}/>
      </Routes>
    </div>
      <Footer/>
    </Router>  
   </div>
  );
}

export default App;
