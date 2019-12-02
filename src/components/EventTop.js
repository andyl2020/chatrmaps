import React from "react";

const EventTop = (props) => {
  return (
    <div className = {props.show ? "event--top event--top_active" : "event--top"}>
      <h1><strong>UBC Build Day</strong></h1>
      <h4 style = {{ marginBottom: "5px" }}>Event: Hackathon group chat</h4>
      <h4 style = {{ marginTop: "5px" }}>Time Duration: 9:00 - 17:00</h4>
    </div>
  );
}

export default EventTop;
