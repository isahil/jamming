import React, { Component } from "react";
import TrackList from "../TrackList/TrackList";
class Playlist extends Component {
  state = {};
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'NewPlaylist'} />
        <TrackList />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;
