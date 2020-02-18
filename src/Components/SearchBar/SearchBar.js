import React, { Component } from "react";

class SearchBar extends Component {
  state = {};
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" />
        <button className="SearchButton">SEARCH</button>
      </div>
    );
  }
}

export default SearchBar;
