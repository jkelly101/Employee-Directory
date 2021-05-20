import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={props.sortTable} name="firstName" scope="col">
            First Name
          </th>
          <th onClick={props.sortTable} name="lastName" scope="col">
            Last Name
          </th>
          <th onClick={props.sortTable} name="age" scope="col">
            Age
          </th>
          <th onClick={props.sortTable} name="gender" scope="col">
            Gender
          </th>
          <th onClick={props.sortTable} name="nat" scope="col">
            Nationality
          </th>
          <th onClick={props.sortTable} name="cell" scope="col">
            Cell
          </th>
          <th onClick={props.sortTable} name="email" scope="col">
            Email
          </th>
        </tr>
      </thead>
      <tbody>
        {props.employeeArr.map((employee, i) => (
          <tr key={`employee-${i + 1}`}>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.age}</td>
            <td>{employee.gender}</td>
            <td>{employee.nat}</td>
            <td>{employee.cell}</td>
            <td>{employee.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeCard;
