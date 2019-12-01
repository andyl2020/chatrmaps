import React, { Component } from 'react';

export class UserList extends Component {
    state = {
        users: [
            { name: 'derek' },
            { name: 'josh' },
            { name: 'andy' },
            { name: 'clarence' },
            { name: 'matthew' }
        ],
        users2: ['HELLO', 'HI', 'GOODBYE']
    }

    render() {
        console.log("YEE, andy test:");
        console.log(this.ANDYTEST);
        console.log(this.props.members);

        // this.setState({users2: this.props.members});

        return (
            <div>
              {this.props.members.map((user) => (
                <li class="clearfix">

                </li>
              ))}
            </div>
        );
    }
}

export default UserList;
