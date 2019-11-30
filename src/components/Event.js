import { Component } from "react";
import React from "react";

class Event extends Component {
  state = {
    text: ""
  }

  onChange(e) {
    this.setState({ text: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    if(this.state.text) {
      this.setState({ text: "" });
      this.props.onSendMessage(this.state.text);
    }
  }

  render() {
    return (
      <div className = "Event"
        style = {this.props.show ? {display:"block"} : {display:"none"}}>
        <div>
          <h1>UBC Build Day</h1>
          <h3>Event</h3>
        </div>
        <form onSubmit = { e => this.onSubmit(e) }>
          <input
            onChange    = { e => this.onChange(e) }
            value       = { this.state.text }
            type        = "text"
            placeholder = "Enter your message and press ENTER"
          />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default Event;
