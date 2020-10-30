// @flow
import React from "react";

export default function Main(props) {
  return (
    <div className={"dashboard-container"}>
      {/* <div className={"row"}>
        <div className={"col-md-1"}></div>
        <div className={"col-md-10"}> */}
      <table className={"table table-striped table-hover"}>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Section</th>
            <th>Position</th>
            <th>DTS Role</th>
            <th>Work Queue Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item) => (
            <tr>
              <td>{item.employeeId}</td>
              <td>{item.name}</td>
              <td>{item.secshort}</td>
              <td>{item.position}</td>
              <td>{item.dts_role}</td>
              <td>{item.work_queue_role}</td>
              <td>{item.accnt_status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* </div>
        <div className={"col-md-1"}></div>
      </div> */}
    </div>
  );
}
