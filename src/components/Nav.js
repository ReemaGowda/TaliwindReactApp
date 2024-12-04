import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assest/logo.jpg'

const Nav = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Find Suppliers' },
    { id: 2, text: 'Find Service Tags' },
    
  ];

  return (
    <div className='bg-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-grey'>
      {/* Logo */}
      <img src={logo} alt='logo' className='w-48 h-28'/>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-green-700 rounded-xl m-2 cursor-pointer duration-300 hover:text-grey'
          >
            {item.text}
          </li>
        ))}
        
        <li class='border-2 border-green-600 p-4 rounded-xl m-2 px-8 border-1 text-green-700'>
          Login / Sign Up
        </li>
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <img src={logo} className='w-52 h-28'/>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='bg-white p-4 border-b rounded-xl hover:bg-green-700 duration-300 hover:text-grey cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
          
        ))}
        <button className='bg-white p-4 border-b rounded-xl hover:bg-green-700 duration-300 hover:text-grey cursor-pointer border-gray-600  rounded-2xl border-2 text-green-700'>
          Login /Sign Up
        </button>
      </ul>
    </div>
  );
};

export default Nav;