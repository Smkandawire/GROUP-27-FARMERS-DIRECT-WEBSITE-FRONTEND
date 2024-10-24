import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartPlus, faBars, faTimes, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State for toggling menu
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate back to the last page in history
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the hamburger menu
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown); // Toggle the dropdown menu
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
    <div>
      <div className="relative bg-green-500 text-xl font-light m-2 p-4 text-white rounded-full border-2">
        <div className="flex justify-between items-center relative">
          <div>LOGO here</div>

          {/* Icons on the right for small screens */}
          <div className="flex items-center space-x-4 md:hidden z-10">
            {/* User Icon with dropdown */}
            <div className="relative">
              <FontAwesomeIcon 
                icon={faUser} 
                size="1x" 
                onClick={toggleDropdown}
                className="cursor-pointer hover:text-orange-500"
              />
              {/* Dropdown Menu */}
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg text-black">
                  <p className="p-1 flex items-center cursor-pointer hover:bg-gray-200" onClick={handleLoginClick}>
                    <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                    Login
                  </p>
                  <p className="p-1 flex items-center cursor-pointer hover:bg-gray-200" onClick={handleSignUpClick}>
                    <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                    Sign Up
                  </p>
                </div>
              )}
            </div>
            <Link to="AddToCart" className="cursor-pointer hover:text-orange-500"><FontAwesomeIcon icon={faCartPlus} size="1x" /></Link>

            {/* Hamburger icon */}
            <button className="text-3xl" onClick={toggleMenu}>
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>
          </div>

          {/* Full navigation on larger screens */}
          <nav className="md:flex md:flex-row space-x-10 text-2xl items-center hidden md:block">
            <ul className="flex flex-row space-x-20 list-none text-black">
              <li className="mb-2 cursor-pointer hover:text-orange-500"><Link to="/">Home</Link></li>
              <li className="mb-2 cursor-pointer hover:text-orange-500"><Link to="AboutUs">About</Link></li>
              <li className="mb-2 cursor-pointer hover:text-orange-500"><Link to="Services">Service</Link></li>
              <li className="mb-2 cursor-pointer hover:text-orange-500"><Link to="ContactUs">Contact</Link></li>

              {/* User Icon with dropdown for larger screens */}
              <li className="relative mb-2 cursor-pointer hover:text-orange-500">
                <FontAwesomeIcon 
                  icon={faUser} 
                  size="1x" 
                  onClick={toggleDropdown}
                />
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg text-black">
                    <p className="p-1 flex items-center cursor-pointer hover:bg-gray-200" onClick={handleLoginClick}>
                      <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                      Login
                    </p>
                    <p className="p-1 flex items-center cursor-pointer hover:bg-gray-200" onClick={handleSignUpClick}>
                      <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                      Sign Up
                    </p>
                  </div>
                )}
              </li>

              <li className="mb-2 cursor-pointer hover:text-orange-500"> 
                <Link to="AddToCart" className="p-2"><FontAwesomeIcon icon={faCartPlus} size="1x" /></Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile navigation when the hamburger is open */}
        {isOpen && (
          <nav className="absolute top-16 right-0 w-1/2 bg-green-500 z-10 rounded-lg shadow-lg md:hidden">
            <ul className="flex flex-col space-y-2 p-4 text-black">
              <li className="cursor-pointer hover:text-orange-500"><Link to="/">Home</Link></li>
              <li className="cursor-pointer hover:text-orange-500"><Link to="AboutUs">About</Link></li>
              <li className="cursor-pointer hover:text-orange-500"><Link to="Services">Service</Link></li>
              <li className="cursor-pointer hover:text-orange-500"><Link to="ContactUs">Contact</Link></li>
            </ul>
          </nav>
        )}
      </div>

      {/* Back button */}
      <div>
        <button className="text-black p-3" onClick={handleBack}>
          ← Back
        </button>
      </div>
    </div>
  );
};

export default Header;
