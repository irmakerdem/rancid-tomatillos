import React from 'react';
import '../styles/Card.css';
import { Link } from 'react-router-dom';

const Card = ({ title, img, rating, id }) => {
  return (
    <div className='card'>
      <Link to={`/${id}`}>
        <img className='moviePicture' src={img} alt={`${title} poster`} />
      </Link>
      <h2 className='movieTitle'>{title}</h2>
      <h3 className='movieRating'>Average Rating: {rating.toFixed(1)}</h3>
    </div>
  )
}

export default Card;