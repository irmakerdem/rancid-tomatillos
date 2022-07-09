import './App.css';
// import movieData from './movieData';
import React, {Component} from 'react';
import Movies from './Movies';
import MovieDisplay from './MovieDisplay'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      // movies: movieData.movies,
      movie: null,
      error: ''
    }
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      // .then(data => this.setState({ ideas: data }))
      .then(movies => this.setState({ movies: movies.movies }))
      .catch(error => {
        this.setState({ error: error.message })
        // this.setState({ error: 'Please try again' })
      })
  }

  findMovie = (id) => {
    const foundMovie = this.state.movies.find(movie => movie.id === id);
    this.setState({movie: foundMovie});
  }

  goHome = () => {
    this.setState({movie: null});
  }

  render() {
    return (
      <div className='app'>
        <header>
          <h1 className='siteTitle'>Rancid Tomatillos</h1>
        </header>
        {this.state.movie ? <MovieDisplay movie={this.state.movie} goHome={this.goHome} /> : <Movies movies={this.state.movies} findMovie={this.findMovie}/> }
      </div>
    )
  }
}

export default App;