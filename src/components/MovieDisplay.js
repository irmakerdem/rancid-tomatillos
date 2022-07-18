import React, { Component } from 'react';
import '../styles/MovieDisplay.css';
import arrowIcon from '../assets/arrowIcon.png';
import { Link } from 'react-router-dom';
import { getMovieDetails } from '../apiCalls';

class MovieDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      movie: {},
      error: ''
    }
  }

  componentDidMount = () => {
    getMovieDetails(this.props.id)
      .then(data => {
        let genres = data.movie.genres.join(', ')
        this.setState({ genres: genres, movie: data.movie })
      })
      .catch(error => {
        this.setState({ error: "ERROR: " + error.message })
      })
   }

  render() {
    return (
      <>
        {this.state.error && <p className='error'>{this.state.error}</p>}
        <div className='movieBackdrop' style={{backgroundImage: `url(${this.state.movie.backdrop_path})`}}>
          <div className='movieContainer'>
            <img className='moviePoster' src={this.state.movie.poster_path} alt={`${this.state.movie.title} poster`}/>
            <section className='movieInfo'>
              <p className='infoTitle'>Title: <span className='infoContent'> {this.state.movie.title}</span></p>
              <p className='infoTitle'>Average Rating: <span className='infoContent'>{Number(this.state.movie.average_rating).toFixed(1)}</span></p>
              <p className='infoTitle'>Overview: <span className='infoContent'>{this.state.movie.overview ? this.state.movie.overview : 'N/A'}</span></p>
              <p className='infoTitle'>Release Date: <span className='infoContent'>{this.state.movie.release_date}</span></p>
              <p className='infoTitle'>Runtime: <span className='infoContent'>{this.state.movie.runtime} minutes</span></p>
              <p className='infoTitle'>Tagline: <span className='infoContent'>{this.state.movie.tagline ? this.state.movie.tagline : 'N/A'}</span></p>
              <p className='infoTitle'>Genres: <span className='infoContent'>{this.state.genres}</span></p>
              <div className='arrow-flex'>
                <Link to="/">
                  <input type='image' className='arrow' src={arrowIcon} alt='arrow icon'/>
                </ Link>
              </div>
            </section>
          </div>
        </div>
      </>
    )
  }
}

export default MovieDisplay;