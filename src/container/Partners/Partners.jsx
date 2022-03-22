import React from "react";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { HeadingOnRed, Logos } from '../../components';

import './Partners.scss';

 

const Partners = () => (
      <div className='mb__partners flex__center section__padding' id="partners">
        <div className="mb__partners-heading">
          <HeadingOnRed titleP1= 'Möt våra' titleP2= 'partners' />
        </div>
        <div className="logo__container">
          <Logos />
        </div>

      </div>
    );

    export default Partners;