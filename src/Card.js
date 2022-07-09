import React from 'react';
import './Card.css';

const Card = ({title, img, rating, id, findMovie}) => {
  return (
    <div className='card'>
      <img className='moviePicture' src={img} onClick={() => findMovie(id)}/>
      <h2 className='movieTitle'>{title}</h2>
      <h3 className='movieRating'>Average Rating: {rating.toFixed(1)}</h3>
    </div>
  )
}


export default Card;