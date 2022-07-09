import React from 'react';
import './MovieDisplay.css';

const MovieDisplay = () => {

  // const styles = {
  //   backgroundImage: `url("https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg")`
  // }

  return (
    <div style={{backgroundImage: `url("https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg")`}}>
      <div>
        <img className='moviePoster' src="https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg" />
      </div>
      <div>
        <p>Movie Info</p>
        <img className='arrow' src='' />
      </div>
    </div>
  )
}

export default MovieDisplay;