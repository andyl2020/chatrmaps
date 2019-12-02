import React, { Component } from "react";
import { randomColor, randomName } from "../../functions/demo";

class Messages extends Component {

  generateKey(pre) {
    return new Date().getTime();
  }

  renderMessage(message, index) {
    const { member, text } = message;
    const { currentMember } = this.props;

    var messageFromMe;
    var username;

    if (member !== null && currentMember !== null) {
      messageFromMe = member.id === currentMember.id;
    } else {
      messageFromMe = false;
    }

    if (member === null) {
      username = randomName();
    } else {
      if (member.clientData !== null) {
        username = member.clientData.username;
      } else {
        username = randomName();
      }
    }

    if (member) {
      if (member.clientData) {
        if (member.clientData.color) {
          const bgc = member.clientData.color;
        }
      }
    } else {
      const bgc = randomColor();
    }

    return (
      <li key       = { index }
          className = { messageFromMe ? "chat__list currentMember" : "chat__list" }>
        <span className = "avatar"
              style     = {{ backgroundColor: this.bgc }}
        />
        <div className = "chat__list__content">
          <div className = "username">{ username }</div>
          <div className = "text">{ text }</div>
        </div>
      </li>
    );
  }

  render() {
    const { messages } = this.props;
    return(
      <ul className="chat-list-holder" id="messageList">
        { messages.map((m,i) => this.renderMessage(m,i))}
      </ul>
    );
  }
}
export default Messages;
