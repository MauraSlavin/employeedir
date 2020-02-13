import React from "react";
import "./style.css";

export default class ArrowIcon extends React.Component {
  render(props) {
    console.log("*** Started ArrowIcon/index.js");
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
