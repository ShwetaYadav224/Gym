import React from 'react';
import { VscThreeBars } from 'react-icons/vsc';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../images/GymX-logos_black.png';
import './navbar.css';
import { links } from '../data';

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="container nav_container">
          <Link to="/" className='logo'>
            <img src={Logo} alt="Nav Logo" width={"100px"} />
          </Link>
          <ul className='nav_links'>
            {
              links.map(({ name, path }, index) => (
                <li key={index}>
                  <NavLink to={path}>{name}</NavLink>
                </li>
              ))
            }
          </ul>
          <button className='nav_toggle-button'><VscThreeBars /></button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
