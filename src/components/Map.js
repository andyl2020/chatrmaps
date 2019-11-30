import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Event from "./Event"

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 49.2606,
      lng: -123.2460
    },
    zoom: 11
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
      <div style={{ height: '100vh', width: '100%' }}
        onClick = { this.clickEvent }>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD9L-pZrIUda4oTGDJ_RnbstCx0b8haZvA" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={49.2606}
            lng={-123.2460}
            text="My Marker"
          />
        </GoogleMapReact>
        <div className = "Event">
          <Event
            show = {this.state.showEvent}
          />
        </div>
      </div>
    );
  }
}

export default Map;
