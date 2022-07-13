import React, { Component } from 'react';
import './MovieDisplay.css';
import arrowIcon from './arrowIcon.png';
import { Link } from 'react-router-dom';


class MovieDisplay extends Component {
  
  constructor( {id}) {
    
    super();
    console.log("id", id)
    this.state = {
      movie: {},
      error: ''
    }
    console.log("movie", this.state.movie)
  }

  componentDidMount = ( {id} ) => {
    console.log("id2", id);
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`)
      .then(response => response.json())
      .then(data => this.setState({ movie: data.movie }))
      .catch(error => {
        this.setState({ error: "ERROR: " + error.message })
      })
   }
    render() {
      return (
    <div className='movieBackdrop' style={{backgroundImage: `url(${this.state.movie.backdrop_path})`}}>
      <div className='movieContainer'>
        <img className='moviePoster' src={this.state.movie.poster_path} />
        <div className='movieInfo'>
          <p className='infoTitle'>Title: <span className='infoContent'> {this.state.movie.title}</span></p>
          <p className='infoTitle'>Average Rating: <span className='infoContent'>{this.state.movie.average_rating.toFixed(1)}</span></p>
          <p className='infoTitle'>Overview: <span className='infoContent'>{this.state.movie.overview}</span></p>
          <p className='infoTitle'>Release Date: <span className='infoContent'>{this.state.movie.release_date}</span></p>
          <p className='infoTitle'>Runtime: <span className='infoContent'>{this.state.movie.runtime} minutes</span></p>
          <p className='infoTitle'>Tagline: <span className='infoContent'>{this.state.movie.tagline}</span></p>
          <p className='infoTitle'>Genres: <span className='infoContent'>{this.state.movie.genres.join(', ')}</span></p>
          <Link to="/">
          <input type="image" className='arrow' src={arrowIcon} />
          </Link>
        </div>
      </div>
    </div>
  )
}
}
// const MovieDisplay = ( {movie, goHome, id}) => {

//   // const styles = {
//   //   backgroundImage: `url("https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg")`
//   // }

//    // move fetch here
//   return (
//     <div className='movieBackdrop' style={{backgroundImage: `url(${movie.backdrop_path})`}}>
//       <div className='movieContainer'>
//         <img className='moviePoster' src={movie.poster_path} />
//         <div className='movieInfo'>
//           <p className='infoTitle'>Title: <span className='infoContent'> {movie.title}</span></p>
//           <p className='infoTitle'>Average Rating: <span className='infoContent'>{movie.average_rating.toFixed(1)}</span></p>
//           <p className='infoTitle'>Overview: <span className='infoContent'>{movie.overview}</span></p>
//           <p className='infoTitle'>Release Date: <span className='infoContent'>{movie.release_date}</span></p>
//           <p className='infoTitle'>Runtime: <span className='infoContent'>{movie.runtime} minutes</span></p>
//           <p className='infoTitle'>Tagline: <span className='infoContent'>{movie.tagline}</span></p>
//           <p className='infoTitle'>Genres: <span className='infoContent'>{movie.genres.join(', ')}</span></p>
//           <input type="image" className='arrow' src={arrowIcon} onClick={() => goHome()}/>
//         </div>
//       </div>
//     </div>
//   )
// }

export default MovieDisplay;