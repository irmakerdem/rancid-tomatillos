import React, {Component} from 'react';
import './SearchBar.css'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieTitle: ''
    }
  }

  // const displayUniqueDestinations = (uniqueDestinations) => {
  //   formDestinations.innerHTML = `<option value="choose">Choose A Destination:</option>`;
  //   uniqueDestinations.forEach((dest) => {
  //     formDestinations.innerHTML += `<option value="${dest}">${dest}</option>`
  //   })
  // }


  render() {
    // console.log("hereeeee", this.props.movies)
    // console.log("hereeeee2", this.props)
    // this.props.movies is an array of objects
    const movieTitles = this.props.movies.sort((a,b) => {
      console.log("aaaaa", a.title)
      return a.title.localeCompare(b.title)
    }).map(movie => {
      // console.log("movieeee", movie)
      return (
        <option value={movie.title} key={movie.id}>{movie.title}</option>
      )
    })

    return (
      <form>
        <select>
          <option value="choose">Choose A Movie:</option>
          {movieTitles}
          {/* <option value="fightClub">Fight Club</option> */}
        </select>
      </form>
    )
  }
}

export default SearchBar