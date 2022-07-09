import React from 'react';
import './Card.css';

const Card = ({title, img, rating}) => {
  return (
    <div className='card'>
      <img src={img}/>
      <h3>{title}</h3>
      <h6>Average Rating:{rating.toFixed(1)}</h6>
    </div>
  )
}


export default Card;