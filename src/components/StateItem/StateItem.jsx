import React from 'react';
// import Counter from 'react-number-counter';
import CountUp from 'react-countup';

const StateItem = ({ ImgUrl, value, text }) => (
    <div className='mb__statistics-result_item'>
        <div className='mb__statistics-result_icon'>
            <img src={ImgUrl} alt='Icon' /> 
        </div>
            <CountUp end={value} delay={5} className= 'mb__statistics-result_value' />
            <p className='p__opensans'>{text}</p>
  </div> 
  );

export default StateItem;