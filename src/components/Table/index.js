import React from "react";
import "./style.css";
import TableHdr from "../TableHdr";
import TableRows from "../TableRows";

// the Table component has the table header
//   (including the ^ or v to sort the employees by name)
// and a row for each employee
export default class Table extends React.Component {
  render(props) {
    return (
      <div className="row">
        <div className="col-12">
       
          <table>

            <TableHdr 
              src = {this.props.src}
              alt = {this.props.alt}
              id = {this.props.id}
            />

            <TableRows 
              employees = {this.props.employees}
            />

          </table>

        </div>
      </div>
    );
  }
}
