import React from "react";
import "./style.css";
import axios from "axios";
import Table from "../Table";
import SearchBar from "../SearchBar";

export default class Search extends React.Component {
  // console.log("*** Started Search/index.js");
  state = {
    search: "",
    employees: []
  }

  //   employees: [
  //     {
  //       pic: "",
  //       name: "no employees listed",
  //       phone: "",
  //       email: "",
  //       dob: ""
  //     }
  //   ]
  // }


  componentDidMount() {
    // const url = "https://randomuser.me/api/?results=20&nat=us";
    const url = "https://randomuser.me/api/?results=5&nat=us";
    console.log("*** Start componentDidMount in Search/index.js");
    axios
      .get(url)
      .then(response => {
        let employees = [];
        console.log("results:");
        console.log(response.data.results);
        response.data.results.forEach(employee => {
          let date = employee.dob.date;
          date = date.slice(0, 10);

          let emp = {
            pic: employee.picture.thumbnail,
            name: employee.name.first + " " + employee.name.last,
            phone: employee.phone,
            email: employee.email,
            dob: date
          };

          employees.push(emp);
        });
        this.setState({
          employees: employees
        });
        console.log(employees);
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

    // const url = "https://randomuser.me/api/?results=20&nat=us";
    // axios.get(url)
    //   .then((response) => {
    //     console.log(response.data);
    //     this.setState(
    //       {
    //        employees: response.data.results
    //       }
    //     )
    //   })
    //     .catch((err) => {
    //       console.error(err);
    //     });
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
