import React from 'react';
import './MovieDisplay.css';
import arrowIcon from './arrowIcon.png';

const MovieDisplay = ( {movie, goHome}) => {

  // const styles = {
  //   backgroundImage: `url("https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg")`
  // }

  return (
    <div className='movieBackdrop' style={{backgroundImage: `url(${movie.backdrop_path})`}}>
      <div className='movieContainer'>
        <img className='moviePoster' src={movie.poster_path} />
        <div className='movieInfo'>
          <p>Title: {movie.title}</p>
          <p>Average Rating: {movie.average_rating.toFixed(1)}</p>
          <p>Release Date: {movie.release_date}</p>
          <p>Overview: {movie.overview}</p>
          <img className='arrow' src={arrowIcon} onClick={() => goHome()}/>
        </div>
      </div>
    </div>
  )
}

export default MovieDisplay;