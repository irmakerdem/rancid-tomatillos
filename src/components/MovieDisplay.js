import React, { Component } from 'react';
import '../styles/MovieDisplay.css';
import arrowIcon from '../assets/arrowIcon.png';
import { Link } from 'react-router-dom';


class MovieDisplay extends Component {
  
  constructor(props) {
    
    super(props);
    this.state = {
      movie: {},
      error: '',
      isLoading: false
    }
    console.log("movie", this.state.movie)
    console.log("prop test", this.props.id)
  }

  componentDidMount = () => {
    this.setState({ isLoading: false })
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`)
      .then(response => {
        if(!response.ok) {
          throw new Error("Oopsies! Something went wrong 🤡")
        } else {
          return response.json()
        }
      })
      .then(data => this.setState({ movie: data.movie, isLoading: false }))
      .catch(error => {
        this.setState({ error: "ERROR: " + error.message })
      })
   }
    render() {
      return (
        <>
          { this.state.isLoading && <p>⏳ Loading...</p> }
          <div className='movieBackdrop' style={{backgroundImage: `url(${this.state.movie.backdrop_path})`}}>
            <div className='movieContainer'>
              <img className='moviePoster' src={this.state.movie.poster_path} alt={`${this.state.movie.title} poster`}/>
              <div className='movieInfo'>
                <p className='infoTitle'>Title: <span className='infoContent'> {this.state.movie.title}</span></p>
                <p className='infoTitle'>Average Rating: <span className='infoContent'>{this.state.movie.average_rating}</span></p>
                <p className='infoTitle'>Overview: <span className='infoContent'>{this.state.movie.overview}</span></p>
                <p className='infoTitle'>Release Date: <span className='infoContent'>{this.state.movie.release_date}</span></p>
                <p className='infoTitle'>Runtime: <span className='infoContent'>{this.state.movie.runtime} minutes</span></p>
                <p className='infoTitle'>Tagline: <span className='infoContent'>{this.state.movie.tagline}</span></p>
                <p className='infoTitle'>Genres: <span className='infoContent'>{this.state.movie.genres}</span></p>
                <Link to="/">
                  <input type="image" className='arrow' src={arrowIcon} alt='arrow icon'/>
                </Link>
              </div>
            </div>
          </div>
        </>
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