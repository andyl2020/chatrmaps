import { Component } from "react";
import React from "react";
import {randomColor,randomName} from "../functions/demo";
class Messages extends Component {
  render() {
    const { messages } = this.props;
    return (
      <ul className="Messages-list">
        { messages.map((m, i) => this.renderMessage(m, i)) }
      </ul>
    );
  }
  generateKey(pre) {
    return new Date().getTime();
  }
  renderMessage(message, index) {
    const { member, text } = message;
    const { currentMember } = this.props;
    var messageFromMe;
    var username;
    if(member!=null&&currentMember!=null)
    {
      messageFromMe = member.id === currentMember.id;
    }
    else{
      messageFromMe = false;
    }

    if(member==null){
      username = randomName();
    }
    else{
      if(member.clientData!=null)
        username = member.clientData.username;
       else
        username = randomName(); 
    }

    const className = messageFromMe ?
      "Messages-message currentMember" : "Messages-message";
    if(member){
      if (member.clientData){
        if(member.clientData.color){
          var bgc = member.clientData.color;
        }
      }
    }
    else{
      bgc = randomColor();
    }

    
    return (
      <li key       = { index }
          className = { className }>
        <span className = "avatar"
              style     = {{ backgroundColor: bgc }}
        />
        <div className = "Message-content">
          <div className = "username">{ username }</div>
          <div className = "text">{ text }</div>
        </div>
      </li>
    );
  }
}
export default Messages;