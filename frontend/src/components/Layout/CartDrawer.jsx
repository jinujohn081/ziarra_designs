import React from 'react';
import { IoMdClose } from 'react-icons/io';
import CartContents from '../Cart/CartContents';

const CartDrawer = ({ drawerOpen, toggleCart }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 overflow-y-scroll flex-col z-50 ${
        drawerOpen ? 'translate-x-0' : 'translate-x-full'
      } `}
    >
      <div className='flex just p-4'>
        <button onClick={toggleCart}>
          <IoMdClose className='h-6 w-6 text-gray-600' />
        </button>
      </div>
      {/*cart contents with scrollable area */}
      <div className='flex grow p-4 overflow-y'>
        <h2 className='text-xl font-semibold mb-4'>Cart</h2>
        {/*components for cart contents */}
      </div>
      {/*checkout button fixed at bottom */}
      <CartContents />
      <div className='p-4 bg-white sticky bottom-0'>
        <button className='w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition '>
          Checkout
        </button>
        <p className='text-sm tracking-tighter text-gray-500 mt-2 text-center'>
          Shipping, taxes and discount codes calculated at checkout
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
