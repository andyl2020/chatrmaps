import { Component } from "react";
import React from "react";
import '../styles/App.css';

class Add_Event extends Component {
  state = {
    text: ""
  }

  render() {
    return (
      <div className = "Add_Event"
        style = {buttonStyle}>
        <button type="button">Add Event</button> 
      </div>
    );
  }
}

const buttonStyle = {
  position: "absolute",
  top: "10px",
  left: "10px"
};

export default Add_Event;
