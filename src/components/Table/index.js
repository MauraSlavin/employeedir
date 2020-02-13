import React from "react";
// import {MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import "./style.css";
import TableHdr from "../TableHdr";
import TableRows from "../TableRows";


export default class Table extends React.Component {
  render(props) {
    console.log("Props in Table/index.js:");
    console.log(this.props);
    return (
      <div className="row">
        <div className="col-12">
       
          <table>

            <TableHdr />
            <TableRows 
              employees = {this.props.employees}
            />

          </table>

        </div>
      </div>
    );
  }
}
