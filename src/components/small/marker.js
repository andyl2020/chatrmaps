import React from 'react';
import { Room } from '@material-ui/icons';

const Marker = (props) => {
  return (
    <div  className = "marker"
          onClick   = {() => {
            props.clickEvent(props.lat, props.lng)
          }} >

      <div className = "marker__text">{props.num}</div>
      <Room className = "marker__icon"/>

    </div>
  );
}

export default Marker;
