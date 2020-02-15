import React from "react";

// TableRows for the data rows in the table
export default class TableRows extends React.Component {
  render(props) {
    return (
      <tbody>
      {this.props.employees.map((employee) => (
        <tr>
          <td>
            <img 
             src={employee.pic}
             alt='employee'
            />
          </td>
          <td>{employee.name}</td>
          <td>{employee.phone}</td>
          <td>{employee.email}</td>
          <td>{employee.dob}</td>
        </tr>
      ))}
      </tbody>

    );
  }
}
