import React, { Component } from 'react';
import Messages from "./Messages";
import Input from "./Input";
import '../styles/App.css';
import { Link } from 'react-router-dom';
import UserList from './userList';

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      showMembers: false
    };
    this.triggerMembers = this.triggerMembers.bind(this);
  }

  triggerMembers() {
    this.setState(prevState => ({
      showMembers: !prevState.showMembers
    }));
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>ChatrMaps</h1>
          <p>
            <Link style={linkStyle} to="/">Home</Link>
            &nbsp; &nbsp; | &nbsp; &nbsp;
            <span class="trigger" onClick={this.triggerMembers} style={linkStyle}>Users</span>
          </p>

        </div>
        <Messages
          messages={this.props.messages}
          currentMember={this.props.member}
        />
        <Input
          onSendMessage={this.props.onSendMessage}
        />
        <UserList members={this.props.members}
                  show={this.state.showMembers}
                  trigger={this.triggerMembers}/>
      </div>
    );
  }
}

const linkStyle = {
  color: "#fff",
  textDecoration: 'none'
};

export default Chat;
