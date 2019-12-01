import React, { Component } from 'react';
import { Chat } from '@material-ui/icons';

export class UserList extends Component {
    state = {
        users: [
            { name: 'derek' },
            { name: 'josh' },
            { name: 'andy' },
            { name: 'clarence' },
            { name: 'matthew' },
            { name: 'hey' },
            { name: 'fus' }
        ],
        users2: ['HELLO', 'HI', 'GOODBYE']
    }

    render() {
        console.log("YEE, andy test:");
        console.log(this.ANDYTEST);
        console.log(this.props.members);

        // this.setState({users2: this.props.members});

        return (
          <div className={this.props.show ? "member-list-div_active" : "member-list-div"}>
          <br />
          <div onClick={this.props.trigger} class="cross">x</div>
          <h1 style={{textAlign: "center"}}>Currently Online</h1>
          {this.props.members.map((user) => (
            <li className="chat-member">
              <img src="https://bodiez.com/wp-content/uploads/2015/09/medium-default-avatar.png" alt="user-ava"/>
              <span className="member-desc-holder">
                <h4 className="member-name">{user}</h4>
                <p className="member-online">
                  <span style={{color: "green"}}>•</span> Online Now
                </p>
              </span>
              <span className="member-message">
                <Chat />
              </span>
            </li>
          ))}
          </div>
        );
    }
}

export default UserList;
