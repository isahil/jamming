import React, { Component } from "react";

class SearchBar extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      term: ''
    }
  }
  
  search = () => this.props.onSearch(this.state.term)
  
  handleTermChange = e => this.state.term = e.target.value

  render() {
    return (
      <div className="SearchBar">
        <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
        <button className="SearchButton">SEARCH</button>
      </div>
    );
  }
}

export default SearchBar;
