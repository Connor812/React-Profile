import React from 'react';
import * as FaIcons from 'react-icons/fi';
import '../styles/navbar.css';
import '../styles/sidebar.css';
import FadeInSection from './helpers/FadeInProps';

function NavTabs({ showSideBar }) {

  


  return (
    <FadeInSection className='navbar'>
      <div className='navbar-title'>
        Connor Savoy
        <hr />
        <div className='bars'>
          <FaIcons.FiMenu onClick={showSideBar} />
        </div>
      </div>
    </FadeInSection>
  );
}

export default NavTabs;
