import React from 'react';
import { HeadingOnWhite } from '../../components';
import CustomButton from '../../components/CustomButton/CustomButton';

import { images } from '../../constants';
import './Header.scss';

const Header = () => (
  <div className='mb__bg mb__header' id='home'>
  <div className='mb__header_info'>
    <p className='p__roboto' style={{ letterSpacing: '0.2rem', color: '#ec351a', textTransform: 'uppercase', fontSize: '1rem'}}>Hos oss är du i fokus!</p>
    <HeadingOnWhite titleP1='Välkommen till ' titleP2='Miljonbemanning' />
    {/* <h1 className='mb__header-h1'>Välkommen till <span style={{color: '#ec351a', fontWeight: '700'}}>Miljonbemanning</span></h1> */}
    <p className='p__opensans' style={{width: '100%'}}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
    
    <div className='flex__center'>
      <CustomButton title='connect' />
      <CustomButton title='lediga jobb' />
    </div>
  </div>
  <div className='mb__header_img'>
    <img src={images.girl} alt='header img' />
  </div>
</div>
  );


export default Header;