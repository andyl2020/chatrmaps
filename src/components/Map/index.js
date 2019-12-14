import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Header from '../ui/header';
import EventBottom from "../ui/eventBottom";
import EventTop from "../ui/eventTop";
import AddEventButton from "../ui/buttons/addEvent";

import Marker from '../small/marker';
import Loading from '../small/loading';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEvent:    false,
      showAddEvent: true,

      center: {
        lat: 49.2666,
        lng: -123.2480
      },
      zoom:   16,
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
      showEvent: !prevState.showEvent,
      center: {
        lat: latt,
        lng: lngg
      }
    }), () => { this.google.panTo(this.state.center); });

    // console.log("show Event Clicked!", this.state.center);
  }

  clickAddEvent() {
    this.setState( prevState => ({
      showEvent: !prevState.showAddEvent
    }));
  }

  render() {
    const defaultCenter = {
      lat: 0,
      lng: 0
    };
    const defaultZoom = 16;

    return (
      // Important! Always set the container height explicitly
      <div className="map-container" >

        <Loading show = { !this.state.loaded } />
        <Header show = {!this.state.showEvent}/>

        <EventTop     show = {this.state.showEvent} />
        <EventBottom  show = {this.state.showEvent} />

        <GoogleMapReact
          bootstrapURLKeys  = {{ key: "AIzaSyD9L-pZrIUda4oTGDJ_RnbstCx0b8haZvA" }}
          defaultCenter     = {defaultCenter}
          defaultZoom       = {defaultZoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded = {({ map, maps }) => this.handleApiLoaded(map, maps)}
        >
          <Marker
            lat   = {49.2666}
            lng   = {-123.2480}
            num   = {this.props.numMembers}
            clickEvent = { this.clickEvent }
          />
        </GoogleMapReact>

        <AddEventButton show = {this.state.showAddEvent}/>

      </div>
    );
  }
}

export default Map;
