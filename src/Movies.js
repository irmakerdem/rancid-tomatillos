import React from 'react';
import Card from './Card';
import './Movies.css';

const Movies = ({movies}) => {

// map over movieData and create Card component for each element
const movieCards = movies.map(movie => {
  return (
    <Card
      title={movie.title}
      />
  )
})
  return (
    <div>
      {movieCards}
    </div>
  )

}

export default Movies; 