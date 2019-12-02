import React, { Component } from 'react';
import { Room } from '@material-ui/icons';

class Marker extends Component {
  render() {
    return (
      <div  className = "markerHolder"
            onClick   = {() => {
              this.props.clickEvent(this.props.lat, this.props.lng)
            }} >
        <div className = "markerText">{this.props.num}</div>

        <Room className = "marker"/>

      </div>
    );
  }
}

export default Marker;
