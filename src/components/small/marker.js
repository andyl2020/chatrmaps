import React, { Component } from 'react';
import { Room } from '@material-ui/icons';

class Marker extends Component {
  render() {
    return(
      <div  className="markerHolder"
            onClick = {this.props.clickEvent} >
        <div className = "markerText">5</div>
        <Room className = "marker"/>
      </div>
    );
  }
}

export default Marker;
