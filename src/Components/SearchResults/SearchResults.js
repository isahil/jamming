import React, { Component } from 'react';
import TrackList from '../TrackList/TrackList'
class SearchResults extends Component {
    // state = {  }
    render() {
      const {onAdd, searchResults} = this.props
        return (
          <div className="SearchResults">
            <h2>Results</h2>
            <TrackList onAdd={onAdd} isRemoval={false} tracks={searchResults} />
          </div>
        );
    }
}
 
export default SearchResults;