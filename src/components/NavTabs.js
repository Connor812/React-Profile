import React from 'react';
import '../styles/navbar.css'

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className='nav-bar'>
      <div className='title'>
        Connor
      </div>
      <div className='links'>
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
        >
          Home
        </a>
        <a
          href="#Portfolio"
          onClick={() => handlePageChange('Portfolio')}
        >
          Portfolio
        </a>
        <a
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
        >
          Resume
        </a>
        <a
          href="#Contact"
          onClick={() => handlePageChange('Contact')}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default NavTabs;
