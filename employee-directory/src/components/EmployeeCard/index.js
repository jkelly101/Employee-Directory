import React from "react";
import "./style.css";

function EmployeeCard(props) {
  let first = "first";
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={props.sortTable} name="name" scope="col">
            Name
          </th>
          <th onClick={props.sortTable} name="email" scope="col">
            Email
          </th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        {props.employeeArr.map((employee, i) => (
          <tr key={`employee-${i + 1}`}>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>@mdo</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeCard;
