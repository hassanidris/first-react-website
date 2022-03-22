import React from 'react';

import './HeadingOnWhite.scss';

const HeadingOnWhite = ({titleP1, titleP2}) => (

    <div className='heading__white'>
        <h1 className='heading__white-h1'>{titleP1} <span style={{color: '#ec351a', fontWeight: '700'}}>{titleP2}</span></h1>
    </div>
  );


export default HeadingOnWhite;