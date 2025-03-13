import React from 'react';
import { Link } from 'react-router';
import { HiOutlineShoppingBag, HiOutlineUser } from 'react-icons/hi';
import { HiBars3 } from 'react-icons/hi2';
import SearchBar from './SearchBar';
import CartDrawer from '../Layout/CartDrawer';
import { useState } from 'react';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleCart = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <nav className='container mx-auto flex item-center justify-between py-4 px-6'>
        <div>
          <Link to='/' className='text-2xl font-medium '>
            Ziarra
          </Link>
        </div>
        <div className='hidden md:flex space-x-6 '>
          <Link
            to='#'
            className='text-gray-700 hover:text-black text-sm font-medium uppercase'
          >
            Men
          </Link>
          <Link
            to='#'
            className='text-gray-700 hover:text-black text-sm font-medium uppercase'
          >
            Women
          </Link>
          <Link
            to='#'
            className='text-gray-700 hover:text-black text-sm font-medium uppercase'
          >
            Top Wear
          </Link>
          <Link
            to='#'
            className='text-gray-700 hover:text-black text-sm font-medium uppercase'
          >
            Bottom Wear
          </Link>
        </div>
        <div className='flex items-center space-x-4'>
          <Link to='/profile' className='hover:text-black'>
            <HiOutlineUser className='h-6 w-6 text-gray-700' />
          </Link>
          <button onClick={toggleCart} className='relative hover:text-black'>
            <HiOutlineShoppingBag className='h-6 w-6  text-gray-700' />
            <span className='absolute -top-1 bg-basic-red text-white text-xs rounded-full px-2 py-0.5'>
              2
            </span>
          </button>
          <div className='overflow-hidden'>
            <SearchBar />
          </div>

          <button className='md:hidden'>
            <HiBars3 className='h-6 w-6 text-gray-700' />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCart={toggleCart} />
    </>
  );
};

export default Navbar;
