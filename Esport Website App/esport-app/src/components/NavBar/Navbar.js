import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import image from '../../images/Red_Nationtransparent.png';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='--navbar'>
        <div className='--navbar-container'>
          <Link to='/' className='--navbar-logo' onClick={closeMobileMenu}>
          
            <img className='--logoimg'src={image} alt='Logo' />
          </Link>
          <div className='--menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? '--nav-menu active' : '--nav-menu'}>
            <li className='--nav-item'>
              <Link
                to='/aboutus'
                className='--nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className='--nav-item'>
              <Link
                to='/announcements'
                className='--nav-links'
                onClick={closeMobileMenu}
              >
                Announcements
              </Link>
            </li>
            <li className='--nav-item'>
              <Link
                  to='/events'
                  className='--nav-links'
                  onClick={closeMobileMenu}
              >
                Events
              </Link>
            </li>
            <li className='--nav-item'>
              <Link
                to='/'
                className='--nav-links'
                onClick={closeMobileMenu}
              >
                Merch
              </Link>
            </li>

            <li>
              <Link
                to='/login'
                className='--nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
          </ul>
          <Button buttonStyle='--btn--outline'>LOGIN</Button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
