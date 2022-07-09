import React from 'react';
import Card from './Card';
import './Movies.css';

const Movies = ({movies, findMovie}) => {

// map over movieData and create Card component for each element
const movieCards = movies.map(movie => {
  return (
    <Card
      title={movie.title}
      img={movie.poster_path}
      rating={movie.average_rating}
      key={movie.id}
      id={movie.id}
      findMovie={findMovie}
      />
  )
})
  return (
    <div className='movies-container'>
      {movieCards}
    </div>
  )

}

export default Movies; 