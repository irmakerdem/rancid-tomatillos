import './App.css';
import React, {Component} from 'react';
import Movies from './Movies';
import MovieDisplay from './MovieDisplay';
import { Route } from 'react-router-dom';
import SearchBar from './SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: '',
      isLoading: false
    }
  }

componentDidMount = () => {
  this.setState({ isLoading: true} )
  fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => {
      if(!response.ok) {
        throw new Error("Oopsies! Something went wrong 🤡")
      } else {
        return response.json()
      }
    })
    .then(data => this.setState({ movies: data.movies, isLoading: false }))
    .catch(error => {
      this.setState({ error: "ERROR: " + error.message })
    })
}

  // findMovie = (id) => {
  //   fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
  //     .then(response => response.json())
  //     .then(data => this.setState({ movie: data.movie }))
  //     .catch(error => {
  //       this.setState({ error: "ERROR: " + error.message })
  //     })
  // }

  render() {
    return (
      <div className='app'>
        <header className='siteHeader'>
          <h1 className='siteTitle'> 🍿 Rancid Tomatillos 🍿</h1>
        </header>
        {/* <SearchBar movies={this.state.movies} /> */}
        { this.state.isLoading && <p>⏳ Loading...</p> }
        { this.state.error && <p>{this.state.error}</p> }
        <Route
          exact path="/"     
          render={ () => <Movies movies={this.state.movies} />
          }
        />
        <Route
          exact path="/:movieId"
          render={({ match }) => <MovieDisplay id={match.params.movieId}/>
          }
        />
      </div>
    )
  }
}

export default App;