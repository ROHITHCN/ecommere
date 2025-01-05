import React from 'react';
import logo from '../assets/companylogo.png';
import supportLogo from '../assets/support.png';
import accountLogo from '../assets/account.png';
import myfavsLogo from '../assets/myfavs.png';
import mycartLogo from '../assets/mycart.png';

function Header() {
  return (
    <div>
      <header className="flex items-center justify-between p-4 bg-white shadow-md top-0 left-0 right-0 z-50 border-b-4 border-blue-900">
        <img src={logo} alt="Logo" className="h-12 ml-12" />

        <nav className="flex space-x-6 mr-12">
          <a href="#Support" className="flex flex-col items-center text-blue-600 hover:text-gray-600">
            <img src={supportLogo} alt="Support" className="h-8" />
            <p>Support</p>
          </a>
          <a href="#Account" className="flex flex-col items-center text-blue-600 hover:text-gray-600">
            <img src={accountLogo} alt="Account" className="h-8" />
            <p>Account</p>
          </a>
          <a href="#Favorites" className="flex flex-col items-center text-blue-600 hover:text-gray-600">
            <img src={myfavsLogo} alt="My Favorites" className="h-8" />
            <p>My Favorites</p>
          </a>
          <a href="#Cart" className="flex flex-col items-center text-blue-600 hover:text-gray-600">
            <img src={mycartLogo} alt="Your Cart" className="h-8" />
            <p>Your Cart</p>
          </a>
        </nav>
      </header>

   
    </div>
  );
}

export default Header;
