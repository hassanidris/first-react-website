import React from 'react';
import { HeadingOnRed } from '../../components';

import { images } from '../../constants';
import './AboutUs.scss';

const AboutUs = () => (

    <div className='mb__about section__padding' id='om-oss'>
      <div className='mb__about-title'>
        <HeadingOnRed titleP1='Vi skräddarsyr ' titleP2='uppdrag för dig' />
        {/* <h1 className='headtext__roboto' style={{color: '#fff'}}>Vi skräddarsyr uppdrag för dig</h1>   */}
      </div>
      <div className='mb__about-content flex__center'>
        <div className='mb__about-content_info'>
          <p className='p__opensans' style={{color: '#fff'}}>Vår långa erfarenhet, överlägsna målgruppskännedom och gedigna databas ger oss ett övertag.</p>
          <p className='p__opensans' style={{color: '#fff'}}>Inga andra kan som vi matcha företags personalbehov med ambitiös och kompetent personal. Vi får fram styrkorna hos personen och tar tillvara på kompetensen och talangerna! Vi ser kapacitet och talang hos våra sökande som dem själva och andra ofta inte ser, vi hjälper dem att omvandla den till konkurrenskraftig arbetskraft. Vi är experter på att matcha den sökande med rätt jobb och det är vi stolta över!</p> 
          <p className='p__opensans' style={{color: '#fff'}}>Våra rekryterare har mångårig erfarenhet av att plocka fram just detta och är duktiga på att ”se säljaren inom dig”.</p> 
        </div>
        <div className='mb__about-content_img'>
          <img src={images.aboutImg} alt='about us' />  
        </div>  
      </div>
    </div>
  );

export default AboutUs;