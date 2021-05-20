import React, { Component } from "react";
import API from "./utils/API.js";
import Title from "./components/Title";
import EmployeeCard from "./components/EmployeeCard";
import SearchBar from "./components/SearchBar/searchbar.js";

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

  handleInputChange = event => {
    const name = event.target.name;
    const value= event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.search);
    let search = this.state.search.toLowerCase();
    let filteredEmployees = this.state.items;
    filteredEmployees = filteredEmployees.filter((employee) => {
      console.log(employee);
      return (
        employee.name.first.toLowerCase().includes(search) ||
        employee.name.last.toLowerCase().includes(search) ||
        employee.email.toLowerCase().includes(search) ||
        employee.cell
          .includes(search)
      );
    });
    console.log(filteredEmployees);
  };

  handleSort = (event) => {
    let name = event.target.getAttribute("name");

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
          <SearchBar />
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
