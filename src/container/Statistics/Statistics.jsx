import React from 'react';

import { CustomButton, HeadingOnWhite, StateItem } from '../../components';
import { images, data } from '../../constants';

import './Statistics.scss';

const Statistics = () => (
    <div className='mb__statistics flex__center section__padding' id='insights'>
      <div className='mb__statistics-intro flex__center'>
        <div className='mb__statistics-intro_img'>
          <img src={images.opportunitiesImg} alt='Opportunities' />  
        </div>  
        <div className='mb__statistics-intro_info'>
          <HeadingOnWhite titleP1='Nya' titleP2='möjligheter' />  
          <p className='p__opensans'>Osäker på var du ska börja? låt naturligtvis matcha dig med lokala proffs för dessa nya möjligheter.</p>
          <CustomButton title='alla möjligheter' />
        </div>
      </div>
      <div className='mb__statistics-result'>
        {data.statistics.map((statistic, index) => (
            <StateItem key={statistic.id + index} ImgUrl={statistic.ImgUrl} value={statistic.value} text={statistic.text} />
          ))} 
      </div>  
    </div>
  );

export default Statistics;