import React, {Component} from 'react';
import '../styles/Dropdown.css'
import { Link } from 'react-router-dom';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    }
  }

  // user selects Title from movie dropdown
  // hits "Go" button 
        // need to add button 
  // go to Movie Display page - new URL
        

  handleChange = (event) => {
    // const { id, title } = event.target.value
    console.log("event", event);
    // console.log("id", id)
    this.setState({ 
      id: event.target.value
      // title: title
      // id: event.target.id
    }
      
    )
  }

  render() {
    const movieTitles = [...this.props.movies].sort((a,b) => a.title.localeCompare(b.title))
        .map(movie => {
          // console.log("movie", movie);
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