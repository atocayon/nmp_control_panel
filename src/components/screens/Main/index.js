// @flow
import React from "react";
import UpdateUserInforModal from "../../common/UpdateUserInfoModal";
import TablePagination from "@material-ui/core/TablePagination";
export default function Main(props) {
  return (
    <div className={"dashboard-container"}>
      {/* <div className={"row"}>
        <div className={"col-md-1"}></div>
        <div className={"col-md-10"}> */}

      <UpdateUserInforModal
        data={props.openUpdateUserModal}
        handleClose={props.handleCloseOpenUserUpdate}
      />
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
          {props.data
            .slice(
              props.page * props.rowsPerPage,
              props.page * props.rowsPerPage + props.rowsPerPage
            )
            .map((item) => (
              <tr>
                <td>
                  <button
                    className={"btn btn-sm"}
                    onClick={props.handleOpenUserUpdateModal.bind(null, {
                      title: "Employee ID",
                      value: item.employeeId,
                    })}
                  >
                    {item.employeeId}
                  </button>{" "}
                </td>
                <td>
                  <button
                    className={"btn btn-sm"}
                    onClick={props.handleOpenUserUpdateModal.bind(null, {
                      title: "Name",
                      value: item.name,
                    })}
                  >
                    {item.name}
                  </button>
                </td>
                <td>
                  <button
                    className={"btn btn-sm"}
                    onClick={props.handleOpenUserUpdateModal.bind(null, {
                      title: "Section",
                      value: item.secshort,
                    })}
                  >
                    {item.secshort}
                  </button>{" "}
                </td>
                <td>
                  {" "}
                  <button
                    className={"btn btn-sm"}
                    onClick={props.handleOpenUserUpdateModal.bind(null, {
                      title: "Position",
                      value: item.position,
                    })}
                  >
                    {item.position}
                  </button>
                </td>
                <td>
                  <button
                    className={"btn btn-sm"}
                    onClick={props.handleOpenUserUpdateModal.bind(null, {
                      title: "DTS Role",
                      value: item.dts_role,
                    })}
                  >
                    {item.dts_role}
                  </button>{" "}
                </td>
                <td>
                  <button
                    className={"btn btn-sm"}
                    onClick={props.handleOpenUserUpdateModal.bind(null, {
                      title: "Work Queue Role",
                      value:
                        item.work_queue_role === null ||
                        item.work_queue_role === ""
                          ? "Set Role"
                          : item.work_queue_role,
                    })}
                  >
                    {item.work_queue_role === null ||
                    item.work_queue_role === ""
                      ? "N/A"
                      : item.work_queue_role}
                  </button>
                </td>
                <td>
                  <select className={"form-control"}>
                    <option value={item.accnt_status}>
                      {item.accnt_status}
                    </option>
                    {item.accnt_status === "active" ? (
                      <option value={"non-active"}>non-active</option>
                    ) : (
                      <option value={"active"}>active</option>
                    )}
                  </select>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <TablePagination
        rowsPerPageOptions={[15, 20, 40, 80]}
        component="div"
        count={props.data.length}
        rowsPerPage={props.rowsPerPage}
        page={props.page}
        onChangePage={props.handleChangePage}
        onChangeRowsPerPage={props.handleChangeRowsPerPage}
      />
      {/* </div>
        <div className={"col-md-1"}></div>
      </div> */}
    </div>
  );
}
