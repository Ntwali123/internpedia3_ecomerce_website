import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

function Header() {
  return (
    <header className="bg-blue-500 dark:bg-gray-900 p-4 text-white shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">E-Shop</Link>
        <div className="flex items-center">
          <Link to="/shop" className="mr-4">Shop</Link>
          <Link to="/cart" className="mr-4">Cart</Link>
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
}

export default Header;
