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
          href="#Profolio"
          onClick={() => handlePageChange('Profolio')}
        >
          Profolio
        </a>
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default NavTabs;