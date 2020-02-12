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
              {/* <tbody>
                <tr>
                  <td>image</td>
                  <td>Person Smith</td>
                  <td>xxx-xxx-xxxx</td>
                  <td>email@gmail</td>
                  <td>01-01-1995</td>
                </tr>
                <tr>
                  <td>image</td>
                  <td>Person Smith</td>
                  <td>xxx-xxx-xxxx</td>
                  <td>email@gmail</td>
                  <td>01-01-1995</td>
                </tr>
                <tr>
                  <td>image</td>
                  <td>Person Smith</td>
                  <td>xxx-xxx-xxxx</td>
                  <td>email@gmail</td>
                  <td>01-01-1995</td>

                </tr>
                <tr>
                  <td>image</td>
                  <td>Person Smith</td>
                  <td>xxx-xxx-xxxx</td>
                  <td>email@gmail</td>
                  <td>01-01-1995</td>

                </tr>
                <tr>
                  <td>image</td>
                  <td>Person Smith</td>
                  <td>xxx-xxx-xxxx</td>
                  <td>email@gmail</td>
                  <td>01-01-1995</td>

                </tr>
                <tr>
                  <td>image</td>
                  <td>Person Smith</td>
                  <td>xxx-xxx-xxxx</td>
                  <td>email@gmail</td>
                  <td>01-01-1995</td>

                </tr>
              </tbody> */}
          </table>

        </div>
      </div>
    );
  }
}
