import React from "react";
import "./style.css";

export default class PageHdr extends React.Component {
  render() {
    return (
       <div className="page-header">
            <h1>Employee Directory</h1>
            <h3>Click on triangles to sort, or enter name to search.</h3>
        </div>
    );
  }
}
