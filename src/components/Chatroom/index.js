import React, { Component } from 'react';
import Messages from "./messageBox";
import Input from "./input";
import { Link } from 'react-router-dom';
import UserList from './userList';

import * as ROUTES from '../../constants/routes';

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
      <div className="chat">
        <div className="chat__header">
          <h1>ChatrMaps</h1>
          <p>
            <Link className = "b--chatroom"
                  to        = {ROUTES.HOME}
            >Home</Link>

            &nbsp; &nbsp; | &nbsp; &nbsp;
            <span className = "b--chatroom"
                  onClick   = {this.triggerMembers}
            >Users</span>
          </p>

        </div>
        <Messages messages      = {this.props.messages}
                  currentMember = {this.props.member}
        />
        <Input onSendMessage = {this.props.onSendMessage} />

        <UserList members = {this.props.members}
                  show    = {this.state.showMembers}
                  trigger = {this.triggerMembers} />
      </div>
    );
  }
}

export default Chat;
