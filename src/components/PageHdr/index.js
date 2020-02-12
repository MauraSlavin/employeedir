import React from "react";
import "./style.css";

export default class PageHdr extends React.Component {
  render() {
    console.log("*** Started PageHdr/index.js");
    return (
       <div className="text-center text-light bg-info page-header">
            <h1>Employee Directory</h1>
            <h3>Click on triangles to sort, or enter name to search.</h3>
        </div>
    );
  }
}
