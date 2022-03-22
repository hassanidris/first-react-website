import React from 'react';
import { useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { intro } from '../../constants';

import './Intro.scss';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false)
  const vidRef = React.useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }

  return (
  <div className='mb__video'>
    <video
      src={intro}
      ref={vidRef}
      type='video/mp4'
      loop
      controls={false}
      muted
    />
  <div className='mb__video-overlay flex__center'>
    <div 
      className='mb__video-overlay_circle flex__center'
      onClick={handleVideo}
      >
        {playVideo 
        ? <BsPauseFill color='#fff' fontSize={30} />
         : <BsFillPlayFill color='#fff' fontSize={30} />}
      
    </div>  
  </div>
  </div>
  );
} 

export default Intro;
