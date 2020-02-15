import React from "react";
import ArrowIcon from "../ArrowIcon";

// TableHdr is a component for the table header,
//   including an ArrowIcon (^ or v) to sort by name.
export default class TableHdr extends React.Component {
  render(props) {
    return (
      <thead>
        <tr>
          <th>Photo</th>
          <th>Name 
            <ArrowIcon 
              src={this.props.src}
              id={this.props.id}
              alt={this.props.alt}
            />
          </th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
      </thead>
    );
  }
}
