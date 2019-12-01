import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Event from "./Event";
import EventTop from "./EventTop";
import Marker from './small/marker';
import Header from './template/header';
import AddEvent from "./AddEvent";

import Loading from './small/loading';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEvent: false,
      showAdd_Event: true,
      center: {
        lat: 49.2666,
        lng: -123.2480
      },
      zoom: 16,
      loaded: false
    };
    this.clickEvent = this.clickEvent.bind(this);
  }

  handleApiLoaded(map, maps) {
    this.google = map;
    navigator.geolocation.getCurrentPosition(
      pos => {
          const coords = pos.coords;
          this.setState( prevState => ({
            ...prevState,
            center: {
              lat: coords.latitude,
              lng: coords.longitude,
            },
            loaded: true
          }), () => { this.google.panTo(this.state.center); });
        }
    );
  }


  clickEvent(latt, lngg) {
    this.setState( prevState => ({
      ...prevState,
      showEvent: !this.state.showEvent,
      center: {
        lat: latt,
        lng: lngg
      }
    }), () => { this.google.panTo(this.state.center); });
    console.log("show Event Clicked!", this.state.center);
  }

  clickAdd_Event() {
    this.setState({
      showEvent: !this.state.showAdd_Event
    });
  }

  render() {
    const defaultCenter = {
      lat: 0,
      lng: 0
    };
    const defaultZoom = 16;

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '90vh', width: '100%' }} >
        <Loading show = { !this.state.loaded } />
        <Header show = {!this.state.showEvent}/>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD9L-pZrIUda4oTGDJ_RnbstCx0b8haZvA" }}
          defaultCenter={defaultCenter}
          defaultZoom={defaultZoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
        >
          <Marker
            lat={49.2666}
            lng={-123.2480}
            text="My Marker"
            clickEvent = { this.clickEvent }
            num = {this.props.numMembers}
          />
        </GoogleMapReact>
        <EventTop show = {this.state.showEvent} />
        <Event show = {this.state.showEvent} />
        <AddEvent show = {this.state.showAdd_Event}/>
      </div>
    );
  }
}

export default Map;
