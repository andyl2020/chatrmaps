import React from "react";
import { Link } from "react-router-dom";
import { Chat, Info } from '@material-ui/icons';

const Event = (props) => {
  return (
    <div className = {props.show ? "event_active" : "event"}>
      <Link to = "/chat">
        <Chat />
      </Link>
      <Info />
    </div>
  );
}

export default Event;
