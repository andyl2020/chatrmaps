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
          <h1><strong>UBC Build Day</strong></h1>
          <h4 style={{marginBottom: "5px"}}>Event: Hackathon group chat</h4>
          <h4 style={{marginTop: "5px"}}>Time Duration: 9:00 - 17:00</h4>
        </div>
      </div>
    );
  }
}

export default EventTop;
