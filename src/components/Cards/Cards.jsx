import React from "react";
import Slider from "react-slick";

import { DepartmentsItem } from '../../components';

import { data } from '../../constants';


 




const Cards = () => {

const settings = {
      className: "center",
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      // centerPadding: "60px",
      responsive: [
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            // dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            // initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    };
     

    return (
     <div className="card__container">
   
        <Slider {...settings} className="card__container--inner"> 
        {data.departments.map((department, index) => (
            <DepartmentsItem key={department.title + index} title={department.title} ImgUrl={department.ImgUrl} IcoUrl={department.IcoUrl} />
          ))}
        </Slider>
     </div>
       
    );
  }

  export default Cards;