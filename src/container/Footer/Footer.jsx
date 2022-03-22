import React from 'react';
import {AiFillFacebook, AiFillTwitterSquare, AiFillLinkedin} from 'react-icons/ai';
import { FaYoutubeSquare } from 'react-icons/fa';

import './Footer.scss';

const Footer = () => (
    <div className='mb__footer'>
      <p className='mb__footer-copyright'>© 2022 Miljonbemanning</p>
      <div className='mb__footer-social'>
        <AiFillFacebook />
        <AiFillTwitterSquare />
        <FaYoutubeSquare />
        <AiFillLinkedin />
      </div>  
    </div>
  );

export default Footer;