import React from 'react';
import './MovieDisplay.css';

const MovieDisplay = () => {

  // const styles = {
  //   backgroundImage: `url("https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg")`
  // }

  return (
    <div className='movieBackdrop' style={{backgroundImage: `url("https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg")`}}>
      <div className='movieContainer'>
        <img className='moviePoster' src="https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg" />
        <div className='movieInfo'>
          <p>Movie Info</p>
          <img className='arrow' src='' />
        </div>
      </div>
    </div>
  )
}

export default MovieDisplay;