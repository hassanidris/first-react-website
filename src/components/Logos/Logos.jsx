import React from "react";
import Slider from "react-slick";

import { PartnersItem } from '../../components';

import { data } from '../../constants';


 




const Logos = () => {

const settings = {
    //   className: "center",
    // dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3500,
    autoplaySpeed: 3500,
    cssEase: "linear",
    pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            infinite: true,
            speed: 1000,
            autoplaySpeed: 1000,
            cssEase: "linear",
            pauseOnHover: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 1000,
            cssEase: "linear",
            pauseOnHover: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            autoplaySpeed: 1000,
            cssEase: "linear",
            autoplay: true,
            pauseOnHover: true,
          }
        }
      ]
    };
     

    return (
     <div className="logo__container">
   
        <Slider {...settings} className="logo__container--inner"> 
        {data.partners.map((partner, index) => (
            <PartnersItem key={partner.title + index} title={partner.title} ImgUrl={partner.ImgUrl} />
          ))}
        </Slider>
     </div>
       
    );
  }

  export default Logos;