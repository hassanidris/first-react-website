import React from "react";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { HeadingOnWhite, Cards } from '../../components';

import './Departments.scss';
// import Sliders from '../../components/SwipeToSlide/Slider';

 

const Departments = () => (
      <div className='mb__departments flex__center section__padding' id="Avdelningar">
        <div className="mb__departments-heading">
        <HeadingOnWhite titleP1= 'Jobb' titleP2= 'industrier' />
        </div>
        <div className="card__container">

        <Cards />
        </div>

      </div>
    );

    export default Departments;