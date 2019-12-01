import React, { Component } from 'react';
import { CircularProgress } from '@material-ui/core';

class Loading extends Component {
  render() {
    const bigstyle = {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
      backgroundColor: "white",
    };
    return(
      <div >
        <div style={bigstyle}></div>
      </div>
    );
  }
}

export default Loading;
