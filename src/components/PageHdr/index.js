import React from "react";
import "./style.css";

export default class PageHdr extends React.Component {
  render() {
    console.log("*** Started PageHdr/index.js");
    return (
      <div className="row h-150">
        <div className="col-12 my-auto">
          <div className="text-center text-light bg-info page-header ">
            <h1>Employee Directory</h1>
            <h3>
              Click on triangles to sort, or enter name to filter by name (or
              part of a name).
            </h3>
            <p>(Search is case sensitive; search on empty displays all employees.)</p>
          </div>
        </div>
      </div>
    );
  }
}
