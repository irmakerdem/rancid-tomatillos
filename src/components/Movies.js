import React from 'react';
import Card from './Card';
import '../styles/Movies.css';
import Dropdown from './Dropdown';

const Movies = ({movies, findMovie}) => {

// map over movieData and create Card component for each element
const movieCards = movies.map(movie => {
  return (
    <Card
      title={movie.title}
      img={movie.poster_path}
      // alt={movie.title}
      rating={movie.average_rating}
      key={movie.id}
      id={movie.id}
      findMovie={findMovie}
      />
  )
})
  return (
    <>
      <Dropdown movies={movies} />
      <div className='moviesContainer'>
        {movieCards}
      </div>
    </>
  )

}

export default Movies; 