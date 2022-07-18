import React, { Component } from 'react';
import '../styles/Dropdown.css';
import { Link } from 'react-router-dom';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    }
  }

  handleChange = (event) => {
    this.setState({ id: event.target.value })
  }

  render() {
    const movieTitles = [...this.props.movies].sort((a,b) => a.title.localeCompare(b.title))
      .map(movie => {
        return (
        <option value={movie.id} key={movie.id}>{movie.title}</option>
        )
      })

    return (
      <form>
        <select onChange={(event) => this.handleChange(event)}>
          <option value="choose">🎥 Choose A Movie:</option>
          {movieTitles}
        </select>
        <Link to={`/${this.state.id}`}>
          <button>GO!</button>
        </ Link>
      </form>
    )
  }
}

export default Dropdown;