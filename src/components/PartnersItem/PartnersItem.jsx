import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './DepartmentsItem.scss'; 

const PartnersItem = ({ title, ImgUrl }) => (
    <div className="logo__container--inner--card">
        <div className='mb__partners-logo'>
            <img src={ImgUrl} alt={title} />
        </div>

    </div>
  );


export default PartnersItem;