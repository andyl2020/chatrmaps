import React, { Component } from 'react';
import Messages from "./Messages";
import Input from "./Input";
import '../styles/App.css';
import { Link } from 'react-router-dom';

class Chat extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>ChatrMaps</h1>
          <p>
            <Link style={linkStyle} to="/">Home</Link>
            &nbsp; &nbsp; | &nbsp; &nbsp;
            <Link style={linkStyle} to="/users">Users</Link>
          </p>

        </div>
        <Messages
          messages={this.props.messages}
          currentMember={this.props.member}
        />
        <Input
          onSendMessage={this.props.onSendMessage}
        />
      </div>
    );
  }
}

const linkStyle = {
  color: "#fff",
  textDecoration: 'none'
};

export default Chat;
