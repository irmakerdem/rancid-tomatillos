import logo from './logo.svg';
import './App.css';
import movieData from './movieData';
import React, {Component} from 'react';
import Movies from './Movies';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      movie: null
    }
  }

  render() {
    return (
      <div className='app'>
        <header>
          <h1 className='siteTitle'>Rancid Tomatillos</h1>
        </header>
        <Movies movies={this.state.movies}/>
      </div>
    )
  }
}

export default App;