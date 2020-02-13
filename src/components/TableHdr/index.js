import React from "react";
import "./style.css";


export default class TableHdr extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          <th>Photo</th>
          <th>Name <input type="image" id="arrow" alt="v"
       src="../downarrow.png"></input></th>
          
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
      </thead>
    );
  }
}
