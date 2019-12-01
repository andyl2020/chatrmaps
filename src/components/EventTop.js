import { Component } from "react";
import React from "react";

class EventTop extends Component {
  state = {
    text: ""
  }

  render() {
    return (
      <div className = {this.props.show ? "event--top_active" : "event--top"}>
        <div>
          <h1>UBC Build Day</h1>
          <h3>Event: Hackathon group chat</h3>
        </div>
      </div>
    );
  }
}

export default EventTop;
