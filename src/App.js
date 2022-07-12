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
      .then(response => {
        // console.log(response)
        if(!response.ok) {
          throw new Error("Oopsies! Something went wrong 🤡")
        } else {
          return response.json()
        }
      })
      // .then(data => this.setState({ ideas: data }))
      .then(data => this.setState({ movies: data.movies }))
      .catch(error => {
        this.setState({ error: "ERROR: " + error.message })
        // this.setState({ error: 'An error occured. Please try again!' })
      })
  }

  findMovie = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => response.json())
      .then(data => this.setState({ movie: data.movie }))
      .catch(error => {
        this.setState({ error: "ERROR: " + error.message })
      })
    // const foundMovie = this.state.movies.find(movie => movie.id === id);
    // this.setState({movie: foundMovie});
  }

  goHome = () => {
    this.setState({ movie: null });
  }

  render() {
    return (
      <div className='app'>
        <header className='siteHeader'>
          <h1 className='siteTitle'> 🍿 Rancid Tomatillos 🍿</h1>
        </header>
        { this.state.error && <p>{this.state.error}</p> }
        {this.state.movie ? <MovieDisplay movie={this.state.movie} goHome={this.goHome} /> : <Movies movies={this.state.movies} findMovie={this.findMovie}/> }
      </div>
    )
  }
}

export default App;