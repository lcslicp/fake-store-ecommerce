import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icons/store-logo.svg';
import shoppingCartIcon from '../assets/icons/shoppingcart-icon.svg';

const Header = () => {
  return (
    <div className='w-screen'>
      <nav className="flex flex-row justify-between pt-8 px-24">
        <Link to="/">
          <img src={logo} className="w-9 h-auto" />
        </Link>
        <Link to="/shoppingcart">
          <img src={shoppingCartIcon} className="w-9 h-auto" />
        </Link>
      </nav>
    </div>
  );
};

export default Header;
