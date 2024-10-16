import { FaSearch, FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-between px-4 sm:px-10 py-4 border-b border-gray-200">
      {/* Logo */}
      <div className="flex items-center">
        <div className="bg-green-900 rounded-full p-2 w-10 h-10 flex items-center justify-center">
          <span className="text-yellow-500 text-2xl font-bold">F</span>
        </div>
        <span className="ml-2 text-xl font-bold tracking-widest">
          FurniWorld<span className="text-yellow-500">.</span>
        </span>
      </div>

      {/* Hamburger Menu (for mobile) */}
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
          <FaSearch className="text-2xl" />
        </button>
      </div>

      {/* Navigation Links (hidden on mobile, visible on larger screens) */}
      <div className={`flex-col sm:flex-row sm:flex space-x-8 items-center ${isOpen ? 'block' : 'hidden'} sm:block`}>
        <NavLink to={'/'} className="text-md text-gray-700 hover:text-black font-semibold">
          Home
        </NavLink>
        <NavLink to={'/shop'} className="text-md text-gray-700 hover:text-black font-semibold">
          Shop
        </NavLink>
        <NavLink to={'/categories'} className="text-md text-gray-700 hover:text-black font-semibold">
          Categories
        </NavLink>
        <NavLink to={'/about'} className="text-md text-gray-700 hover:text-black font-semibold">
          About Us
        </NavLink>
        <NavLink to={'/contact'} className="text-md text-gray-700 hover:text-black font-semibold">
          Contact Us
        </NavLink>
        <NavLink to={'/blog'} className="text-md text-gray-700 hover:text-black font-semibold">
          Blog
        </NavLink>
      </div>

      {/* Icons (stacked for mobile, spaced for larger screens) */}
      <div className="flex space-x-6 sm:space-x-4">
        <a href="#" className="text-lg text-gray-700 hover:text-black">
          <FaSearch />
        </a>
        <a href="#" className="text-lg text-gray-700 hover:text-black">
          <FaHeart />
        </a>
        <a href="#" className="text-lg text-gray-700 hover:text-black">
          <FaShoppingCart />
        </a>
        <a href="#" className="text-lg text-gray-700 hover:text-black">
          <FaUser />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
