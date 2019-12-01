import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, MenuItem } from '@material-ui/core';
import { Menu, AccountCircle } from '@material-ui/icons';


class Header extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  handleClose() {
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    return(
      <AppBar position="static" >
        <Toolbar>
          <Typography variant="h6">
            ChatrMaps
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
