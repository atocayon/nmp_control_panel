// @flow
import React from "react";
import UpdateUserInforModal from "../../common/UpdateUserInfoModal";
import TablePagination from "@material-ui/core/TablePagination";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import BorderColor from "@material-ui/icons/BorderColor";
export default function Main(props) {
  return (
    <div className={"dashboard-container"}>
      {/* <div className={"row"}>
        <div className={"col-md-1"}></div>
        <div className={"col-md-10"}> */}

      <UpdateUserInforModal
        data={props.openUpdateUserModal}
        handleClose={props.handleCloseOpenUserUpdate}
        input_change={props.input_change}
        update_user_info={props.update_user_info}
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
            <th></th>
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
                  {/* <button
                    className={"btn btn-sm"}
                    onClick={props.handleOpenUserUpdateModal.bind(null, {
                      id: item.user_id,
                      title: "Employee ID",
                      value: item.employeeId,
                      name: "employeeId",
                    })}
                  > */}
                    {item.employeeId}
                  {/* </button>{" "} */}
                </td>
                <td>
                  {/* <button
                    className={"btn btn-sm"}
                    onClick={props.handleOpenUserUpdateModal.bind(null, {
                      id: item.user_id,
                      title: "Name",
                      value: item.name,
                      name: "name",
                    })}
                  > */}
                    {item.name}
                  {/* </button> */}
                </td>
                <td>
                  {/* <button
                    className={"btn btn-sm"}
                    onClick={props.handleOpenUserUpdateModal.bind(null, {
                      id: item.user_id,
                      title: "Section",
                      value: item.secshort,
                      name: "secshort",
                    })}
                  > */}
                    {item.secshort}
                  {/* </button>{" "} */}
                </td>
                <td>
                  {" "}
                  {/* <button
                    className={"btn btn-sm"}
                    onClick={props.handleOpenUserUpdateModal.bind(null, {
                      id: item.user_id,
                      title: "Position",
                      value: item.position,
                      name: "position",
                    })}
                  > */}
                    {item.position}
                  {/* </button> */}
                </td>
                <td>
                  {/* <button
                    className={"btn btn-sm"}
                    onClick={props.handleOpenUserUpdateModal.bind(null, {
                      id: item.user_id,
                      title: "DTS Role",
                      value:
                        item.dts_role === null || item.dts_role === ""
                          ? "Set Role"
                          : item.dts_role,
                      name: "dts_role",
                    })}
                  > */}
                    {item.dts_role === null || item.dts_role === ""
                      ? "N/A"
                      : item.dts_role}
                  {/* </button>{" "} */}
                </td>
                <td>
                  {/* <button
                    className={"btn btn-sm"}
                    onClick={props.handleOpenUserUpdateModal.bind(null, {
                      id: item.user_id,
                      title: "Work Queue Role",
                      value:
                        item.work_queue_role === null ||
                        item.work_queue_role === ""
                          ? "Set Role"
                          : item.work_queue_role,
                      name: "work_queue_role",
                    })}
                  > */}
                    {item.work_queue_role === null ||
                    item.work_queue_role === ""
                      ? "N/A"
                      : item.work_queue_role}
                  {/* </button> */}
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
                <td>
                  <button
                    className={"btn btn-primary btn-sm"}
                    title={"Update password"}
                  >
                    <VpnKeyIcon />
                  </button>
                  &nbsp;&nbsp;
                  <button
                    className={"btn btn-sm btn-danger"}
                    title={"Delete"}
                  >
                    <DeleteForeverIcon />
                  </button>
                  &nbsp;&nbsp;
                  <button className={"btn btn-sm btn-warning"} title={"Edit"}>
                    <BorderColor />
                  </button>
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
