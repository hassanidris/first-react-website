import React from 'react';

// import { images } from '../../constants';

import './HeadingOnRed.scss';

const HeadingOnRed = ({titleP1, titleP2}) => (
    
  <div className='heading__red'>
  <h1 className='heading__red-h1'>{titleP1} <span style={{color: '#fff', fontWeight: '700'}}>{titleP2}</span></h1>
</div>
  );


export default HeadingOnRed;