import React, {Component} from 'react';
import './SearchBar.css'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieTitle: ''
    }
  }
  
  render() {
    const movieTitles = [...this.props.movies].sort((a,b) => a.title.localeCompare(b.title))
        .map(movie => {
          return (
          <option value={movie.title} key={movie.id}>{movie.title}</option>
          )
        })

    return (
      <form>
        <select>
          <option value="choose">Choose A Movie:</option>
          {movieTitles}
        </select>
      </form>
    )
  }
}

export default SearchBar