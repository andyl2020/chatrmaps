import React, { Component } from 'react'

export class ListOfUsers extends Component {
    state = {
        users: [
            { name: 'derek' },
            { name: 'josh' },
            { name: 'andy' },
            { name: 'clarence' }
        ]
    }
    render() {
        return this.state.users.map((user) => (
            <h1>{user.name}</h1>
        ));
    }
}

export default ListOfUsers
