import React, { Component } from 'react';
import { Room, Person, People } from '@material-ui/icons';

class Marker extends Component {
  render() {
    var icon = <Room className = "marker"/>;
    if(this.props.num > 0) {
      icon = this.props.num > 1 ? <People className = "marker"/> : <Person className = "marker"/>;
    }
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
