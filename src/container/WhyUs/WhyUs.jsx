import React from 'react';
import { HeadingOnWhite } from '../../components';
import { images } from '../../constants';

import './WhyUs.scss';

const WhyUs = () => (
    
    <div className='mb__whyus flex__center section__padding' id='varfor-oss'>
      <HeadingOnWhite titleP1= 'Varför jobba' titleP2= 'med oss?' />
      <p className='p__opensans'>Miljonbemanning är ett bemanningsföretag med mål att göra samhället till en bättre plats för oss alla.
</p>
      <div className='mb__whyus-cards flex__center'>
        <div className='mb__whyus-card shadow-sm'>
          <div className='mb__whyus-card_icon'>
            <img src={images.icoPersonalDev} alt='Personal Development' />
          </div> 
          <h2 className='mb__whyus-card_title'>Personlig utveckling</h2> 
          <p className='mb__whyus-card_text'>Hos oss stöttas alltid all typ av utveckling och vi hjälper gärna till när en medarbetare vill utvecklas hos oss.</p>
        </div>
        <div className='mb__whyus-card shadow-sm'>
          <div className='mb__whyus-card_icon'>
            <img src={images.icoLifeAndWork} alt='Personal Development' />
          </div> 
          <h2 className='mb__whyus-card_title'>Balans mellan vardag och jobb</h2> 
          <p className='mb__whyus-card_text'>Vi förstår att alla liv ser olika ut. Vi strävar alltid efter att sätta dig i fokus.</p>
        </div>
        <div className='mb__whyus-card  shadow-sm'>
          <div className='mb__whyus-card_icon'>
            <img src={images.icoPerfection} alt='Personal Development' />
          </div> 
          <h2 className='mb__whyus-card_title'>Jakten på perfektion</h2> 
          <p className='mb__whyus-card_text'>Vi har skapat en organisation som bygger på delaktighet, transparens och strävan efter att alltid utmana gränserna.</p>
        </div>
      </div>
    </div>
  );

export default WhyUs