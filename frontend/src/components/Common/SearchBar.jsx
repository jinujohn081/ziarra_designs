import React, { useState } from 'react';
import { HiMagnifyingGlass, HiMiniXMark } from 'react-icons/hi2';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('search Term', searchTerm);
    setIsOpen(false);
  };
  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isOpen ? 'absolute top-0 left-0  bg-white h-24 z-50' : 'w-auto'
      } `}
    >
      {isOpen ? (
        <form
          onSubmit={handleSearch}
          className='relative flex items-center justify-center w-full'
        >
          <div className='relative w-1/2'>
            <input
              className='bg-gray-100 px-4 py-2 pt-2 pr-12 rounded-lg focus:outline-none w-full'
              type='text'
              placeholder='search'
              vlaue={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type='submit'
              className='absolute right-2 top-1/2 transform -translate-y-1/2'
            >
              <HiMagnifyingGlass className='h-6 w-6' />
            </button>
          </div>
          <button onClick={handleSearchToggle} type='submit'>
            <HiMiniXMark className='h-6 w-6' />
          </button>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <HiMagnifyingGlass className='h-6 w-6' />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
