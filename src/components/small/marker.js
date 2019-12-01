import React, { Component } from 'react';
import { Room } from '@material-ui/icons';

class Marker extends Component {
  render() {
    var icon = <Room className = "marker"/>;
    return(
      <div  className="markerHolder"
            onClick = {() => {this.props.clickEvent(this.props.lat, this.props.lng); }} >
        <div className = "markerText">{this.props.num}</div>
        {icon}
      </div>
    );
  }
}

export default Marker;
