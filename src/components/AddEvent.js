import { Component } from "react";
import React from "react";
import '../styles/App.css';

class AddEvent extends Component {
  state = {
    text: ""
  }

  render() {
    return (
      <div className = "add-event"
        style = {buttonStyle}>
        <button type="button">Add Event</button>
      </div>
    );
  }
}

const buttonStyle = {
  position: "absolute",
  top: "100px",
  left: "10px"
};

export default AddEvent;
