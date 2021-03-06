import React, { Component } from "react";
import Track from "../Track/Track";
import './TrackList.css'

class TrackList extends Component {

  render() {
    const {onAdd, onRemove, isRemoval} = this.props
    return (
      <div className="TrackList">
        {this.props.tracks.map(track => (
          <Track
            key={track.id}
            onAdd={onAdd}
            onRemove={onRemove}
            isRemoval={isRemoval}
            track={track}
          />
        ))}
      </div>
    );
  }
}

export default TrackList;