import React from "react";
import "./style.css";
import axios from "axios";
import Table from "../Table";
import SearchBar from "../SearchBar";

// global to hold all employees, so we don't lose
//   some after a filter.
let allEmployees = [];

export default class Search extends React.Component {
  // console.log("*** Started Search/index.js");
  state = {
    search: "",
    employees: []
  }

  componentDidMount() {
    const url = "https://randomuser.me/api/?results=30&nat=us";
    // const url = "https://randomuser.me/api/?results=5&nat=us";
    console.log("*** Start componentDidMount in Search/index.js");
    axios
      .get(url)
      .then(response => {
        let employees = [];
        console.log("results:");
        console.log(response.data.results);
        response.data.results.forEach(employee => {
          const phone = employee.phone.slice(0,5) + " " +  employee.phone.slice(6, 14);
          let date = employee.dob.date;
          const month = date.slice(5, 7).replace(/^0+/, '');
          const day = date.slice(8, 10). replace(/^0+/, '');
          const year = date.slice(0, 4);
          date = month + '/' + day + '/' + year;
          // date = date.slice(5, 7) + "/" + date.slice(8, 10) + "/" + date.slice(0, 4);

          let emp = {
            pic: employee.picture.thumbnail,
            name: employee.name.last + ', ' + employee.name.first,
            phone: phone,
            email: employee.email,
            dob: date
          };

          employees.push(emp);
        });
        this.setState({
          employees: employees
        });
        console.log(employees);
        allEmployees = employees;
      })
      .catch(err => {
        console.error(err);
      });
  }

  handleSearchChg = event => {
    // console.log("*** Started handleSearchChg in Search/index.js");
    const { name, value } = event.target;
    console.log(event.target);

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("*** Started handleSubmit in Search/index.js");
    const employees = allEmployees.filter( emp => emp.name.includes(this.state.search));
    console.log("filtered");
    console.log(employees);

    this.setState({
      employees: employees
    });
    
  };

  render() {
    console.log("*** Started Search/index.js");
    console.log("this.state:");
    console.log(this.state);
    return (
      <div>
        <SearchBar
          search={this.state.search}
          handleSearchChg={this.handleSearchChg}
          handleSubmit={this.handleSubmit}
        />

        <Table 
          employees={this.state.employees} 
        />

      </div>
    );
  }
}
