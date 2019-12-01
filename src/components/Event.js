import { Component } from "react";
import React from "react";
import {Link} from "react-router-dom";
import {Chat, Info} from '@material-ui/icons';



class Event extends Component {
  state = {
    text: ""
  }

  render() {
    return (
      <div className = {this.props.show ? "event_active" : "event"}>
        <Link to="/chat">
          <Chat />
        </Link>
        <Info />
      </div>
    );
  }
}

export default Event;
