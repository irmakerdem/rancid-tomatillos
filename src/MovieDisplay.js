import React from 'react';
import './MovieDisplay.css';

const MovieDisplay = ( {movie}) => {

  // const styles = {
  //   backgroundImage: `url("https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg")`
  // }

  return (
    <div className='movieBackdrop' style={{backgroundImage: `url(${movie.backdrop_path})`}}>
      <div className='movieContainer'>
        <img className='moviePoster' src={movie.poster_path} />
        <div className='movieInfo'>
          <p>Title: {movie.title}</p>
          <p>Average Rating: {movie.average_rating}</p>
          <p>Release Date: {movie.release_date}</p>
          <img className='arrow' src='' />
        </div>
      </div>
    </div>
  )
}

export default MovieDisplay;