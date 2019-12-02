import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  handleClose() {
    this.setState( prevState => ({
      open: !prevState.open
    }));
  }

  render() {
    return (
      <AppBar position  = "static"
              className = "header">
        <Toolbar>
          <Typography variant="h6">ChatrMaps</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
