import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DepartmentsItem.scss'; 

const DepartmentsItem = ({ title, ImgUrl, IcoUrl }) => (
    <div className="card__container--inner--card">
        <div className='mb__departments-pic'>
            <img src={ImgUrl} alt={title} />
        </div>
        <div className='mb__departments-info shadow-sm'>
            <div className='mb__departments-icon'>
            <img src={IcoUrl} alt={title} />
            </div>
            <p className='mb__departments-title'>{title}</p>
        </div>
        
    </div>
  );


export default DepartmentsItem;