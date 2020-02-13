import React from "react";
import "./style.css";

// Component for sort arrow.  
// Click when pointing down sorts employees alphabetically, 
//   and reverses arrow.
// Click when pointing up sorts reverse alphabetically,
//   and returns arrow to pointing down.
// id is either "up" or "down"; used to determine which sort to do.
export default class ArrowIcon extends React.Component {
  render(props) {

    return (
      <input 
        type="image" 
        id={this.props.id} 
        alt={this.props.alt}
        src={this.props.src}
      ></input>
    );
  }
}
