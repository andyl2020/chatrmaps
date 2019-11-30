import { Component } from "react";
import React from "react";
import {Link} from "react-router-dom";

class Event extends Component {
  state = {
    text: ""
  }

  render() {
    return (
      <div className = "Event"
        style = {this.props.show ? {display:"block"} : {display:"none"}}>
        <div>
          <h1>UBC Build Day</h1>
          <h3>Event: Hackathon group chat</h3>
          <Link to="/chat">Join Chat</Link>
        </div>
      </div>
    );
  }
}

export default Event;
