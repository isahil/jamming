import React, { Component } from "react";
import TrackList from "../TrackList/TrackList";
class Playlist extends Component {
  
  constructor(props){
    super(props)

  }

  handleNameChange = e => {
    this.props.onNameChange(e.value)
  }

  render() {
    return (
      <div className="Playlist">
        <input onChange={this.handleNameChange} defaultValue={'NewPlaylist'} />
        <TrackList onRemove={this.props.onRemove} tracks={this.props.playListTracks}/>
        <button onSave={this.props.onSave} className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;
