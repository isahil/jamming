import React, { Component } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playListName: "hip-hop",
      playListTracks: [
        {
          name: "Stan",
          artist: "Eminem",
          album: "Marshal Mathers LP",
          id: "abcde"
        },
        {
          name: "In da club",
          artist: "50 cent",
          album: "Get Rich or Die Trying",
          id: "fghij"
        }
      ]
    };
  }

  addTrack = track => {
    if (
      this.state.playListTracks.find(savedTrack => savedTrack.id === track.id)
    )
      return;
    else this.state.playListTracks.push(track);
  };

  removeTrack = track => {
    if (
      this.state.playListTracks.find(savedTrack => savedTrack.id === track.id)
    ) {
      const index = this.state.playListTracks.findIndex(track);
      return this.state.playListTracks.splice(index, 1);
    }
  };

  updatePlaylistName = name => {
    this.state.playListName = name;
  };

  savePlaylist = () => {
    return this.state.playListTracks.map(track => track.trackURIs)
  }

  search = term => {
    console.log(term)  
  }

  render() {
    const { searchResults, playListName, playListTracks } = this.state;
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              onAdd={this.addTrack}
              searchResults={searchResults}
            />
            <Playlist
              playListName={playListName}
              playListTracks={playListTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
