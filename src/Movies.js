import React from 'react';
import Card from './Card';
import './Movies.css';
import SearchBar from './SearchBar';

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
    <>
      <SearchBar movies={movies} />
      <div className='moviesContainer'>
        {movieCards}
      </div>
    </>
  )

}

export default Movies; 