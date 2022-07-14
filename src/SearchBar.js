import React, {Component} from 'react';
import './SearchBar.css'

class SearchBar extends Component {
  constructor() {
    super();
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
    return (
      <form>
        <select>
          <option value="choose">Choose A Movie:</option>
          {/* <option value="fightClub">Fight Club</option> */}
        </select>
      </form>
    )
  }

}

export default SearchBar