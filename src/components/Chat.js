import React, { Component } from 'react';
import Messages from "./Messages";
import Input from "./Input";
import '../styles/App.css';

class Chat extends Component {
  render() {
    return(
      <div className = "App">
        <div className = "App-header">
          <h1>Chatr 2.0</h1>
        </div>
        <Messages
          messages      = { this.props.messages }
          currentMember = { this.props.member }
        />
        <Input
          onSendMessage = { this.props.onSendMessage }
        />
      </div>
    );
  }
}

export default Chat;
