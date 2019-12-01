import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { Menu } from '@material-ui/icons';


class Header extends Component {
  render() {
    return(
      <AppBar position="static" >
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <Typography variant="h6">
            Chatrr 2.0
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
