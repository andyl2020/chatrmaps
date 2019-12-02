import React from 'react';
import { CircularProgress } from '@material-ui/core';

const Loading = (props) => {
  return(
    <div className = { props.show ? "loader--active" : "loader--hidden" } >
      <CircularProgress style = {{ zIndex: "1", position: "absolute" }}/>
      <div className = "loader_container"></div>
    </div>
  );
}

export default Loading;
