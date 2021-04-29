import React, { Component } from "react";
import API from "./utils/API.js";
import Title from "./components/Title";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: false,
    };
  }

  componenetDidMount() {
    API.getUsers()
      .then((response) => {
        this.setState({
          items: response.results,
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
      <Title>Employee Directory</Title>;
    )}
  }
}

export default App;
