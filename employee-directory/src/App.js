import React, { Component } from "react";
import API from "./utils/API.js";
import Title from "./components/Title";
// import Search from "./components/Search";
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
      this.setState({
        items: response.data.results,
        loading: true,
      });
    });
  }

  // state = {
  //   employees: [...employees],
  // };

  // handleSort = (key, asc) => {
  //   let employeesSorted = [...this.state.employees];

  //   // add additional sort options
  //   employeesSorted.sort((a, b) => {
  //     return a[key] > b[key] ? asc * 1 : asc - 1;
  //   });

  //   this.setState({ employees: employeesSorted });
  // };

  render() {
    var { items, loading } = this.state;

    if (!loading) {
      return <div>Loading...</div>;
    } else {
      return (
        // what will show on page
        <div>
          <Title>Employee Directory</Title>
          <EmployeeCard />
        </div>
      );
    }
  }
}

export default App;
