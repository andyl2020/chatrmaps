import { Component } from "react";
import React from "react";
import {Link} from "react-router-dom";

class Event extends Component {
  state = {
    text: ""
  }

  render() {
    return (
      <div className = {this.props.show ? "event_active" : "event"}>
        <div>
          <Link to="/chat">Join Chat</Link>
        </div>
      </div>
    );
  }
}

export default Event;
