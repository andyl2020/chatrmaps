import { Component } from "react";
import React from "react";

class Event extends Component {
  state = {
    text: ""
  }

  clickEvent() {
    this.setState({
      showEvent: !this.state.showEvent
    });
    console.log(this.state.showEvent);
  }

  render() {
    return (
      <div className = "Add_Event"
        style = {{display: "block"}}>
        <div>
          <h1>UBC Build Day</h1>
        </div>
      </div>
    );
  }
}

export default Event;
