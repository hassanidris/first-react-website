import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
// import {MdOutlineRestaurantMenu} from 'react-icons/md';
import { FaWindowClose } from 'react-icons/fa';

import images from '../../constants/images';

import './Navbar.scss';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
  <nav className='mb__navbar'>
    <div className='mb__navbar-logo'>
      <img src={images.logo} alt='mb logo' />  
    </div>
    <ul className='mb__navbar-links'>
      <li className='p__opensans'><a href="#Avdelningar">Avdelningar</a></li>
      <li className='p__opensans'><a href="#om-oss">Om Oss</a></li>
      <li className='p__opensans'><a href="#varfor-oss">Varför Oss</a></li>
      <li className='p__opensans'><a href="#insights">Insights</a></li>
      <li className='p__opensans'><a href="#partners">partners</a></li>
      {/* <li className='p__opensans'><a href="#hitta-oss">hitta oss</a></li> */}
    </ul>
    <div className='mb__navbar-login'>
    <ul className='mb__navbar-links'>
      <li className='p__opensans'><a href="#Avdelningar">Medarbetare</a></li>
      <li className='p__opensans'><div /></li>
      <li className='p__opensans'><a href="#Avdelningar">Kandidat</a></li>
    </ul>
      {/* <a href="#login" className='p__opensans'>Medarbetare</a>
      <div />
      <a href="#book" className='p__opensans'>Kandidat</a> */}
    </div>
    <div className='mb__navbar-smallscreen'>
      <GiHamburgerMenu color='#ec351a' fontSize={27} onClick={() => setToggleMenu(true)} />
      
      {toggleMenu && (
        <div className='mb__navbar-smallscreen_overlay flex__center slide-bottom'>
          <FaWindowClose fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />  
          <ul className='mb__navbar-smallscreen_links'>
          <li className='p__opensans'><a href="#Avdelningar">Avdelningar</a></li>
      <li className='p__opensans'><a href="#om-oss">Om Oss</a></li>
      <li className='p__opensans'><a href="#varfor-oss">Varför Oss</a></li>
      <li className='p__opensans'><a href="#insights">INSIGHTS</a></li>
      <li className='p__opensans'><a href="#partners">partners</a></li>
      {/* <li className='p__opensans'><a href="#hitta-oss">hitta oss</a></li> */}
          </ul>  
        </div>
      )}
    </div>
  </nav>
);
}

export default Navbar;