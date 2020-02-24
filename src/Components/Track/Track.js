import React, { Component } from "react";

class Track extends Component {
  constructor(props){
    super(props)
    this.state = {
      isRemoval: this.props.isRemoval
    };
  }

  renderAction = () => this.state.isRemoval ? "-" : "+"

  addTrack = () => {
    this.props.onAdd(this.props.track)
  }

  removeTrack = () => {
    this.props.onRemove(this.props.track)
  }

  handleClick = () => {
    if(!this.state.isRemoval) return this.addTrack()
    else return this.removeTrack()
  }
  
  render() {
    const { name, artist, album } = this.props.track;
    return (
      <div className="Track">
        <div class="Track-information">
          <h3>{name}</h3>
          <p>
            {artist} | {album}
          </p>
        </div>
        <button onClick={this.handleClick} className="Track-action">{this.renderAction()}</button>
      </div>
    );
  }
}

export default Track;
