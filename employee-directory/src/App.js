import React, { Component } from "react";
import "./App.css";
import Title from "./src/components/Title";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: false,
    };
  }

  componenetDidMount() {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
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
      return;
      // what will show on page
      <Title>Employee Directory</Title>;
    }
  }
}

export default App;
