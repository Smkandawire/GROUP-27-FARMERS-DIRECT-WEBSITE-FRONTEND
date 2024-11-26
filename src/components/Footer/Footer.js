import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-black text-white p-8">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Company Info */}
      <div>
        <h2 className="text-orange-500 font-bold text-xl">FARMERS DIRECT</h2>
        <p className="mt-4">
          Farmers Direct is a reputable Malawian registered platform that
          specializes in agri-marketing of all farming related inputs and
          outputs.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-semibold">Quick Links</h3>
        <ul className="mt-4 space-y-2">
          <li className="hover:text-orange-500">
           <Link to="/">Home</Link> 
          </li>
          <li className="hover:text-orange-500"> <Link to="AboutUs">About</Link> 
          </li>
          <li className="hover:text-orange-500">
           <Link to="Services">Services</Link>
            
          </li>
          <li className="hover:text-orange-500">
             <Link to="ContactUs">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="text-lg font-semibold">Contact Us</h3>
        <ul className="mt-4 space-y-2">
          <li className="flex items-center">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            +256993224805
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            +256991468187
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            <a href="mailto:info@farmersdirect.com" className="hover:text-orange-500">
              info@farmersdirect.com
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Footer */}
    <div className="text-center mt-8">
      <p className="text-sm">&copy;2024 Farmers Direct</p>
    </div>
  </div>
   
    
  );
};

export default Footer;