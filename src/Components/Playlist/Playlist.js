import React, { Component } from "react";
import TrackList from "../TrackList/TrackList";
import './Playlist.css'
class Playlist extends Component {
  
  // constructor(props){
  //   super(props)
  // }

  handleNameChange = e => {
    this.props.onNameChange(e.target.value)
  }

  render() {
    return (
      <div className="Playlist">
        <input onChange={this.handleNameChange} defaultValue={'NewPlaylist'} />
        <TrackList onRemove={this.props.onRemove} isRemoval={true} tracks={this.props.playListTracks}/>
        <button onClick={this.props.onSave} className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;
