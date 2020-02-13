import React from "react";
import "./style.css";

// PageHdr is a static page header with sub-header and instructions for user.
export default class PageHdr extends React.Component {
  render() {
    return (
      <div className="row h-150">
        <div className="col-12 my-auto">
          <div className="text-center text-light bg-info page-header ">
            <h1>Employee Directory</h1>
            <h3>
              Click on triangles to sort, or enter name to filter by name (or
              part of a name).
            </h3>
            <p>(Search is case sensitive; search on empty displays all employees.  Click on triangle to search by name.)</p>
          </div>
        </div>
      </div>
    );
  }
}
