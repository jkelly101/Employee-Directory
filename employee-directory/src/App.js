import React, { Component } from "react";
import API from "./utils/API.js";
import Title from "./components/Title";
import EmployeeCard from "./components/EmployeeCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: false,
    };
  }

  componentDidMount() {
    API.getUsers().then((response) => {
      console.log(response);
      let tempEmployeeArray = [];
      response.data.results.forEach((employee) => {
        let newEmployee = {
          firstName: `${employee.name.first}`,
          lastName: `${employee.name.last}`,
          age: `${employee.dob.age}`,
          gender: `${employee.gender}`,
          nat: employee.nat,
          cell: employee.cell,
          email: employee.email,
        };
        tempEmployeeArray.push(newEmployee);
      });
      this.setState({
        items: tempEmployeeArray,
        loading: true,
        sortBy: "asc",
      });
    });
  }

  // state = {
  //   employees: [...employees],
  // };

  handleSort = (event) => {
    let name = event.target.getAttribute("name");
    // if (name === "first") {
    //   name = `name.${first}`;
    // }
    // else if (name === "email") {

    // }
    let currentSort = this.state.sortBy;
    let employeesSorted = this.state.items;
    // let key = name.first;
    if (currentSort === "asc") {
      this.setState({ sortBy: "desc" });
      employeesSorted.sort((a, b) => {
        var x = a[name].toLowerCase();
        var y = b[name].toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
    } else {
      this.setState({ sortBy: "asc" });
      employeesSorted.sort((a, b) => {
        var x = a[name].toLowerCase();
        var y = b[name].toLowerCase();
        if (x < y) {
          return 1;
        }
        if (x > y) {
          return -1;
        }
        return 0;
      });
    }

    // add additional sort options
    // employeesSorted.sort((a, b) => {
    //   return a["name.first"] > b["name.first"] ? asc * 1 : asc - 1;
    // });

    this.setState({ items: employeesSorted });
  };

  render() {
    var { loading } = this.state;

    if (!loading) {
      return <div>Loading...</div>;
    } else {
      return (
        // what will show on page
        <div>
          <Title>Employee Directory</Title>
          <EmployeeCard
            employeeArr={this.state.items}
            sortTable={this.handleSort}
          />
        </div>
      );
    }
  }
}

export default App;
