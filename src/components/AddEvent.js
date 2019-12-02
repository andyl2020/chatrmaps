import React from "react";

const AddEvent = () => {
  return (
    <div className  = "add-event"
         style      = {buttonStyle}
    >
      <button type = "button">Add Event</button>
    </div>
  );
}

const buttonStyle = {
  position: "absolute",
  top: "100px",
  left: "10px"
};

export default AddEvent;
