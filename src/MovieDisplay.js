import React from 'react';
import './MovieDisplay.css';
import arrowIcon from './arrowIcon.png';
import { Link } from 'react-router-dom';

const MovieDisplay = ( {movie, goHome}) => {

  // const styles = {
  //   backgroundImage: `url("https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg")`
  // }

   // move fetch here
   
  return (
    <div className='movieBackdrop' style={{backgroundImage: `url(${movie.backdrop_path})`}}>
      <div className='movieContainer'>
        <img className='moviePoster' src={movie.poster_path} />
        <div className='movieInfo'>
          <p className='infoTitle'>Title: <span className='infoContent'> {movie.title}</span></p>
          <p className='infoTitle'>Average Rating: <span className='infoContent'>{movie.average_rating.toFixed(1)}</span></p>
          <p className='infoTitle'>Overview: <span className='infoContent'>{movie.overview}</span></p>
          <p className='infoTitle'>Release Date: <span className='infoContent'>{movie.release_date}</span></p>
          <p className='infoTitle'>Runtime: <span className='infoContent'>{movie.runtime} minutes</span></p>
          <p className='infoTitle'>Tagline: <span className='infoContent'>{movie.tagline}</span></p>
          <p className='infoTitle'>Genres: <span className='infoContent'>{movie.genres.join(', ')}</span></p>
          <Link to='/'>
            <input type="image" className='arrow' src={arrowIcon} onClick={() => goHome()}/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MovieDisplay;