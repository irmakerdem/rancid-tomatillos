import React from 'react';
import Card from './Card';
import '../styles/Movies.css';
import Dropdown from './Dropdown';

const Movies = ({ movies }) => {

  const movieCards = movies.map(movie => {
    return (
      <Card
        title={movie.title}
        img={movie.poster_path}
        rating={movie.average_rating}
        key={movie.id}
        id={movie.id}
      />
    )
  })

  return (
    <>
      <div className='dropdown'>
        <Dropdown movies={movies} />
      </div>
      <div className='moviesContainer'>
        {movieCards}
      </div>
    </>
  )
}

export default Movies; 