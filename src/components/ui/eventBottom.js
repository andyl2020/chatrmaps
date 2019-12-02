import React from "react";
import { Link } from "react-router-dom";
import { Chat, Info } from '@material-ui/icons';

const EventBottom = (props) => {
  return (
    <div className = { props.show ?
        "event_bar event_bar--bottom event_bar--active" :
        "event_bar event_bar--bottom" }
    >
      <Link to = "/chat">
        <Chat />
      </Link>
      <Link>
        <Info />
      </Link>
    </div>
  );
}

export default EventBottom;
