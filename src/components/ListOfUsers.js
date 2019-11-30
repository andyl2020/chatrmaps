import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'

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
            <Typography>{user.name}</Typography>
        ));
    }
}

export default ListOfUsers
