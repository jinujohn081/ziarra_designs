import React from 'react';
import TopBar from '../Layout/TopBar';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header>
      {/* topbar */}
      <TopBar />
      {/* navbar */}
      <Navbar />
      {/* cart drawer */}
    </header>
  );
};

export default Header;
