import React from 'react';
import {Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';




const Header = () => {
  return (
    <div>
     <div className='bg-green-500 text-xl font-light m-2 p-4 text-white rounded-full border-2'>
        LOGO here
        <nav>
        <ul className='flex flex-row space-x-20 list-none text-2xl text-black justify-center items-stretch'>
            <li class = "mb-2 cursor-pointer hover:text-orange-500"><Link to ="/">Home</Link></li>
            <li class = "mb-2 cursor-pointer hover:text-orange-500"><Link to ="AboutUs">About</Link></li>
            <li class = "mb-2 cursor-pointer hover:text-orange-500"><Link to = "Services">Service</Link></li>
            <li class = "mb-2 cursor-pointer hover:text-orange-500"><Link to = "ContactUs">Contact</Link></li>
            <li class = "mb-2 cursor-pointer hover:text-orange-500"><Link to = "LoginPage"> <FontAwesomeIcon icon={faUser} size="1x" /></Link></li>
            <li class = "mb-2 cursor-pointer hover:text-orange-500"><Link to = "AddToCart"> <FontAwesomeIcon icon={faCartPlus} size="1x" /></Link></li>
        </ul> 
        </nav>
     </div>   
    </div>
  );
};

export default Header;
