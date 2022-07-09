import logo from './logo.svg';
import './App.css';
import movieData from './movieData';
import React, {Component} from 'react';
import Movies from './Movies';
import MovieDisplay from './MovieDisplay'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      movie: null
    }
  }

  findMovie = (id) => {
    const foundMovie = this.state.movies.find(movie => movie.id === id);
    this.setState({movie: foundMovie});
  }

  render() {
    return (
      <div className='app'>
        <header>
          <h1 className='siteTitle'>Rancid Tomatillos</h1>
        </header>
        {this.state.movie ? <MovieDisplay movie={this.state.movie} /> : <Movies movies={this.state.movies} findMovie={this.findMovie}/> }
      </div>
    )
  }
}

export default App;