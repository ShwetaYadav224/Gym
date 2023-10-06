import { useState } from 'react';
import React from 'react';
import { VscThreeBars } from 'react-icons/vsc';
import { MdOutlineClose } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';

import Logo from '../images/GymX-logos_white.png';
import './navbar.css';
import { links } from '../data';



const Navbar = () => {
  const [isShowingMenu,setIsShowingMenu]=useState(false);
  return (
    <div>
      <nav>
        <div className="container nav_container ">
          <Link to="/" className='logo'>
            <img src={Logo} alt="Nav Logo" width={'100px'} onClick={()=>{setIsShowingMenu(false)}}/>
          </Link>
           
          <ul className={`nav_links ${isShowingMenu ? 'show-menu' :'hide-menu' } `}>
            {
              links.map(({ name, path }, index) => (
                <li>
                  <NavLink to={path} key={index} className={({isActive}) => isActive ? 'active-nav':''} onClick={ () => setIsShowingMenu(prev => !prev) }>{name}</NavLink>
                </li>
              ))
            }
          </ul>
          <button className='nav_toggle-button' onClick={ () => setIsShowingMenu(prev => !prev) }>
            {isShowingMenu ? <MdOutlineClose/> : <VscThreeBars />}
            </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
