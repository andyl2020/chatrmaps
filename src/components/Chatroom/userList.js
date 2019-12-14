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
        // console.log("Members Updated:", this.props.members);

        return (
          <div className = {this.props.show ? "user-list user-list--active" : "user-list"}>
            <br />
            <div className  = "b--exit"
                 onClick    = {this.props.trigger}
            >x</div>
            <h1>Currently Online</h1>

            {this.props.members.map(user => (
              <li className = "user-list__user">
                <img src = "https://bodiez.com/wp-content/uploads/2015/09/medium-default-avatar.png" alt="user-ava"/>
                <span className = "user-list__user__desc">
                  <h4 className = "user-list__user__desc__name">{user}</h4>
                  <p className = "user-list__user__desc__online">
                    <span className = "dot--green">•</span> Online Now
                  </p>
                </span>
                <span className="user-list__message">
                  <Chat />
                </span>
              </li>
            ))}

          </div>
        );
    }
}

export default UserList;
