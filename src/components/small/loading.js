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
      opacity: "0.5",
      backgroundColor: "white",
    };
    const nostyle = {
      display: "none"
    };
    const bstyle = {
      display: "flex",
      position: "absolute",
      width: "100vw",
      height: "100vh",
      zIndex: "10000",
      alignItems: "center",
      justifyContent: "center"
    };
    return(
      <div style = { this.props.show ? bstyle : nostyle } >
        <CircularProgress style = {{zIndex: "1", position: "absolute"}}/>
        <div style = {bigstyle}></div>
      </div>
    );
  }
}

export default Loading;
