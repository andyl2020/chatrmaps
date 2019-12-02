import React from "react";
import { Component } from "react";

class Input extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    }
  }

  onChange(e) {
    e.preventDefault();

    this.setState({ text: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.state.text) {
      this.setState({
        text: ""
      }, () => {
        this.props.onSendMessage(this.state.text);
      });
    }
  }

  render() {
    return (
      <div className = "Input">
        <form onSubmit = { e => this.onSubmit(e) }>
          <input
            onChange    = { e => this.onChange(e) }
            value       = { this.state.text }
            type        = "text"
            placeholder = "ENTER your message"
            // autofocus = "true" https://davidwalsh.name/react-autofocus
          />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default Input;
