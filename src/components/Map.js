import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Event from "./Event";
import Marker from './small/marker';
import Add_Event from "./Add_Event";

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 49.2666,
      lng: -123.2480
    },
    zoom: 16
  };

  constructor(props) {
    super(props);
    this.state = {
      showEvent: false
    }
    this.clickEvent = this.clickEvent.bind(this)
  }

  clickEvent() {
    this.setState({
      showEvent: !this.state.showEvent
    })
    console.log(this.state.showEvent)
  }

  render() {
    console.log(process.env.API_KEY);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }} >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD9L-pZrIUda4oTGDJ_RnbstCx0b8haZvA" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={49.2666}
            lng={-123.2480}
            text="My Marker"
            clickEvent = { this.clickEvent }
          />
        </GoogleMapReact>
        <div className = "Event">
          <Event
            show = {this.state.showEvent}
          />
        </div>
        <div className = "Add_Event" 
          style={"position:absolute","margin:0px;"}>
          <Add_Event/>
        </div>
      </div>
    );
  }
}

export default Map;
