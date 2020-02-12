import React from "react";

export default class TableHdr extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          <th>Photo</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
      </thead>
    );
  }
}
