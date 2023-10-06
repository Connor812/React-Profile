import React from 'react'
import * as AiIcons from 'react-icons/ai';
import { SideBarData } from './SideBarData';
import { Link } from 'react-router-dom';
import FadeInSection from './helpers/FadeInProps';

function SideBar({ sidebar, showSideBar }) {

  return (
    <FadeInSection className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSideBar}>
          <li className='navbar-toggle'>
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose className='exit-sidebar' />
            </Link>
          </li>
          {SideBarData.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <hr className='sidebar-hr'/>
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              </React.Fragment>
            )
          })}

        </ul>
      </FadeInSection>
  )
}

export default SideBar;