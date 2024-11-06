import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLoginClick = () => {
    navigate('/LoginPage');
    setShowDropdown(false); 
  };

  const handleSignUpClick = () => {
    navigate('/SignUp');
    setShowDropdown(false);
  };

  return (
    <div className=' bg-green-100 p-8 space-y-6'> 
      
      <div className='bg-green-500 text-xl font-light m-2 p-4 text-white rounded-full border-2'>
        LOGO here
        <nav>
          <ul className='flex flex-row space-x-20 list-none text-2xl text-black justify-center items-stretch'>
            <li className="mb-2 cursor-pointer hover:text-orange-500">
              <Link to="/">Home</Link>
            </li>
            <li className="mb-2 cursor-pointer hover:text-orange-500">
              <Link to="/AboutUs">About</Link>
            </li>
            <li className="mb-2 cursor-pointer hover:text-orange-500">
              <Link to="/Services">Service</Link>
            </li>
            <li className="mb-2 cursor-pointer hover:text-orange-500">
              <Link to="/ContactUs">Contact</Link>
            </li>
            <li className="mb-2 cursor-pointer relative">
              {/* User Icon */}
              <FontAwesomeIcon 
                icon={faUser} 
                size="1x" 
                onClick={toggleDropdown}
                className="hover:text-orange-500"
              />
              {/* Dropdown Menu */}
              {showDropdown && (
                <div 
                  className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg text-black"
                  style={{ zIndex: 1000 }}
                >
                  <p 
                    className="p-1 flex items-center cursor-pointer hover:bg-gray-200" 
                    onClick={handleLoginClick}
                  >
                    <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                    Login
                  </p>
                  <p 
                    className="p-1 flex items-center cursor-pointer hover:bg-gray-200" 
                    onClick={handleSignUpClick}
                  >
                    <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                    Sign Up
                  </p>
                </div>
              )}
            </li>
            <li className="mb-2 cursor-pointer hover:text-orange-500">
              <Link to="Checkout">
                <FontAwesomeIcon icon={faCartPlus} size="1x" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
